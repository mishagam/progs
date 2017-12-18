package mis.optim;

public class TestSqFun implements OFunc {
	double []x0 = new double[] {
			2,2,2,2,2
	};
	double []x1 = new double[] {
			-3,2,2,2,2
	};

	public double ofun(double[] x) {
		double v = 20;
		for (int i=0; i<x.length; i++) {
			double dx = x[i] - x0[i];
			v -= (dx*dx);
		}
		for (int i=0; i<x.length; i++) {
			double dx = x[i] - x1[i];
			v -= 0.7*(dx*dx);
		}
		return v;
	}

}
