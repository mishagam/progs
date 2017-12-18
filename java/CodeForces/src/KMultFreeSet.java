// CodeForces Round #274 A train done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class KMultFreeSet {

	int n;
	long k;
	long []a;
	int maxSubs;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
		// read a
		a = new long[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(maxSubs);
	}	
	
	

	private void calculate() {
		Arrays.sort(a);
		boolean []used = new boolean[n];
		maxSubs = n;
		for (int i=0; i<n; i++) {
			if (used[i]) {
				continue;
			}
			used[i]=true;
			int ii = i;
			long ai = a[ii];
			int ng = 1;  // number elements in k group
			while (ii<n) {
				int f = Arrays.binarySearch(a, ii+1, n, (k*ai));
				if (f>=0) {
					ng++;
					used[f] = true;
					ii = f;
					ai = a[ii];					
				} else {
					break;
				}				
			}
			if (ng>1) {
				maxSubs -= (ng/2);
			}			
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		KMultFreeSet l = new KMultFreeSet();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
