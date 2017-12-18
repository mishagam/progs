package mis.korean.asselect;

import mis.korean.words.WordsGame;
import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.widget.TextView;

public class ShowWeightsActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.show_weights);
		TextView tview = (TextView)this.findViewById(R.id.word_weights_txt);
		WordsGame wg = new WordsGame(this);
		wg.readDict(false);
		String wtext = wg.dictionaryAsString();
		wtext = "korean - russian - active - difficulty - percError - delay - numCorrect \n\n" + wtext;
		tview.setText(wtext);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.show_weights, menu);
		return true;
	}

}
