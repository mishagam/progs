package mis.animsto;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.widget.EditText;

public class StoryNameDialogFragment extends DialogFragment {
	
	public interface StoryNameListener {
		void onStoryName(String storyName);
	}
	
    // Use this instance of the interface to deliver action events
	StoryNameListener mListener;
	
	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) {
	    AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
	    // Get the layout inflater
	    LayoutInflater inflater = getActivity().getLayoutInflater();

	    // Inflate and set the layout for the dialog
	    // Pass null as the parent view because its going in the dialog layout
	    builder.setView(inflater.inflate(R.layout.story_name_dialog, null))
	    // Add action buttons
	           .setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
	               @Override
	               public void onClick(DialogInterface dialog, int id) {
	            	   EditText storyNameTextView=(EditText) 
	            			   ((AlertDialog) dialog).findViewById(R.id.story_name_text);
	            	   String storyName = storyNameTextView.getText().toString();
	                   mListener.onStoryName(storyName);
	               }
	           })
	           .setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
	               public void onClick(DialogInterface dialog, int id) {
	            	   StoryNameDialogFragment.this.getDialog().cancel();
	               }
	           });      
	    return builder.create();
	}

    public void onAttach(Activity activity) {
        super.onAttach(activity);
        // Verify that the host activity implements the callback interface
        try {
            // Instantiate the NoticeDialogListener so we can send events to the host
            mListener = (StoryNameListener) activity;
        } catch (ClassCastException e) {
            // The activity doesn't implement the interface, throw exception
            throw new ClassCastException(activity.toString()
                    + " must implement StoryNameListener");
        }
    }

}
