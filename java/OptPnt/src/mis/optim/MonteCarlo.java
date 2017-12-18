package mis.optim;

import java.util.Arrays;
import java.util.Random;

public class MonteCarlo implements Optimizer {
	int n;
	Random rnd = new Random(9999);
	/**
	 * randomly change double array
	 * @param x - array to change
	 * @param dist - by how much
	 */
	void randomChange(double []x, double []xo, double dist) {
		for (int i=0; i<n; i++) {
			xo[i] = x[i] + dist * (2*rnd.nextDouble() - 1);
		}
	}

	public double[] optimize(double[] initArgs, OFunc of) {
		n = initArgs.length;
		double []x = Arrays.copyOf(initArgs, n);
		double []xx = Arrays.copyOf(initArgs, n);
		double vmax = -10000000.0;
		double dist = 1.0;
		
		for (int irep=0; irep<1000; irep++) {
			// randomly change x
			randomChange(xx, x, dist);
			double v = of.ofun(x);
			//System.out.printf("val %9.5f  x: ", v);
			//Utils.printArr(x);
			if (v > vmax) {
				for (int i=0; i<n; i++) {
					xx[i] = x[i];
				}
				vmax = v;
//				System.out.printf("New opt %10.6f ", vmax);
//				Utils.printArr(x);
			}	
			if (irep>300) dist = 0.6;
			if (irep>600) dist = 0.2; 
			if (irep>800) dist = 0.1; 
		}
		return xx;
	}

}
