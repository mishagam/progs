package mis.animsto.story;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import android.util.Log;

import mis.animsto.figures.FigureState;
import mis.animsto.figures.Turtle;

/**
 * One time cadr with positions of figures, sound and replica.
 * @author Misha
 *
 */
public class Cadr {
	private final String TAG = this.getClass().getSimpleName();

	private String backImageName = "";
	private String replica = "";
	private String soundName = null;
	private int page;   ///< index of page from 0 probably
	private List<FigureState> figures = new ArrayList<FigureState>();
	private Map<String, FigureState> mapf = new HashMap<String, FigureState>();
	int soundNameIdx = -1;
	// AnimStory story;
	
	public Cadr(String backName, String replicaA, String soundNmA, List<Turtle> lt) {
		this.backImageName = backName;
		this.replica = replicaA;
		setSoundName(soundNmA);
		this.figures.clear();
		for (Turtle t : lt) {
			FigureState fs = new FigureState(t);
			addFigure(fs);
		}
		page = 0;
	}
	
	public Cadr() {
		// do nothing, may be we don't need this
	}
	
	private void addFigure(FigureState fs) {
		this.figures.add(fs);			
		mapf.put(fs.getName(), fs);
	}
	
	/**
	 * copy constructor, 
	 * deep copy so two cadrs can be independedly edited 
	 * @param ca
	 */
	public Cadr(Cadr ca) {
		this.backImageName = ca.backImageName;
		this.replica = ca.replica;
		setSoundName(ca.soundName);
		this.figures.clear();
		for (FigureState fs : ca.figures) {
			figures.add(new FigureState(fs));
		}
		page = ca.page;
	}
	
	public void parseList(LogoList lol) {
		LogoList lt = null;
		String key = null;
		List li = lol.list;
		try {
			String nums = (String)li.get(0);
			for (int i=1; i<li.size(); i++) {
				lt = (LogoList)li.get(i);
				key = (String)lt.get(0);
				if (key.equals("back")) {
					this.backImageName = (String)lt.get(1);
				} else if (key.equals("sound")) {
					this.setSoundName((String)lt.get(1));
				} else if (key.equals("replica")) {
					this.replica = (String)lt.get(1);
				} else if (key.equals("page")) {
					this.page = Integer.parseInt((String)lt.get(1));
				} else if (key.equals("turtle")) {
					FigureState fs = new FigureState(lt);
					addFigure(fs);
				}			
			}
		} catch (Exception e) {
			Log.e(TAG, "parseList failed, e:" + e);
			Log.e(TAG, "parseList failed, lt: " + lt + " ,key: " + key);
		}
	}
	
	public LogoList toLogoList(int number) {
		LogoList lol = new LogoList();
		lol.add("" + number);
		if (!backImageName.equals("")) {
			lol.add(new LogoList("back", backImageName));
		}
		if (soundName != null) {
			lol.add(new LogoList("sound", soundName));
		}
		if (!replica.equals("")) {
			lol.add(new LogoList("replica", replica));
		}
		lol.add(new LogoList("page", "" + page));
		for (FigureState t : figures) {
			LogoList ll = t.toLogoList();
			lol.add(ll);
		}
		return lol;
	}

	public String prettyPrint(int number) {
		StringBuilder sb = new StringBuilder();
		sb.append("[ " + number);
		if (!backImageName.equals("")) {
			sb.append(" [back " + backImageName + "] ");
		}
		if (soundName != null) {
			sb.append(" [sound " + soundName + "] ");
		}
		if (!replica.equals("")) {
			sb.append(" [replica " + replica + "] ");
		}
		sb.append(" [page " + page + "] ");
		for (FigureState t : figures) {
			LogoList ll = t.toLogoList();
			sb.append("\n  " + ll);
		}
		sb.append("]\n");
		return sb.toString();
	}
	
	public List<FigureState> getFigures() {
		return figures;
	}
	public String getBackImageName() {
		return backImageName;
	}

	public void setBackImageName(String backImageName) {
		this.backImageName = backImageName;
	}

	public FigureState getFigure(String fname) {
		return mapf.get(fname);
	}

	public String getReplica() {
		return replica;
	}

	public String getSoundName() {
		return soundName;
	}

	public void setSoundName(String s) {
		soundName = s;
		indexFromSoundName();
	}
	
	public void indexFromSoundName() {
		if (soundName == null) {
			this.soundNameIdx = -1;
		} else {
			String ns = soundName.substring(7);
			int idx = Integer.parseInt(ns);
			this.soundNameIdx = idx;
		}
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public void addTurtle(Turtle t) {
		FigureState fs = new FigureState(t);
		addFigure(fs);
	}

	public void removeTurtle(Turtle t) {
		String tuName = t.getName();
		mapf.remove(tuName);
		for (int i=0; i<figures.size(); i++) {
			FigureState fs = figures.get(i);
			if (fs.getName().equals(tuName)) {
				figures.remove(i);
				break;
			}
		}
	}
}
