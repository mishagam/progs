import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Cactus {
	int n;
	int m;
	boolean [][]r;
	int []cycl;
	int []oa;
	int cycleIdx = 0;
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		r = new boolean[n][n];
		cycl = new int[n]; // number of cycle
		for (int i=0; i<m; i++) {
			ss = (bin.readLine()).split(" ");
			int a = Integer.parseInt(ss[0]);
			int b = Integer.parseInt(ss[1]);
			r[a-1][b-1] = r[b-1][a-1] = true;			
		}
	}
	
	void recordCycle(int last, int first, int d) {
		cycleIdx ++;
		cycl[last] = cycleIdx;		
		while (last != first) {
			d = d-1;
			for (int j=0; j<n; j++) {
				if (r[j][last] && oa[j]==d) { 
					oa[j] = d;
					last = j;
					cycl[last] = cycleIdx;
					break;
				}
			}
		}
	}
	
	void dfs(int ii, int d) {
		oa[ii] = d;
		for (int j=0; j<n; j++) {
			if (r[ii][j]) {
				if (oa[j] == 0) {
					dfs(j, d+1);
				} else {
					recordCycle(ii, j, d);
				}
			}
		}		
	}
	
	void findCycles() {
		oa = new int[n];
		for (int ii = 0; ii<n; ii++) {
			if (oa[ii]==0) {
				dfs(ii, 1);
			}
		}
		
	}
	void printCycles() {
		for (int i=0; i<n; i++) {
			System.out.println("cycl,oa= " + cycl[i] + " " + oa[i]);
		}
	}
	
	int ndist(int a, int b) {
		return 999;
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		Cactus c = new Cactus();
		c.readData(bin);
		c.findCycles();
		c.printCycles();
		int kk = Integer.parseInt(bin.readLine());
		for (int k=0; k<kk; k++) {
			String []ss = (bin.readLine()).split(" ");
			int a = Integer.parseInt(ss[0]) - 1;
			int b = Integer.parseInt(ss[1]) - 1;
			int dist = c.ndist(a,b);
			System.out.printf("a, b = %d %d  dist = %d\n", a,b,dist);
		}
	}

}
