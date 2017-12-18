package mis.couploscil;


import java.awt.Color;
import java.awt.Cursor;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.event.KeyEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.image.BufferedImage;
import java.awt.image.WritableRaster;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.JComponent;

import mis.couploscil.CouplOscilModel.Molecule;


public class ModelPanel extends JComponent {

	class CompPlayTask extends TimerTask {
        @Override
        public void run() {
            if (running) {
                return;
            }
            running = true;
            try {
                model.step(DT);                
                repaint();
                running = false;
            } catch (Exception e) {
                System.out.println("Exception in makeNextComputerMove: " + e);
                e.printStackTrace();
            }
        }       
    }
    static final long serialVersionUID = 9876777021L;
    public int WW;
    public int HH;
    public static final int WING_COLOR = 0x888888;
    
    private OscilOptions opts;    
    Dimension preferredSize;
    CouplOscilModel model = new CouplOscilModel();
    final double DT = 7;
    private BufferedImage image = null;
    WritableRaster rast;
	Timer t = new Timer();

    public int []data;
    public int []dataBack;

	public ModelPanel() {
	    opts = ModelFrame.getInstance().getOpts();
	    WW = opts.getModelSizeX();
	    HH = opts.getModelSizeY();
	    preferredSize = new Dimension(WW, HH);
	    
	    initGame();
		this.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				ModelPanel.this.onMouseClick(e.getX(), e.getY());
				super.mouseClicked(e);
			}
		});
		this.addMouseMotionListener(new MouseAdapter() {
			@Override
			public void mouseDragged(MouseEvent e) {
				super.mouseMoved(e);
			}
			@Override
			public void mouseMoved(MouseEvent e) {
				super.mouseMoved(e);
			}
		});
		image = new BufferedImage(WW, HH, BufferedImage.TYPE_INT_RGB);
		rast = image.getRaster();
		
		// initialize cursors
        handCursor = Cursor.getPredefinedCursor(Cursor.HAND_CURSOR);
        defaultCursor = Cursor.getPredefinedCursor(Cursor.DEFAULT_CURSOR);
	}
	
	public void initGame() {
	    data = null;
	    dataBack = null;
        WW = opts.getModelSizeX();
        HH = opts.getModelSizeY();
        data = new int[WW*(HH + 10)];
        dataBack = new int[WW*(HH + 10)];
	    model.init(WW, HH);
	    model.initWing();
	    model.data = dataBack;
	    t.schedule(new CompPlayTask(), 10, 10);
        repaint();
	}

	public void onMouseClick(int x, int y) {
	    // for now do nothing
	}
    public Dimension getMinimumSize() {
        return preferredSize;
    }

    public Dimension getPreferredSize() {
        return preferredSize;
    }
    
    private void paintDesk(Graphics g) {    
        rast.getDataElements(0, 0, WW, HH, data);
        for (int i=0; i<WW*HH; i++) {
            data[i]= 0xCCEE;
        }
        rast.setDataElements(0, 0, WW, HH, data);
        // g.drawLine(model.wallX, model.wallPadding, model.wallX, model.sy - model.wallPadding);
        Graphics gg = image.getGraphics();
        drawBodies(gg);
        // rast.getDataElements(0, 0, WW, HH, dataBack);
        rast.getDataElements(0, 0, WW, HH, data);
        rast.setDataElements(0, 0, WW, HH, data);
        g.drawImage(image, 0, 0, null);
        g.setColor(Color.BLACK);
    }
    
    private void drawBodies(Graphics g) {
    	// TODO
    }

	@Override
	protected void paintComponent(Graphics g) {
		// TODO Auto-generated method stub
		super.paintComponent(g);
		try {
		    paintDesk(g);
		} catch (Exception e) {
		    e.printStackTrace();
		    t.cancel();
		}
        long t = System.currentTimeMillis();
        long dt = t - lastTime;
        lastTime = t;
        if (cycleCount % 18 == 0) {
            ModelFrame.instance.currentStateLabel.setText(statusLine(dt));
        }
        // System.out.println(statusLine(dt));
        cycleCount++;
	}

    public OscilOptions getOpts() {
        return opts;
    }

    public void setOpts(OscilOptions opts) {
        this.opts = opts;
    }
    
    public String statusLine(double dt) {
        String status = "Status Line";
        return status;
    }

    /* (non-Javadoc)
	 * @see javax.swing.JComponent#processKeyEvent(java.awt.event.KeyEvent)
	 */
	@Override
	protected void processKeyEvent(KeyEvent e) {
		System.out.println("ModelPanel.processKeyEvent(), key = " + e.getKeyChar());
		super.processKeyEvent(e);
	}

	/* (non-Javadoc)
	 * @see javax.swing.JComponent#processMouseEvent(java.awt.event.MouseEvent)
	 */
	@Override
	protected void processMouseEvent(MouseEvent e) {
		int x = e.getX();
		int y = e.getY();
		int id = e.getID();
		// TODO
		super.processMouseEvent(e);
	}

	/* (non-Javadoc)
	 * @see javax.swing.JComponent#processMouseMotionEvent(java.awt.event.MouseEvent)
	 */
	@Override
	protected void processMouseMotionEvent(MouseEvent e) {
		int x = e.getX();
		int y = e.getY();
		// TODO
		super.processMouseMotionEvent(e);
	}
}
