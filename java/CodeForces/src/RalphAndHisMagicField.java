// CodeForces Round #894 B competition not done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class RalphAndHisMagicField {

	long n,m;
	int k;
	long numWays = 0;
	final static long MOD = 1000000007;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Long.parseLong(ss[0]);
		m = Long.parseLong(ss[1]);
		k = Integer.parseInt(ss[2]);
	}

	void printRes() {
		System.out.println(numWays);
	}	

	private void calculate() {
		numWays = 0;
	}
	
	long [][]pasc;
	long [][][]mem;  // mem 1
	
	/**
	 * pasc[i][j] = pasc[i-1][j-1] + pasc[i-1][j]
	 * @param nmax
	 */
	void countPasc(int nmax) {
		pasc = new long[nmax][nmax];
		pasc[0][0] = 1;
		for (int i=1; i<nmax; i++) {
			pasc[i][0] = 1;
			pasc[i][i] = 1;
			for (int j=1; j<i; j++) {
				pasc[i][j] = pasc[i-1][j-1] + pasc[i-1][j];
			}
		}		
	}
	
	/**
	 * count numWays for small cases < nmax
	 * kk = 0 col 1 row 1
	 * kk = 1 col 1 row -1
	 * kk = 2 col -1 row 1
	 * kk = 3 col -1 row -1
	 * 
	 * @param na - number of rows
	 * @param ma - number of cols
	 * @param kk - showd be - or -1
	 * @return nWays
	 */
	long countOne(int na, int ma, int kk) {
		long cnt = 0;
		if (mem[na][ma][kk]!=-1) {
			return mem[na][ma][kk];
		} else if (na==0 || ma==0) {
			if (kk==0) {
				cnt = 1;
			}
			mem[na][ma][kk] = cnt;
			return cnt;
		}
		int n1;  // number of 1 in last line, must be 
		int m1;  // number of 1 int last column
		for (n1=na%2; n1<=na; n1+=2) {
			for (m1=ma%2; m1<=ma; m1++) {
				for (int ki=0; ki<4; ki++) {
					int nn = ((ki&2)==0 ? n1 : na-n1);
					int mm = ((ki&1)==0 ? m1 : ma-m1);
					int kkk = ki ^ kk;
					long ccc = pasc[na][nn] * pasc[ma][mm] * countOne(nn,mm,kkk);
					cnt += ccc;
				}
			}
		}		
		mem[na][ma][kk] = cnt;
		return cnt;
	}
	
	void printSlice(int kk) {
		int nn = 10;
		for (int i=0; i<10; i++) {
			System.out.printf("%3d: ", i);
			for (int j=0; j<nn; j++) {
				System.out.printf("%8d ", mem[i][j][kk]);
			}
			System.out.println();
		}
		System.out.println();
	}
	
	void testTre(int nmax) {
		// initialize memp,memn
		mem = new long[nmax][nmax][4];
		for (int i=1; i<nmax; i++) {
			for (int j=0;j<nmax; j++) {
				for (int k=0; k<4; k++) {
					mem[i][j][k] = -1;
				}
			}			
		}
		countPasc(nmax);
		countOne(nmax-1, nmax-1, 0);
		for (int kk=0; kk<4; kk++) {
			printSlice(kk);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		RalphAndHisMagicField l = new RalphAndHisMagicField();
		l.testTre(12);
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
