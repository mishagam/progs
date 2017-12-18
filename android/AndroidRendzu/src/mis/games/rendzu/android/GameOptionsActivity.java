package mis.games.rendzu.android;

import mis.games.rendzu.client.RendzuClient;
import mis.games.utils.GameVariant;
import mis.games.utils.MisLog;
import mis.games.utils.RendzuOptions;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.AdapterView;

public class GameOptionsActivity extends Activity implements RadioGroup.OnCheckedChangeListener,
            AdapterView.OnItemSelectedListener {
    class DiffListener implements RadioGroup.OnCheckedChangeListener {

        @Override
        public void onCheckedChanged(RadioGroup group, int checkedId) {
            if (checkedId == R.id.RadioEasy) {
                GameOptionsActivity.this.opts.gameVar = GameVariant.EASY;
            } else if (checkedId == R.id.RadioHard) {
                GameOptionsActivity.this.opts.gameVar = GameVariant.HARD;
            } else {
                Log.e(TAG, "DiffListener.onCheckedChanged() Uknown radio id = " + checkedId);
            }
            Log.d(TAG, "dl.onChecked, checkedId = " + checkedId + " selected GameVariant: " + opts.gameVar);
        }
    }
    class TimeListener implements RadioGroup.OnCheckedChangeListener {

        @Override
        public void onCheckedChanged(RadioGroup group, int checkedId) {
            if (checkedId == R.id.Time5Sec) {
                GameOptionsActivity.this.opts.timePerMove = 5000;
            } else if (checkedId == R.id.Time30sec) {
                GameOptionsActivity.this.opts.timePerMove = 30000;
            } else {
                Log.e(TAG, "TimeListener() Uknown radio id = " + checkedId);
            }
            Log.d(TAG, "dl.onChecked, checkedId = " + checkedId + " selected GameVariant: " + opts.gameVar);
        }
    }
	public static final String TAG = GameOptionsActivity.class.getSimpleName();
	RadioGroup firstGroup = null;
    RadioGroup difficultyGroup = null;
    RadioGroup timeGroup = null;
	RendzuOptions opts = null;	
	RendzuClient client = null;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		Log.d(TAG, "onCreate started");
		opts = GameMenuActivity.opts;
		super.onCreate(savedInstanceState);
		setContentView(R.layout.options_layout);
		
		// first group
		firstGroup = (RadioGroup)findViewById(R.id.FirstRadioGroup);
		int firstSel = (opts.compFirst ? R.id.ComputerFirstRadio : R.id.HumanFirstRadio);
		firstGroup.check(firstSel);
        firstGroup.setOnCheckedChangeListener(this);
        
        // set up difficulty group
        difficultyGroup = (RadioGroup)findViewById(R.id.DifficultyRadioGroup);
        int diffSel = getDifficultySel();
        difficultyGroup.check(diffSel);
        DiffListener dl = new DiffListener();
        difficultyGroup.setOnCheckedChangeListener(dl);
        
        // set up time per move group
        timeGroup = (RadioGroup)findViewById(R.id.TimeRadioGroup);
        int timeSel = getTimeSel();
        timeGroup.check(timeSel);
        TimeListener tl = new TimeListener();
        timeGroup.setOnCheckedChangeListener(tl);
		
		// spinner with remote game id's to select
        if (opts.connectToServer) {
            client = RendzuClient.getInstance(null, opts.gameServerUrl);
            String []mStrings = client.getGamesIds();
        }
	}
    
    private int getDifficultySel() {
        int ret = 0;
        switch (opts.gameVar) {
        case EASY:
            ret = R.id.RadioEasy;
            break;
            
        case HARD:
        case PASSIVE:
        case MANMAN:
            ret = R.id.RadioHard;
            break;
            
        case AIAI:
            // ret = R.id.RadioAiAi;
            break;
            
        case OBSERVE:
            // ret = R.id.RadioObserve;
            break;
        }
        return ret;
    }
    
    private int getTimeSel() {
        int ret = 0;
        if (opts.timePerMove < 10000) {
            ret = R.id.Time5Sec;
        } else {
            ret = R.id.Time30sec;
        }
        return ret;
    }

	/**
	 * selecting who is first
	 */
	@Override
	public void onCheckedChanged(RadioGroup group, int checkedId) {
		Log.d(TAG, "onCheckedChanged happened, checkedId = " + checkedId);
		if (checkedId == R.id.ComputerFirstRadio) {
			opts.compFirst = true;
		} else if (checkedId == R.id.HumanFirstRadio) {
			opts.compFirst = false;
		}
	}

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int pos, long id) {
        String sgameId = parent.getItemAtPosition(pos).toString();
        MisLog.i("selected game type: " + sgameId);
        if (sgameId != null && sgameId.trim().length() > 0) {
            String []ss = sgameId.split(";");
            opts.remoteGameId = ss[0];
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> arg0) {
        // do nothing
    }
}
