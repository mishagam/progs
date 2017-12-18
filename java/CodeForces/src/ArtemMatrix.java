// CodeForces Round #669 C competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ArtemMatrix {

	int n,m,q;
	int [][]a;
	int []qq;
	int []rq;
	int []cq;
	int []xq;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		q = Integer.parseInt(ss[2]);
		a = new int[n][n];
		qq = new int[q];
		rq = new int[q];
		cq = new int[q];
		xq = new int[q];
		for (int i = 0; i < q; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			qq[i] = Integer.parseInt(ss[0]);	
			if (qq[i]==1) {
				rq[i] = Integer.parseInt(ss[1])-1;
			} else if (qq[i]==2) {
				cq[i] = Integer.parseInt(ss[1])-1;
			} else {
				rq[i] = Integer.parseInt(ss[1])-1;
				cq[i] = Integer.parseInt(ss[2])-1;
				xq[i] = Integer.parseInt(ss[3]);				
			}
		}
	}

	void printRes() {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				System.out.print(a[i][j] + " ");
			}
			System.out.println();			
		}
	}	

	private void calculate() {
		// execute commands backward
		for (int k=q-1; k>=0; k--) {
			if (qq[k]==3) {
				a[rq[k]][cq[k]] = xq[k];
			} else if (qq[k]==1) {
				// shift row right
				int ii = rq[k];
				int t = a[ii][m-1];
				for (int j=m-1; j>0; j--) {
					a[ii][j] = a[ii][j-1];
				}
				a[ii][0] = t;
			} else {
				// shift 
				int jj = cq[k];
				int t = a[n-1][jj];
				for (int i=n-1; i>0; i--) {
					a[i][jj] = a[i-1][jj];
				}
				a[0][jj] = t;
			}			
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ArtemMatrix l = new ArtemMatrix();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
