package mis.javaimg;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.event.KeyEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.image.BufferedImage;
import java.awt.image.WritableRaster;

import javax.swing.JComponent;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.IntBuffer;

public class MisPanel  extends JComponent {
    static final long serialVersionUID = 9876777009L;
    public int WW;
    public int HH;
    MisOptions opts = null;
    final double SCALE0 = 0.01;
    final double X0 = 0;
    final double Y0 = 0;
    double scale = SCALE0;
    double dScale = 1.5;
    double x0;
    double y0;
    public static final int WING_COLOR = 0x888888;
    int []colors = new int[]{0xFFFFFF, 0x0000FF, 0xAAAAAA, 0xFF0000, 
    		0xFFAA00, 0x00FF00, 0xFFAA00, 0xDD00DD, 0x333333, 
    		0x999999, 0x5599DD, 0xFFFF00};
    int nCol = colors.length;    
    Dimension preferredSize;
    private BufferedImage image = null;
    WritableRaster rast;  
    public int []data;
    public int []dataBack;
    boolean needCount = true;
    int mouseX = -1000;
    int mouseY = -1000;
    boolean EXTERNAL_MANDEL = true;

	public MisPanel() {
	    opts = MisOptions.getOptions();
	    WW = opts.ww;
	    HH = opts.hh;
	    preferredSize = new Dimension(WW, HH);
	    
	    initGame();
		this.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				MisPanel.this.onMouseClick(e.getX(), e.getY());
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
	}
	
	public void initGame() {
	    WW = opts.ww;
	    HH = opts.hh;
	    preferredSize = new Dimension(WW, HH);
	    scale = SCALE0;
	    x0 = X0;
	    x0 = Y0;
	    data = new int[WW*HH];
	    dataBack = new int[WW*HH];
	}
    
    public void increaseScale() {
    	scale *= dScale;
    	needCount = true;
        repaint();
    }
    
    public void decreaseScale() {
    	scale *= (1.0 / dScale);
    	needCount = true;
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
    
    private void paintDesk(Graphics g) throws IOException, InterruptedException {    
        rast.getDataElements(0, 0, WW, HH, data);
        if (needCount) {
        	drawPanel();
        }
        rast.setDataElements(0, 0, WW, HH, data);
        g.drawImage(image, 0, 0, null);
        g.setColor(Color.BLACK);
        MisFrame.instance.currentStateLabel.setText(this.statusLine());
    }
    
    private void drawPanel() throws IOException, InterruptedException {
    	if (EXTERNAL_MANDEL) {
    		// writing file with parameters
    		PrintWriter parmWriter = new PrintWriter(new FileWriter("mandel_parms.txt"));
    		parmWriter.printf("%d %d %f %f %f\n", WW, HH, x0, y0, scale);
    		parmWriter.close();
    		// calling mandelbrot program
    		ProcessBuilder pb = new ProcessBuilder("./mandel");
    		Process p = pb.start();
    		p.waitFor();
    		// getting results
    		FileInputStream fis = new FileInputStream("mandel.out");
    		ByteBuffer buf = ByteBuffer.allocate(4*WW);
    		buf.order(ByteOrder.nativeOrder());
    		IntBuffer ibuf = buf.asIntBuffer();
    		byte []bb= new byte[4*WW];
    		for (int i=0; i<HH; i++) {
    			fis.read(bb, 0, 4*WW);
    			buf.clear();
    			buf.put(bb);
    			int idx = i*WW;
    			for (int j=0; j<WW; j++) {
    				int n = ibuf.get(j);
	    			int icol = 0;
	    			if (n < Mandelbrot.MAXN) {
	    				n = n % nCol;
	        			icol = colors[n];
	    			}
	    			data[idx] = icol;
	    			idx++;
    			}
    		}
    		fis.close();
    	} else {
    		for (int i=0; i<HH; i++) {
	    		for (int j=0; j<WW; j++) {
	    			double y = y0 + scale * (i - HH/2);
	    			double x = x0 + scale * (j - WW/2);
	    			int idx = j + i*WW;
	    			int n = Mandelbrot.mandel(x, y);
	    			int icol = 0;
	    			if (n < Mandelbrot.MAXN) {
	    				n = n % nCol;
	        			icol = colors[n];
	    			}
	    			data[idx] = icol;
	    		}
	    	}
    	}
    	needCount = false;
    }

	@Override
	protected void paintComponent(Graphics g) {
		super.paintComponent(g);
		try {
		    paintDesk(g);
		} catch (Exception e) {
		    e.printStackTrace();
		}
	}

    public String statusLine() {
        String status = String.format("x0: %f   y0: %f  scale: %f",
        		x0, y0, scale);
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
		super.processMouseEvent(e);
		if (e.getButton() == MouseEvent.BUTTON1 && id == MouseEvent.MOUSE_PRESSED) {
			if (mouseX == -1000) {
				mouseX = x;
				mouseY = y;
			}
        } else if (e.getButton() == MouseEvent.BUTTON1 && id == MouseEvent.MOUSE_RELEASED) {
            if (mouseX != -1000) {
                int dx = x - mouseX;
                int dy = y - mouseY;
                x0 -= dx * scale;
                y0 -= dy * scale;
                needCount = true;
                repaint();
                mouseX = mouseY = -1000;
            }
        }
	}

	/* (non-Javadoc)
	 * @see javax.swing.JComponent#processMouseMotionEvent(java.awt.event.MouseEvent)
	 */
	@Override
	protected void processMouseMotionEvent(MouseEvent e) {
		//int x = e.getX();
		//int y = e.getY();
//		System.out.println("processMouseMotionEvent(), x, y, = " + x + " " + y + 
//				" Button, id = " + e.getButton() + " " + e.getID());
		super.processMouseMotionEvent(e);
	}
}
