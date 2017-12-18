package mis.babylon.game.graphics;

import mis.android.utils.MisContext;
import mis.babylon.game.MisFigure;

/**
 * drawing background image. can be xy, xz or yz orientaion
 */
public class TexBack extends TexFigure {
    
    private Point []basePoints = new Point[4];
    
    /**
     * for now all sides are the same
     */
    private Point2 []baseTex = new Point2[4];
    
    public TexBack(MisFigure mf) {
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
    
    /**
     * adding triangles adc, acb
     * 
     * @param a left bottom point
     * @param b 
     * @param c
     * @param d
     */
    private void addSide(int a, int b, int c, int d) {
        int np = pnts.size();
        addPoint(a, 0);
        addPoint(d, 3);
        addPoint(c, 2);
        tris.add(new Triangle(np+0, np+1, np+2));
        addPoint(a, 0);
        addPoint(c, 2);
        addPoint(b, 1);        
        tris.add(new Triangle(np+3, np+4, np+5));
    }
    
    /**
     * generate point and colors and triangle
     */
    public void fillData(MisContext context) {
        // fill some fixed values
        super.fillData(context);
        float szx = sz.x;
        float szy = sz.y;
        float szz = sz.z;
        // fixed 1
        //int one = 0x10000;
        float one = 1.0f;
        
        Point pos = fig.getPos();
        // filling basePoints
        if (sz.z < 1) {
            // ground image
            basePoints[0] = new Point(  0,   0, 0);
            basePoints[1] = new Point(szx,   0, 0);
            basePoints[2] = new Point(szx, szy, 0);
            basePoints[3] = new Point(  0, szy, 0);
        } else if (sz.y < 1){
            // far plane or behind back plane
            if (pos.y > 0) {
                // far plane
                basePoints[0] = new Point(0, 0, 0);
                basePoints[1] = new Point(szx, 0, 0);
                basePoints[2] = new Point(szx, 0, szz);
                basePoints[3] = new Point(0, 0, szz);  
            } else {
                // behind back
                basePoints[0] = new Point(0, 0, 0);
                basePoints[1] = new Point(-szx, 0, 0);
                basePoints[2] = new Point(-szx, 0, szz);
                basePoints[3] = new Point(0, 0, szz);  
            }
        } else if (sz.x < 1){
            // left, right planes
            if (pos.x > 0) {
                // right plane
                basePoints[0] = new Point(0, 0, 0);
                basePoints[1] = new Point(0, -szy, 0);
                basePoints[2] = new Point(0, -szy, szz);
                basePoints[3] = new Point(0, 0, szz);  
            } else {
                // left plane
                basePoints[0] = new Point(0, 0, 0);
                basePoints[1] = new Point(0, szy, 0);
                basePoints[2] = new Point(0, szy, szz);
                basePoints[3] = new Point(0, 0, szz);  
            }
        }


        // fill texture
        baseTex[0] = new Point2(  0, one);
        baseTex[1] = new Point2(one, one);
        baseTex[2] = new Point2(one, 0);
        baseTex[3] = new Point2(  0, 0);
        
        // filling pnts, texPoints
        addSide(0,1,2,3);
    }

}
