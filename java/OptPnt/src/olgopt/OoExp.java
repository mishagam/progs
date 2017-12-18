package olgopt;

import mis.optim.OFunc;

public class OoExp implements OFunc {
	DataXY d;
	double DIAM = 3.0;
	
	public OoExp(DataXY da) {
		d = da;		
	}
	
	double expx(double []x, double []xp) {
		int smsq = 0;
		for (int i=0; i<d.nx; i++) {
			double dx = x[i] - xp[i];
			smsq += dx*dx;
		}
		return Math.exp(-smsq / DIAM);
	}

	@Override
	public double ofun(double[] xx) {
		double sumv = 0;
		double sumn = 0.01;
		
		for (int i=0; i<d.n; i++) {
			double ex = expx(xx, d.xa[i]);
			sumn += ex;
			sumv += ex * d.ya[i];
		}
		
		for (int i=0; i<d.nx; i++) {
			double out = 0;
			if (xx[i] < 1) out += (1-xx[i]);
			if (xx[i] > 5) out += (xx[i] - 5);
			sumv -= 100 * out*out;
		}
		
		return sumv / sumn;
	}

}
