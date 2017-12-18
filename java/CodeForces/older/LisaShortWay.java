// CodeForces Round #228 div 2 D

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class LisaShortWay {
	
	final static int MAXN = 100;
	int k;
	int n=0;
	char [][]g;
	int []da = new int[MAXN];
	int []db = new int[MAXN];	
	int na,nb;
	boolean useA;
	int lastIdx = 2;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		k = Integer.parseInt(ss[0]);
		bin.close();
	}
	
	void printRes() {
		System.out.println(n);
		for (int i=0; i<n; i++) {
			for (int j=0; j<n; j++) {
				System.out.print(g[i][j]);
			}
			System.out.println();
		}		
	}
	
	int sumDiv(int n, int []dv, int idv, int mindv) {
		if (n<2) {
			for (int i=idv; i<MAXN; i++) {
				dv[i] = 0;
			}
			return 0;
		} 
		int sumd = n;
		for (int d=mindv; d<500; d++) {
			if ((n % d) == 0) {
				dv[idv++] = d;
				sumd = d + sumDiv(n/d, dv, idv, d);
				return sumd;
			}			
		}
		dv[idv++] = n;  // prime number
		for ( ; idv<dv.length; idv++) {
			dv[idv] = 0;
		}
		return n;
	}
	
	int ndiv(int []dv) {
		for (int i=0; i<MAXN; i++) {
			if (dv[i]==0) {
				return i;
			}
		}
		return -1;
	}
	
	/**
	 * add one more group
	 * @param lstStart
	 * @param lastLen
	 * @param start
	 * @param len
	 */
	void addGroup(int lstStart, int lastLen, int start, int len) {
		for (int i=lstStart; i<lstStart + lastLen; i++) {
			for (int j=start; j<start+len; j++) {
				g[i][j] = 'Y';
				g[j][i] = 'Y';	
			}
		}		
	}
	
	/**
	 * connect last group to 2
	 * @param lastStart
	 * @param lastLen
	 */
	void finishSeria(int lastStart, int lastLen) {
		int j = 1;
		for (int i=lastStart; i<lastStart + lastLen; i++) {
			g[i][j] = 'Y';
			g[j][i] = 'Y';			
		}		
	}
	
	void addSeria(int []da, int plen, int startIdx) {
		int lastStart = 0;
		int lastLen = 1;
		int ip;
		int curStart=0, curLen=0;
		
		for (ip=0; ip<plen; ip++) {
			if (ip>0) {
				lastStart = curStart;
				lastLen = curLen;
			} else {
				lastStart = 0;
				lastLen = 1;
			}
			curStart = startIdx;
			curLen = da[ip];
			if (da[ip] < 2) {
				curLen = 1;
			}
			addGroup(lastStart, lastLen, curStart, curLen);
			startIdx += curLen;			
		}
		lastIdx = startIdx;
		// connect last group to 2
		finishSeria(curStart, curLen);	
	}
	
	private void calculate() {
		if (k==1) {
			n = 3;
			g = new char[3][3];
			for (int i=0; i<3; i++) {
				for (int j=0; j<3; j++) {
					g[i][j] = 'N';
				}				
			}
			g[0][2] = g[1][2] = g[2][0] = g[2][1] = 'Y';
			return;
		}
		int minsum = 100000, mina=0;
		int a,b;
		for (a = 0; a<1000 && a < k; a++) {
			b = k - a;
			na = sumDiv(a, da, 0, 2);
			nb = sumDiv(b, db, 0, 2);
			int sum = na + nb;
			if (a==0 && nb<200) {
				useA = false;
				mina=0;
				break;
			} else if (sum<minsum) {
				useA = true;
				// System.out.printf("found a,b , na nb = %d %d %d %d\n",a,b,na,nb);
				mina = a;
				minsum = sum;
			}			
		}
		a = mina;
		b = k - a;
		na = sumDiv(a, da, 0, 2);
		nb = sumDiv(b, db, 0, 2);
		
		// generatirn g
		int nna = ndiv(da);
		int nnb = ndiv(db);		
		int plen = Math.max(nna,  nnb);
		int dlen = Math.abs(nna - nnb);
		n = na + nb + dlen + 2;
		g = new char[n][n];
		for (int i=0; i<n; i++) {
			for (int j=0; j<n; j++) {
				g[i][j] = 'N';
			}
		}
		addSeria(db, plen, lastIdx);
		if (useA) {
			addSeria(da, plen, lastIdx);
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		LisaShortWay l = new LisaShortWay();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
