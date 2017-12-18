package mis.animsto.figures;

import java.util.ArrayList;
import java.util.List;

import mis.animsto.story.LogoList;
import android.graphics.Point;
import android.util.Log;

public class FigureState {
	private final String TAG = this.getClass().getSimpleName();

	private final List<String> imageNames;
	private String suit;
	private final boolean visible;
	private final Point pos;
	private final String name;
	private final double scale;
	private final double headAngle;
	private final String currentName;
	
	public FigureState(Turtle t) {
		visible = t.visible;
		pos = new Point(t.pos);
		name = t.name;
		scale = t.scale;
		headAngle = t.headAngle;
		imageNames = new ArrayList<String>();
		currentName = t.getCurrentImageName();
		if (t.suit != null) {
			suit = t.getSuit().getName();
		} else {
			suit = null;
		}
		for (FigImage fi : t.images) {
			imageNames.add(fi.getName());			
		}	
		Log.d(TAG, "FigureState(Turtle t) done, added " + 
		          t.images.size() + " images");
	}
	
	public FigureState(FigureState t) {
		visible = t.visible;
		pos = new Point(t.pos);
		name = t.name;
		scale = t.scale;
		headAngle = t.headAngle;
		imageNames = new ArrayList<String>();
		currentName = t.currentName;
		suit = t.suit;
		for (String nm : t.imageNames) {
			imageNames.add(nm);			
		}	
		Log.d(TAG, "FigureState(FigureState t) done");
	}
	
	public FigureState(LogoList lol) {
		// copy of final fields for parsing
		Log.d(TAG, "FigureState(ll) called");
		List<String> limageNames= new ArrayList<String>();
		boolean lvisible=true;
		Point lpos = new Point();
		String lname = "";
		double lscale = 1.0;
		double lheadAngle = 0;
		String lcurrentName = "";

		List<Object> li0 = lol.list;
		String s = (String)li0.get(0);
		if (!s.equals("turtle")) {
			throw new IllegalStateException("Reading FigureState from LL without turtle: " + s);
		}
		LogoList ll = (LogoList)li0.get(1);
		for (Object ol : ll.list) {
			LogoList lo = (LogoList)ol;
			String key = (String)lo.list.get(0);
			Object ov = lo.list.get(1);
			if (key.equals("pos")) {
				LogoList lp = (LogoList)ov;
				lpos = lp.toPoint();				
			} else if (key.equals("size")) {
				// we interpreting as integer percent of real size 
				// about the same as in Logo Miri
				String ssc = (String)ov;
				lscale = (Integer.parseInt(ssc))*0.01;
			} else if (key.equals("shape")) {
				// current image name as in LogoMiri
				lcurrentName = (String)ov;				
				Log.d(TAG, "FigureState(ll) got shape " + ov);
			} else if (key.equals("suit")) {
				// current image name as in LogoMiri
				lcurrentName = (String)ov;				
				Log.d(TAG, "FigureState(ll) got suit " + ov);
			} else if (key.equals("heading")) {
				// current image name as in LogoMiri
				String sh = (String)ov;
				lheadAngle = Double.parseDouble(sh);
			} else if (key.equals("visible")) {
				// current image name as in LogoMiri
				String sv = (String)ov;
				lvisible = !(sv.toLowerCase().startsWith("f"));
			} else if (key.equals("tu")) {
				// current image name as in LogoMiri
				String sv = (String)ov;
				lname = sv;
			} else if (key.equals("allimages")) {
				// current image name as in LogoMiri
				LogoList limg = (LogoList)ov;
				Log.d(TAG, "FigureState allimages: sz = " + limg.list.size());
				limageNames = new ArrayList<String>();
				for (Object fio : limg.list) {
					limageNames.add((String)fio);	
					Log.d(TAG, "from image names added image " + fio);
				}		
			}
		}
		
		// copying to final variables
		imageNames = limageNames;
		visible = lvisible;
		pos = lpos;
		name = lname;
		scale = lscale;
		headAngle = lheadAngle;
		currentName = lcurrentName;
	}
	
	public LogoList toLogoList() {
		LogoList lol = new LogoList();
		lol.add("turtle");
		LogoList props = new LogoList();
		props.add(new LogoList("pos", new LogoList(""+pos.x, "" + pos.y)));
		props.add(new LogoList("size", "" + (int)(scale*100.0)));
		props.add(new LogoList("shape", currentName));
		if (suit != null) {
			props.add(new LogoList("suit", suit));
		}
		props.add(new LogoList("heading", "" + headAngle));
		props.add(new LogoList("visible", (visible ? "yes" : "no")));
		props.add(new LogoList("tu", name));
		lol.add(props);
		
		// adding allimages list
		LogoList limg = new LogoList(imageNames);
		props.add(new LogoList("allimages", limg));
		Log.d(TAG, "toLogoList, tuname, img sz = " + name + " " + limg.list.size());
		
		return lol;
	}

	public final List<String> getImageNames() {
		return imageNames;
	}

	public final boolean isVisible() {
		return visible;
	}

	public final Point getPos() {
		return pos;
	}

	public final String getName() {
		return name;
	}

	public final double getScale() {
		return scale;
	}

	public final double getHeadAngle() {
		return headAngle;
	}

	public final String getCurrentName() {
		return currentName;
	}

	public String getSuit() {
		return suit;
	}

	public void setSuit(String suit) {
		this.suit = suit;
	}
	
	

}
