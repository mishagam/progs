// CodeForces Round #569 D - done (after competition)

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class SimmTransitive {

	int n;
	long nret;
	final long MOD=1000000007; 
	int [][]memCEN;
	int [][]memCNK;
	final static int MAXN=4001;

	private void readData(BufferedReader bin) throws IOException {
		String si = bin.readLine();
		String[] ss = si.split(" ");
		n = Integer.parseInt(ss[0]);
		memCEN = new int[MAXN][MAXN];
		memCNK = new int[MAXN][MAXN];
	}

	void printRes() {
		System.out.println(nret);
	}
	
	/**
	 * count number divisions in equivalent sets 
	 * @param n - number elements < 4000
	 * @param g - number groups (not empty) < n
	 * @return - number of razb module MOD
	 */
	long countEqvNg(int n, int g) {
		if (n==0 && g==1) return 1;
		if (g>n || g<=0) return 0;
		if (n==0) return 0;
		if (g==n) return 1;
		if (memCEN[n][g] >= 0) {
			return memCEN[n][g];
		}
		long s=0;
		s = (countEqvNg(n-1, g)*g) % MOD;
		s += countEqvNg(n-1, g-1) % MOD;
		memCEN[n][g] = (int)(s%MOD);
		return s;
	}
	
	long countEqvTot(int n) {
		long s=0;
		if (n==0) return 1;
		for (int g=0; g<=n; g++) {
			long a = countEqvNg(n, g);
			s = (s + a) % MOD;
		}
		return s;
	}
	
	/**
	 * Pascal, subsets size k in n
	 * @param n - size elem
	 * @param k - size subset
	 * @return - number ways mod MOD
	 */
	long countCnk(int n, int k) {
		if (n<0) return 0;
		if (k>n || k<0) return 0;
		if (k==n || k==0) return 1;
		if (memCNK[n][k]>=0) return memCNK[n][k];
		long s = (countCnk(n-1, k) + countCnk(n-1, k-1)) % MOD;
		memCNK[n][k] = (int)(s % MOD);
		return s;
	}	
	
	long countWrong(int n) {
		long s = 0;
		for (int nw=1; nw<=n; nw++) {
			long a = countCnk(n, nw);
			long b = countEqvTot(n-nw);
			s += (a*b);
			s = s % MOD;
		}				
		return s;
	}
	
	void fillMem() {
		for (int i=0; i<MAXN; i++) {
			for (int j=0; j<MAXN; j++) {
				memCEN[i][j] = -1;
				memCNK[i][j] = -1;
			}
		}
	}


	private void calculate() {
		fillMem();
		for (int nn=0; nn<8; nn++) {
			for (int g=0; g<=nn; g++) {
				long c = countEqvNg(nn, g);
				// System.out.printf("nn,g,c = %d %d %d\n", nn,g,c);
			}
		}
		for (int nn=0; nn<8; nn++) {
			for (int g=0; g<=nn; g++) {
				long c = countCnk(nn, g);
				//System.out.printf("Cnk(%d, %d) = %d\n", nn,g,c);
			}
		}
		nret = countWrong(n);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SimmTransitive l = new SimmTransitive();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
