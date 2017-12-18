package mis.korean.words;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

import mis.korean.asselect.KorWordsConf;
import mis.korean.asselect.KorWordsConf.KoreanRussianType;

import android.util.Log;

/**
 * list of OneWord structures
 * @author misha
 *
 */
public class Dictionary {
	private final String TAG = this.getClass().getSimpleName();
	ArrayList<OneWord> activeKrl = new ArrayList<OneWord>();
	ArrayList<OneWord> allKrl = new ArrayList<OneWord>();

	private static final int MAX_INCORRECT_ANSWERS = 6;
	
	int lastIdx = -1;
	// boolean koreanToRussian=true;
	double correctAnswerPercent = 0.30;
	Random rnd = new Random();
	private int answersSinceCorrect=0;
	int charIndex = 0;  // index of korean slog in case of russian to korean chars
	public KoreanRussianType korRusType;
	OneWord askWord;
	/** last answer was correct */
	boolean correctAns;  
	private static Dictionary instance = null;
	
	public static synchronized Dictionary getInstance() {
		if (instance == null) {
			instance = new Dictionary();
		}
		return instance;
	}
	
	private Dictionary() {
		KorWordsConf conf = KorWordsConf.getInstance();
		korRusType = conf.getKoreanToRussian();
	}
	
	public void clear() {
		activeKrl.clear();
		allKrl.clear();
	}

	/**
	 * read dictionary from list of strings
	 * @param dictList
	 */
	public void readDictionary(List<String> dictList) {
		lastIdx = -1;
		for (String s : dictList) {
			// Log.d(TAG, "read word: " + s);
			s = s.trim();
			if (s.length() < 2) {
				continue;
			}
			String []ss = s.split(" - ");
			if (ss.length < 2) {
				continue;
			}
			OneWord ow = new OneWord(ss);
			if (ow.isActive()) {
				activeKrl.add(ow);
			}
			allKrl.add(ow);
		}
		Log.d(TAG, "readDictionary() read " + activeKrl.size() + " words");
	}

	/**
	 * read dictionary from BufferedReader
	 * @param br
	 * @throws IOException
	 */
	public void readDictionary(BufferedReader br) throws IOException {
		lastIdx = -1;
		List<String> ls = new ArrayList<>();
		String s;
		while ((s = br.readLine()) != null) {
			ls.add(s);
		}
		this.readDictionary(ls);
		Log.d(TAG, "readDictionary(BufferedReader) read " + activeKrl.size() + " words");
	}

	public void writeDictionary(BufferedWriter bw) throws IOException {
		Log.d(TAG, "writeDictionary(), writing " + allKrl.size() + " words");
		for (OneWord ow : allKrl) {
			String s = ow.toString();
			bw.write(s + "\n");
		}		
	}
	
	double maxUnknown() {
		double mu = 0;
		for (OneWord ow : activeKrl) {
			double u = ow.getDifficulty();
			// Log.d(TAG, "maxUknown(), u,mu = " + u + " " + mu);
			if (u > mu) {
				mu = u;
			}
		}
		return mu;
	}
	
	/**
	 * we change algorithm to using table with log difficulty
	 * @return
	 */
	OneWord nextAskWordNew() {
		int nw = activeKrl.size();
		double []wstab = new double[nw];
		double lastSum = 0;
		double power = 10.0;
	    double logPower = Math.log(power);
	    int idx=-1;
	    
		for (int i=0; i<nw; i++) {
			double logdif = Math.exp(activeKrl.get(i).getDifficulty()*logPower/100);
			if (i == lastIdx) {
				logdif = logdif/100;
			}
			lastSum += logdif;
			wstab[i] = lastSum;
		}
		double maxSum = wstab[nw-1];
		double v = rnd.nextDouble()*maxSum;
		idx = Arrays.binarySearch(wstab, v);
		
		// correcting indexes if not found. In our case practically always.
		// look Java API for binarySearch.
		if (idx<0) {
			idx = -(idx + 1);
		}
		if (idx >= nw) {
			idx = nw-1;
		}

		charIndex = 0;
		lastIdx = idx;
		askWord = activeKrl.get(lastIdx);
		
		return askWord;
	}
	
	OneWord nextAskWordOld() {
		int i=0;
		final int ATTEMPTS = 40;
		double mu = maxUnknown();
		Log.d(TAG, "nextAskWord(), mu = " + mu);
		
		if (activeKrl.size() == 0) {
			throw new IllegalStateException("dictionary empty");
		}
		for (i=0; i<ATTEMPTS; i++) {
			int ii = rnd.nextInt(activeKrl.size());
			OneWord ow = activeKrl.get(ii);
			double limit = mu - 50*rnd.nextDouble();
			if (limit < ow.getDifficulty() && 
					ii != lastIdx) { // we want to change question
				lastIdx = ii;
				break;
			}			
			mu -= 2;
		}
		if (i==ATTEMPTS) {
			lastIdx = rnd.nextInt(activeKrl.size());
		}
		answersSinceCorrect = 0;
		askWord = activeKrl.get(lastIdx);
		Log.d(TAG, "selected word " + askWord.getWord(false));
		charIndex = 0;
		return activeKrl.get(lastIdx);
	}
	
	/**
	 * Wished probability of correct answer.
	 * @return
	 */
	double probCorrect() {
		double prob = (answersSinceCorrect*1.0) / MAX_INCORRECT_ANSWERS;
		return prob;
	}
	
	OneWord answerWord() {
		if (activeKrl.size() == 0) {
			throw new IllegalStateException("dictionary empty");
		}
		double p = rnd.nextDouble();
		int idx;
		OneWord ow;
		this.correctAns = (p < probCorrect());
		// Log.d(TAG, "correctAns = " + correctAns);
		if (correctAns) { // probability of correct answer
			idx = lastIdx;			
		} else {
			idx = rnd.nextInt(activeKrl.size());
			if (idx == lastIdx) {
				correctAns = true;
			} 
		}
		if (korRusType == KoreanRussianType.RUSSIAN_TO_KOREAN_CHARS) {
			// select one created character
			char c;
			if (correctAns) {
				String w = askWord.getWord(true);
				c = w.charAt(charIndex);
			} else {
				String w = activeKrl.get(idx).getKorean();
				int cidx = rnd.nextInt(w.length());
				c = w.charAt(cidx);
						
			}
			String []ss = new String[]{""+c, ""};
			ow = new OneWord(ss, false);	
		} else {
			ow = activeKrl.get(idx);			
		}
		
		return ow;		
	}
	
	public void wordShown() {
		if (correctAns) {
			answersSinceCorrect = 0;
		} else {
			answersSinceCorrect++;
		}
	}
	
	int checkAnswer(OneWord answ, double dtime) {
		String aword = askWord.getWord(true);
		int iret = 0;
		if (korRusType == KoreanRussianType.RUSSIAN_TO_KOREAN_CHARS) {
			char expC = aword.charAt(charIndex);
			char selC = answ.getWord(true).charAt(0);
			if (selC != expC) {
				askWord.update(dtime, false);
				charIndex = 0;
				iret = 0;;
			} else if (charIndex == aword.length()-1) {
				askWord.update(dtime, true);
				iret = 2;
			} else {
				charIndex++;
				iret = 1;
			}
		} else {
			String expW = askWord.getWord(true);
			String gotW = answ.getWord(true);
			boolean ok = expW.equals(gotW);
			Log.d(TAG,"expW, gotW, ok = "+expW+" "+gotW+" "+ok);
			askWord.update(dtime, ok);
			iret = (ok ? 2 : 0);
		}
		
		return iret;
	}

	public OneWord getAskWord() {
		return askWord;
	}

	public boolean isCorrectAns() {
		return correctAns;
	}	
	
	public ArrayList<OneWord> getActiveKrl() {
		return activeKrl;
	}

	public void setActiveKrl(ArrayList<OneWord> activeKrl) {
		this.activeKrl = activeKrl;
	}
	public ArrayList<OneWord> getAllKrl() {
		return allKrl;
	}


}
