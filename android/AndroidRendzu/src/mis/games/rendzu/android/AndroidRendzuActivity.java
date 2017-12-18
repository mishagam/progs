package mis.games.rendzu.android;

import mis.games.utils.GameVariant;
import mis.games.utils.RendzuOptions;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.HorizontalScrollView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;

public class AndroidRendzuActivity extends Activity {

	public static final String TAG = AndroidRendzuActivity.class.getSimpleName();
    private RendzuOptions opts = null; 
    public TextView stateView = null;

	/**
	 * Called when the activity is first created.
	 */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		Log.d(TAG, "onCreate started");
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);
		opts = GameMenuActivity.opts;
		LinearLayout ll = (LinearLayout) findViewById(R.id.rendzu_canvas_layout);
		ll.setVerticalFadingEdgeEnabled(false);
		ScrollView scrollV = (ScrollView) findViewById(R.id.ScrollView01);
		HorizontalScrollView scrollH = (HorizontalScrollView) findViewById(R.id.HorizontalScrollView01);
        stateView = (TextView)findViewById(R.id.game_state);
		final AndroidRendzuView view = new AndroidRendzuView(this, scrollV, scrollH);
		ll.addView(view);
		
		Button undoBtn = (Button)findViewById(R.id.undo_btn);
		undoBtn.setOnClickListener(new View.OnClickListener() {			
			@Override
			public void onClick(View v) {
				Log.d(TAG, "Undo button clicked");
				view.undoMove();
				view.undoMove();
				view.invalidate();
			}
		});
        
        Button quitBtn = (Button)findViewById(R.id.quit_btn);
        quitBtn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "onClick finish");
                AndroidRendzuActivity.this.finish();
            }
        });
        
        // setting side chars below screen
        TextView humanChar = (TextView)findViewById(R.id.human_side_char);
        TextView compChar = (TextView)findViewById(R.id.computer_side_char);
        if (opts.compFirst) {
        	humanChar.setText("O");
        	compChar.setText("X");
        } else {
        	humanChar.setText("X");
        	compChar.setText("O");
        }
	}
}