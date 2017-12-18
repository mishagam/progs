package mis.image;
import java.awt.image.BufferedImage;
import java.awt.image.DataBuffer;
import java.awt.image.Raster;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;


public class MyImage {
	int w;
	int h;
	int nb = 4;
	int []ibuf;
	BufferedImage bi;
	Raster ra=null;
	DataBuffer db=null;
	short [][]ima = null;
	short [][]line = null;
	short [][]portion = null;
	boolean []emptyLines = null;
	boolean []emptyCols = null;
	int lastLineTop = 0;
	int lastLineBot = 0;
	int lastPortionStart = 0;
	int lastPortionEnd = 0;
	
	void printPortion(short [][]p) {
		for (int i=0; i<p.length; i++) {
			StringBuilder sb = new StringBuilder();
			for (int j=0; j<p[0].length; j++) {
				char c = (p[i][j] < 1 ? '_' : '*');
				sb.append(c);
			}
			System.out.println(sb);
		}
	}
	
	void calcEmptyLines() {
		if (ima == null) {
			calcImage();
		}
		emptyLines = new boolean[h];
		for (int i=0; i<h; i++) {
			emptyLines[i] = true;
			for (int j=0; j<w; j++) {
				if (ima[i][j] > 1) {
					emptyLines[i] = false;
					break;
				}
			}
		}
	}
	
	void calcEmptyCols() {
		emptyCols = new boolean[w];
		for (int j=0; j<w; j++) {
			emptyCols[j] = true;
			for (int k=0; k<line.length; k++) {
				if (line[k][j] > 1) {
					emptyCols[j] = false;
					break;
				}
			}
		}
	}
	
	int ncol(int x, int y) {
		int i0 = (y*h + x)*nb;
		int sum = 0;
		for (int k=0; k<nb; k++) {
			sum += ibuf[i0 + k];
		}
		int ret = (600 - (sum-290)) / 8;
		if (ret < 0) ret = 0;
		return ret;
	}
	
	void calcImage() {
		ima = new short[h][w];
		for (int i=0; i<h; i++) {
			for (int j=0; j<w; j++) {
				int i0 = (i*w + j)*nb;
				int sum = 0;
				for (int k=0; k<nb; k++) {
					sum += ibuf[i0 + k];
				}
				short v = (short)((640 - sum) / 8);
				if (v < 0) {
					v = 0;
				} else {
					ima[i][j] = v;
				}
			}
		}		
	}
	
	short [][]getLine() {
		int i0=lastLineBot, i1=0;
		int hh = 0;
		if (emptyLines == null) {
			calcEmptyLines();
		}
		
		while (i0 < h && emptyLines[i0])  i0++;
		if (i0 == h)  return null;
		lastLineTop = i1 = i0;
		while (i1 < h && !emptyLines[i1]) i1++;
		if (i1 == h) return null;
		lastLineBot = i1;		
		hh = i1 - i0;		
		short [][]ln = new short[hh][w];
		for (int i=0; i<hh; i++) {
			for (int j=0; j<w; j++) {
				ln[i][j] = ima[i0+i][j];
			}
		}
		this.line = ln;
		emptyCols = null;  // we need to calc them again
		return ln;
	}
	
	short [][]getPortion() {
		int j0=lastPortionEnd, j1=0;
		int ww = 0;
		if (emptyCols == null) {
			calcEmptyCols();
		}
		int hh = line.length;
		
		while (j0 < w && emptyCols[j0])  j0++;
		if (j0 == w)  return null;
		lastPortionStart = j1 = j0;
		while (j1 < w && !emptyCols[j1]) j1++;
		if (j1 == w) return null;
		lastPortionEnd = j1;		
		ww = j1 - j0;		
		short [][]po = new short[hh][ww];
		for (int i=0; i<hh; i++) {
			for (int j=0; j<ww; j++) {
				po[i][j] = line[i][j0 + j];
			}
		}
		this.portion = po;
		return po;
	}	
	
	void loadImage(String fn) throws IOException {
		bi = ImageIO.read(new File(fn));
		ra = bi.getData();
		h = ra.getHeight();
		w = ra.getWidth();
		System.out.println("ra h,w = " + 
				h + " " + w);
		db = ra.getDataBuffer();
		System.out.println("DatBuff type, nb = " + db.getDataType() + " " + db.getNumBanks());
		ibuf = new int[h*w*4];
		ra.getPixels(0, 0, w, h, ibuf);
		calcImage();
		emptyCols = null;
		emptyLines = null;
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		MyImage mi = new MyImage();
		mi.loadImage("images/kate_ss1.png");
		mi.getLine();
		mi.getLine();
		short [][]po;
		po = mi.getPortion();		mi.printPortion(po);
		po = mi.getPortion();		mi.printPortion(po);
		po = mi.getPortion();		mi.printPortion(po);
		po = mi.getPortion();		mi.printPortion(po);
		po = mi.getPortion();		mi.printPortion(po);
		po = mi.getPortion();		mi.printPortion(po);
		po = mi.getPortion();		mi.printPortion(po);
		po = mi.getPortion();		mi.printPortion(po);
	}

}
