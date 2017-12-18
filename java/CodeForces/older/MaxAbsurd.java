// CodeForces Round #332 B Done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class MaxAbsurd {

	int n,k;
	long []x;
	long []sx;
	long []revma;  /// max absurd starting from the end
	int []revidx;  /// index max absurd starting from the end
	long maxAbs;
	int maxAidx;
	int maxArevIdx;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
		x = new long[n];
		sx = new long[n];
		revma = new long[n];
		revidx = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			x[i] = Long.parseLong(ss[i]);
		}
	}
	
	void printRes() {
		System.out.println((maxAidx+1) + " " + (maxArevIdx+1));
	}
	
	private void calculate() {
		// calculate sx;
		for (int i=0; i<k; i++) {
			sx[0] += x[i];
		}
		for (int i=1; i<n-k+1; i++) {
			sx[i] = sx[i-1] + x[i+k-1] - x[i-1];
		}
		// calculating rev
		revma[n-k] = sx[n-k];
		revidx[n-k] = n-k;
		for (int i = n-k-1; i>=0; i--) {
			long a = sx[i];
			if (a<revma[i+1]) {
				revma[i] = revma[i+1];
				revidx[i] = revidx[i+1];
			} else {
				revma[i] = a;
				revidx[i] = i;
			}
		}
		
		// calculating optimum
		maxAbs = -1000000000;
		for (int i=0; i<n-k; i++) {
			long a = sx[i] + revma[i+k];
			if (a > maxAbs) {
				maxAbs = a;
				maxAidx = i;
				maxArevIdx = revidx[i+k];
			}
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		MaxAbsurd l = new MaxAbsurd();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
