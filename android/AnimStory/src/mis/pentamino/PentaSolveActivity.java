package mis.pentamino;

import mis.animsto.R;
import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;

public class PentaSolveActivity extends Activity {
	private final String TAG = this.getClass().getSimpleName();

	private PentaView pentaView;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		pentaView = new PentaView(this);
		setContentView(pentaView);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.menu_penta_solve, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		switch (item.getItemId()) {
		case R.id.menu_solve:
			Log.d(TAG, "Menu solve selected");
			pentaView.solve();			
			break;	
			
		case R.id.menu_edit:
			Log.d(TAG, "Menu edit selected");
			pentaView.startEdit();
			break;	
		}
		return super.onOptionsItemSelected(item);
	}

}
