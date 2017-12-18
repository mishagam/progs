package mis.korean.asselect;

import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;

/**
 * singleton class with configuration values
 * @author misha
 *
 */
public class KorWordsConf {
	private final String TAG = this.getClass().getSimpleName();
	private static final double DEFAULT_DISCOUNT = 0.7;
	public static final String PREFS_NAME = "mis.korean.android.SelectWord";
	public static final String DEFAULT_DICT_FILE_NAME = "dict_word.txt";
	
	public enum KoreanRussianType {
		KOREAN_TO_RUSSIAN, RUSSIAN_TO_KOREAN, RUSSIAN_TO_KOREAN_CHARS				
	}
	public enum OtherLanguage {
		OTHER_RUSSIAN, OTHER_ENGLISH
	}
	public enum DictSetType {
		RES_DICTS, FILE_DICTS, HTTP_DICTS
	}

	// private int dictResId = 0;
	private String dictResIds = "";
	/** T for selected dicts, F - for skipped, like TFFTF */
	private String selected = "T";  
	private String dictFileName = DEFAULT_DICT_FILE_NAME;
	private KoreanRussianType koreanToRussian = KoreanRussianType.KOREAN_TO_RUSSIAN;
	private OtherLanguage otherLanguage = OtherLanguage.OTHER_RUSSIAN;
	private double discount = DEFAULT_DISCOUNT;
	private double screenDensity = 1.0;
	private long prefVersionCode;
	private boolean playKoreanWords = false;
	private DictSetType dictSetType = DictSetType.RES_DICTS;
	private final static String PREV_VERSION_CODE_KEY = "prev_version_code";

	private static KorWordsConf instance = null;
	
	private KorWordsConf() {
		// do nothing
	}
	
	public static synchronized KorWordsConf getInstance() {
		if (instance == null) {
			instance = new KorWordsConf();
		}
		return instance;
	}
	
	public void initDefaultConf(Context c) {
		dictResIds = "dict";
		dictFileName = c.getString(R.string.dict_file_name);
		dictResIds = c.getString(R.string.dict_res_ids);
		// setting string of T
		String []ss = dictResIds.split(",");
		int nt = ss.length;
		// set T for new selections only
		// selected = "";
		for (int i=selected.length(); i<nt-1; i++) {
			selected += "F";
		}
		selected += "T";
		koreanToRussian = KoreanRussianType.KOREAN_TO_RUSSIAN;
		otherLanguage = OtherLanguage.OTHER_RUSSIAN;
		discount = DEFAULT_DISCOUNT;
		playKoreanWords = false;
		dictSetType = DictSetType.RES_DICTS;
		Log.d(TAG, "initDefaultConf finished");
	}
	
	public void confFromBundle(Bundle b) {
		dictResIds = b.getString("dict_res_ids");
		if (dictResIds == null) {
			dictResIds = "dict"; 
		}
		String s = b.getString("dict_file_name");
		dictFileName = ((s==null || s.equals(""))? DEFAULT_DICT_FILE_NAME : s);
		s = b.getString("korean_to_russians");
		if (s==null) {
			koreanToRussian = KoreanRussianType.KOREAN_TO_RUSSIAN;
		} else {
			koreanToRussian = KoreanRussianType.valueOf(s);
		}
		s = b.getString("other_language");
		if (s==null || s.equals("")) {
			otherLanguage = OtherLanguage.OTHER_RUSSIAN;
		} else {
			otherLanguage = OtherLanguage.valueOf(s);
		}
		discount = b.getDouble("discount", DEFAULT_DISCOUNT);		
		selected = b.getString("selected");
		if (selected == null) {
			selected = "T";
		}
		prefVersionCode = b.getLong(PREV_VERSION_CODE_KEY, 0);
		playKoreanWords = (b.getInt("play_korean_word", 0) == 1);

		s = b.getString("dict_set_type");
		if (s==null || s.equals("")) {
			dictSetType = DictSetType.RES_DICTS;
		} else {
			dictSetType = DictSetType.valueOf(s);
		}

		Log.d(TAG, "confFromBundle(), loaded values from bundle");
	}
	
	public void confFromPrefs(SharedPreferences b) {
        Log.i(TAG, "confFromPrefs() started");
		dictResIds = b.getString("dict_res_ids", "dict");
		dictFileName = b.getString("dict_file_name", dictFileName);
		if (dictFileName==null || dictFileName.equals("")) {
			dictFileName = DEFAULT_DICT_FILE_NAME;
		}
		String s = b.getString("korean_to_russians", "");
		if (s==null || s.equals("")) {
			koreanToRussian = KoreanRussianType.KOREAN_TO_RUSSIAN;
		} else {
			koreanToRussian = KoreanRussianType.valueOf(s);
		}
		s = b.getString("other_language", "");
		if (s==null || s.equals("")) {
			otherLanguage = OtherLanguage.OTHER_RUSSIAN;
		} else {
			otherLanguage = OtherLanguage.valueOf(s);
		}
		discount = b.getFloat("discount", (float)discount);		
		selected = b.getString("selected", selected);
		prefVersionCode = b.getLong(PREV_VERSION_CODE_KEY, 0);
		playKoreanWords = (b.getInt("play_korean_word", 0) == 1);
		s = b.getString("dict_set_type", "");
		if (s==null || s.equals("")) {
			dictSetType = DictSetType.RES_DICTS;
		} else {
			dictSetType = DictSetType.valueOf(s);
		}
		Log.d(TAG, "confFromPrefs(), loaded values from shared preferences");
	}
	
	public void confToBundle(Bundle b) {
		b.putString("dict_res_ids", dictResIds);
		b.putString("dict_file_name", dictFileName);
		b.putString("korean_to_russians", "" + koreanToRussian);
		b.putString("other_language", "" + otherLanguage);
		b.putDouble("discount", discount);
		b.putString("selected", selected);
		b.putLong(PREV_VERSION_CODE_KEY, prefVersionCode);
		b.putInt("play_korean_word", (playKoreanWords ? 1 : 0));
		b.putString("dict_set_type", "" + dictSetType);
	}
	
	public void confToPrefs(SharedPreferences sp) {
		SharedPreferences.Editor b = sp.edit();
		b.putString("dict_res_ids", dictResIds);
		b.putString("dict_file_name", dictFileName);
		b.putString("korean_to_russians", "" + koreanToRussian);
		b.putString("other_language", "" + otherLanguage);
		b.putFloat("discount", (float)discount);
		b.putString("selected", selected);
		b.putLong(PREV_VERSION_CODE_KEY, prefVersionCode);
		b.putInt("play_korean_word", (playKoreanWords ? 1 : 0));
		b.putString("dict_set_type", "" + dictSetType);
		b.commit();
	}
	
	public String getDictResIds() {
		return dictResIds;
	}

	public String getDictFileName() {
		return dictFileName;
	}

	public KoreanRussianType getKoreanToRussian() {
		return koreanToRussian;
	}

	public boolean isFromKorean() {
		boolean bret = (koreanToRussian==KoreanRussianType.KOREAN_TO_RUSSIAN);
		return bret;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDictResIds(String s) {
		this.dictResIds = s;
	}

	public void setDictFileName(String dictFileName) {
		this.dictFileName = dictFileName;
	}

	public void setKoreanToRussian(KoreanRussianType koreanToRussian) {
		this.koreanToRussian = koreanToRussian;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public String getSelected() {
		return selected;
	}

	public void setSelected(String selected) {
		this.selected = selected;
	}

	public double getScreenDensity() {
		return screenDensity;
	}

	public void setScreenDensity(double screenDensity) {
		this.screenDensity = screenDensity;
	}

	public long getPrefVersionCode() {
		return prefVersionCode;
	}

	public void setPrefVersionCode(long prefVersionCode) {
		this.prefVersionCode = prefVersionCode;
	}

	public OtherLanguage getOtherLanguage() {
		return otherLanguage;
	}

	public void setOtherLanguage(OtherLanguage otherLanguage) {
		this.otherLanguage = otherLanguage;
	}

	public boolean isPlayKoreanWords() {
		return playKoreanWords;
	}

	public void setPlayKoreanWords(boolean playKoreanWords) {
		this.playKoreanWords = playKoreanWords;
	}

	public DictSetType getDictSetType() {
		return dictSetType;
	}

	public void setDictSetType(DictSetType dictSetType) {
		this.dictSetType = dictSetType;
	}


	public String newSelectedString(Context c) {
		String ids = c.getString(R.string.dict_res_ids);
		// setting string of T
		String []ss = ids.split(",");
		int nt = ss.length;
		String sel = "";
		for (int i=0; i<nt-1; i++) {
			sel += "F";
		}
		sel += "T";
		return sel;
	}
}
