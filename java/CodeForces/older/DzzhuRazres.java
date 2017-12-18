// CodeForces Round #447 B competition - still doesn't work

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DzzhuRazres {

	int n,m,k;
	long minarea;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		k = Integer.parseInt(ss[2]);
	}
	
	void printRes() {
		System.out.println(minarea);
	}
	
	long maxmin(int n, int k) {
		int r = n/(k+1);
		return r;
	}
	
	private void calculate() {
		if (k>n+m-2) {
			minarea = -1;
			return;
		}
		long o = -1;
		if (m>n) {
			int temp = m; m = n; n = temp;
		}
		int knmin, knmax;
		if (k <1000000) {
			knmin=0; knmax=k;
		} else {
			int mid = (int)((k*1.0*n)/(n+m));
			knmin = Math.max(k/2,  mid - 10000000);
			knmax = mid + 10000000;
			knmax = Math.min(knmax, k);
		}
		int kmx = Math.min(1000, k);
		for (int kn=0; kn<=kmx; kn++) {
			long ln = maxmin(n,kn);
			int km = k - kn;
			long lm = maxmin(m,km);			
 			if (ln*lm > o) {
 				//System.out.println("kn,km, ln,lm,o = " + kn + " " + km + " " + ln + " " + lm + " " + o);
 				minarea = ln*lm;
 				o = minarea;
			}
		}
		for (int km=0; km<=kmx; km++) {
			int kn = k - km;
			long ln = maxmin(n,kn);
			long lm = maxmin(m,km);			
 			if (ln*lm > o) {
 				//System.out.println("kn,km, ln,lm,o = " + kn + " " + km + " " + ln + " " + lm + " " + o);
 				minarea = ln*lm;
 				o = minarea;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DzzhuRazres l = new DzzhuRazres();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
