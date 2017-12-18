package mis.animsto;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;

public class RecordAudioDialogFragment extends DialogFragment {
	private final String TAG = this.getClass().getSimpleName();
	private Button recordBtn = null;
	private Button playBtn = null;
	// MisSound mSound = MisSound.getInstance();
	MisAudioRecorder mSound = MisAudioRecorder.getInstance();

	public interface RecordAudioDialogListener {
		void onSoundRecorded(String sname);
	}

	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) {
	    AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        // mSound.setCadrSoundName("mis_sound_test");

	    // Get the layout inflater
	    LayoutInflater inflater = getActivity().getLayoutInflater();

	    // Inflate and set the layout for the dialog
	    // Pass null as the parent view because its going in the dialog layout
	    View view = inflater.inflate(R.layout.record_sound_dialog, null);
	    recordBtn = (Button)view.findViewById(R.id.record_stop_btn);
	    Log.d(TAG, "Found recordStopBtn = " + recordBtn);
	    recordBtn.setText(R.string.record);
	    playBtn = (Button)view.findViewById(R.id.play_btn);
	    playBtn.setText(R.string.play);
	    setRecordPlayListeners();
	    builder.setView(view)
	    // Add action buttons
	           .setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
	               @Override
	               public void onClick(DialogInterface dialog, int id) {
	            	   mSound.onRecord(false);
	                   mListener.onSoundRecorded(mSound.getCadrFileName());
	               }
	           })
	           .setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
	               public void onClick(DialogInterface dialog, int id) {
	            	   RecordAudioDialogFragment.this.getDialog().cancel();
	               }
	           });      
	    AlertDialog dlg = builder.create();	  
	    return dlg;
	}
	
	private void setRecordPlayListeners() {
	    recordBtn.setOnClickListener(new View.OnClickListener() {			
			@Override
			public void onClick(View v) {
				if (mSound.nowRecording) {
					mSound.onRecord(false);
					recordBtn.setText(R.string.record);
				} else {
					mSound.onRecord(true);
					recordBtn.setText(R.string.stop_recording);					
				}				
			}
		});
	    playBtn.setOnClickListener(new View.OnClickListener() {			
			@Override
			public void onClick(View v) {
				Log.d(TAG, "playBtn.onClick() called, nowPlaying = " + mSound.nowPlaying);
				if (!mSound.nowPlaying) {
					// startPlaying();
					mSound.onPlay(true);
				}				
			}
		});
		
	}
	
    // Use this instance of the interface to deliver action events
	RecordAudioDialogListener mListener;

    public void onAttach(Activity activity) {
        super.onAttach(activity);
        // Verify that the host activity implements the callback interface
        try {
            // Instantiate the NoticeDialogListener so we can send events to the host
            mListener = (RecordAudioDialogListener) activity;
        } catch (ClassCastException e) {
            // The activity doesn't implement the interface, throw exception
            throw new ClassCastException(activity.toString()
                    + " must implement RecordAudioDialogListener");
        }
    }

    @Override
    public void onStop() {
    	Log.d(TAG, "onStop() called");
        super.onStop();
        mSound.onStop();
    }

}
