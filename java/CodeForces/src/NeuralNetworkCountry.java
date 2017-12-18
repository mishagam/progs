// CodeForces Round #852 B competition TODO

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class NeuralNetworkCountry {
	
	final static long MOD = 1000000007;

	int n,l,m;
	long npath;
	
	/** counts number of ways between layers */
	class Matr {
		long []np = new long[m];
		int []na = new int[n];
		
		Matr(String s) {
			String []ss = s.split(" ");
			for (int i=0; i<n; i++) {
				int n = Integer.parseInt(ss[i]) % m;
				na[i] = n;
				np[n]++;				
			}
		}
		
		/** copy */
		Matr(Matr b) {
			np = Arrays.copyOf(b.np, m);
			na = Arrays.copyOf(b.na, n);
		}
		
		void mul(Matr b) {
			long []nnp = new long[m];
			for (int i=0; i<m; i++) {
				for (int j=0; j<m; j++) {
					int ij = (i+j) % m;
					long v = (np[i]*b.np[j]) % MOD;
					nnp[ij] += v;
				}
			}
			np = nnp;
			na = null;   // we lost this info
		}		
		
		void add(Matr b) {
			np = new long[m];
			for (int i=0; i<n; i++) {
				na[i] += b.na[i];
			}
			for (int i=0; i<n; i++) {
				int n = na[i];
				np[n]++;				
			}
		}		
		
		long numZero() {
			return np[0] % MOD;					 
		}
	}
	
	Matr ent;
	Matr betw;
	Matr exi;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		l = Integer.parseInt(ss[1]);
		m = Integer.parseInt(ss[2]);
		s = bin.readLine();
		ent = new Matr(s);
		s = bin.readLine();
		betw = new Matr(s);
		s = bin.readLine();
		exi = new Matr(s);
	}

	void printRes() {
		System.out.println(npath);			
	}	

	private void calculate() {
		Matr o = new Matr(ent);
		int l2 = l-2;
		Matr pt = new Matr(betw);
		while (l2>0) {
			if ((l2 & 1) != 0) {
				o.mul(pt);
			}
			pt.mul(pt);
			l2 = l2/2;
		}
		Matr lst = new Matr(betw);
		lst.add(exi);
		o.mul(lst);
		npath = o.numZero();
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		NeuralNetworkCountry l = new NeuralNetworkCountry();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
