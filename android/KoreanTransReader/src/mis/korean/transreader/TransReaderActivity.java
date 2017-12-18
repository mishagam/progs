package mis.korean.transreader;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.net.URL;

import mis.korean.transreader.translate.MisGoogleTranslate;
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.text.Layout;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnLongClickListener;
import android.view.View.OnTouchListener;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 * 
 * @see SystemUiHider
 */
public class TransReaderActivity extends Activity implements Handler.Callback,
		OnTouchListener {

	public static final String TAG = TransReaderActivity.class.getSimpleName();
	public static final int MSG_SHOW_FILE_NAME = 500;
	
	private class TranslateTask extends AsyncTask<String, Integer, String> {

		@Override
		protected String doInBackground(String... words) {
			for (String w : words) {
				String tr = TransReaderActivity.this.transClient.translate(w);
				Log.d(TAG, "doInBackground()w,tr = " + w + " - " + tr);
				return tr;
			}
			return null;
		}

		@Override
		protected void onPostExecute(String result) {
			TransReaderActivity.this.translation = result;
			TransReaderActivity.this.showTopLine();
			super.onPostExecute(result);
		}
		
	}

	File file = null;
	boolean sel = false;
	boolean can = false;
	String CurDir = "";
	EditText tv = null;
	String fileName = "";
	MenuItem fileNameItem = null;
	TextView wordTextView = null;
	Menu myMenu = null;
	Handler handler = null;
	String shownText = "";
	String word;
	String lastWord = "";
	boolean prepareTrans = false;
	String translation = "";
	MisGoogleTranslate transClient = null;
	int wordBeg;
	int wordEnd;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_trans_reader);
		tv = (EditText) this.findViewById(R.id.readerText);
		wordTextView = (TextView)this.findViewById(R.id.transText);
		shownText = this.getString(R.string.initial_string);
		tv.setText(shownText);
		tv.setTextSize(28);
		tv.setOnTouchListener(this);
		// tv.setOnLongClickListener(this);
		if (handler == null) {
			handler = new Handler(this);
		}
		if (transClient==null) {
			transClient = new MisGoogleTranslate(this);
		}
		open_on_start();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		MenuInflater inflater = getMenuInflater();
		inflater.inflate(R.menu.trans_reader_menu, menu);
		fileNameItem = (MenuItem) menu.findItem(R.id.file_name);
		fileNameItem.setTitle(fileName);
		myMenu = menu;
		return true;
	}

	void showTopLine() {
		wordTextView.setText(word + "  -  " + translation);
		lastWord = word;
		prepareTrans = false;
	}

	/**
	 * code borrowed from:
	 * http://stackoverflow.com/questions/12962620/android-allow
	 * -user-to-open-text-files-with-app
	 */
	public void open_on_start() {
		Intent i = getIntent();
		Uri data = i.getData();
		if (data == null) {
			return;
		}
		URL url;
		String startFile = "";
		try {
			url = new URL(data.getScheme(), data.getHost(), data.getPath());
			startFile = url.toString().replace("file:", "");
		} catch (Exception ex) {
			Toast.makeText(this, "Error:\n" + ex.getMessage().toString(),
					Toast.LENGTH_LONG).show();
			return;
		}
		if (startFile == null) {
			return;
		}
		StringBuilder text = new StringBuilder();
		can = false;
		sel = false;
		try {
			file = new File(CurDir, startFile);
			BufferedReader reader = new BufferedReader(new FileReader(file));
			String line;
			while ((line = reader.readLine()) != null) {
				text.append(line);
				text.append('\n');
			}
			reader.close();
		} catch (Exception e) {
			Toast.makeText(this, "Error:\n" + e.getMessage().toString(),
					Toast.LENGTH_LONG).show();
		}
		shownText = text.toString();
		tv.setText(shownText);
		fileName = file.getName();
		if (fileNameItem != null) {
			fileNameItem.setTitle(fileName);
		}
		showTopLine();
		transClient.open();
	}

	@Override
	public boolean handleMessage(Message msg) {
		Log.e(TAG, "handling message with what = " + msg.what);
		if (msg.what == MSG_SHOW_FILE_NAME) {
			showTopLine();
		} else {
			Log.e(TAG, "Unknown message with what = " + msg.what);
			return false;
		}
		return true;
	}
	
	String extractWord(int off) {
		int beg,end;
		int len = shownText.length();
		if (len == 0) {
			return "";
		} else if (off >= len) {
			off = len-1;
		}
		while (off < len-1 && shownText.charAt(off) == ' ') {
			off++;
		}
		beg = off;
		while (beg>0 && shownText.charAt(beg) != ' ') {
			beg--;
		}
		end = off;
		while (end<len && shownText.charAt(end) != ' ') {
			end++;			
		}
		String w = shownText.substring(beg+1, end);
		wordBeg = beg;
		wordEnd = end;
		return w;
	}

	/**
	 * extracting position in text using layout borrowed from 
	 * http://stackoverflow.com/questions/2302867/
	 * android-how-to-determine-character-index-of-a-touch-events-position-in-textvie
	 */
	@Override
	public boolean onTouch(View v, MotionEvent e) {
		Log.d(TAG, "mouse event,x,y: " + e.getX() + " " + e.getY());
		Layout layout = ((TextView) v).getLayout();
		int x = (int) e.getX();
		int y = (int) e.getY();
		if (layout != null) {
			int line = layout.getLineForVertical(y);
			int offset = layout.getOffsetForHorizontal(line, x);
			Log.v(TAG, "layout line, off = " + line + " " + offset);
			word = extractWord(offset);
			Log.d(TAG, "word: " + word);
			tv.setSelected(true);
			tv.setSelection(wordBeg, wordEnd);
			if (word.length() > 0 && !word.equals(lastWord) && !prepareTrans) {
				prepareTrans = true;
				new TranslateTask().execute(word);
			}
		}
		
		return true;
	}

	@Override
	protected void onPause() {
		transClient.close();
		super.onPause();
	}

	@Override
	protected void onResume() {
		transClient.open();
		super.onResume();
	}
	
}
