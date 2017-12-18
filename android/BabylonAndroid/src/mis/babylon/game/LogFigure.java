package mis.babylon.game;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import mis.babylon.game.graphics.MisLogT;
import mis.babylon.game.graphics.Point;

/**
 * brick to build houses
 * 
 * @author Misha
 *
 */
public class LogFigure extends MovableFigure {

    public static final int DEFAULT_LOG_STEP = 20;
    public String sconf = "";
    public float step = DEFAULT_LOG_STEP;
    public List<Integer> conf = new ArrayList<Integer>();
    public static final String TAG = "LogFigure";
    
    /**
     * initialize support point
     */
    public void init(World w) {
        step = w.getStep();
        initSuppPoints();
        super.init(w);
    }
    
    public void initSuppPoints() {
        float w = getDraw().getSize().y;
        float h = getDraw().getSize().z;
        float x0 = w;
        float y = w/2;
        float zT = (h*3)/4;
        float zB = h/4;
        int np = conf.size();
        supTop.clear();
        supBottom.clear();
        int ip0 = 0;
        int ip1 = 0;
        Set<Integer> sip = new HashSet<Integer>();
        sip.add(0);
        for (int i=0; i<np; i++) {
            Point pt = new Point();
            Point pb = new Point();
            pt.x = pb.x = x0;
            pt.y = pb.y = y;
            pt.z = zT;
            pb.z = zB;
            supTop.add(pt);
            supBottom.add(pb);
            if (i < np-1) {
                x0 += step*conf.get(i);
                ip1 += conf.get(i);
                sip.add(ip1);
            }
        }
        // adding bad top support points
        for (int i=ip0; i<=ip1; i++) {
            if (!sip.contains(i)) {
                Point pt = new Point();
                pt.x = w + i*step;
                pt.y = y;
                pt.z = zT - 0.5f;
                supTop.add(pt);
                Point pb = new Point();
                pb.x = w + i*step;
                pb.y = y;
                pb.z = zB + 0.5f;  // only to check for bad support points
                supBottom.add(pb);
            }
        }
        
        MisLogT ml = (MisLogT)this.getDraw();
        // Log.d(TAG, "log figure");
        // ml.printState();
    }
    
    @Override
    public boolean isAceptableSupport(Cell c) {
        return (c.cellType & 16) == 0;
    }
}
