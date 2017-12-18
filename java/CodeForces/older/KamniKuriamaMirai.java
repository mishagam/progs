// CodeForces Round #433B competition

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class KamniKuriamaMirai {
	
	int n,m;
	int []v;
	int []u;  // sorted v
	long []sv;
	long []su;
	long []ans;
	int []tp;
	int []l;
	int []r;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		n = Integer.parseInt(s);
		v = new int[n];
		u = new int[n];
		sv = new long[n+1];
		su = new long[n+1];
		s = bin.readLine();
		String []ss = s.split(" ");
		for (int i=0; i<n; i++) {
			v[i] = Integer.parseInt(ss[i]);
		}
		s = bin.readLine();
		m = Integer.parseInt(s);
		ans = new long[m];
		tp = new int[m];
		l = new int[m];
		r = new int[m];
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			tp[i] = Integer.parseInt(ss[0]);
			l[i] = Integer.parseInt(ss[1])-1;
			r[i] = Integer.parseInt(ss[2]);
		}
	}
	
	void printRes() {
		for (int i=0; i<m; i++) {
			System.out.println(ans[i]);
		}
	}
	
	private void calculate(BufferedReader bin) throws IOException {
		// prepare arrays
		u = Arrays.copyOf(v, n);
		ArrayList<Integer> au = new ArrayList<Integer>();
		for (int i : u) {
			au.add(i);
		}
		Collections.sort(au);
		for (int i=0; i<n; i++) {
			u[i] = au.get(i).intValue();
		}
		// calculate sums
		sv[0] = 0;
		su[0] = 0;
		for (int i=1; i<=n; i++) {
			sv[i] = sv[i-1] + v[i-1];
			su[i] = su[i-1] + u[i-1];
		}		
		// we will read question one by one
		for (int i=0; i<m; i++) {
			if (tp[i]==1) {
				ans[i] = sv[r[i]] - sv[l[i]];
			} else {
				ans[i] = su[r[i]] - su[l[i]];
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		KamniKuriamaMirai l = new KamniKuriamaMirai();
		l.readData(bin);
		l.calculate(bin);
		l.printRes();
	}
}
