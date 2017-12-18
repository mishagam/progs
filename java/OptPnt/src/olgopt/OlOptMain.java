package olgopt;

import java.io.IOException;

import mis.optim.MonteCarlo;
import mis.optim.OFunc;
import mis.optim.Optimizer;
import mis.optim.Utils;

public class OlOptMain {
	static final String DataFileName = "data/balans_zero_fill.txt";	
	
	public static void main(String[] args) throws IOException {
		double []x0 = new double[] {
			2,3,2,3,2.5
		};
		OlgData old = new OlgData();
		Optimizer opt = new MonteCarlo();
		old.readData(DataFileName);
		for (int iy = 0; iy<old.NY; iy++) {
			DataXY dxy = new DataXY(old, iy);
			OFunc of = new OoExp(dxy);
			double []xo = opt.optimize(x0, of);
			System.out.println("Working with Y "+(iy+1)+
					" Optimal value: " + of.ofun(xo));
			System.out.print("XO: ");
			Utils.printArr(xo);		
		}
	}
}
