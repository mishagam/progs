package mis.korean.android;

import mis.korean.words.MisUtils;
import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;

public class SelectWordActivity extends Activity {

	private final String TAG = this.getClass().getSimpleName();
	private SelectWordView wordView;
	KorWordsConf conf;	
	public static boolean resetDict = false;
	SharedPreferences prefs;
	private MisaTts misTts = null;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		Log.i(TAG, "onCreate() started, savedState: " + savedInstanceState);
		conf = KorWordsConf.getInstance();
		if (savedInstanceState != null) {
			conf.confFromBundle(savedInstanceState);
			if (conf.getDictFileName()==null || conf.getDictFileName().equals("")) {
				conf.initDefaultConf(this);
			}
		} else {
			conf.initDefaultConf(this);
		}
		prefs = this.getSharedPreferences(KorWordsConf.PREFS_NAME, MODE_PRIVATE);
		conf.confFromPrefs(prefs);
		Log.d(TAG, "onCreate() dictIds, dict_file_name: " + 
			    conf.getDictResIds() + " " + conf.getDictFileName());
		Log.d(TAG, "onCreate() selected: " + conf.getSelected());
		wordView = new SelectWordView(this);
		misTts = new MisaTts(this);
		misTts.speak("a");
		
		setContentView(wordView);
		checkAppVersion();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.activity_select_word, menu);
		return true;
	}


	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		Log.d(TAG, "onOptionsItemSelected called, item.id= " + 
				item.getItemId());
		switch (item.getItemId()) {
		case R.id.menu_settings:
			Log.d(TAG, "calling settings");
            Intent intent = new Intent(this, WordsSettingsActivity.class);
            this.startActivity(intent);
            break;
            
		case R.id.menu_play_tts:
			Log.d(TAG, "Play tts called");
			String kword = wordView.getWgame().getCurrentAskWord().getKorean();
			misTts.speak(kword);			
            break;
            
        default:
        	Log.e(TAG, "Unimplemented menu item");
        	break;
		}
		return super.onOptionsItemSelected(item);		
	}

	@Override
	protected void onPause() {
		Log.d(TAG, "onPause() called");
		wordView.stopTimers();
		Log.d(TAG, "onStop() timer cancel passed");
		wordView.getWgame().closeDictionary();
		Log.d(TAG, "closeDictionary() passed Ok");
		conf.confToPrefs(prefs);
		super.onStop();
	}

	@Override
	protected void onResume() {
		// conf.confFromPrefs(prefs);
		boolean readOk = wordView.getWgame().readDict(false);
		if (resetDict || !readOk) {
			readOk = wordView.getWgame().readDict(true);
		}
		if (!readOk) {
			String msg = "Resume() readDict() failed, cannot work";
			Log.e(TAG, msg);
			MisUtils.showAlertMessage(msg, this);
		} else {
			try {
				resetDict = false;		
				wordView.startTimers();
				wordView.newQuestionWord();
				Log.d(TAG, "readDict() passed");
			} catch (Exception e) {
				String msg = "OnResume() exception happened: " + e.getMessage();
				Log.e(TAG, msg, e);
				MisUtils.showAlertMessage(msg, this);
			}
		}
		super.onResume();
	}	

	@Override
	protected void onSaveInstanceState(Bundle outState) {
		super.onSaveInstanceState(outState);
		conf.confToBundle(outState);
		Log.d(TAG, "onSaveInstanceState() called");
	}
	
	void checkAppVersion() {
		String packageName = this.getClass().getPackage().getName();
		try {
			PackageInfo info = getPackageManager().getPackageInfo(packageName, 0);
			int currentVersion = info.versionCode;
			if (conf.getPrefVersionCode() < currentVersion) {
				// update dictionaries
				String newSel = conf.newSelectedString(this);
				if (newSel.length() > conf.getSelected().length()) {
					conf.setSelected(newSel);
				}
				conf.setDictResIds(this.getString(R.string.dict_res_ids));
				wordView.getWgame().readDict(true);
				wordView.getWgame().closeDictionary();
				// saving prefs with new version code
				conf.setPrefVersionCode(currentVersion);
				conf.confToPrefs(prefs);  // also commits prefs
			}
		} catch (Exception e) {
			Log.e(TAG, "checkAppVersion failed", e);
		}
	}

	public MisaTts getMisTts() {
		return misTts;
	}

	
}
