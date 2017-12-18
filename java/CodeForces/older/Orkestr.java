// codeforces 635A
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Orkestr {
	int r,c,n,k;
	int nPhoto = 0;
	int [][]alt;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		r = Integer.parseInt(ss[0]);
		c = Integer.parseInt(ss[1]);
		n = Integer.parseInt(ss[2]);
		k = Integer.parseInt(ss[3]);
		
		alt = new int[r][c];
		for (int i=0; i<n; i++) {
			sss = bin.readLine();
			ss = sss.split(" ");
			int y = Integer.parseInt(ss[0]);
			int x = Integer.parseInt(ss[1]);
			alt[y-1][x-1] = 1;
		}
	}
	
	// we need to use max flow algorithm
	void calculate() {
		nPhoto=0;
		int [][]sumr = new int[r][c];
		int []sum1 = new int[c];
		for (int i=0; i<r; i++) {
			int sm = 0;
			for (int j=0;j<c;j++) {
				sm += alt[i][j];
				sumr[i][j] = sm;
			}
		}
		// counting
		for (int i0=0; i0<r; i0++) {
			// clearing sum1
			for (int j=0; j<c; j++) {
				sum1[j] = 0;
			}
			for (int i1=i0; i1<r; i1++) {
				// updating sum1;
				for (int j=0; j<c; j++) {
					sum1[j] += sumr[i1][j];
				}
				// counting photos with rows from i0 to i1
				for (int j0=0; j0<c; j0++) {
					int osum = (j0==0 ? 0 : sum1[j0-1]);
					for (int j1=j0; j1<c; j1++) {						
						if (sum1[j1] - osum >= k) {
							nPhoto++;
						}
					}
				}
			}
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(nPhoto);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Orkestr p = new Orkestr();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
