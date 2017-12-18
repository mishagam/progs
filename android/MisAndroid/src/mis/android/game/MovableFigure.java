package mis.android.game;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import mis.android.game.sysdep.MisDrawable;
import mis.android.game.sysdep.Point;

public class MovableFigure extends MisFigure {
    /**
     * points that can support other figures
     */
    List<Point> supTop = new ArrayList<Point>();
    /**
     * point on which we can support our figure.
     */
    List<Point> supBottom = new ArrayList<Point>();    
    
    /** 
     * list of figures supportiung this figure
     */
    public Set<MovableFigure> supports = new HashSet<MovableFigure>();
    
    /**
     * list of figures that this figure supports.
     */
    public Set<MovableFigure> children = new HashSet<MovableFigure>();

    public int turnsCount = 0;
    public boolean canGrab = true;
    
    static int lastIdx = 1;
    
    public void turn() {
        getDraw().turn();
        turnsCount = (turnsCount + 1) % 4;
    }
    
    String nextName(String name) {
        String []ss = name.split("_");
        String nn = ss[0] + "_" + (lastIdx++);
        return nn;
    }
    
    /**
     * Initialize figure after image is read.
     * for now we will assume one image
     */
    public void init() {
        if (images.size() > 1) {
            throw new IllegalStateException("Many images not implemented yet");
        }
        MisDrawable md = getDraw();
        List<Point> ap = md.getApnts();
        for (Point p : supTop) {
            ap.add(p);
        }
        for (Point p : supBottom) {
            ap.add(p);
        }
        int tc = turnsCount;
        for (int it=0; it<tc; it++) {
            turn();
        }
        turnsCount = tc;
    }

}
