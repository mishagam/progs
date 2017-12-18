// CodeForces Round #580 C done, no problem.

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class OlegAndShares {
	
	int n,k;  // number vertices, max cats
	long []a;
	long numSec;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
		// reading a
		a = new long[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(numSec);
	}	
	

	private void calculate() {
		numSec = 0;
		long minA = 2000111333;
		for (int i = 0; i < n; i++) {
			if (a[i]<minA) {
				minA = a[i];
			}			
		}
		for (int i = 0; i < n; i++) {
			long d = a[i]-minA;
			if (d % k != 0) {
				numSec = -1;
				return;
			}	
			numSec += d/k;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		OlegAndShares l = new OlegAndShares();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
