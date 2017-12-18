package mis.korean.asselect;

import mis.korean.asselect.KorWordsConf.KoreanRussianType;
import mis.korean.asselect.KorWordsConf.OtherLanguage;
import mis.korean.words.Dictionary;
import mis.korean.words.MisUtils;
import mis.korean.words.WordsGame;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.CompoundButton.OnCheckedChangeListener;
import android.widget.LinearLayout;
import android.widget.RadioGroup;

public class WordsSettingsActivity extends Activity {
	private final String TAG = this.getClass().getSimpleName();
	
	private final KorWordsConf conf = KorWordsConf.getInstance();
	RadioGroup koreanRussianGroup = null;
	RadioGroup otherLanguageGroup = null;
    CheckBox playKoreanCb = null;
    boolean dictsChanged = false;

    class KoreanRussianListener implements RadioGroup.OnCheckedChangeListener {

        @Override
        public void onCheckedChanged(RadioGroup group, int checkedId) {
            if (checkedId == R.id.Korean2RussianRadio) {
                conf.setKoreanToRussian(KoreanRussianType.KOREAN_TO_RUSSIAN);
            } else if (checkedId == R.id.Russian2KoreanRadio) {
                conf.setKoreanToRussian(KoreanRussianType.RUSSIAN_TO_KOREAN);
            } else if (checkedId == R.id.Russian2KoreanCharsRadio) {
                conf.setKoreanToRussian(KoreanRussianType.RUSSIAN_TO_KOREAN_CHARS);
            } else {
                Log.e(TAG, "TimeListener() Uknown radio id = " + checkedId);
            }
            Dictionary d = Dictionary.getInstance();
            d.korRusType = conf.getKoreanToRussian();
            Log.d(TAG, "KoreanRussianListener.onCheckedChanged() set korToRus to " +
                  conf.getKoreanToRussian());
        }
    }

    class OtherLanguageListener implements RadioGroup.OnCheckedChangeListener {
        @Override
        public void onCheckedChanged(RadioGroup group, int checkedId) {
            if (checkedId == R.id.OtherRussian) {
                conf.setOtherLanguage(OtherLanguage.OTHER_RUSSIAN);
            } else if (checkedId == R.id.OtherEnglish) {
                conf.setOtherLanguage(OtherLanguage.OTHER_ENGLISH);
            } else {
                Log.e(TAG, "OtherLanguageListener() Uknown radio id = " + checkedId);
            }
            Log.d(TAG, "Other language changed to " + conf.getOtherLanguage());
        }
    }
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.options_layout);
		
        Button btn = (Button)findViewById(R.id.reset_button);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Reset dictionary button pressed");
                Context context = WordsSettingsActivity.this;
                Intent intent = new Intent(context, SelectWordActivity.class);
                SelectWordActivity.resetDict = true;
                context.startActivity(intent);
            }
        });
		
        btn = (Button)findViewById(R.id.show_weights_table_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Show Weights button pressed");
                Context context = WordsSettingsActivity.this;
                WordWeightsTable.activeOnly = false;
                Intent intent = new Intent(context, WordWeightsTable.class);
                context.startActivity(intent);
            }
        });
		
        btn = (Button)findViewById(R.id.show_active_weights_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Show Weights button pressed");
                Context context = WordsSettingsActivity.this;
                WordWeightsTable.activeOnly = true;
                Intent intent = new Intent(context, WordWeightsTable.class);
                context.startActivity(intent);
            }
        });
		
        btn = (Button)findViewById(R.id.reset_prefs_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Reset preferences button pressed");
                Context context = WordsSettingsActivity.this;
                conf.initDefaultConf(context);
        		savePreferences();
                Intent intent = new Intent(context, SelectWordActivity.class);
                context.startActivity(intent);
            }
        });
        
        // initialize radio group
        koreanRussianGroup = (RadioGroup)findViewById(R.id.KoreanOrRussianGroup);
        int selId = 0;
        switch (conf.getKoreanToRussian()) { 
		case KOREAN_TO_RUSSIAN:
			selId = R.id.Korean2RussianRadio;
			break;
		case RUSSIAN_TO_KOREAN:
			selId = R.id.Russian2KoreanRadio;
			break;
		case RUSSIAN_TO_KOREAN_CHARS:
			selId = R.id.Russian2KoreanCharsRadio;
			break;
        }
        koreanRussianGroup.check(selId);
        KoreanRussianListener krl = new KoreanRussianListener();
        koreanRussianGroup.setOnCheckedChangeListener(krl);
        
        // initialize other language radio group
        otherLanguageGroup = (RadioGroup)findViewById(R.id.OtherLanguageGroup);
        switch (conf.getOtherLanguage()) { 
		case OTHER_RUSSIAN:
			selId = R.id.OtherRussian;
			break;
		case OTHER_ENGLISH:
			selId = R.id.OtherEnglish;
			break;
        }
        otherLanguageGroup.check(selId);
        OtherLanguageListener oll = new OtherLanguageListener();
        otherLanguageGroup.setOnCheckedChangeListener(oll);
        
        // initialize play korean word
        playKoreanCb = (CheckBox)findViewById(R.id.playKoreanCheckBox);
        playKoreanCb.setChecked(conf.isPlayKoreanWords());
        playKoreanCb.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			@Override
			public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
				savePreferences();
			}
		});
        		
        // initialize select dictionaries many checkoxes
        LinearLayout ll = (LinearLayout)findViewById(R.id.selectDictGroup);
        ll.removeAllViews();
        String []sDicts = conf.getDictResIds().split(",");
        Log.d(TAG, "WordSettingsActivity.onCreate(), selected: " + conf.getSelected());
        for (int i=0; i<sDicts.length; i++) {
        	String sid = sDicts[i];
        	int cbId = this.getResources().getIdentifier(sid, "raw", getPackageName());
        	if (cbId == 0) {
        		String msg = "Cannot open dictionary resource: " + sid;
        		MisUtils.showAlertMessage(msg, this);
        		Log.e(TAG, msg);
        		continue;
        	}
            Log.d(TAG, "Found dict Id = " + cbId);
            CheckBox cb = new CheckBox(this);
            cb.setText(sid + " Dictionary");
            boolean checked = (conf.getSelected().charAt(i) == 'T');
            cb.setEnabled(true);
            cb.setChecked(checked);
            cb.setTextAppearance(this, R.style.MisTextAppearance);
            ll.addView(cb);
            final int ii = i;
            cb.setOnCheckedChangeListener(new OnCheckedChangeListener() {
				
				@Override
				public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
					char []cc = conf.getSelected().toCharArray();
					char ci = (isChecked ? 'T' : 'F');
					cc[ii] = ci;
					String selS = new String(cc);
					conf.setSelected(selS);
					WordsSettingsActivity.this.dictsChanged = true;					
				}
			});
        }
	}
	
	@Override
	protected void onPause() {
		savePreferences();
		Log.d(TAG, "onCheckedChanged() reading dictionaries");
		boolean restartDictionaries = dictsChanged;
		WordsGame.currentGame.readDict(restartDictionaries);
		Log.d(TAG, "onCheckedChanged() reading dictionaries passed");
		WordsGame.currentGame.closeDictionary();
		dictsChanged = false;
		super.onPause();
	}

	void savePreferences() {
		String prefn = KorWordsConf.PREFS_NAME;
        SharedPreferences prefs = this.getSharedPreferences(prefn, MODE_PRIVATE);
        conf.setPlayKoreanWords(playKoreanCb.isChecked());
        conf.confToPrefs(prefs);
        Log.d(TAG, "WordSettingsActivity savePreferences, selected: " + conf.getSelected());
	}
}