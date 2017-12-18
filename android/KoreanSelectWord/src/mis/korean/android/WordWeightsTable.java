package mis.korean.android;

import java.util.ArrayList;

import mis.korean.words.OneWord;
import mis.korean.words.WordsGame;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.CheckBox;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 * 
 * @see SystemUiHider
 */
public class WordWeightsTable extends Activity {
	private final String TAG = this.getClass().getSimpleName();
	WordsGame wg = null;
	public static boolean activeOnly = false;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.show_weights_table);
		wg = new WordsGame(this);
		wg.readDict(false);
		TableLayout tl = (TableLayout)this.findViewById(R.id.word_weights_table);
		ArrayList<OneWord> wlist = (activeOnly ? 
				  wg.getDict().getActiveKrl()
				: wg.getDict().getAllKrl());
		for (OneWord ow : wlist) {
			TableRow tr = new TableRow(this);
			tr.setPadding(2, 2, 2, 2);
			String []fields = new String[] {
				ow.getKorean(),
				String.format("%10.16s", ow.getOther()),
				String.format(" %7.1f", ow.getDifficulty()),
				"  " + ow.getCorrectCount(),
				" " + (int)ow.getDelay(),
				String.format("%5.1f%%", ow.getErrorPerc())
			};
			for (int i=0; i<3; i++) {
				TextView t = new TextView(this);
				t.setTextAppearance(this, R.style.MisTableAppearance);
				t.setPadding(4, 0, 0, 0);
				t.setText(fields[i]);
				tr.addView(t);
			}			
			
			// ta[6].setText(ow.isActive() + "");
			final CheckBox cb = new CheckBox(this);
			final OneWord oow = ow;
			cb.setChecked(ow.isActive());
			cb.setOnClickListener(new OnClickListener() {
				@Override
				public void onClick(View v) {
					CheckBox cbv = (CheckBox)v;
					boolean checked = cbv.isChecked();
					// Log.d(TAG, "WWT, set " + oow.getRussian() + " to " + checked);
					oow.setActive(checked);
				}
			});
			tr.addView(cb);
			for (int i=3; i<6; i++) {
				TextView t = new TextView(this);
				t.setTextAppearance(this, R.style.MisTableAppearance);
				t.setPadding(4, 0, 0, 0);
				t.setText(fields[i]);
				tr.addView(t);
			}			
			tl.addView(tr);
		}
	}
	

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.show_weights, menu);
		return true;
	}


	@Override
	protected void onPause() {
		Log.d(TAG, "OnPause() called, saving dictionary");
		wg.closeDictionary();
		super.onStop();
	}
	
}
