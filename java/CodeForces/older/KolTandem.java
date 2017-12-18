// CodeForces Round #443 B Done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class KolTandem {

	String s;
	int ls;
	int k;
	int n;
	
	private void readData(BufferedReader bin) throws IOException {
		s = bin.readLine();
		ls = s.length();
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		k = Integer.parseInt(ss[0]);
		bin.close();
	}
	
	void printRes() {
		System.out.println(2*n);
	}
	
	private void calculate() {
		if (k >= ls) {
			n = (ls + k) / 2;
			return;
		} 
		int j;
		n = k;
		for (int b = 0; b<ls-k; b++) {
			int maxn = (ls + k - b) / 2;
			for (int nn=n+1; nn <= maxn; nn++) {
				for (j=0; j<nn; j++) {
					int i0 = b+j;
					int i1 = b + nn + j;
					if (i1<ls && s.charAt(i0) != s.charAt(i1)) {
						break;
					} else if (i1>=ls) {
						j = nn;
						break;
					}
				}
				if (j==nn) {
					n = nn;
				}
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		KolTandem l = new KolTandem();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
