// CodeForces Round #479 E after competition

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class KataemLift {
	
	class OneMatr {
		long [][]m;
		int n;
		
		OneMatr(int na) {
			n = na;
			m = new long[n][n];
		}
		OneMatr(int na, int b) {
			this(na);
			for (int a=0; a<b-1; a++) {
				int d = b-a-1;
				int i0 = (a-d<0 ? 0 : a-d);
				for (int i=i0; i<=a+d; i++) {
					if (i!=a) {
						m[i][a] ++;
					}				
				}
			}
		}
		
		OneMatr mul(OneMatr o) {
			OneMatr r = new OneMatr(n);
			for (int i=0; i<n; i++) {
				for (int j=0; j<n; j++) {
					long s = 0;
					for (int k=0; k<n; k++) {
						s = s + m[i][k]*o.m[k][j];
						s = s % MOD;
					}
					r.m[i][j] = s;
				}
			}
			return r;
		}
		
		long countPaths(int a) {
			long s = 0;
			for (int j=0; j<n; j++) {
				s = s + m[k][a];
				s = s % MOD;
			}
			return s;
		}
	}

	final static long MOD = 1000000007; 
	final static int MAXPOWER = 13;  // 2 ^ MP > 5000
	int n,a,b,k;
	int val;
	OneMatr []p2 = new OneMatr[MAXPOWER+1];

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String[] ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		a = Integer.parseInt(ss[1]);
		b = Integer.parseInt(ss[2]);
		k = Integer.parseInt(ss[3]);
	}

	void printRes() {
		System.out.println(val);
	}
	
	

	private void calculate() {
		if (b - a < 2) {
			val = 0;
			return;
		}
		p2[0] = new OneMatr(n, b);
		for (int i=1; i<MAXPOWER; i++) {
			p2[i] = p2[i-1].mul(p2[i-1]);
		}
		OneMatr r = null;
		for (int i=0; k>0; i++, k=k/2) {
			if (k%2 != 0) {
				if (r==null) {
					r = p2[i];
				} else {
					r = r.mul(p2[i]);
				}
			}
		}
		val = (int)r.countPaths(a);
	}

	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		KataemLift l = new KataemLift();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
