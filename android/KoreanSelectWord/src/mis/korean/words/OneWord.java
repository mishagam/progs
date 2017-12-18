package mis.korean.words;

import java.util.Locale;

import mis.korean.android.KorWordsConf;
import mis.korean.android.KorWordsConf.OtherLanguage;
import android.util.Log;

/**
 * One korean word with russian translations.
 * 
 * @author misha
 * 
 */
public class OneWord implements Comparable<OneWord> {

	private final String TAG = "OneWord";
	public static double discRate;
	private static KorWordsConf conf = null;
	private String korean;
	/** word on korean */
	private String russian;
	/** word on russian */
	private String english = "";
	/** word in english */

	double errorPerc;
	double delay;
	double difficulty;
	int correctCount = 0;
	boolean active = true;
	int totalCount = 0;

	/**
	 * Constructor from string.
	 * 
	 * @param s
	 */
	public OneWord(String[] ss) {
		if (conf == null) {
			conf = KorWordsConf.getInstance();
		}
		discRate = conf.getDiscount();
		int dim = ss.length;
		if (dim < 5) {
			// from dict - words only
			korean = ss[0].trim();
			russian = ss[1].trim();
			if (dim == 3) {
				english = ss[2].trim();
			}
			errorPerc = 100;
			delay = 10000;
			correctCount = 0;
			totalCount = 0;
			active = true;
		} else {
			korean = ss[0].trim();
			russian = ss[1].trim();
			english = ss[2].trim();
			errorPerc = Double.parseDouble(ss[3].trim().replace(',', '.'));
			delay = Double.parseDouble(ss[4].trim().replace(',', '.'));
			correctCount = Integer.parseInt(ss[5].trim());
			difficulty = Double.parseDouble(ss[6].trim().replace(',', '.'));
			active = (ss[7].trim().toLowerCase(Locale.US).charAt(0) == 't');
			totalCount = Integer.parseInt(ss[8].trim());
		}
		estimateDifficulty();
	}

	/**
	 * Constructor from string.
	 * 
	 * @param s
	 */
	public OneWord(String[] ss, boolean fTrim) {
		if (fTrim) {
			throw new IllegalStateException("call other constructor");
		} else {
			korean = ss[0];
			russian = ss[1];
			int dim = ss.length;
			if (dim == 3) {
				english = ss[2];
			}
			errorPerc = 100;
			delay = 10000;
			correctCount = 0;
			totalCount = 0;
			active = true;
		}
		estimateDifficulty();
	}

	public String getKorean() {
		return korean;
	}

	// public String getRussian() {
	// return russian;
	// }

	public String getEnglish() {
		return english;
	}

	public double getErrorPerc() {
		return errorPerc;
	}

	public double getDelay() {
		return delay;
	}

	public double getDifficulty() {
		return difficulty;
	}

	void estimateDifficulty() {
		difficulty = delay / 120 + errorPerc - 10 * correctCount;
		if (correctCount > 5) {
			difficulty -= 50*(correctCount - 5);
		}
	}
	
	/**
	 * update value using totalCount and disc rate.
	 * @param v - value to update
	 * @return - new value
	 */
	private double updateValue(double v, double oldV) {
		double newV;
		if (totalCount==0) {
			newV = v;
		} else if (totalCount < 4) {
			newV = (v + totalCount*oldV) / (totalCount+1);
		} else {
			newV = oldV * discRate + v * (1.0 - discRate);
		}
		return newV;
	}

	public void update(double dtime, boolean ok) {
		if (ok) {
			// update delay only if answer is correct
			if (dtime > 10*365*24.0*3600*1000) {
				// delay more than 10 years, probably illegal start time
				throw new IllegalStateException("update(), Illegal dtime = " + dtime);
			} else if (dtime > 10*60*1000) {
				// 10 minutes limit
				dtime = 10*60*1000;
			}
			delay = updateValue(dtime, delay);
		}
		errorPerc = updateValue((ok ? 0 : 100), errorPerc);
		correctCount = (ok ? (correctCount + 1) : 0);
		totalCount++;
		estimateDifficulty();
		Log.d(TAG, "update(" + ok + "), w,perc,delay,difficulty = " + korean
				+ " " + difficulty + " " + errorPerc + " " + delay);
	}

	@Override
	public String toString() {
		String sActive = (active ? "t" : "f");
		String s = String.format(Locale.US,
				"%s - %s - %s - %4.1f - %8.0f - %d - %8.2f - %s - %d",
				korean, russian, english,
				errorPerc, delay, correctCount, getDifficulty(), sActive, 
				totalCount);
		return s;
	}

	boolean isKorean(boolean answer) {
		boolean korean = (answer) ^ conf.isFromKorean();
		return korean;
	}

	public String getWord(boolean answer) {
		String w = korean;
		if (!isKorean(answer)) {
			w = getOther();
		}
		return w;
	}

	@Override
	public int compareTo(OneWord b) {
		int res = Double.compare(difficulty, b.difficulty);
		return res;
	}

	public int getCorrectCount() {
		return correctCount;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	public String getOther() {
		String w;
		if (conf.getOtherLanguage() == OtherLanguage.OTHER_RUSSIAN
				|| english.equals("")) {
			w = russian;
		} else {
			w = english;
		}
		return w;
	}

}
