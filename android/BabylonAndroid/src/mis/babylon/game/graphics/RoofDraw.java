package mis.babylon.game.graphics;

import java.util.ArrayList;
import java.util.List;

import mis.android.utils.MisContext;
import mis.babylon.game.MisFigure;

public class RoofDraw extends TexFigure {
    class Pair {
        int pIdx;
        int tIdx;
        
        Pair(int ip, int it) {
            pIdx = ip;
            tIdx = it;
        }
        
        @Override
        public boolean equals(Object obj) {
            if (!(obj instanceof Pair)) {
                return false;
            }
            Pair b = (Pair)obj;
            return (pIdx == b.pIdx) && (tIdx == b.tIdx);
        }

        @Override
        public int hashCode() {
            return pIdx ^ (tIdx << 8);
        }
    }
    private Point []basePoints = new Point[6];
    private Point2 []baseTex = new Point2[8];
    
    List<Pair> pairs = new ArrayList<Pair>();
    
    public RoofDraw(MisFigure mf) {
        super(mf);
    }
    
    private void addPoint(int i, int it) {
        // add to points
        Point p = new Point(0,0,0);
        p.set(basePoints[i]);
        pnts.add(p);
        // add to texture points
        Point2 p2 = new Point2(0,0);
        p2.set(baseTex[it]);
        texPoints.add(p2);        
    }
    
    private int addPair(int ip, int it) {
        Pair p = new Pair(ip, it);
        int idx = pairs.indexOf(p);
        if (idx == -1) {
            pairs.add(p);
            pnts.add(basePoints[ip]);
            this.texPoints.add(baseTex[it]);
            idx = pairs.indexOf(p);
        }
        return idx;        
    }
    
    private void addTriangle(int pa, int pb, int pc, int ta, int tb, int tc) {
        int ia = addPair(pa, ta);
        int ib = addPair(pb, tb);
        int ic = addPair(pc, tc);
        tris.add(new Triangle(ia, ib, ic));
    }
    
    /**
     * generate point and colors and triangle
     */
    public void fillData(MisContext context) {
        // fill some fixed values
        super.fillData(context);
        // fixed 1, 1/2
        float one = 1.0f;
        float half = 0.5f;
        
        // filling basePoints
        basePoints[0] = new Point(0, 0, 0);
        basePoints[1] = new Point(sz.x, 0, 0);
        basePoints[2] = new Point(0, sz.y/2, sz.z);
        basePoints[3] = new Point(sz.x, sz.y/2, sz.z);
        basePoints[4] = new Point(0, sz.y, 0);
        basePoints[5] = new Point(sz.x, sz.y, 0);

        // fill texture
        baseTex[0] = new Point2(  0,   0);
        baseTex[1] = new Point2(half,  0);
        baseTex[2] = new Point2( one,  0);
        baseTex[3] = new Point2(   0, half);
        baseTex[4] = new Point2(half, half);
        baseTex[5] = new Point2( one, half);
        baseTex[6] = new Point2(0,   one);
        baseTex[7] = new Point2(one, one);
        
        // filling pnts, texPoints
        pnts.clear();
        texPoints.clear();
        pairs.clear();
        addTriangle(0, 2, 3, 3, 0, 1);
        addTriangle(0, 3, 1, 3, 1, 4);
        addTriangle(2, 4, 5, 4, 1, 2);
        addTriangle(2, 5, 3, 4, 2, 5);
        addTriangle(0, 4, 2, 7, 6, 4);
        addTriangle(5, 1, 3, 7, 6, 4);
    }

}
