// CodeForces Round #667 D competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class WorldTour {

	int n,m;
	int [][]d;
	int []ea;
	int []eb;
	int []ret;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read a
		d = new int[n][n];
		ea = new int[m];
		ea = new int[m];
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			ea[i] = Integer.parseInt(ss[0]);
			eb[i] = Integer.parseInt(ss[1]);
		}
		for (int i=0; i<n; i++) {
			for (int j=0; j<n; j++) {
				d[i][j] = -1;
			}
			d[i][i] = 0;
		}
	}

	void printRes() {
		for (int i=0; i<4; i++) {
			System.out.println(ret[i] + " ");
		}
	}	
	
	void calcD() {
		for (int k=0; k<n; k++) {
			
		}
	}

	private void calculate() {
		// XXX

	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		WorldTour l = new WorldTour();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
