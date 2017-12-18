// CodeForces Round #608 D done, after reading answer

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class RazbText {

	int n,p,q;
	String s;
	int npa;
	String []parts;
	
	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		p = Integer.parseInt(ss[1]);
		q = Integer.parseInt(ss[2]);
		
		// allocations
		s = bin.readLine();
	}
	
	void printRes() {
		System.out.println(npa);
		if (npa>0) {
			for (int i = 0; i < parts.length; i++) {
				System.out.println(parts[i]);
			}
		}
	}
	
	
	/** mostly count d */
	private void calculate() {
		npa = -1;
		int np=0,nq=0;
		for (int i=0; i<100; i++) {
			int no = s.length() - i*p;
			if (no<0) {
				break;
			} else if (no%q==0) {
				np = i;
				nq = no/q;
				npa = np+nq;
			}
		}
		if (npa>0) {
			parts = new String[npa];
			int pp = 0;
			for (int i=0; i<np; i++) {
				parts[i] = s.substring(pp, pp+p);
				pp += p;
			}
			for (int i=0; i<nq; i++) {
				parts[np+i] = s.substring(pp, pp+q);
				pp += q;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		RazbText l = new RazbText();
		l.readData(bin);
		l.calculate(); 
		l.printRes();
	}
}
