// CodeForces Round #804 B Minimum number of steps, Done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MinimumSteps {

	String si;
	long nStep;
	long MOD = 1000000007;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		// String []ss = s.split(" ");
		si = s;
	}

	void printRes() {
		System.out.println(nStep);
	}

	private void calculate() {
		int na=0;
		long coef=0;
		nStep = 0;
		for (int i=0; i<si.length(); i++) {
			char c = si.charAt(i);
			if (c=='a') {
				na++;
				coef = (1 + coef + coef) % MOD;
			} else {
				nStep = (nStep + coef) % MOD;
			}			
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		MinimumSteps l = new MinimumSteps();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
