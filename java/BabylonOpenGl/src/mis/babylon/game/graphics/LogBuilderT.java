package mis.babylon.game.graphics;

import java.util.ArrayList;
import java.util.List;

import mis.babylon.game.LogFigure;

public class LogBuilderT {
    private MisLogT log;
    
    List<Point> pnts = null;
    List<Point2> texPnts = null;
    List<Triangle> tris = null;
    
    private float w = 0;
    private float h = 0;
    private float step = 0;

    public LogBuilderT(MisLogT ml) {
        this.log = ml;
        this.pnts = ml.pnts;
        pnts.clear();
        this.texPnts = ml.texPoints;
        texPnts.clear();
        this.tris = ml.tris;
        tris.clear();
    }

    private int RGB(int r, int g, int b) {
        int rgb = (r << 16) + (g << 8) + b;
        return rgb;
    }

    private void addPoint(Point p) {
        pnts.add(p);
    }

    private void addPointT(Point2 texP) {
        texPnts.add(texP);
    }

    private void addTriangl(int a, int b, int c) {
        Triangle t = new Triangle(a, b, c);
        tris.add(t);
    }

    // / adding 8 points to points array
    private int addBaseEight(float x) {
        int ret = pnts.size();
        addPoint(new Point(x, 3 * w / 4, 0));
        addPoint(new Point(x, w, h / 4));
        addPoint(new Point(x, w, 3 * h / 4));
        addPoint(new Point(x, 3 * w / 4, h));
        addPoint(new Point(x, w / 4, h));
        addPoint(new Point(x, 0, 3 * h / 4));
        addPoint(new Point(x, 0, h / 4));
        addPoint(new Point(x, w / 4, 0));
        addPoint(new Point(x, 3 * w / 4, 0));
        return ret;
    }

    // / adding 8 points to points array
    private int addTexCut() {
        int ret = texPnts.size();
        float ww = 0.5f;
        float hh = 0.5f;
        float Y0 = 0.5f;
        float X1 = 1.0f;
        addPointT(new Point2(X1 - 3*ww/4, Y0+    0));
        addPointT(new Point2(X1 -      ww,Y0+    hh/4));
        addPointT(new Point2(X1 -      ww,Y0+  3*hh/4));
        addPointT(new Point2(X1 -  3*ww/4,Y0+      hh));
        addPointT(new Point2(X1 -    ww/4,Y0+      hh));
        addPointT(new Point2(X1 -       0,Y0+  3*hh/4));
        addPointT(new Point2(X1 -       0,Y0+    hh/4));
        addPointT(new Point2(X1 -    ww/4,Y0+      0));
        addPointT(new Point2(X1 - 3*ww/4, Y0+     0));
        return ret;
    }

    /**
     * adding 9 + 9 points to texture points array
     * 
     * @return - index of first element of added points
     */
    private int addTexSide(float x0, float x1) {
        int ret = texPnts.size();
        float X0 = 0;
        float X1 = Math.min(0.5f, 0.5f * ((x1-x0) / (5*w)));
        float Y0 = 0.5f - 1/32f;
        float DY = 0.5f / 8;
        for (int i = 0; i<=8; i++) {
            addPointT(new Point2(X0, Y0 - i*DY));
        }
        for (int i = 0; i<=8; i++) {
            addPointT(new Point2(X1, Y0 - i*DY));
        }
        return ret;
    }

    // / covering left side of log with triangles, Clock wise
    private void addLeftSide(float x0) {
        int ia = addBaseEight(x0);
        int ita = addTexCut();
        addTriangl(ia, ia + 1, ia + 2);
        addTriangl(ia, ia + 2, ia + 4);
        addTriangl(ia + 2, ia + 3, ia + 4);
        addTriangl(ia, ia + 4, ia + 6);
        addTriangl(ia + 4, ia + 5, ia + 6);
        addTriangl(ia, ia + 6, ia + 7);
    }

    // / covering left side of log with triangles, Clock wise
    private void addRightSide(float x) {
        int ia = addBaseEight(x);
        int ita = addTexCut();
        if (ia != ita) {
            throw new IllegalStateException("addRightSide, ia != ita, ia, ita = " + ia + " " + ita);
        }
        addTriangl(ia + 2, ia + 1, ia);
        addTriangl(ia + 4, ia + 2, ia);
        addTriangl(ia + 4, ia + 3, ia + 2);
        addTriangl(ia + 6, ia + 4, ia);
        addTriangl(ia + 6, ia + 5, ia + 4);
        addTriangl(ia + 7, ia + 6, ia);
    }

    // / covering left side of log with triangles, Clock wise
    private void addRegularPiece(float x0, float x1) {
        int ia = addBaseEight(x0);
        int ib = addBaseEight(x1);
        int ita = addTexSide(x0, x1);
        if (ia != ita) {
            throw new IllegalStateException("addRegularPiece, ia != ita, ia, ita = " + ia + " " + ita);
        }
        for (int k = 0; k < 8; k++) {
            int nk = (k + 1) % 8;
            addTriangl(ia + nk, ia + k, ib + k);
            addTriangl(ib + nk, ia + nk, ib + k);
        }
    }

    private void addPlane(int ia, int ib, int k, int d) {
        int kd = (k + d) % 8;
        addTriangl(ia + kd, ia + k, ib + k);
        addTriangl(ib + kd, ia + kd, ib + k);
    }

    // / covering left side of log with triangles, Clock wise
    private void addNotch(float x0, float x1) {
        // we make shortcut
        addRightSide(x0);
        addLeftSide(x1);
        
        // add points
        int ia = pnts.size();
        addPoint(new Point(x0, w, h / 4));
        addPoint(new Point(x0, w, 3 * h / 4));
        addPoint(new Point(x0, w, 3 * h / 4));
        addPoint(new Point(x0, 0, 3 * h / 4));
        addPoint(new Point(x0, 0, 3 * h / 4));
        addPoint(new Point(x0, 0, h / 4));
        addPoint(new Point(x0, 0, h / 4));
        addPoint(new Point(x0, w, h / 4));
        int ib = pnts.size();
        addPoint(new Point(x1, w, h / 4));
        addPoint(new Point(x1, w, 3 * h / 4));
        addPoint(new Point(x1, w, 3 * h / 4));
        addPoint(new Point(x1, 0, 3 * h / 4));
        addPoint(new Point(x1, 0, 3 * h / 4));
        addPoint(new Point(x1, 0, h / 4));
        addPoint(new Point(x1, 0, h / 4));
        addPoint(new Point(x1, w, h / 4));
        
        // add texture points
        float X0 = 0;
        float X1 = 0.5f;
        float Y0 = 0.125f;
        float DY = 0.125f;
        addPointT(new Point2(X0, 3/32f));
        addPointT(new Point2(X0, 5/32f));
        addPointT(new Point2(X0, 0.5f));
        addPointT(new Point2(X0, 0.75f));
        addPointT(new Point2(X0, 11/32f));
        addPointT(new Point2(X0, 13/32f));
        addPointT(new Point2(X0, 0.75f));
        addPointT(new Point2(X0, 1.00f));
        // adding right side
        addPointT(new Point2(X1, 1/16f));
        addPointT(new Point2(X1, 3/16f));
        addPointT(new Point2(X1, 0.5f));
        addPointT(new Point2(X1, 0.75f));
        addPointT(new Point2(X1, 5/16f));
        addPointT(new Point2(X1, 7/16f));
        addPointT(new Point2(X1, 0.75f));
        addPointT(new Point2(X1, 1.00f));
        
        // adding triangles
        for (int i=0; i<4; i++) {
            addPlane(ia, ib, 2*i, 1);
        }        
    }

    public void buildLog() {
        LogFigure lf = ((LogFigure)(log.fig));
        step = lf.step;
        w = (int)log.getSize().y;
        h = (int)log.getSize().z;
        String sconf = lf.sconf;
        // draw start part
        float x0 = 0;
        float x1 = x0 + w / 2;
        float x2 = x1, x3 = 0;

        // convert sconf to list of integers
        List<Integer> conf = new ArrayList<Integer>();
        for (int i=0; i<sconf.length(); i++) {
            String s = sconf.charAt(i) + "";
            int ii = Integer.parseInt(s);
            conf.add(ii);
        }
        if (!sconf.equals("0")) {
            conf.add(0);
        }

        // adding left side
        
        addLeftSide(x0);
        addRegularPiece(x0, x1);
        for (int iln : conf) {
            float ln = (iln == 0 ? w + w / 2 : iln * step);
            x0 = x2;
            x1 = x0 + w;
            x2 = x0 + ln;
            addNotch(x0, x1);
            addRegularPiece(x1, x2);
        }
        addRightSide(x2);
        log.getSize().x = x2;

        // write some properties
        int nc = conf.size() - 1;
        lf.conf.clear();
        lf.conf.addAll(conf);
        
        lf.initSuppPoints();
    }
}
