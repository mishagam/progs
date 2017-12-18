package atta.graph.gui;

import java.awt.Color;
import java.awt.Cursor;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Point;
import java.awt.Rectangle;
import java.awt.Toolkit;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.net.URL;

import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JToolTip;
import javax.swing.Popup;
import javax.swing.PopupFactory;

import atta.graph.data.CommonValues;
import atta.graph.data.FsaData;
import atta.graph.data.Peak;

public class AttaGraphPanel extends JComponent {

	static final long serialVersionUID = 9876543002L;

    static final int NONE = 0;
    static final int THRESHOLD = 1;
    static final int MIN = 2;
    static final int MAX = 3;
    int drag = NONE;
    private final FsaData fdata;
    Dimension preferredSize = new Dimension(600, 400);
    Color[] drawColors = new Color[] { Color.BLUE, Color.GREEN, Color.BLACK,        Color.RED };
    Color peaksColor = new Color((float) 0.2, (float) 0.8, (float) 0.9);
    Color redThresholdColor = new Color(250, 150, 150);
    Color linesColor = new Color(110, 110, 110);
    boolean[] showColors = new boolean[] { true, false, false, true };
    private int scaleMulX = 1;
    private int scaleMulY = 1;
    double scaleX;
    double scaleY;
    int sx;
    int sy;
    int y00;
    int maxh;
    Cursor peakCursor = null;
    Cursor thresholdCursor = null;
    Cursor minMaxCursor = null;
    static final int EPS = 3;
    CommonValues comv = CommonValues.getInstance();
    private Popup toolTipPopup = null;
    JScrollPane scroller = null;    

    public AttaGraphPanel(FsaData fdata, JFrame frame) {
        this.fdata = fdata;
        fdata.setMyFrame(frame);
        countMaxh();
        createCustomCursors();
        addMouseListener(new MouseListener() {
            public void mouseClicked(MouseEvent e) {
                // try draw square
                myMouseClicked(e);
            }

            public void mouseEntered(MouseEvent e) {
                // Do nothing
            }

            public void mouseExited(MouseEvent e) {
                drag = NONE;
            }

            public void mousePressed(MouseEvent e) {
                myMousePressed(e);
            }

            public void mouseReleased(MouseEvent e) {
                myMouseReleased(e);
            }
        });

        this.addMouseMotionListener(new MouseMotionListener() {
            public void mouseDragged(MouseEvent e) {
                myMouseDrag(e);
            }

            public void mouseMoved(MouseEvent e) {
                myMouseMoved(e);
            }

        });
        //this.setBackground(Color.WHITE);
    }

    void createCustomCursors() {
        Toolkit tk = Toolkit.getDefaultToolkit();
        try {
            URL imageURL = this.getClass().getResource(
                    "/images/myicons/PeakCursor.GIF");
            Image img = tk.createImage(imageURL);
            Point p = new Point(7, 0);
            peakCursor = tk.createCustomCursor(img, p, "peak_cursor");
        } catch (Exception e) {
            peakCursor = Cursor.getPredefinedCursor(Cursor.HAND_CURSOR);
        }
        this.thresholdCursor = Cursor
                .getPredefinedCursor(Cursor.N_RESIZE_CURSOR);
        this.minMaxCursor = Cursor.getPredefinedCursor(Cursor.W_RESIZE_CURSOR);
    }

    boolean closeToPeak(int x, int y, Peak p) {
        int px = (int) (p.pos * scaleX);
        int py0 = y00;
        int py1 = (int) (y00 - p.height * scaleY);
        if (Math.abs(x - px) < EPS && py0 >= y && y >= py1) {
            return true;
        }
        return false;
    }

    int nearPeak(int x, int y) {
        for (int i = 0; i < fdata.peaks.size(); i++) {
            if (closeToPeak(x, y, fdata.peaks.getPeak(i))) {
                return i;
            }
        }
        return -1;
    }

    boolean nearThreshold(int y) {
        int ty = (int) (y00 - scaleY * fdata.threshold);
        return (Math.abs(y - ty) < EPS);
    }

    boolean nearX(int x, double mmx) {
        int posx = (int) (scaleX * fdata.sizeToPos(mmx));
        return (Math.abs(x - posx) < EPS);
    }

    void myMouseMoved(MouseEvent e) {
    	Point base = e.getComponent().getLocationOnScreen();
		int xx = e.getX() + base.x;
		int yy = e.getY() + base.y - 20;
		int ip = -1;
		if ((ip = nearPeak(e.getX(), e.getY())) >= 0) {
			this.setCursor(peakCursor);
			Peak p = fdata.peaks.getPeak(ip);
			String msg = "<html>\n Name: " + p.name + "\n Size: " + p.size
					+ "<br>Peak pos:" + p.pos + "\n Height: " + p.height
					+ "\n Area: " + p.area + "</html>";
			xx += 10;
			yy -= 10;
			showPopUp(msg, xx, yy);
		} else if (nearThreshold(e.getY())) {
			setCursor(thresholdCursor);
			String msg = "Threshold = " + fdata.threshold;
			showPopUp(msg, xx, yy);
			return;
		} else if (nearX(e.getX(), fdata.minPeakSize)) {
			setCursor(minMaxCursor);
			String msg = "minPeakSize = " + fdata.minPeakSize;
			showPopUp(msg, xx, yy);
		} else if (nearX(e.getX(), fdata.maxPeakSize)) {
			setCursor(minMaxCursor);
			String msg = "maxPeakSize = " + fdata.maxPeakSize;
			showPopUp(msg, xx, yy);
		} else {
			setCursor(Cursor.getDefaultCursor());
			if (toolTipPopup != null) {
				toolTipPopup.hide();
				toolTipPopup = null;
			}
		}
	}

    void myMouseDrag(MouseEvent e) {
        if (drag != NONE && e != null) {
            setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
        }
        if (toolTipPopup != null) {
        	toolTipPopup.hide();
        	toolTipPopup = null;
        }
    }

    void myMousePressed(MouseEvent e) {
        if (nearThreshold(e.getY())) {
            drag = THRESHOLD;
        } else if (nearX(e.getX(), fdata.minPeakSize)) {
            drag = MIN;
        } else if (nearX(e.getX(), fdata.maxPeakSize)) {
            drag = MAX;
        } else {
            drag = NONE;
        }
    }

    /**
     * Setting final positions of dragged lines
     * @param e
     */
    void myMouseReleased(MouseEvent e) {
        int pos;
        switch (drag) {
        case THRESHOLD:
            fdata.threshold = (int) ((y00 - e.getY()) / scaleY);
            resize();
            break;

        case MIN:
            pos = (int) (e.getX() / scaleX);
            fdata.minPeakSize = fdata.posToSize(pos);
            resize();
            break;

        case MAX:
            pos = (int) (e.getX() / scaleX);
            fdata.maxPeakSize = fdata.posToSize(pos);
            resize();
            break;

        case NONE:
            break;
        }
    }

    void myMouseClicked(MouseEvent e) {
    	// do nothing. show peaks on mouse move
    }
    
    void showPopUp(String msg, int x, int y) {
        if (toolTipPopup != null) {
        	toolTipPopup.hide();
        	toolTipPopup = null;
        }
        JToolTip ttip = this.createToolTip();
        PopupFactory popFact = PopupFactory.getSharedInstance();
        ttip.setTipText(msg);
        toolTipPopup = popFact.getPopup(this, ttip, x, y);
        toolTipPopup.show();
    }

    void doubleScaleY() {
        scaleMulY *= 2;
        resize();        
        int x = scroller.getViewport().getViewPosition().x;
        Rectangle r = new Rectangle(x, preferredSize.height - 100, x + 100, preferredSize.height);
        scrollRectToVisible(r);
    }

    void doubleScaleX() {
        scaleMulX *= 2;
        resize();
    }

    void resetScales() {
        scaleMulX = 1;
        scaleMulY = 1;
        resize();
    }

    void resize() {
        preferredSize.width = (this.getParent().getSize().width * scaleMulX) - 20;
        preferredSize.height = (this.getParent().getSize().height * scaleMulY) - 20;
        this.setPreferredSize(preferredSize);
        this.revalidate();
        fdata.resetColors();
        repaint();
    }

    public Dimension getMinimumSize() {
        return preferredSize;
    }

    public Dimension getPreferredSize() {
        return preferredSize;
    }

    void countMaxh() {
        maxh = -1;
        for (int i = 0; i < fdata.numRows; i++) {
            if (maxh < fdata.data[0][i]) {
                maxh = fdata.data[0][i];
            }
        }
    }

    void setSizes() {
        Dimension dim = this.getSize();
        // drawing graph of blue color of fdata
        //double scaleY = (1.0 * scaleMulY * sy) / maxh;
        //double scaleX = (1.0 * scaleMulX * sx) / fdata.numRows;
        //int y00 = (int) ((dim.height * scaleMulY * 19) / 20);
        sy = dim.height;
        sx = dim.width;
        y00 = ((sy * 19) / 20);
        scaleY = (1.0 * y00) / maxh;
        scaleX = (1.0 * sx) / fdata.numRows;
    }

    protected void paintComponent(Graphics g) {
        setSizes();
        fdata.preparePeaks(showColors, false);
        //g.setPaintMode();
        g.setColor(Color.WHITE);
        g.fillRect(0,0, sx, sy);
        int x0, y0, x1, y1, x, y;
        for (int col = 0; col < fdata.numColors; col++) {
            if (!showColors[col]) {
                continue;
            }
            g.setColor(drawColors[col]);
            x0 = 0;
            y0 = y00;
            for (int i = 1; i < fdata.numRows; i += 3) {
                x = (int) (scaleX * i);
                y = (int) (y00 - scaleY * fdata.data[col][i]);
                g.drawLine(x0, y0, x, y);
                x0 = x;
                y0 = y;
            }
        }

        // draw peaks
        g.setColor(peaksColor);
        for (int i = 0; i < fdata.peaks.size(); i++) {
            Peak p = fdata.peaks.getPeak(i);
            x0 = (int) (scaleX * p.pos);
            y0 = y00;
            y1 = (int) (y00 - scaleY * p.height);
            g.drawLine(x0, y0, x0, y1);
        }

        // draw threshold
        x0 = 0;
        x1 = sx;
        y = (int) (y00 - scaleY * fdata.threshold);
        g.setColor(linesColor);
        g.drawLine(x0, y, x1, y);

        // draw Read Peaks threshold
        x0 = 0;
        x1 = sx;
        y = (int) (y00 - scaleY * fdata.redPeaksThreshold);
        g.setColor(redThresholdColor);
        g.drawLine(x0, y, x1, y);

        // draw minmax
        g.setColor(linesColor);
        if (fdata.reds.size() > 0) {
            y0 = 0;
            y1 = sy;
            x0 = (int) (scaleX * fdata.sizeToPos(fdata.minPeakSize));
            g.drawLine(x0, y0, x0, y1);
            x0 = (int) (scaleX * fdata.sizeToPos(fdata.maxPeakSize));
            g.drawLine(x0, y0, x0, y1);
        }

        g.dispose();
    }

	public void setScroller(JScrollPane scroller) {
		this.scroller = scroller;
	}
}
