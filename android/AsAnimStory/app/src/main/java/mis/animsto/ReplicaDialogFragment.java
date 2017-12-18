package mis.animsto;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

public class ReplicaDialogFragment extends DialogFragment {
	
	public interface NewReplicaListener {
		void onNewReplica(String rep);
		String getOldReplica();
	}
    // Use this instance of the interface to deliver action events
	NewReplicaListener mListener;
	EditText replTextView;

	public static ReplicaDialogFragment newInstance(String oldRep) {
		ReplicaDialogFragment frag = new ReplicaDialogFragment();
		Bundle args = new Bundle();
		args.putString("replica", oldRep);
		frag.setArguments(args);
		return frag;
	}


	@Override
	public Dialog onCreateDialog(Bundle bundle) {
        mListener = (NewReplicaListener)getActivity();
		AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        LayoutInflater inflater = getActivity().getLayoutInflater();
        View content =  inflater.inflate(R.layout.replica_dialog, null);
        builder.setView(content);
        replTextView = (EditText) content.findViewById(R.id.replica_text);
        if (bundle == null) {
            bundle = getArguments();
        }
        String rep = bundle.getString("replica");
        replTextView.setText(rep);

		// Inflate and set the layout for the dialog
		// Pass null as the parent view because its going in the dialog layout
		builder.setPositiveButton(android.R.string.ok,
				new DialogInterface.OnClickListener() {
					@Override
					public void onClick(DialogInterface dialog, int id) {
						String rep = replTextView.getText().toString();
						mListener.onNewReplica(rep);
					}
				})
				.setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int id) {
						ReplicaDialogFragment.this.getDialog().cancel();
					}
				});
		return builder.create();
	}
}
