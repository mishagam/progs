package mis.optim;

public class TestOpt {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		OFunc of = new TestSqFun();
		Optimizer opt = new MonteCarlo();
		double []xin = new double[] {
				0,0,6,7,0
		};
		double []xo = opt.optimize(xin, of);
		System.out.println("Result of Monte Carlo optimizing");
		Utils.printArr(xo);
	}
}
