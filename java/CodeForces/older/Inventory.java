// CodeForces Round #489 C done - 3 fixes

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Inventory {

	int n;
	int []a;

	private void readData(BufferedReader bin) throws IOException {
		String si = bin.readLine();
		String[] ss = si.split(" ");
		n = Integer.parseInt(ss[0]);
		a = new int[n];
		si = bin.readLine();
		ss = si.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}		
	}

	void printRes() {
		for (int i=0; i<n; i++) {
			System.out.print(a[i] + " ");
		}		
		System.out.println();
	}
	
	private void calculate() {
		int []an = new int[n];
		int []inv = new int[n+1];
		// first pass
		for (int i=0; i<n; i++) {
			if (a[i]<=n && inv[a[i]]==0) {
				an[i] = a[i];
				inv[a[i]] = 1;
				a[i] = 0;
			}
		}
		// second pass, filling with free indexes
		int invi=1;
		for (int i=0; i<n; i++) {
			if (a[i] > 0) {
				while (inv[invi]>0) {
					invi++;
				}
				an[i] = invi;
				inv[invi] = 1;
			}
		}
		for (int i=0; i<n; i++) {
			a[i] = an[i];
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Inventory l = new Inventory();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
