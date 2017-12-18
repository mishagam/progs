// codeforces 574 B
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MishkaMusket {
	int n,m;
	int []a;
	int []b;
	int []nc;
	boolean [][]conn;
	int minUzn = 1000000999;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		a = new int[m];
		b = new int[m];
		conn = new boolean[n][n];
		nc = new int[n];
		for (int i=0; i<m; i++) {
			sss = bin.readLine();
			ss = sss.split(" ");
			a[i] = Integer.parseInt(ss[0])-1;
			b[i] = Integer.parseInt(ss[1])-1;
			conn[a[i]][b[i]] = true;
			conn[b[i]][a[i]] = true;
			nc[a[i]] ++;
			nc[b[i]] ++;
		}
	}
	
	// we need to use max flow algorithm
	void calculate() {
		for (int i=0; i<m; i++) {
			int u = nc[a[i]] + nc[b[i]];
			for (int j=0; j<n; j++) {
				if (conn[j][a[i]] && conn[j][b[i]]) {
					int uu = u + nc[j] - 6;
					if (uu < minUzn) {
						minUzn = uu;
					}
				}
			}
		}
		if (minUzn > 1000000000) {
			minUzn = -1;
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(minUzn);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		MishkaMusket p = new MishkaMusket();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
