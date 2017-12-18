// CodeForces Round #844 B done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Rectangles {

	int n,m;
	int [][]a;
	long nset;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		// read t
		a = new int[n][m];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			for (int j=0; j<m; j++) {
				a[i][j] = Integer.parseInt(ss[j]);
			}	
		}
	}

	void printRes() {
		System.out.println(nset);
	}	
	
	long num_sets(int nn) {
		long ns = (((long)1)<<nn) - 1 - nn;
		return ns;
	}

	private void calculate() {
		// count number of 1 in rows and columns
		nset = n*m;
		int []nro = new int[n];
		int []nco = new int[m];
		for (int i=0; i<n; i++) {
			for (int j = 0; j < m; j++) {
				if (a[i][j]==1) {
					nro[i]++;
					nco[j]++;
				}
			}
		}
		// count rows
		for (int i=0; i<n; i++) {
			int n1 = nro[i];
			int n0 = m - nro[i];
			nset += num_sets(n0);
			nset += num_sets(n1);
		}
		// count columns
		for (int j=0; j<m; j++) {
			int n1 = nco[j];
			int n0 = n - nco[j];
			nset += num_sets(n0);
			nset += num_sets(n1);
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Rectangles l = new Rectangles();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
