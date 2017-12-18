// CodeForces Round #518 C competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class AniaSmartfon {

	int n,m,k;
	int []a;
	int []ra; // reverse a - place of each app
	int []b;
	long npress;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		k = Integer.parseInt(ss[2]);
		a = new int[n];
		ra = new int[n+1];
		b = new int[m];
		// read a
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
			ra[a[i]] = i;
		}
		// read b
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<m; i++) {
			b[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(npress);
	}
	
	void shift(int i) {
		if (i==0) {
			return;
		}
		int aa = a[i];
		int bb = a[i-1];
		a[i-1] = aa;
		a[i] = bb;
		ra[aa] = i-1;
		ra[bb] = i;
	}

	private void calculate() {
		npress = 0;
		for (int j=0; j<m; j++) {
			int ia = ra[b[j]];
			npress += (ia / k) + 1;
			shift(ia);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		AniaSmartfon l = new AniaSmartfon();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
