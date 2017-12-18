// CodeForces Round #608 D done, after reading answer

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Zuma {

	int n;
	int []c;
	int [][]d;    // mintime i .. j
	int []nc;     // number of char c
	int [][]iic;  // indexes of char c
	int minSec;
	
	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		
		// allocations
		c = new int[n];
		d = new int[n][n+1];
		nc = new int[n+1];
		iic = new int[n+1][n];
		
		// read c
		sss = bin.readLine();
		ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			int cc  = Integer.parseInt(ss[i]);
			c[i] = cc;
			iic[cc][nc[cc]] = i;
			nc[cc]++;			
		}
	}
	
	void printRes() {
		System.out.println(minSec);
	}
	
	int countd(int i, int ln) {
		if (ln<1) {
			return 0;
		} else if (d[i][ln] > 0) {
			return d[i][ln];
		}
		int mins = 1 + countd(i+1,ln-1);
		int ms = mins;
		int cc = c[i];
		int []ic = iic[cc];
		int fi = Arrays.binarySearch(ic,0, nc[cc], i);
		if (fi < 0) {
			throw new IllegalStateException("index "+i+" not in indexes for "+cc);
		}
		for (int j=fi+1; j<nc[cc]; j++) {
			int io = ic[j];
			if (io > i + ln-1) {
				break;
			}
			int dd = d[i+1][io-i-1];
			if (dd==0) dd = 1;
			ms = countd(io+1, ln - (io-i)-1);
			ms = ms + dd;
			if (ms<mins) {
				mins = ms;
			}
		}
		
		return mins;
	}
	
	/** mostly count d */
	private void calculate() {
		for (int i=0; i<n; i++) {
			d[i][1] = 1;
		}
		for (int ln = 2; ln<=n; ln++) {
			for (int i=0; i<n-ln+1; i++) {
				d[i][ln] = countd(i, ln);
			}			
		}
		minSec = d[0][n];
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Zuma l = new Zuma();
		l.readData(bin);
		l.calculate(); 
		l.printRes();
	}
}
