package mis.mandel;

import java.awt.Color;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class MandelModel {
	static final long serialVersionUID = 9876543072L;

	int sx;
	int sy;
	int[][] rep; // number of repetitions till > 1
	final double INIT_SCALE =  1/300.0;
	double scale = INIT_SCALE;
	double x0; // x in the center
	double y0; // y in the center
	public static final Color[] drawColors = new Color[] { Color.BLUE,
			Color.GREEN, Color.RED, new Color(120, 120, 8),
			Color.GREEN, Color.CYAN, new Color(140, 100, 8),
			new Color(33, 33, 160), Color.MAGENTA, Color.DARK_GRAY, Color.PINK, Color.BLACK,
			new Color(41, 160, 120), new Color(44, 210, 11),
			new Color(170, 11, 230), new Color(33, 200, 113),
			new Color(55, 200, 11), new Color(250, 12, 100),
			new Color(190, 90, 11), new Color(110, 220, 11),
			new Color(190, 60, 11), null };
	private int nCol = drawColors.length;
	private Color lastColor = Color.BLACK;
	private static final int MAX_COL = 255;
	boolean needCalc = true;
	double sx2,sy2;
	final String mandelRepFn = "mandel_rep.out";
	boolean externalCalculation = false;
	boolean useThreads = true;

	public MandelModel() {
	}

	public int repToColor(int dep) {
		Color col = Color.RED;
		if (dep > MAX_COL) {
			col = lastColor;
		} else if (dep <0) {
			System.out.println("Illegal dep = " + dep);
		} else {
			dep = dep % (nCol - 1);
			col = drawColors[dep];
		}
		return col.getRGB();
	}

	public static int countDep(double xa, double ya) {
		int k;
		double cx = xa;
		double cy = ya;
		double x = 0;
		double y = 0;
		for (k = 0; k < MAX_COL+4; k++) {
			double xx = x * x;
			double yy = y * y;
			double xy = x * y;
			x = xx - yy + cx;
			y = 2.0 * xy + cy;
			if (xx + yy > 4) {
				break;
			}
		}
		return k;
	}

	public int getRep(int ix, int iy) {
		return rep[iy][ix];
	}
	
	public void setXY0(int j, int i) {
		double nx0 = x0 + scale*(j-sx2);
		double ny0 = y0 + scale*(i-sy2);
		System.out.println("x0,y0= " + x0 + " " + y0 + " nx0,ny0= " + nx0 + " " + ny0);
		x0 = nx0;
		y0 = ny0;
		needCalc = true;
	}

	public void calcRep() {
		if (!needCalc) {
			return;
		}
		sx2 = sx/2.0;
		sy2 = sy/2.0;		
		long t0 = System.currentTimeMillis();
		if (externalCalculation) {
			try {
				externalCommand();
				readRep(mandelRepFn);
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (useThreads) {
			try {
				MultyThreadModel.startAll(this, 12);
				MultyThreadModel.waitAll();
			} catch (InterruptedException ie) {
				ie.printStackTrace();
			}
		} else {
			for (int i=0; i<sy; i++) {
				for (int j=0; j<sx; j++) {
					double x = x0 + scale*(j-sx2);
					double y = y0 + scale*(i-sy2);
					rep[i][j] = countDep(x, y);
				}
			}		
		}
		long t1 = System.currentTimeMillis();
		System.out.println("Calculations took " + (t1-t0) + " millis");
		needCalc = false;		
	}
	
	/**
	 * reading binary file using little bit of NIO.
	 * 
	 * @param fn - String filename
	 * @throws IOException - if IO error happens
	 */
	void readRep(String fn) throws IOException {
		Path path = Paths.get(fn);
		byte []ba = Files.readAllBytes(path);		
		int ib = 0;
		for (int i=0; i<sy; i++) {
			for (int j=0; j<sx; j++) {
				int b0 = 0xFF & ba[ib++];
				int b1 = 0xFF & ba[ib++];
				int rp = b1*256+b0;
				rep[i][j] = rp;
			}
		}		 
	}
	
	void externalCommand() throws IOException,InterruptedException {
		Runtime r = Runtime.getRuntime();
		String []cmd= new String[]{
				"./mandel",
				"" + sx,
				"" + sy,
				"" + x0,
				"" + y0,
				"" + scale};
		Process p = r.exec(cmd);
		p.waitFor();
		BufferedReader b = new BufferedReader(new InputStreamReader(p.getInputStream()));
		String line = "";

		while ((line = b.readLine()) != null) {
		  System.out.println(line);
		}

		b.close();
	}

	public void fillData(int []data) {
		calcRep();
		for (int i=0; i<sy; i++) {
			for (int j=0; j<sx; j++) {
				if (i>=sy || j>=sx) {
					continue;
				}
				data[i*sx + j] = repToColor(rep[i][j]);
			}
		}

	}

	public void resetScaleXY() {
		x0 = 0;
		y0 = 0;
		scale = INIT_SCALE;
		needCalc = true;
	}

	public void resize(int sx, int sy) {
		this.sx = sx;
		this.sy = sy;
		rep = new int[sy][sx];
		needCalc = true;
	}

	public int getSx() {
		return sx;
	}

	public int getSy() {
		return sy;
	}

	public double getScale() {
		return scale;
	}

	public void setScale(double scale) {
		this.scale = scale;
		needCalc = true;
	}

	public double getX0() {
		return x0;
	}

	public void setX0(double x0) {
		this.x0 = x0;
		needCalc = true;
	}

	public double getY0() {
		return y0;
	}

	public void setY0(double y0) {
		this.y0 = y0;
		needCalc = true;
	}

}
