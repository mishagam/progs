package mis.test;

import java.util.Arrays;
import java.util.Random;

public class TestBinSearch {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		double []da = new double[]{0.2, 0.8, 10.0};
		Random rnd = new Random();
		for (int i=0; i<50; i++) {
			double v = rnd.nextDouble()*10;
			int ir = Arrays.binarySearch(da, v);
			System.out.println("v,i = " + v + " " + ir);
		}
	}

}
