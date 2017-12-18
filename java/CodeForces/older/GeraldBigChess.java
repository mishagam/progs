// CodeForces Round #312 B done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class GeraldBigChess {
	class Pair implements Comparable<Pair>{
		int x,y;
		Pair(int x,int y) {
			this.x = x;
			this.y = y;
		}
		@Override
		public int compareTo(Pair o) {
			if (o.x != x) {
				return (x-o.x);
			}
			return (y-o.y);
		}
		
	}

	int h,w,n;
	Pair []pr;
	long []col;
	long []ncol;
	long nways;
	long MOD = 1000000007;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		h = Integer.parseInt(ss[0]);
		w = Integer.parseInt(ss[1]);
		n = Integer.parseInt(ss[2]);
		pr = new Pair[n];
		col = new long[h];
		ncol = new long[h];
		for (int i=0; i<n; i++) {
		    s = bin.readLine();
		    ss = s.split(" ");
			int y = Integer.parseInt(ss[0])-1;
			int x = Integer.parseInt(ss[1])-1;
			pr[i] = new Pair(x,y);
		}
		Arrays.sort(pr);
	}
	
	void printRes() {
		nways = nways % MOD;
		System.out.println(nways);
	}
	
	private void calculate() {
		int ipr=0; // index in pr
		col[0] = 1;
		for (int j=0; j<w; j++) {
			if (ipr>=n || pr[ipr].x != j) {
				// we cannot meet black cells, faster variant
				// col[0] stays the same
				for (int i=1; i<h; i++) {
					col[i] +=col[i-1];
				}
			} else {
				// we have some black cells
				for (int i=0; i<h; i++) {
					if (ipr<n && pr[ipr].x==j && pr[ipr].y==i) {
						col[i] = 0;
						ipr++;
					} else {
						if (i>0) {
							col[i] += col[i-1];
						}
					}
				}
			}
			if (j%3 == 0) {
				for (int i=0; i<h; i++) {
					col[i] = col[i] % MOD;
				}
			}
		}
		nways = col[h-1];
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		GeraldBigChess l = new GeraldBigChess();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
