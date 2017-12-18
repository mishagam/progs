// CodeForces Round #854 B train done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MaximBuysApartment {

	long n,k;
	long minApp,maxApp;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
	}

	void printRes() {
		System.out.println(minApp + " " + maxApp);
	}

	private void calculate() {
		if (k==0 || k==n) {
			minApp = maxApp = 0;
			return;
		} 
		minApp = 1;
		if (k*3<= n) {
			maxApp = k*2;
		} else {
			maxApp = n-k;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		MaximBuysApartment l = new MaximBuysApartment();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
