package mis.animsto.figures;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import android.content.Context;
import android.util.Log;

public class TurtleCache {
	private final String TAG = this.getClass().getSimpleName();
	Map<String, Turtle> tuCache = new HashMap<String, Turtle>();
	private static TurtleCache instance = null;
	
	private TurtleCache() {
		// do nothing
	}
	
	public static synchronized TurtleCache getInstance() {
		if (instance == null) {
			instance = new TurtleCache();
		}
		return instance;
	}
	
	public void clear() {
		tuCache.clear();
	}
	
	public void cacheTurtle(Turtle tu) {
		String name = tu.getName();
		if (tuCache.get(name) == null) {
			tuCache.put(name, tu);
			Log.d(TAG, "Cached turtle " + tu.hashCode());
		}
	}
	
	public Turtle obtainTurtle(String tuName, Context ca) {
		Turtle tu = tuCache.get(tuName);
		if (tu == null) {
			tu = new Turtle(tuName, ca);
			cacheTurtle(tu);
		}
		return tu;
	}
	
	public Turtle obtainTurtle(FigureState fs, Context ca) {
		Turtle tu = tuCache.get(fs.getName());
		if (tu == null) {
			tu = new Turtle(fs, ca);
			cacheTurtle(tu);
			Log.d(TAG, "Got new turtle");
		} else {
			tu.setFigureState(fs);
		}
		Log.d(TAG, "Obtained turtle, name " + tu.hashCode() + " " + tu.getName());
		return tu;
	}
	
	public Turtle obtainTurtle(String tuName, List<String> imgNames, Context ca) {
		Turtle tu = tuCache.get(tuName);
		if (tu == null) {
			tu = new Turtle(tuName, ca);
			cacheTurtle(tu);
		}
		return tu;
	}

}
