package mis.animsto;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.EditText;

public class StoryNameDialogFragment extends DialogFragment {
	
	public interface StoryNameListener {
		void onStoryName(String storyName);
	}
	
    // Use this instance of the interface to deliver action events
	StoryNameListener mListener;
	EditText storyNameTextView;
	String oldName;

	public static StoryNameDialogFragment newInstance(String oldNameA) {
		StoryNameDialogFragment frag = new StoryNameDialogFragment();
		frag.oldName = oldNameA;
		return frag;
	}

	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) {
		mListener = (StoryNameListener)getActivity();
	    AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
	    // Get the layout inflater
	    LayoutInflater inflater = getActivity().getLayoutInflater();
		View content =  inflater.inflate(R.layout.story_name_dialog, null);
		builder.setView(content);
		storyNameTextView = (EditText) content.findViewById(R.id.story_name_text);
		storyNameTextView.setText(oldName);

	    // Inflate and set the layout for the dialog
	    // Pass null as the parent view because its going in the dialog layout
	    builder.setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
	               @Override
	               public void onClick(DialogInterface dialog, int id) {
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
}
