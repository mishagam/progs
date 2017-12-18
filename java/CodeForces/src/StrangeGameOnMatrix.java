// CodeForces Round #873 A competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class StrangeGameOnMatrix {

	int n,m,k;
	int [][]a;
	int maxScore, minRepl;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		k = Integer.parseInt(ss[2]);
		a = new int[n][];
		for (int i=0; i<n; i++) {
			sss = bin.readLine();
			ss = sss.split(" ");
			a[i] = new int[m];
			for (int j=0; j<m; j++) {
				a[i][j] = Integer.parseInt(ss[j]);
			}
		}
	}

	void printRes() {
		System.out.println(maxScore + " " + minRepl);
	}
	

	private void calculate() {
		for (int j=0; j<m; j++) {
			// count sums from back
			int sum = 0;
			int maxi = -1;
			int maxs = -1;
			for (int i = n-1; i>=0; i--) {
				if (i<n-k) {
					sum -= a[i+k][j];
				}
				sum += a[i][j];
				if (sum >= maxs) {
					maxs = sum;
					maxi = i;
				}				
			}
			// adding maxs to score
			maxScore += maxs;
			// removing bad 1
			for (int i=maxi-1; i>=0; i--) {
				if (a[i][j]==1) {
					minRepl++;
				}
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		StrangeGameOnMatrix l = new StrangeGameOnMatrix();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
