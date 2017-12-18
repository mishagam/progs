// CodeForces Round #489 C done - 3 fixes

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ProstPalindrom {

	long p,q;
	long maxn;
	int LEN = 10000020;
	int []prime = new int[LEN];
	int []palin = new int[LEN];
	int []pow10 = new int[]{1,10,100,1000,10000,100000,1000000,10000000};

	private void readData(BufferedReader bin) throws IOException {
		String si = bin.readLine();
		String[] ss = si.split(" ");
		p = Long.parseLong(ss[0]);
		q = Long.parseLong(ss[1]);
	}

	void printRes() {
		if (maxn < 0) {
			System.out.println("Palindromic tree is better than splay tree");
		} else {
			System.out.println(maxn);
		}
	}
	
	void countPrime() {
		int np=0;
		Arrays.fill(prime, 1);
		prime[0] = 0;
		for (int i=2; i<LEN; i++) {
			if (prime[i]==1) {
				for (int j=2;i*j<LEN; j++) {
					prime[i*j] = 0;
				}
			}
		}
		prime[1] = 0;
		for (int i=2; i<LEN; i++) {
			if (prime[i]==1) {
				np++;
			}
			prime[i] = np;
		}
	}
	
	int numLen(int i) {
		int ln=0;
		while (i!=0) {
			ln++;
			i = i/10;
		}
		return ln;
	}
	
	int reverse(int i) {
		int r=0;
		while (i!=0) {
			int d = i%10;
			r = 10*r+d;
			i = i/10;
		}
		return r;
	}
	
	int palinA(int i, int ln) {
		int r = reverse(i);
		int pw = pow10[ln];
		int ret = i*pw + r;
		return ret;
	}
	
	int palinB(int i, int ln) {
		int r = reverse(i/10);
		int pw = pow10[ln-1];
		int ret = i*pw + r;
		return ret;
	}
	
	void countPalin() {
		int np=0;
		Arrays.fill(palin, 0);
		for (int i=1; i<10000; i++) {
			int ln = numLen(i);
			int a = palinA(i,ln);
			int b = palinB(i,ln);
			// System.out.println("i,a,b = "+i+" "+a+" "+b);
			if (a<=LEN) palin[a] = 1;
			if (b<=LEN) palin[b] = 1;
		}
		for (int i=1; i<LEN; i++) {
			if (palin[i]==1) {
				np++;
			}
			palin[i] = np;
		}
	}
	
	private void calculate() {
		maxn = -1;
		countPrime();
		countPalin();
		for (int i=1; i<LEN; i++) {
			if (q*prime[i] <= p*palin[i]) {
				maxn = i;
			}
		}
		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ProstPalindrom l = new ProstPalindrom();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
