// CodeForces Round #873 B competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Qaq {

	int n;
	String s;
	long nQaq = 0;

	private void readData(BufferedReader bin) throws IOException {
		s = bin.readLine();
	}

	void printRes() {
		System.out.println(nQaq);
	}	

	private void calculate() {
		n = s.length();
		int nq = 0;
		for (int i=0; i<n; i++) {
			if (s.charAt(i)=='Q') {
				nq++;
			}
		}
		int nql = 0;
		for (int i=0; i<n; i++) {
			if (s.charAt(i)=='Q') {
				nql++;
			} else if (s.charAt(i)=='A') {
				int nqr = nq - nql;
				nQaq += nql * nqr;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Qaq l = new Qaq();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
