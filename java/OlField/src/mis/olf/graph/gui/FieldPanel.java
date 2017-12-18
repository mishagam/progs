package mis.olf.graph.gui;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Rectangle;

import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JScrollPane;

import mis.olf.data.CommonValues;
import mis.olf.data.FieldModel;

public class FieldPanel extends JComponent {

    static final long serialVersionUID = 9876543002L;

    static final int NONE = 0;
    static final int MIN = 2;
    static final int MAX = 3;
    static final int MODE_VECTOR = 10;
    static final int MODE_PATH = 12;
    static final int PRO_XY = 14;
    static final int PRO_XZ = 16;
    static final int PRO_YZ = 18;

    Dimension preferredSize = new Dimension(600, 600);
    public static final Color[] drawColors = new Color[] { Color.BLUE,
            Color.GREEN, Color.BLACK, Color.RED, new Color(120, 120, 8),
            Color.GREEN, Color.CYAN, new Color(140, 100, 8),
            new Color(33, 33, 160), Color.MAGENTA, Color.DARK_GRAY, Color.PINK,
            new Color(41, 160, 120), new Color(44, 210, 11),
            new Color(170, 11, 230), new Color(33, 200, 113),
            new Color(55, 200, 11), new Color(250, 12, 100),
            new Color(190, 90, 11), new Color(110, 220, 11),
            new Color(190, 60, 11) };
    Color peaksColor = new Color((float) 0.2, (float) 0.8, (float) 0.9);
    Color redThresholdColor = new Color(250, 150, 150);
    Color linesColor = new Color(110, 110, 110);
    private double scaleMul = 1;
    double scale;
    int sx;
    int sy;
    int y00, x00;
    int mx, my;
    int maxh;
    static final int EPS = 3;
    public int lastVar = 0;
    CommonValues comv = CommonValues.getInstance();
    JScrollPane scroller = null;
    final FieldModel cmod;
    int projMode = PRO_XY;
    int drawMode = MODE_VECTOR;
    boolean bDrawScales = true;

    public FieldPanel(FieldModel cmod, JFrame frame) {
        this.cmod = cmod;
        scale = 100;
        this.setSize(preferredSize);
        this.setSizes();
        this.y00 = sy - 40;
    }

    void doubleScale() {
        scaleMul *= 1.4;
        resize();
        int x = scroller.getViewport().getViewPosition().x;
        Rectangle r = new Rectangle(x, preferredSize.height - 100, x + 100,
                preferredSize.height);
        scrollRectToVisible(r);
    }

    void resetScales() {
        scaleMul = 1;
        resize();
    }

    void resize() {
        preferredSize.width = (int)(this.getParent().getSize().width * scaleMul) - 70;
        preferredSize.height = (int)(this.getParent().getSize().height * scaleMul) - 20;
        this.setPreferredSize(preferredSize);
        this.revalidate();
        repaint();
    }

    public Dimension getMinimumSize() {
        return preferredSize;
    }

    public Dimension getPreferredSize() {
        return preferredSize;
    }

    void setSizes() {
        Dimension dim = this.getSize();
        sy = dim.height;
        sx = dim.width;
        y00 = sy / 2;
        x00 = sx / 2;
        mx = 4;
        my = 4;
    }

    Color getColor(int ix, int iy, int iz) {
        int rd = 150 + 2*ix;
        int gr = 150 + 2*iy;
        int bl = 150 + 2*iz;
        Color col = new Color(rd, gr, bl);
        return col;
    }

    void drawScales(Graphics g) {
        int y0 = 0;
        int y1 = sy;
        for (int ix = -mx * 5; ix <= mx * 5; ix++) {
            int x = (int) (x00 + (ix * scale * scaleMul) / 5);
            Color col = (ix % 5 == 0 ? Color.DARK_GRAY : Color.LIGHT_GRAY);
            if (ix == 0) {
            	col = Color.BLACK;
            }
            g.setColor(col);
            g.drawLine(x, y0, x, y1);
        }
        int x0 = 0;
        int x1 = sx;
        for (int iy = -my * 5; iy <= my * 5; iy++) {
            int y = (int) (x00 + (iy * scale * scaleMul) / 5);
            Color col = (iy % 5 == 0 ? Color.DARK_GRAY : Color.LIGHT_GRAY);
            if (iy == 0) {
            	col = Color.BLACK;
            }
            g.setColor(col);
            g.drawLine(x0, y, x1, y);
        }
    }

    void drawVector(Graphics g) {
        double[] xy = new double[2];
        double[] xy2 = new double[2];
        double[] xyz = new double[3];
        double[] xyz1 = new double[3];
        double[] xyz2 = new double[3];
        int mz = 4;
        for (int ix = -mx * 5; ix <= mx * 5; ix++) {
            for (int iy = -my * 5; iy <= my * 5; iy++) {
                for (int iz = -mz * 5; iz <= mz * 5; iz++) {
                    xyz[0] = (ix * 1.0) / 5;
                    xyz[1] = (iy * 1.0) / 5;
                    xyz[2] = (iz * 1.0) / 5;
                    project(xyz, xy);
                    int x = xToScreen(xy[0]);
                    int y = yToScreen(xy[1]);;
                    cmod.apply(xyz, xyz1);
                    partLine(xyz, xyz1, xyz2, 0.08);
                    project(xyz2, xy2);
                    int x1 = xToScreen(xy2[0]);
                    int y1 = yToScreen(xy2[1]);;
                    Color col = getColor(ix, iy, iz);
                    g.setColor(col);
                    g.drawLine(x, y, x1, y1);                    
                }
            }
        }
    }
    
    int xToScreen(double xf) {
    	int x = (int) (x00 + xf  * scale * scaleMul);
    	return x;
    }
    
    int yToScreen(double yf) {
    	int y = (int) (x00 + yf  * scale * scaleMul);
    	return y;
    }
    
    void drawOnePath(Graphics g, double []xyz, Color col) {
        double[] xy = new double[2];
        double[] xy2 = new double[2];
        double[] xyz1 = new double[3];
        double[] xyz2 = new double[3];
    	for (int i=0; i<200; i++) {
            project(xyz, xy);
            int x = xToScreen(xy[0]);
            int y = yToScreen(xy[1]);;
            cmod.apply(xyz, xyz1);
            partLine(xyz, xyz1, xyz2, 0.02);
            project(xyz2, xy2);
            int x1 = xToScreen(xy2[0]);
            int y1 = yToScreen(xy2[1]);
            g.setColor(col);
            g.drawLine(x, y, x1, y1);    
            for (int k=0; k<3; k++) {
            	xyz[k] = xyz2[k];
            }
    	}
    }

    void drawPath(Graphics g) {
    	double[] xyz = new double[3];
    	int mz = 4;
        for (int ix = -mx * 2; ix <= mx * 2; ix++) {
            for (int iy = -my * 2; iy <= my * 2; iy++) {
                for (int iz = -mz * 2; iz <= mz * 2; iz++) {
                    xyz[0] = (ix * 1.0) / 2;
                    xyz[1] = (iy * 1.0) / 2;
                    xyz[2] = (iz * 1.0) / 2;
                    Color col = getColor(ix*3, iy*3, iz*3);
                    drawOnePath(g, xyz, col);
                }
            }
        }
    }

    void project(double[] xyz, double[] xy) {
        switch (projMode) {
        case PRO_XY:
            xy[0] = xyz[0];
            xy[1] = xyz[1];
            break;
        case PRO_XZ:
            xy[0] = xyz[0];
            xy[1] = xyz[2];
            break;
        case PRO_YZ:
            xy[0] = xyz[1];
            xy[1] = xyz[2];
            break;
        }
    }

    void partLine(double[] xyz, double[] xyz1, double []xyzo, double part) {
        for (int i=0; i<3; i++) {
            double a = xyz[i];
            double b = xyz1[i];
            double o = a + part*(b-a);
            xyzo[i] = o;       
        }
     }

    protected void paintComponent(Graphics g) {
        setSizes();
        // g.setPaintMode();
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, sx, sy);
        if (bDrawScales) {
        	drawScales(g);
        }
        if (drawMode == MODE_VECTOR) {
            drawVector(g);
        } else {
            drawPath(g);
        }
        g.dispose();
    }

    public void setScroller(JScrollPane scroller) {
        this.scroller = scroller;
    }
}
