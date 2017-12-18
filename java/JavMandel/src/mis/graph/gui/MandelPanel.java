package mis.graph.gui;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.image.BufferedImage;
import java.awt.image.WritableRaster;

import javax.swing.JComponent;
import javax.swing.JFrame;

import mis.mandel.MandelModel;

public class MandelPanel extends JComponent {

	static final long serialVersionUID = 9876543002L;

	Dimension preferredSize = null;
	MandelModel mmod;
    private BufferedImage image = null;
    WritableRaster rast;
    int WW = 600;  // initial values
    int HH = 500;
    int []data;

	public MandelPanel(MandelModel mmod, JFrame frame) {
		this.mmod = mmod;
		addMouseListener(new MouseListener() {
			public void mouseClicked(MouseEvent e) {
				// try draw square
				myMouseClicked(e);
			}

			public void mouseEntered(MouseEvent e) {
				// Do nothing
			}

			public void mouseExited(MouseEvent e) {
			}

			public void mousePressed(MouseEvent e) {
				myMousePressed(e);
			}

			public void mouseReleased(MouseEvent e) {
				myMouseReleased(e);
			}
		});
		setMmodSizes(WW,HH);
	}
	
	void setMmodSizes(int sxa, int sya) {
		mmod.resize(sxa, sya);
		WW = sxa;
		HH = sya;
		data = new int[sxa*sya];
		preferredSize = new Dimension(WW,HH);
		this.setSize(preferredSize);
		image = new BufferedImage(WW,HH, BufferedImage.TYPE_INT_RGB);
		rast = image.getRaster();
	}

	void myMouseMoved(MouseEvent e) {
		// Point base = e.getComponent().getLocationOnScreen();
		// int xx = e.getX() + base.x;
		// int yy = e.getY() + base.y - 20;
		// TODO
	}

	void myMouseDrag(MouseEvent e) {
		// for now nothing
	}

	void myMousePressed(MouseEvent e) {
		// if (nearThreshold(e.getY())) {
		// drag = THRESHOLD;
		// } else if (nearX(e.getX(), fdata.minPeakSize)) {
		// drag = MIN;
		// } else if (nearX(e.getX(), fdata.maxPeakSize)) {
		// drag = MAX;
		// } else {
		// drag = NONE;
		// }
	}

	/**
	 * Setting final positions of dragged lines
	 * 
	 * @param e
	 */
	void myMouseReleased(MouseEvent e) {
		// TODO
	}

	void myMouseClicked(MouseEvent e) {
		int ex = e.getX();
		int ey = e.getY();
		System.out.println("Click, ex,ey = " + ex + " "  + ey + " sx,sy= " + WW + " " + HH);
		mmod.setXY0(e.getX(), e.getY());
		mmod.setScale(0.3*mmod.getScale());
		resize();
	}

	void changeScale(double coef) {
		mmod.setScale(coef*mmod.getScale());
		resize();
	}

	void resetScales() {
		mmod.resetScaleXY();
		resize();
	}

	void resize() {
		// XXX
		preferredSize.width = (int)(this.getParent().getSize().width * mmod.getScale()) - 70;
		preferredSize.height = (int)(this.getParent().getSize().height * mmod.getScale()) - 20;
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
		setMmodSizes(dim.width, dim.height);
	}

	protected void paintComponent(Graphics g) {
		setSizes();
        rast.getDataElements(0, 0, mmod.getSx(), mmod.getSy(), data);
        mmod.fillData(data);
        rast.setDataElements(0, 0, mmod.getSx(), mmod.getSy(), data);
        g.drawImage(image, 0, 0, null);
		// g.dispose();
	}
}
