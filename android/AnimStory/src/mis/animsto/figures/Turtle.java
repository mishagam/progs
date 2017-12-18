package mis.animsto.figures;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Point;
import android.graphics.Rect;
import android.util.Log;

public class Turtle {

	private final String TAG = this.getClass().getSimpleName();
	
	List<FigImage> images = new ArrayList<FigImage>();
	int currentIdx = 0;
	/** flags of used images in images */
	List<Boolean> usedImages = new ArrayList<Boolean>();   
	FigImage suit = null;
	boolean visible = true;
	Point pos = new Point();
	final String name;
	double scale = 1;
	double headAngle = 0;
	final private Context context;
	Map<String, FigImage> imgCache = new HashMap<String, FigImage>();
	
	public Turtle(String tuName, String imageName, Context ca) {
		this(tuName, ca);
		FigImage fi = new FigImage(imageName, ca);
		addImage(fi);
	}
	
	public Turtle(String tuName, Context ca) {
		this.name = tuName;
		this.context = ca;
	}
	
	public Turtle(FigureState fs, Context ca) {
		this(fs.getName(), ca);
		setFigureState(fs);
	}
	
	public void setFigureState(FigureState fs) {
		Log.d(TAG, "setFigureState() called for " + name);
		if (!name.equals(fs.getName())) {
			throw new IllegalStateException("Turtle name!=fs.name "
					+ name + " " + fs.getName());
		}
		this.headAngle = fs.getHeadAngle();
		this.pos = new Point(fs.getPos());
		this.scale = fs.getScale();
		this.visible = fs.isVisible();
		addImages(fs.getImageNames());
		setCurrentImageName(fs.getCurrentName());
	}
	
	public double midVal(double a, double b, double p) {
		return a*(1-p) + b*p;
	}
	
	public void setMovingState(FigureState fs0, FigureState fs1, double pos) {
		// Log.d(TAG, "setMovingState() called for " + name);
		if (fs0==null || fs1==null) {
			this.setVisible(false);
			Log.e(TAG, "setMovingState(), states null, name: " + name);
			return;
		}
		this.headAngle = fs0.getHeadAngle();
		Point a = fs0.getPos();
		Point b = fs1.getPos();
		this.pos.x = (int)midVal(a.x, b.x, pos);
		this.pos.y = (int)midVal(a.y, b.y, pos);
		this.scale = midVal(fs0.getScale(), fs1.getScale(), pos);
		this.visible = fs0.isVisible() && fs1.isVisible();
		this.nextImage();		
	}
	
	public int findImage(String imgName) {
		for (int i=0; i<images.size(); i++) {
			FigImage fi = images.get(i);
			if (fi.getName().equals(imgName)) {
				return i;
			}
		}
		return -1;		
	}
	
	public void clearUsedImages() {
		int sz = usedImages.size();  // TODO make usedImages structure more efficient
		usedImages.clear();
		for (int i=0; i<sz; i++) {
			usedImages.add(false);
		}
	}
	
	public void addImages(List<String> iNames) {
		clearUsedImages();
		for (String inm : iNames) {
			int idx = findImage(inm);
			if (idx < 0) {			
				FigImage fi = new FigImage(inm, context);
				idx = images.size();
				this.images.add(fi);
			}
			usedImages.add(idx, true);			
		}
	}
	
	public void addSuit(String sName) {
		FigImage fi = new FigImage(sName, context);
		this.suit = fi;
	}
	
	public String getCurrentImageName() {
		FigImage fi = images.get(currentIdx);
		return fi.name;
	}	
	
	public void setCurrentImageName(String iName) {
		for (int i = 0; i<images.size(); i++) {
			if (iName.equals(images.get(i))) {
				currentIdx = i;
				break;
			}
		}
	}	
	
	public void addImage(FigImage image) {
		if (findImage(image.getName()) < 0) {
			images.add(image);
			usedImages.add(true);
		}		
	}
	
	public FigImage currentImage() {
		return images.get(currentIdx);
	}
	
	public FigImage nextImage() {
		int ni = usedImages.size();
		while (true) {
			currentIdx = (currentIdx+1)%ni;
			if (usedImages.get(currentIdx)) {
				break;
			}
		}
		// Log.d(TAG, "selected next image " + currentIdx);
		return currentImage();
	}
	
	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
	}

	public Point getPos() {
		return pos;
	}

	public void setPos(Point pos) {
		this.pos = pos;
	}

	public void setPos(int x, int y) {
		if (pos == null) {
			pos = new Point();
		}
		pos.set(x, y);
		// Log.d(TAG, "Set figure position to " + pos.x + " " + pos.y);
	}
	
	public Rect getRect() {
		return currentImage().getRect();
	}
	
	public void drawFigure(Canvas c, Paint p) {
		currentImage().drawImage(c, p, pos.x, pos.y, scale);
		if (suit != null) {
			suit.drawImage(c, p, pos.x, pos.y, scale);
		}
		// Log.d(TAG, "drawFigure(), pos xy = " + pos.x + " " + pos.y);
	}

	public double getScale() {
		return scale;
	}

	public void setScale(double scale) {
		Log.d(TAG, "Set figure scale to " + scale);
		this.scale = scale;
	}
	
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("turtle: " + name);
		// XXX - may be add something more
		return "" + sb;
	}
	
	public String getName() {
		return name;
	}

	public FigImage getSuit() {
		return suit;
	}

	public void setSuit(FigImage suit) {
		this.suit = suit;
	}

	public void setSuit(String sName) {
		this.addSuit(sName);
	}
	
}
