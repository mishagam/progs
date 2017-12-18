// CodeForces Round #873 B competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class BalancedSubstring {

	int n;
	String s;
	int balLen;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		s = bin.readLine();
	}

	void printRes() {
		System.out.println(balLen);
	}
	

	private void calculate() {
		int []ne = new int[n+1];
		int []first = new int[2*n+1];
		for (int i=0; i<2*n+1; i++) {
			first[i] = -1;
		}
		int exc = 0;
		first[n] = 0;
		ne[0] = 0;
		for (int i=0; i<n; i++) {
			int v = (int)(2*(s.charAt(i) - '0') - 1);
			exc = exc + v;
			ne[i+1] = exc; 
			if (first[exc+n] < 0) {
				first[exc+n] = i+1;
			}
		}
		balLen = 0;
		for (int i=n; i>0; i--) {
			int e = ne[i];
			if (first[n+e] != i) {
				int len = i-first[n+e];
				if (balLen<len) {
					balLen = len;
				}
			}
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		BalancedSubstring l = new BalancedSubstring();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
