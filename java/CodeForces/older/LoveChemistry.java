// CodeForces Round #254 div 2 B

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

public class LoveChemistry {
	
	final static int MAXN = 100;
	int n,m;
	int [][]c;
	long maxOp = 0;
	Set<Integer> conn = new HashSet<Integer>();
	int nconn;
	int []ga = new int[MAXN];
	
	void addNum(int a) {
		if (!conn.contains(a)) {
			conn.add(a);
			ga[a] = conn.size();
		}
	}
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		c = new int[n][n];
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			int a = Integer.parseInt(ss[0])-1;
			int b = Integer.parseInt(ss[1])-1;
			addNum(a);
			addNum(b);
			c[a][b] = c[b][a] = 1;
		}
		nconn = conn.size();
		bin.close();
	}
	
	void printRes() {
		System.out.println(maxOp);
	}
	
	private void calculate() {
		int ng = nconn;
		int from,to;
		
		for (int i=0; i<n; i++) {
			if (ga[i] == 0) {
				continue;
			}
			for (int j=i+1; j<n; j++) {
				if (ga[j]==0 || c[i][j]==0 || ga[i]==ga[j]) {
					continue;
				}
				if (ga[i] < ga[j]) {
					from = ga[j];
					to = ga[i];					
				} else {
					from = ga[i];
					to = ga[j];
				}
				for (int k=0; k<n; k++) {
					if (ga[k] == from) {
						ga[k] = to;
					}
				}
				ng--;				
			}
		}
		maxOp = 1;
		for (int i=0; i<nconn - ng; i++) {
			maxOp *= 2;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		LoveChemistry l = new LoveChemistry();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
