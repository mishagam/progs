package mis.korean.words;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.StringWriter;
import java.util.Collections;
import java.util.List;

import mis.korean.asselect.KorWordsConf;
import android.content.Context;
import android.util.Log;

public class WordsGame {
	private final String TAG = this.getClass().getSimpleName();
	
	Context context;
	Dictionary dict;
	KorWordsConf conf = KorWordsConf.getInstance();
	public static WordsGame currentGame = null;
    private DictSet dictSet;
	
	public WordsGame(Context ca) {
		context = ca;
		currentGame = this;
		dict = Dictionary.getInstance();
		Log.i(TAG, "WordsGame constructor called");
		KorWordsConf.DictSetType dsType = conf.getDictSetType();
		if (dsType== KorWordsConf.DictSetType.RES_DICTS) {
			dictSet = new ResDictSet(ca);
		} else if (dsType == KorWordsConf.DictSetType.FILE_DICTS) {
			dictSet = new FileDictSet();
		} else if (dsType == KorWordsConf.DictSetType.HTTP_DICTS) {
			dictSet = new HttpDictSet();
		}
	}

	public boolean readDict(boolean first) {
		Log.i(TAG, "readDict(" + first + ") called");
		try {
			InputStream is;
			if (first) {
				dict.clear();
				List<String> dictNames = dictSet.getDictNames();
				String sel = conf.getSelected();
				for (int i=0; i<dictNames.size(); i++) {
					if (i<sel.length() && sel.charAt(i) == 'T') {
						String dictName = dictNames.get(i);
						List<String> lDict = dictSet.getOneDict(dictName);
						dict.readDictionary(lDict);
					}
				}
				Log.d(TAG, "readDicts from dictNames passed");
			} else {
				String fn = conf.getDictFileName();
				File f = new File(context.getFilesDir(), fn);
				if (!f.exists()) {
					Log.d(TAG, "readDict(), File don't exist: " + fn);
					return false;
				}
				is = context.openFileInput(fn);
				Log.d(TAG, "readDict() openFileInput() passed, fn: " + fn);
				BufferedReader br = new BufferedReader(new InputStreamReader(is));
				dict.clear();
				dict.readDictionary(br);
				br.close();		
			}
			if (dict.activeKrl.size() == 0) {
				String msg = "Failed to read dictionary, no words read";
				MisUtils.showAlertMessage(msg, context);
				Log.e(TAG, msg);
				return false;
			}
			Log.d(TAG, "readDict() readDictionary passed ok");
			return true;
		} catch (IOException ioe) {
			String msg = "Failed to read Dictionary";
			msg += (first ? " from resource " : " from file ");
			msg += " ioe:" + ioe.getMessage();
			MisUtils.showAlertMessage(msg, context);
			Log.e(TAG, "readDict() readDictionary Failed: " + msg);
			return false;			
		}
	}
	
	public boolean closeDictionary() {
		FileOutputStream os;
		BufferedWriter bw;
		try {
			String sdir = context.getFilesDir().getAbsolutePath();
			Log.d(TAG, "closeDictionary().Files dir: " + sdir + " dict FileName: " + conf.getDictFileName());
			os = context.openFileOutput(conf.getDictFileName(), Context.MODE_PRIVATE);
			bw = new BufferedWriter(new OutputStreamWriter(os));
			dict.writeDictionary(bw);
			bw.close();
			return true;
		} catch (IOException ioe) {
			ioe.printStackTrace();
			String msg = "Close Dictionary failed: " + ioe.getMessage();
			MisUtils.showAlertMessage(msg, context);
			Log.e(TAG, msg);
			return false;			
		}
	}
	
	public String dictionaryAsString() {
		StringWriter sw = new StringWriter();
		BufferedWriter bw = new BufferedWriter(sw);
		Collections.sort(dict.activeKrl);
		try {
			dict.writeDictionary(bw);
			bw.close();
		} catch (IOException ioe) {
			Log.e(TAG, "Impossible IO exception happened");
		}
		
		return sw.toString();
	}
	
	public OneWord getNextKoreanWord() {
		return dict.nextAskWordNew();		
	}
	
	public OneWord getNextRussianWord() {
		return dict.answerWord();
	}
	
	public int checkAnswer(OneWord answ, double dtime) {
		Log.d(TAG, "checkAnswer() called, word = " +
				answ.getWord(false));
		int iOk = dict.checkAnswer(answ, dtime);
		return iOk;
	}
	
	public static WordsGame getCurrentGame() {
		return currentGame;
	}

	public boolean emptyDictionary() {
		return dict.activeKrl.isEmpty();
	}
	
	public OneWord getCurrentAskWord() {
		return dict.getAskWord();
	}
	
	public boolean isCorrectAns() {
		return dict.isCorrectAns();
	}

	public Dictionary getDict() {
		return dict;
	}

    public DictSet getDictSet() {
        return dictSet;
    }

}
