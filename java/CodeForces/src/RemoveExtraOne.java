// CodeForces Round #673 A competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class RemoveExtraOne {
	
	class TwoTop {
		int max;
		int nxt;
		
		TwoTop() {
			max = 0;
			nxt = 0;
		}
		
		int addNumb(int a) {
			if (a>max) {
				nxt = max;
				max = a;
				return 0; 
			} else if (a<max && a>nxt) {
				nxt = a;
				return max;				
			} else if (a < nxt) {
				return -1;
			} else {
				throw new IllegalStateException("illegal a = " + a);
			}
		}
	}

	int n;
	int []p;
	int rem;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read t
		p = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			p[i] = Integer.parseInt(ss[i]);
		}		
	}

	void printRes() {
		System.out.println(rem);
	}	

	private void calculate() {
		rem = 1;
		TwoTop tt = new TwoTop();
		int []ra = new int[n+1];  // influence on sum ratings, > better
		int maxp = -1;
		for (int i=0; i<n; i++) {
			if (p[i]>maxp) {
				maxp = p[i];
				ra[maxp] ++;
			}
		}
		for (int i=0; i<n; i++) {
			int prem = tt.addNumb(p[i]);
			if (prem>0) {
				ra[prem]--;
			} 
		}
		int minrem = 5;
		for (int i=1; i<=n; i++) {
			if (ra[i]<minrem) {
				minrem = ra[i];
				rem = i;
			} 
		}
		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		RemoveExtraOne l = new RemoveExtraOne();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
