// CodeForces Round #447 B competition - still doesn't work

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DzyVozrPosl {

	int n;
	int []a;
	int []ln;
	int []lni;
	int val=1;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		s = bin.readLine();
		ss = s.split(" ");
		a = new int[n];
		ln = new int[n];
		lni = new int[n];
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}
	
	void printRes() {
		System.out.println(val);
	}
	
	private void calculate() {
		// search max in w;
		int last = a[0];
		ln[0] = 1;
		lni[0] = 1;
		for (int i=1; i<n; i++) {
			// count ln without changes
			if (a[i] > a[i-1]) {
				ln[i] = ln[i-1]+1;
			} else {
				ln[i] = 1;
			}
			// count optimal lnilni
			if (a[i] > last) {
				lni[i] = lni[i-1]+1;
				last = a[i];
			} else {
				// calculate lni
				// we try to decrease previous element if possible
				if (i==1) {
					lni[i] = 2;  // make first element 1
					last = a[i];
				} else if (i>=2 && a[i] > a[i-2]+1) {
					// decrease a[i-1] 
					lni[i] = ln[i-2]+2;
					last = a[i];
				} else {
					// increase a[i]
					lni[i] = ln[i-1] + 1;
					last = a[i-1] + 1;
				}
			}
			if (lni[i] > val) {
				val = lni[i];
			}
		
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DzyVozrPosl l = new DzyVozrPosl();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
