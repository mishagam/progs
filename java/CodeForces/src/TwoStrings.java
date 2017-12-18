// CodeForces Round #762 C TOD0 (finish with correct indexes)

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class TwoStrings {

	String a,b;
	String sab;
	int lnb,lna;
	int []fbeg;    // index in sa fromn which we can construct b[0 .. i]
	int []lend;    // last end. index in a from which we can construct b[n..ln b]
	
	private void readData(BufferedReader bin) throws IOException {
		a = bin.readLine();
		b = bin.readLine();
		lna = a.length();
		lnb = b.length();
	}
	
	void calcBEarrays() {
		fbeg = new int[lnb+1];
		lend = new int[lnb+1];
		// count fbeg
		fbeg[0] = 0;
		int idxa=0;
		Arrays.fill(fbeg, 1000000);
		for (int i=0; i<lnb && idxa<lna; i++) {
			int c = b.charAt(i);
			while (idxa<lna && c != a.charAt(idxa)) {
				idxa++;
			}
			if (idxa<lna) {
				fbeg[i] = idxa;
			}
		}
		// count lend
		fbeg[lnb] = 0;
		idxa=lna-1;
		Arrays.fill(lend, -1000000);
		for (int i=lnb-1; i>=0 && idxa>=0; i--) {
			int c = b.charAt(i);
			while (idxa>=0 && c != a.charAt(idxa)) {
				idxa--;
			}
			if (idxa>=0) {
				lend[i] = idxa;
			}
		}
		
	}
	
	private void calculate() {
		calcBEarrays();
		// looking for  fbeg[i]<lend[j] with min j-i,  
		// both fbeg, lend increasing
		int mindif = 10000000;
		int ib=0,ie=0;
		for (; ib<lnb; ib++) {
			while (ie<lnb && lend[ie]<fbeg[ib]) {
				ie++;
			}
			if (ie >= lnb) {
				break;
			}
			if (ie-ib<mindif) {
				mindif = ie-ib;
			}
		}
		sab = b.substring(0, ib) + b.substring(ie,lnb);
	}

	void printRes() {
		if (sab.length()==0) {
			System.out.println("-");
		} else {
			System.out.println(sab);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		TwoStrings l = new TwoStrings();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
