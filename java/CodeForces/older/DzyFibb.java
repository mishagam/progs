// CodeForces Round #447 B competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DzyFibb {
	
	final long MOD = 1000000009;

	int n,m;
	long []a;
	int [][]cmd;
	long []fib;
	int val;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		s = bin.readLine();
		ss = s.split(" ");
		a = new long[n];
		for (int i=0; i<n; i++) {
			a[i] = Long.parseLong(ss[i]);
		}
		cmd = new int[m][3];
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			for (int j=0; j<3; j++) {
				cmd[i][j] = Integer.parseInt(ss[j]);
			}
		}
	}
	
	void printRes() {
		// System.out.println(val);
	}
	
	private void countFib() {
		fib = new long[n];
		fib[0]  = 1;
		if (n==1) {
			return;
		}
		fib[1] = 1;
		for (int i=2; i<n; i++) {
			fib[i] = (fib[i-1] + fib[i-2]) % MOD;
		}
	}
	
	private void calculate() {
		// search max in w;
		countFib();
		for (int i=0; i<m; i++) {
			int com = cmd[i][0];
			int l = cmd[i][1];
			int r = cmd[i][2];
			if (com==1) {
				// adding fibb
				for (int j=l-1; j<r; j++) {
					a[j] = (a[j] + fib[j-l+1]) % MOD;
				}
			} else {
				// printing sum
				long sum = 0;
				for (int j=l-1; j<r; j++) {
					sum = (sum + a[j]) % MOD;
				}
				System.out.println(sum);
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DzyFibb l = new DzyFibb();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
