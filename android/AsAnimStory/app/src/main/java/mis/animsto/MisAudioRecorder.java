package mis.animsto;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import android.media.AudioFormat;
import android.media.AudioRecord;
import android.media.MediaPlayer;
import android.media.MediaRecorder;
import android.media.MediaPlayer.OnCompletionListener;
import android.os.Environment;
import android.util.Log;

public class MisAudioRecorder {
	private final String TAG = this.getClass().getSimpleName();

	private static final int RECORDER_BPP = 16;
	private static final String AUDIO_RECORDER_FILE_EXT_WAV = ".wav";
	private static final String AUDIO_RECORDER_FOLDER = "AudioRecorder";
	private static final String AUDIO_RECORDER_TEMP_FILE = "record_temp.raw";
	private static final int RECORDER_SAMPLERATE = 44100;
	private static final int RECORDER_CHANNELS = AudioFormat.CHANNEL_IN_MONO;
	private static final int RECORDER_AUDIO_ENCODING = AudioFormat.ENCODING_PCM_16BIT;
	private AudioRecord recorder = null;
	private int bufferSize = 0;
	private Thread recordingThread = null;
	MediaPlayer mPlayer = null;
	String fileName = null;
	boolean nowPlaying = false;
	boolean nowRecording = false;
	private static MisAudioRecorder instance = null;

	private MisAudioRecorder() {
		bufferSize = AudioRecord.getMinBufferSize(RECORDER_SAMPLERATE,
				RECORDER_CHANNELS, RECORDER_AUDIO_ENCODING);
	}
	
	public static synchronized MisAudioRecorder getInstance() {
		if (instance == null) {
			instance = new MisAudioRecorder();
		}
		return instance;
	}

	void startPlay() {
		if (nowPlaying) {
			return;
		}
		mPlayer = new MediaPlayer();
		String mFileName = fileName;
		Log.d(TAG, "mPlayer created = " + mPlayer);
		try {
			mPlayer.setDataSource(mFileName);
			mPlayer.setOnCompletionListener(new OnCompletionListener() {
				@Override
				public void onCompletion(MediaPlayer mp) {
					Log.d(TAG, "onCompletion() called, mp = " + mp);
					stopPlay();
				}
			});
			mPlayer.prepare();
			mPlayer.start();
			nowPlaying = true;
		} catch (IOException e) {
			Log.e(TAG, "In startPlaying() prepare() failed");
		}
	}

	void stopPlay() {
		Log.d(TAG, "stopPlaying() called");
		if (mPlayer != null) {
			mPlayer.release();
			mPlayer = null;
		}
		nowPlaying = false;
	}

	void startRecord() {
		if (nowRecording) {
			Log.d(TAG, "startRecord() already recording");
			return;
		}
		recorder = new AudioRecord(MediaRecorder.AudioSource.MIC,
				RECORDER_SAMPLERATE, RECORDER_CHANNELS,
				RECORDER_AUDIO_ENCODING, bufferSize);

		recorder.startRecording();

		nowRecording = true;

		recordingThread = new Thread(new Runnable() {

			@Override
			public void run() {
				MisAudioRecorder.this.writeAudioDataToFile();
			}
		}, "AudioRecorder Thread");

		recordingThread.start();
	}

	void stopRecord() {
		if (null != recorder) {
			nowRecording = false;

			recorder.stop();
			recorder.release();

			recorder = null;
			recordingThread = null;
		}

		copyWaveFile(getTempFilename(), fileName);
		deleteTempFile();
	}
//
//	private String getFilename() {
//		if (lastFileName != null) {
//			return lastFileName;
//		}
//		String filepath = Environment.getExternalStorageDirectory().getPath();
//		File file = new File(filepath, AUDIO_RECORDER_FOLDER);
//
//		if (!file.exists()) {
//			file.mkdirs();
//		}
//
//		lastFileName = (file.getAbsolutePath() + "/"
//				+ System.currentTimeMillis() + AUDIO_RECORDER_FILE_EXT_WAV);
//		return lastFileName;
//	}

	
	private String getTempFilename() {
		String filepath = Environment.getExternalStorageDirectory().getPath();
		File file = new File(filepath, AUDIO_RECORDER_FOLDER);

		if (!file.exists()) {
			file.mkdirs();
		}

		File tempFile = new File(filepath, AUDIO_RECORDER_TEMP_FILE);

		if (tempFile.exists())
			tempFile.delete();

		return (file.getAbsolutePath() + "/" + AUDIO_RECORDER_TEMP_FILE);
	}

	public String getCadrFileName() {
    	int idxs = fileName.lastIndexOf('/');
    	int idxd = fileName.lastIndexOf('.');
    	String fname = fileName.substring(idxs+1, idxd);
    	Log.d(TAG, "From filename " + fileName + " extracted " + fname);
    	return fname;
	}

	public void setCadrFileName(String fileNameA) {
        fileName = Environment.getExternalStorageDirectory().getAbsolutePath();
        fileName += "/" + fileNameA + AUDIO_RECORDER_FILE_EXT_WAV;
	}

	private void copyWaveFile(String inFilename, String outFilename) {
		FileInputStream in = null;
		FileOutputStream out = null;
		long totalAudioLen = 0;
		long totalDataLen = totalAudioLen + 36;
		long longSampleRate = RECORDER_SAMPLERATE;
		int channels = 1; // 2; we record mono
		long byteRate = RECORDER_BPP * RECORDER_SAMPLERATE * channels / 8;

		byte[] data = new byte[bufferSize];

		try {
			in = new FileInputStream(inFilename);
			out = new FileOutputStream(outFilename);
			totalAudioLen = in.getChannel().size();
			totalDataLen = totalAudioLen + 36;

			Log.d(TAG, "File size: " + totalDataLen);

			writeWaveFileHeader(out, totalAudioLen, totalDataLen,
					longSampleRate, channels, byteRate);

			while (in.read(data) != -1) {
				out.write(data);
			}

			in.close();
			out.close();
			Log.d(TAG, "Wrote WAV file to  " + outFilename);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private void deleteTempFile() {
		File file = new File(getTempFilename());

		file.delete();
	}

	private void addLong(byte[] ba, int i, long v) {
		ba[i] = (byte) (v & 0xff);
		ba[i + 1] = (byte) ((v >> 8) & 0xff);
		ba[i + 2] = (byte) ((v >> 16) & 0xff);
		ba[i + 3] = (byte) ((v >> 24) & 0xff);
	}

	private void writeWaveFileHeader(FileOutputStream out, long totalAudioLen,
			long totalDataLen, long longSampleRate, int channels, long byteRate)
			throws IOException {

		byte[] header = new byte[44];

		header[0] = 'R'; // RIFF/WAVE header
		header[1] = 'I';
		header[2] = 'F';
		header[3] = 'F';
		addLong(header, 4, totalDataLen);
		// header[4] = (byte) (totalDataLen & 0xff);
		// header[5] = (byte) ((totalDataLen >> 8) & 0xff);
		// header[6] = (byte) ((totalDataLen >> 16) & 0xff);
		// header[7] = (byte) ((totalDataLen >> 24) & 0xff);
		header[8] = 'W';
		header[9] = 'A';
		header[10] = 'V';
		header[11] = 'E';
		header[12] = 'f'; // 'fmt ' chunk
		header[13] = 'm';
		header[14] = 't';
		header[15] = ' ';
		header[16] = 16; // 4 bytes: size of 'fmt ' chunk
		header[17] = 0;
		header[18] = 0;
		header[19] = 0;
		header[20] = 1; // format = 1
		header[21] = 0;
		header[22] = (byte) channels;
		header[23] = 0;
		header[24] = (byte) (longSampleRate & 0xff);
		header[25] = (byte) ((longSampleRate >> 8) & 0xff);
		header[26] = (byte) ((longSampleRate >> 16) & 0xff);
		header[27] = (byte) ((longSampleRate >> 24) & 0xff);
		header[28] = (byte) (byteRate & 0xff);
		header[29] = (byte) ((byteRate >> 8) & 0xff);
		header[30] = (byte) ((byteRate >> 16) & 0xff);
		header[31] = (byte) ((byteRate >> 24) & 0xff);
		header[32] = (byte) (2 * 16 / 8); // block align
		header[33] = 0;
		header[34] = RECORDER_BPP; // bits per sample
		header[35] = 0;
		header[36] = 'd';
		header[37] = 'a';
		header[38] = 't';
		header[39] = 'a';
		header[40] = (byte) (totalAudioLen & 0xff);
		header[41] = (byte) ((totalAudioLen >> 8) & 0xff);
		header[42] = (byte) ((totalAudioLen >> 16) & 0xff);
		header[43] = (byte) ((totalAudioLen >> 24) & 0xff);

		out.write(header, 0, 44);
	}

	private void writeAudioDataToFile() {
		byte data[] = new byte[bufferSize];
		String filename = getTempFilename();
		FileOutputStream os = null;

		try {
			os = new FileOutputStream(filename);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		int read = 0;

		if (null != os) {
			while (nowRecording) {
				read = recorder.read(data, 0, bufferSize);
				Log.d(TAG, "recorder.read() returned " + read);

				if (AudioRecord.ERROR_INVALID_OPERATION != read) {
					try {
						os.write(data);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}

			try {
				os.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
    void onRecord(boolean start) {
        if (start) {
            startRecord();
        } else {
            stopRecord();
        }
    }

    void onPlay(boolean start) {
        if (start) {
            startPlay();
        } else {
            stopPlay();
        }
    }

    public void onStop() {
    	Log.d(TAG, "onStop() called");
        if (recorder != null) {
            stopRecord();
        }

        if (mPlayer != null) {
        	stopPlay();
        }
    }
}
