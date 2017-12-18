// CodeForces 154 B done (very painfull, about 20 attempt's and 8 hours)

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Collaider {
	int n, m;
	int maxDiv;
	int[] divs;
	boolean[] on;
	int nPrime;
	int[] primes;
	int[] adiv;
	int []apr;

	void countPrimes(int n) {
		apr = new int[n+1];
		for (int i=0; i<=n; i++) {
			apr[i] = 1;
		}
		for (int i = 2; i < n; i++) {
			if (apr[i] > 0) {
				for (int j = i + i; j < n; j += i) {
					apr[j] = 0;
				}
			}
		}
		nPrime = 0;
		for (int i = 2; i <= n; i++) {
			if (apr[i]>0) {
				nPrime++;
			} else {
				apr[i] = -nPrime;
			}
		}
		adiv = new int[nPrime+2];
		primes = new int[nPrime + 10];
		int ip = 0;
		for (int i = 2; i <= n; i++) {
			if (apr[i]>0) {
				apr[i] = ip;
				primes[ip++] = i;
			}
		}
	}
	
	boolean isPrime(int n) {
		return apr[n]>0;
	}

	public Collaider(BufferedReader bin) throws IOException {
		String[] ss = bin.readLine().split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		countPrimes(n+1000);
		divs = new int[nPrime + 10];
		on = new boolean[n + 1];
	}

	int findPrime(int nc) {
		if (apr[nc] > 0) {
			return apr[nc];
		} else {
			return -apr[nc];
		}
	}

	void getDividers(int nc, int[] adiv) {
		int idiv = 0;
		int NSMALL = (int)(20 + 0.10* Math.sqrt(nc));
		int nco = nc;
		int pi=0;
		int N = Math.min(nPrime, NSMALL);
		for (int i = 0; i < N && pi <= nc && nc>1; i++) {
			pi = primes[i];
			if (nc % pi == 0) {
				adiv[idiv++] = i;
				do {
					nc = nc / pi;
				} while (nc % pi == 0);
			} else if (isPrime(nc)) {
				break;
			}
		}
		if (nc > 1) {
			if (isPrime(nc)) {
				int inc = apr[nc];
				if (primes[inc] == nc) {
					adiv[idiv++] = inc;
					nc = 1;
				} else {
					throw new IllegalStateException("should be prime nc = " + nc);
				}
			} else {
				int sqnc = (int) (nc / primes[NSMALL - 1] + 6);
				int inc = findPrime(sqnc) + 2;
				for (int i = inc; i >= NSMALL; i--) {
					pi = primes[i];
					if (nc % pi == 0) {
						adiv[idiv++] = i;
						while (nc % pi == 0) {
							nc = nc / pi;
						}
						if (nc == 1) {
							break;
						}
						if (isPrime(nc)) {
							inc = findPrime(nc);
							adiv[idiv++] = inc;
							nc = 1;
							break;
						}
					} 
				}
			}
		}
		if (nc > 1) {
			throw new IllegalStateException("Couldn't find dividers for " + nco + " remainder " + nc);
		}
		adiv[idiv] = -1;
	}

	String addNum(int nc) {
		if (on[nc]) {
			return "Already on";
		}
		int conflicts = 0;
		int nco = nc;
		getDividers(nc, adiv);
		String sret;
		for (int i = 0; adiv[i] >= 0; i++) {
			int ii = adiv[i];
			if (divs[ii] > 0) {
				conflicts = divs[ii];
				break;
			}
		}
		if (conflicts == 0) {
			nc = nco;
			for (int i = 0; adiv[i] >= 0; i++) {
				int ii = adiv[i];
				divs[ii] = nco;
			}
			sret = "Success";
			on[nco] = true;
		} else {
			sret = "Conflict with " + conflicts;
		}
		return sret;
	}

	String subNum(int nc) {
		if (!on[nc]) {
			return "Already off";
		}
		int nco = nc;
		int ii;
		String sret = "Success";
		getDividers(nc, adiv);
		for (int i = 0; (ii = adiv[i]) >= 0; i++) {
			if (divs[ii] == 0) {
				throw new Error("Incorrect state");
			} else {
				divs[ii] = 0;
			}
		}
		on[nco] = false;
		return sret;
	}

	public void work(BufferedReader bin) throws IOException {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < m; i++) {
			String[] ss = bin.readLine().split(" ");
			String pm = ss[0];
			int nc = Integer.parseInt(ss[1]);
			String s;
			if (pm.equals("+")) {
				s = addNum(nc);
			} else {
				s = subNum(nc);
			}
			sb.append(s).append("\n");
		}
		System.out.println(sb);
	}

	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Collaider c = new Collaider(bin);
		long t0 = System.currentTimeMillis();
		c.work(bin);
		long t1 = System.currentTimeMillis();
		// System.out.println("spend time " + (t1-t0));
		bin.close();
	}

}
