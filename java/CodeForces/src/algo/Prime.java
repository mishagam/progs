package algo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Prime {
	
	final static int MAXN = 3000;
	boolean []bn = new boolean[MAXN];
	int nPrime;
	int []primes;
	
	void preparePrimes() {
		List<Integer> lpr = new ArrayList<>();
		Arrays.fill(bn, true);
		for (int i=2; i<MAXN; i++) {
			if (bn[i]) {
				lpr.add(i);
				for (int j=i+i; j<MAXN; j+=i) {
					bn[j] = false;
				}
			}
		}
		nPrime = lpr.size();
		primes = new int[nPrime];
		for (int i=0; i<nPrime; i++) {
			primes[i] = lpr.get(i);
		}		
	}
	
	void printPrimes() {
		System.out.println("nPrimes = " + nPrime);
		for (int i=0; i<nPrime; i++) {
			System.out.print(" " + primes[i]);
		}
		System.out.println();
	}
	
	
	public static void main(String[] args) {
		Prime p = new Prime();
		p.preparePrimes();
		p.printPrimes();
		
		
	}

}
