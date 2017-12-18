// CodeForces Round #669 A competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ArtemGrasshopper {

	int n;
	String sdir;
	int []lna;
	boolean finite;
	boolean []u;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		u = new boolean[n];
		lna = new int[n];
		sdir = bin.readLine();
		s = bin.readLine();
		ss = s.split(" ");
		for (int i = 0; i < ss.length; i++) {
			lna[i] = Integer.parseInt(ss[i]);			
		}
	}

	void printRes() {
		System.out.println(finite ? "FINITE" : "INFINITE");
	}
	

	private void calculate() {
		int i = 0;
		while (true) {
			if (u[i]) {
				finite = false;
				break;
			}
			u[i] = true;
			if (sdir.charAt(i)=='>') {
				i += lna[i];
				if (i>=n) {
					finite = true;
					break;
				}				
			} else {
				i -= lna[i];
				if (i<0) {
					finite = true;
					break;
				}				
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ArtemGrasshopper l = new ArtemGrasshopper();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
