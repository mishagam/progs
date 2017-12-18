package atta.graph.gui;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Point;
import java.awt.Polygon;
import java.awt.Rectangle;
import java.awt.Stroke;

import javax.swing.JComponent;

import atta.graph.data.FsaData;
import atta.graph.data.MyUtils;
import atta.graph.data.Peak;

public class RadarPanel extends JComponent {
	
	static final long serialVersionUID = 9876543016L;	

    /**
     * FsaData instance containing data for currnet FSA file
     */
    FsaData fdata = null;
    Dimension preferredSize = new Dimension(500, 500);
    boolean usePE = true;
    boolean logScale = true;
    
    public RadarPanel(FsaData fda) {
    	fdata = fda;
    }

    public Dimension getMinimumSize() {
        return preferredSize;
    }

    public Dimension getPreferredSize() {
        return preferredSize;
    }

	@Override
	protected void paintComponent(Graphics gg) {
		Graphics2D g = (Graphics2D)gg;
		super.paintComponent(g);
	   	Font plain = new Font("Serif", Font.PLAIN, 12);
	    Rectangle rect = this.getBounds();
	    int y0 = (rect.height * 5) / 10;
	    int x0 = rect.width / 2;
	    x0 = (x0+y0)/2;
	    // reading needed data from peaks
	    int n = fdata.peaks.size();
	    double []v = new double[n];
	    double maxv = -1000;
	    double minv = 1000;
	    for (int i=0; i<n; i++) {
	        Peak p = fdata.peaks.getPeak(i);
	        double vv = (usePE ? p.powerExpr : p.relHeight);
	        if (logScale) {
	            if (vv < 0.1E-2) {
	                vv = 0.1E-2;
	            } 
	            vv = Math.log10(vv);
	        }

	        v[i] = vv;
	        if (vv > maxv) {
	            maxv = vv;
	        }
	        if (vv < minv) {
	            minv = vv;
	        }
	    }
	    int r = (y0 * 4) / 5;
	    // draw rough circle
	    double aa = (2 * Math.PI) / n;
	    Point []pp = new Point[n];  // outer circle
	    Point []ppv = new Point[n+1];  // Peaks graph
	    // selecting brush for graph background
	    double []showNums = new double[11];
	    double []ret = getScale(minv, maxv, showNums);
	    double origin = ret[0];
	    double scale = ret[1];
	    int nparts = (int)ret[2];
	    
	    // calculating graph points
	    for (int i = 0; i<n; i++) {
	        double a0 = i*aa;
	        Point p = new Point((int)(x0 + r * Math.sin(a0)), 
	        		(int)(y0 - r * Math.cos(a0)));
	        pp[i] = p;         

	        // calculating graph
	        if (v[i] < origin) {
	            v[i] = origin;
	        }
	        double rv = r*scale*(v[i]-origin);
	        Point pv = new Point((int)(x0 + rv * Math.sin(a0)), 
	        		(int)(y0 - rv * Math.cos(a0)));
	        ppv[i] = pv;         
	    }
	    ppv[n] = ppv[0];
	    int []xa = new int[n];
	    int []ya = new int[n];
	    for (int i = 0; i < ya.length; i++) {
			xa[i] = pp[i].x;
			ya[i] = pp[i].y;
		}
	    Polygon pg = new Polygon(xa, ya, n);
	    g.clearRect(rect.x, rect.y, rect.width, rect.height);
	    String sPE = (usePE ? "Using Power Expression" : "Using Relative Height");
	    String sScale = (logScale ? "Log Scale" : "Linear Scale");
	    String ss = sPE + ", " + sScale;
	    g.setFont(plain);
	    g.setColor(Color.BLACK);
	    g.drawString(ss, 10, 15);
	    //g.setColor(Color.RED);
	    Color paleBlue = new Color(0x99, 0xCC, 0xFF);
	    g.setColor(paleBlue);
	    g.fillPolygon(pg);
	    g.setColor(Color.BLACK);
	    g.drawPolygon(pg);
	    // calculating and drawing scales
	    for (int i = 0; i<n; i++) {
	        double a0 = i*aa;
	        double a1 = (i+1)*aa;
	        // Drawing scale
	        double portion = r / nparts;
	        for (int iw = 0; iw < nparts; iw++) {
	            double riw = portion * (iw+1);
	            Point p = new Point((int)(x0 + riw * Math.sin(a0)), 
	            		(int)(y0 - riw * Math.cos(a0)));
	            Point p1 = new Point((int)(x0 + riw * Math.sin(a1)), 
	            		(int)(y0 - riw * Math.cos(a1)));
	            g.drawLine(p.x, p.y, p1.x, p1.y);
	            for (int j = 0; j < 10; j++) {
	                double rst=0.0;   // r of streak
	                double streakLen = 4;
	                if (logScale) {
	                    rst = (riw-portion) + portion * Math.log10((double)(j+1));
	                } else {
	                    rst = (riw-portion) + portion * j / 10.0;
	                }
	                Point pd = new Point((int)(x0 + rst * Math.sin(a0)), 
	                		(int)(y0 - rst * Math.cos(a0)));  
	                Point pv = new Point((int)(streakLen*Math.cos(a0)), 
	                		(int)(streakLen*Math.sin(a0)));
	                g.drawLine(pd.x-pv.x, pd.y-pv.y, pd.x+pv.x, pd.y + pv.y);
	            }
	        }
	    }
	    Font font = new Font("Serif", Font.BOLD, 15);
	    g.setFont(font);
	    for (int iw=0; iw<=nparts; iw++) {
	        double riw = (r*(iw))/nparts;
	        String s = "" + MyUtils.shortNumber(showNums[iw]);     
	        g.drawString(s, x0-20, (int)(y0-riw));
	    }
	    g.drawArc(x0-3, y0-3, 6, 6, 0, 360);
	    
	    // Draw spokes
	    for (int i = 0; i<n; i++) {
	        double a0 = i*aa;
	        Point p = new Point((int)(x0 + r * Math.sin(a0)), 
	        		(int)(y0 - r * Math.cos(a0)));
	        g.drawLine(x0, y0, p.x, p.y);
	    }
	    // Draw Peak Names
	   	g.setFont(plain);
	    double rt = r*1.07;

	    for (int i = 0; i<n; i++) {
	        Peak p = fdata.peaks.getPeak(i);
	        String name = p.name;
	        double a0 = i*aa;
	        //Point txtSz = new Point(8*name.length(), 6);
	        Point pt = new Point((int)(x0 + rt * Math.sin(a0) - 13), 
	        		(int)(y0 - rt * Math.cos(a0)) + 5);
	        g.drawString(name, pt.x, pt.y);
	    }
	    for (int i = 0; i < ya.length; i++) {
			xa[i] = ppv[i].x;
			ya[i] = ppv[i].y;
		}
	    pg = new Polygon(xa, ya, n);
	    g.setColor(Color.RED);
	    Stroke stroke = new BasicStroke(3);
	    g.setStroke(stroke);
	    g.drawPolygon(pg);
	}

	/**
	 * 
	 * @param minv
	 * @param maxv
	 * @return double array with origin, scale, nparts, 
	 */
	double [] getScale(double minv, double maxv,double []showNums) {
		double origin = 0;
		double scale = 0;
		double nparts = 0;
	    int i=0;
	    if (logScale) {
	        double sh = 1.0;
	        origin = 1.0;
	        if (maxv <= 1.0) {
	            sh = 1.0/1000.0;
	            origin = -3.0;
	        } else if (maxv <= 2.0) {
	            sh = 10.0/1000.0;
	            origin = -2.0;
	        } else if (maxv <= 3.0) {
	            sh = 100.0/1000.0;
	            origin = -1.0;
	        }
	        if (minv < origin + 1.0) {
	            nparts = 4;
	        } else {
	            nparts = 3;
	            origin += 1.0;
	            sh *= 10;
	        } 
	        scale = 1.0 / nparts;
	        for (i=0; i<=nparts; i++) {
	            showNums[i] = sh;
	            sh *= 10.0;
	        }
	    } else {
	        // linear scale
	        double top = 1.0;
	        while (top < maxv) {
	            top *= 10;
	        }
	        if (maxv / top < 0.7) {
	            top /= 10;
	            int ii = 1;
	            while (top*ii < maxv) {
	                ii++;
	            }
	            top = top*ii;
	            nparts = ii;
	            for (i = 0; i<=nparts; i++) {
	                showNums[i] = (top*i)/nparts;
	            }
	        } else {
	            nparts = 2;
	            i=0;
	            showNums[i++] = 0.0;
	            showNums[i++] = top / 2;
	            showNums[i++] = top;
	        }
	        scale = 1.0/top;
	        origin = 0.0;
	    }
	    showNums[i] = -99;
	    double []ret = new double[3];
	    ret[0] = origin;
	    ret[1] = scale;
	    ret[2] = nparts;
	    
	    return ret;
	}
}