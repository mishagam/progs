package mis.animsto.story;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.util.Log;

import mis.animsto.figures.Turtle;

/**
 * full story with sequence of cadrs
 * @author Misha
 *
 */
public class AnimStory {
	private final String TAG = this.getClass().getSimpleName();
	public static final String STORY_EXT = ".story";
	private String storyName;
	private String fileName;

	Context context;
	ArrayList<Cadr> cadres = new ArrayList<Cadr>();
	int currentCadr;
	// String lastRecordedSound = null;

	// public static String currentStoryName = "new_story";
	
	public AnimStory(String storyNm, Context ca) {
		setStoryName(storyNm);
		context = ca;
		currentCadr = 0;
	}
	
	public Cadr getCadr(int idx) {
		// this.currentCadr = idx;
		return cadres.get(idx);
	}
	
	public Cadr getCadr() {
		return getCadr(currentCadr);
	}
	
	public int getCurrentCadr() {
		return currentCadr;		
	}
	
	
	public void putCadr(int idx, Cadr c) {
		if (idx >= cadres.size()) {
			currentCadr = cadres.size();
			cadres.add(c);
		} else {
			cadres.set(idx, c);
		}		
	}
	
	private void testLogoReadWrite() {
		String sa = "[oo [aa bb] [cc dd]]";
		LogoList ll = new LogoList();
		ll.parseString(sa);
		String sb = "" + ll;
		Log.d(TAG, "testLogoReadWrite, sa, sb = |" + sa+"| |" + sb + "|");
	}

	/**
	 * reading story from File in internal storage
	 */
	public boolean readStory() throws IOException {		
		File file = new File(context.getFilesDir(), this.getFileName());
		if (!file.exists()) {
			return false;
		}
		testLogoReadWrite();
		FileReader fis = new FileReader(file);
		BufferedReader br = new BufferedReader(fis);
		LogoList lol = new LogoList();
		lol.readList(br);
		Log.d(TAG, "Read game list: " + lol);
		this.parseStory(lol);
		br.close();		
		currentCadr = 0;
		return true;
	}
	
	void parseStory(LogoList lol) {
		List l = lol.list;
		for (Object o : l) {
			LogoList cadrl = (LogoList)o;
			Cadr cadr = new Cadr();
			cadr.parseList(cadrl);
			cadres.add(cadr);			
		}		
		currentCadr = 0;
	}
	
	public LogoList toList() {
		LogoList lol = new LogoList();
		for (int i=0; i<cadres.size(); i++) {
			Cadr cd = cadres.get(i);
			LogoList lc = cd.toLogoList(i);
			lol.add(lc);			
		}
		return lol;
	}
	
	public void writeStory() throws IOException {
		// writing list 
		String s = this.toString();
		File f = new File(context.getFilesDir(), this.getFileName());
		PrintWriter pw = new PrintWriter(f);
		Log.d(TAG, "Writing story: |" + s + "|");
		pw.write(s);
		pw.close();
	}

	@Override
	public String toString() {
		return this.toList().toString();
	}

	public String prettyPrint() {
		LogoList lol = this.toList();
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		int cadrIdx = 0;
		for (Object o : lol.list) {
			Cadr c = new Cadr();
			c.parseList((LogoList)o);
			sb.append(c.prettyPrint(cadrIdx));
			cadrIdx++;
		}
		sb.append("]");
		return sb.toString();
	}

	public Context getContext() {
		return context;
	}
	
	public int maxCadr() {
		return cadres.size();
	}
	public void setCurrentCadr(int currentCadr) {
		this.currentCadr = currentCadr;
	}
	
	String newSoundName() {
		int newIdx = 0;
		for (Cadr c : cadres) {
			if (newIdx <= c.soundNameIdx) {
				newIdx = c.soundNameIdx + 1;				
			}
		}
		String sname = "cadrsnd" + newIdx;
		return sname;
	}
	
	public String getCurrentSoundName() {
		if (currentCadr >= cadres.size()) {
			// sound for not yet allocated cadr
			return newSoundName();
		} else {
			Cadr c = getCadr();
			if (c.getSoundName() != null) {
				return c.getSoundName();
			} else {
				return newSoundName();
			}	
		}
	}

	public void removeCadr() {
		if (currentCadr >= cadres.size()) {
			return;
		}
		cadres.remove(currentCadr);		
	}
	
	public void dublicateCadr() {
		if (currentCadr >= cadres.size()) {
			return;
		}
		Cadr cd = new Cadr(getCadr());
		cadres.add((currentCadr+1), cd);		
	}
	public String getStoryName() {
		return storyName;
	}

	public void setStoryName(String storyName) {
		this.storyName = storyName;
		if (storyName.endsWith(STORY_EXT)) {
			fileName = storyName;
		} else {
			fileName = storyName + STORY_EXT;
		}
	}
	
	public String getFileName() {
		return fileName;
	}

	public void setBackground(String backName, int curPage) {
		for (Cadr c : cadres) {
			if (c.getPage() == curPage) {
				c.setBackImageName(backName);
			}
		}
	}

	/** add turtle t to all cadres from idx in the same page */
	public void addTurtle(Turtle t, int idx) {
		int page = (cadres.size()==0 ? 0 : cadres.get(idx).getPage());
		for (int i=idx; i<cadres.size(); i++) {
			Cadr c = cadres.get(i);
			if (c.getPage() != page) {
				break;
			}
			c.addTurtle(t);
		}
	}

	/** add turtle t to all cadres from idx in the same page */
	public void removeTurtle(Turtle t, int idx) {
		int page = cadres.get(idx).getPage();
		for (int i=0; i<cadres.size(); i++) {
			Cadr c = cadres.get(i);
			if (c.getPage() == page) {
				c.removeTurtle(t);
			}
		}
	}

	/** get index of first cadr with given page */
	public int getFirstCadrInPage(int idx) {
        int page = cadres.get(idx).getPage();
		for (int i=idx; i>=0; i--) {
			Cadr c = cadres.get(i);
			if (c.getPage() != page) {
				idx = i+1;
                break;
			} else if (i==0) {
                idx = 0;
                break;
            }
		}
     	return idx;
	}
}
