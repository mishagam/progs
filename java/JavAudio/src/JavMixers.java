// code from here: 
// http://www.developer.com/java/other/article.php/1579071/Java-Sound-Getting-Started-Part-2-Capture-Using-Specified-Mixer.htm

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.Mixer;
import javax.sound.sampled.TargetDataLine;

public class JavMixers {
	boolean stopCapture;
	TargetDataLine targetDataLine;

	class CaptureThread extends Thread {
		byte tempBuffer[] = new byte[10000];

		public void run() {
			try {
			ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
			boolean stopCapture = false;
			while (!stopCapture) {
				// Read data from the internal buffer of
				// the data line.
				int cnt = targetDataLine.read(tempBuffer, 0, tempBuffer.length);

				if (cnt > 0) {
					// Save data in output stream object.
					byteArrayOutputStream.write(tempBuffer, 0, cnt);
				}// end if
			}// end while
			byteArrayOutputStream.close();
			} catch (Exception ioe) {
				ioe.printStackTrace();
				
			}

		}// end run
	}// end inner class CaptureThread

	private static AudioFormat getAudioFormat() {
		float sampleRate = 8000.0F;
		int sampleSizeInBits = 16;
		int channels = 1;
		boolean signed = true;
		boolean bigEndian = false;

		return new AudioFormat(sampleRate, sampleSizeInBits, channels, signed,
				bigEndian);
	}// end getAudioFormat
	
	void work() throws Exception {
		Mixer.Info[] mixerInfo = AudioSystem.getMixerInfo();
		System.out.println("Available mixers:");
		for (int cnt = 0; cnt < mixerInfo.length; cnt++) {
			System.out.println(mixerInfo[cnt].getName());
		}// end for loop

		AudioFormat audioFormat = getAudioFormat();

		DataLine.Info dataLineInfo = new DataLine.Info(TargetDataLine.class,
				audioFormat);
		Mixer mixer = AudioSystem.getMixer(mixerInfo[0]);
		TargetDataLine targetDataLine = (TargetDataLine) mixer
				.getLine(dataLineInfo);
		targetDataLine.open(audioFormat);
		targetDataLine.start();
		Thread captureThread = new CaptureThread();
		captureThread.start();
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws Exception {
		// Getting mixer - works on Linux
		JavMixers jm = new JavMixers();
		jm.work();

	}

}
