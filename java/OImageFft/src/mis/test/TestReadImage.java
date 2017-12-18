package mis.test;

import java.awt.Rectangle;
import java.awt.image.BufferedImage;
import java.awt.image.DataBuffer;
import java.awt.image.DataBufferByte;
import java.awt.image.WritableRaster;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.jtransforms.dst.FloatDST_2D;

/**
 * Reading image as array of numbers for later converting them using FFT.
 * working aug 27 2015
 * @author misha
 */
public class TestReadImage {
	
	byte[] pixels;
	int ww,hh,sz;
	int []ibuf;	
	
	void readImage(String fn) {
		BufferedImage img = null;
		WritableRaster wr = null;
		DataBuffer buff = null;
		String outImgFn = fnToOut(fn);
		BufferedImage oimg = null;
		WritableRaster orast = null;  
		
		try {
		    img = ImageIO.read(new File(fn));
		    System.out.println("read image " + fn + " passed");
		    wr = img.getWritableTile(0, 0);
		    buff = wr.getDataBuffer();
		    pixels = ((DataBufferByte) buff).getData();
		    Rectangle rect = wr.getBounds();
		    System.out.println("Got buffer with length (sx*sy*3) = " + pixels.length);
		    System.out.println("Rectangle: " + rect);
		    ww = rect.width;
		    hh = rect.height;
		    sz = ww*hh;
		    // testConvertImage();
		    fftConvertImage();
		    oimg = new BufferedImage(rect.width,rect.height, BufferedImage.TYPE_INT_RGB);
		    orast = oimg.getRaster();
		    orast.setDataElements(0, 0, rect.width,rect.height, ibuf);
		    // oimg.setData(wr);
		    ImageIO.write(oimg, "jpg", new File(outImgFn));
		    System.out.println("written image " + outImgFn);
		} catch (IOException e) {
		}
	}
	
	String fnToOut(String fn) {
		int pnt = fn.indexOf('.');
		String base = fn.substring(0, pnt);
		return base + "_fft.jpg";
	}
	
	/**
	 * convert on ecolor from buffer fbuf
	 * @param fbuf
	 */
	void fftConvertOneColor(float []fbuf) {
		FloatDST_2D fft = new FloatDST_2D(hh,ww);
		fft.forward(fbuf,true);	
	}
	
	void fftConvertImage() {
		float []fbuf = new float[sz];
		int []rgbMul = new int[]{0x10000, 0x100, 1};
		
		ibuf = new int[sz];
		for (int icol = 0; icol<3; icol++) {
			// extract one color
			for (int i=0; i<sz; i++) {
				int o = i*3;
				fbuf[i] = (float)(pixels[o+icol]/256.0);
			}
			fftConvertOneColor(fbuf);
			// adding to ibuf
			int mul = rgbMul[icol];
			for (int i=0; i<sz; i++) {
				int c = (int)(fbuf[i]*200);
				if (c<0) c=0;
				if (c>255) c = 255;
				ibuf[i] += c*mul;
			}
		}
	}
	
	void testConvertImage() {
	    ibuf = new int[sz];
	    for (int i=0; i<sz; i++) {
	    	if (i<sz/8) ibuf[i] = 0xFF0000;
	    	else if (i<sz/4) ibuf[i] = 0xFF00;
	    	else if (i<(sz*3)/8) ibuf[i] = 0xFF;
	    	else if (i<(sz/2)) ibuf[i] = 0;
	    	else {
	    		int o = 3*i;
	    		int col = pixels[o]*0x10000 + pixels[o+1]*0x100 + pixels[o+2];
	    		ibuf[i] = col;
	    	}
	    }
	}
	
	public static void main(String []args) {
		TestReadImage t = new TestReadImage();
		t.readImage(args[0]);		
		System.out.println("readImage done");
	}

}
