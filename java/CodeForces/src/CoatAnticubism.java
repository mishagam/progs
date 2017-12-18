// CodeForces Round #667 B competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class CoatAnticubism {

	int n;
	int []a;
	int minL;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read a
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(minL);
	}	

	private void calculate() {
		int mx=-1, sm=0;
		for (int i=0; i<n; i++) {
			sm += a[i];
			if (a[i]>mx) {
				mx = a[i];
			}
		}
		minL = mx - (sm-mx) + 1;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		CoatAnticubism l = new CoatAnticubism();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
