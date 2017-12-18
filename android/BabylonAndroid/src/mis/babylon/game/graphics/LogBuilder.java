package mis.babylon.game.graphics;

import java.util.ArrayList;
import java.util.List;

import mis.babylon.game.LogFigure;

public class LogBuilder {
    private MisLog log;
    List<Point> pnts = new ArrayList<Point>();
    List<Triangle> tris = new ArrayList<Triangle>();
    List<Integer> pntCols = new ArrayList<Integer>();
    private int w = 30;
    private int h = 30;
    private int step = 60;

    public LogBuilder(MisLog ml) {
        this.log = ml;
    }

    private int RGB(int r, int g, int b) {
        int rgb = (r << 16) + (g << 8) + b;
        return rgb;
    }

    private void addPoint(Point p, int col) {
        pnts.add(p);
        pntCols.add(col);
    }

    private void addTriangl(int a, int b, int c) {
        Triangle t = new Triangle(a, b, c);
        tris.add(t);
    }

    // / adding 8 points to points array
    private int addEight(float x) {
        int ret = pnts.size();
        addPoint(new Point(x, 3 * w / 4, 0), RGB(130, 38, 19));
        addPoint(new Point(x, w, h / 4), RGB(178, 52, 1));
        addPoint(new Point(x, w, 3 * h / 4), RGB(155, 67, 9));
        addPoint(new Point(x, 3 * w / 4, h), RGB(178, 92, 1));
        addPoint(new Point(x, w / 4, h), RGB(168, 102, 1));
        addPoint(new Point(x, 0, 3 * h / 4), RGB(155, 67, 9));
        addPoint(new Point(x, 0, h / 4), RGB(178, 52, 1));
        addPoint(new Point(x, w / 4, 0), RGB(130, 38, 19));
        return ret;
    }

    // / covering left side of log with triangles, Clock wise
    private void addLeftSide(int ia) {
        addTriangl(ia, ia + 1, ia + 2);
        addTriangl(ia, ia + 2, ia + 4);
        addTriangl(ia + 2, ia + 3, ia + 4);
        addTriangl(ia, ia + 4, ia + 6);
        addTriangl(ia + 4, ia + 5, ia + 6);
        addTriangl(ia, ia + 6, ia + 7);
    }

    // / covering left side of log with triangles, Clock wise
    private void addRightSide(int ia) {
        addTriangl(ia + 2, ia + 1, ia);
        addTriangl(ia + 4, ia + 2, ia);
        addTriangl(ia + 4, ia + 3, ia + 2);
        addTriangl(ia + 6, ia + 4, ia);
        addTriangl(ia + 6, ia + 5, ia + 4);
        addTriangl(ia + 7, ia + 6, ia);
    }

    // / covering left side of log with triangles, Clock wise
    private void addRegularPiece(int ia, int ib) {
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
    private void addNotch(int ia, int ib) {
        // we make shortcut
        addRightSide(ia);
        addLeftSide(ib);
        addPlane(ia, ib, 1, 1);
        addPlane(ia, ib, 2, 3);
        addPlane(ia, ib, 5, 1);
        addPlane(ia, ib, 6, 3);
    }

    public void buildLog() {
        LogFigure lf = ((LogFigure)(log.fig));
        step = (int)lf.step;
        w = (int)log.getSize().y;
        h = (int)log.getSize().z;
        String sconf = lf.sconf;
        // draw start part
        float x0 = 0;
        float x1 = x0 + w / 2;
        float x2 = x1, x3 = 0;
        int i0 = addEight(x0);
        int i1 = addEight(x1);
        int i2 = i1;
        float ln = 0;        
        
        addLeftSide(i0);
        addRegularPiece(i0, i1);
        // convert sconf to list of integers
        List<Integer> conf = new ArrayList<Integer>();
        for (int i=0; i<sconf.length(); i++) {
            String s = sconf.charAt(i) + "";
            int ii = Integer.parseInt(s);
            conf.add(ii);
        }
        conf.add(0);
        for (int iln : conf) {
            ln = (iln == 0 ? w + w / 2 : iln * step);
            x0 = x2;
            x1 = x0 + w;
            x2 = x0 + ln;
            i0 = i2;
            i1 = addEight(x1);
            i2 = addEight(x2);
            addNotch(i0, i1);
            addRegularPiece(i1, i2);
        }
        addRightSide(i2);
        log.getSize().x = x2;
        
        // copy to log
        log.pnts.clear();
        log.pnts.addAll(pnts);
        log.tris.clear();
        log.tris.addAll(tris);
        int np = pntCols.size();
        log.cols.clear();
        log.cols.addAll(pntCols);

        // write some properties
        int nc = conf.size() - 1;
        lf.conf.clear();
        lf.conf.addAll(conf);
        
        lf.initSuppPoints();
    }
}
