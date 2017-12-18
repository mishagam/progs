package mis.javaimg;

public class Mandelbrot {
	public static int MAXN = 1000;
	public static int mandel(double cx, double cy) {
		double x = 0, y = 0;
		int n = 0;
		
		while (cmod(x,y) < 4.0 && n < MAXN) {
			double tx = x*x - y*y;
			double ty = x*y + y*x;
			x = tx + cx; y=ty + cy;
			n++;
		}
		return n;
	}
	
	public static double cmod(double x, double y) {
		return x*x + y*y;
	}

}
