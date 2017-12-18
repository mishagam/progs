package mis.animsto;

import java.io.IOException;

import android.media.MediaPlayer;
import android.media.MediaRecorder;
import android.media.MediaPlayer.OnCompletionListener;
import android.os.Environment;
import android.util.Log;

/**
 * singleton class dealing with sounds
 * @author misha
 *
 */
public class MisSound {
	private final String TAG = this.getClass().getSimpleName();
	
	boolean nowRecording = false;
	boolean nowPlaying = false;
    private MediaRecorder mRecorder = null;
    private MediaPlayer   mPlayer = null;
    private String mFileName = "";
    private static MisSound instance = null;
    private MisSound() {
    	// do nothing
    }
    public static synchronized MisSound getInstance() {
    	if (instance == null) {
    		instance = new MisSound();
    	}
    	return instance;
    }

    
    public void setCadrSoundName(String sname) {
        mFileName = Environment.getExternalStorageDirectory().getAbsolutePath();
        mFileName += "/" + sname + ".3gp";
    }
    
    public String extractSoundName() {
    	int idxs = mFileName.lastIndexOf('/');
    	int idxd = mFileName.lastIndexOf('.');
    	String fname = mFileName.substring(idxs+1, idxd);
    	Log.d(TAG, "From filename " + mFileName + " extracted " + fname);
    	return fname;
    }
    
    public void playCadrSound(String sname) {
    	setCadrSoundName(sname);
    	if (mPlayer != null) {
    		stopPlaying();
    	}
    	startPlaying();
    }

    public void onStop() {
    	Log.d(TAG, "onStop() called");
        if (mRecorder != null) {
            stopRecording();
        }

        if (mPlayer != null) {
        	stopPlaying();
        }
    }

    void onRecord(boolean start) {
        if (start) {
            startRecording();
        } else {
            stopRecording();
        }
    }

    void onPlay(boolean start) {
        if (start) {
            startPlaying();
        } else {
            stopPlaying();
        }
    }

    private void startPlaying() {
        mPlayer = new MediaPlayer();
		Log.d(TAG, "mPlayer created = " + mPlayer);
        try {
            mPlayer.setDataSource(mFileName);
            mPlayer.setOnCompletionListener(new OnCompletionListener() {				
				@Override
				public void onCompletion(MediaPlayer mp) {
					Log.d(TAG, "onCompletion() called, mp = " + mp);
					stopPlaying();					
				}
			});
            mPlayer.prepare();
            mPlayer.start();
            nowPlaying = true;
        } catch (IOException e) {
            Log.e(TAG, "In startPlaying() prepare() failed");
        }
    }

    private void stopPlaying() {
    	Log.d(TAG, "stopPlaying() called");
    	if (mPlayer != null) {
	        mPlayer.release();
	        mPlayer = null;
    	}
        nowPlaying = false;
    }

    private void startRecording() {
    	Log.d(TAG, "startRecording() called");
        mRecorder = new MediaRecorder();
        mRecorder.setAudioSource(MediaRecorder.AudioSource.MIC);
        mRecorder.setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP);
        mRecorder.setOutputFile(mFileName);
        mRecorder.setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB);

        try {
            mRecorder.prepare();
        } catch (IOException e) {
            Log.e(TAG, "prepare() in startRecording failed");
        }

        mRecorder.start();
        nowRecording = true;
    }

    private void stopRecording() {
    	Log.d(TAG, "stopRecording() called");
    	if (mRecorder != null) {
            mRecorder.stop();
            mRecorder.release();
            mRecorder = null;    		
    	}
        nowRecording = false;
    }

}
