package olgopt;

import java.io.IOException;

import mis.optim.MonteCarlo;
import mis.optim.OFunc;
import mis.optim.Optimizer;
import mis.optim.Utils;

public class OlOptRun {
	public double[] yo;
	public double[][] xxo;
	final int NATTEMPT = 100;
	final int NBOOT = 100;

	public void runOlOpt(String fileName) throws IOException {
		double[] x0 = new double[] { 2, 3, 2, 3, 2.5 };
		OlgData old = new OlgData();
		Optimizer opt = new MonteCarlo();
		old.readData(fileName);
		for (int iy = 0; iy < old.NY; iy++) {
			DataXY dxy = new DataXY(old, iy);
			OFunc of = new OoExp(dxy);
			double[] xo = opt.optimize(x0, of);
			xxo[iy] = xo;
			yo[iy] = of.ofun(xo);
		}
	}

	public void runBootstrap(String fn, StringBuilder sb) throws IOException {
		double[] x0 = new double[] { 2, 3, 2, 3, 2.5 };
		OlgData old = new OlgData();
		OlgData oboot = new OlgData();
		Optimizer opt = new MonteCarlo();
		old.readData(fn);
		for (int iy = 0; iy < old.NY; iy++) {
			int iyy = 1;
			sb.append("Y = " + (iyy+1) + "\n");
			for (int ia = 0; ia < NATTEMPT; ia++) {
				oboot.randomExtract(old, NBOOT); 
				DataXY dxy = new DataXY(old, iyy);
				OFunc of = new OoExp(dxy);
				double[] xo = opt.optimize(x0, of);
				double yo = of.ofun(xo);
				String s = String.format("att,y: %d %f  xo: ", ia, yo);
				s += Utils.printToString(xo) + "\n";
				sb.append(s);
			}
		}
	}

}
