package mis.image;
import java.awt.image.BufferedImage;
import java.awt.image.DataBuffer;
import java.awt.image.Raster;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;


public class MisImage {
	int w;
	int h;
	int nb = 4;
	int []ibuf;
	Raster ra=null;
	DataBuffer db=null;
	
	int ncol(int x, int y) {
		int i0 = (y*w + x)*nb;
		int sum = 0;
		for (int k=0; k<nb; k++) {
			sum += ibuf[i0 + k];
		}
		int ret = (600 - (sum-290)) / 8;
		if (ret < 0) ret = 0;
		return ret;
	}
	
	void printImage() {
		for (int i=0; i<h; i++) {
			StringBuffer sb = new StringBuffer();
			for (int j=0; j<w; j++) {
				String s = String.format(" %2d", ncol(j, i));
				sb.append(' ').append(s);
			}
			System.out.println(sb);
		}
	}
	
	void printDbElem() {
		for (int i=0; i<h; i++) {
			StringBuffer sb = new StringBuffer();
			for (int j=0; j<w; j++) {
				int icol = db.getElem(w*i + j);
				sb.append(' ').append(icol);
			}
			System.out.println(sb);
		}
	}
	
	void printIbuf() {
		for (int i=0; i<20; i++) {
			for (int j=0; j<4*w; j++) {
				System.out.printf(" %3d",ibuf[i*4*w + j]);
			}
			System.out.println();
		}
	}
	
	void dealWithImage(BufferedImage bi) throws IOException {
		ra = bi.getData();
		h = ra.getHeight();
		w = ra.getWidth();
		System.out.println("ra w,h = " + 
				w + " " + h);
		db = ra.getDataBuffer();
		System.out.println("DatBuff type, nb = " + db.getDataType() + " " + db.getNumBanks());
		ibuf = new int[1000];
		ra.getPixels(0, 0, w, h, ibuf);
		printImage();
		// printDbElem();
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		System.out.println("Hello from MisImage");
		BufferedImage bi;
		bi = ImageIO.read(new File("images/E0.png"));
		// ImageIO.write(bi, "GIF", new File("ee.gif"));
		MisImage mi = new MisImage();
		mi.dealWithImage(bi);
	}

}
