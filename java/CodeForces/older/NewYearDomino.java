// codeforces 611 C done
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class NewYearDomino {
	public class Request {
		int r1, c1,r2,c2;
		Request(String s) {
			String []ss = s.split(" ");
			r1 = Integer.parseInt(ss[0])-1;
			c1 = Integer.parseInt(ss[1])-1;
			r2 = Integer.parseInt(ss[2])-1;
			c2 = Integer.parseInt(ss[3])-1;
		}
	}
	
	int h; // number of rows
	int w; // number of columns
	char [][]ta;  // table
	int [][]shl;
	int [][]svl;
	int q;  // number of requests
	Request []rq;
	int maxPairs;
	int []nDomino;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		String s = bin.readLine();
		String []ss = s.split(" ");
		h = Integer.parseInt(ss[0]);
		w = Integer.parseInt(ss[1]);
		
		// reading table
		ta = new char[h+1][w+1];
		for (int i=0; i<h; i++) {
			s = bin.readLine();
			for (int j=0; j<w; j++) {
				ta[i][j] = s.charAt(j);
			}
			ta[i][w] = '#';
		}
		for (int j=0; j<w; j++) {
			ta[h][j] = '#';
		}
		
		// reading requests
		s = bin.readLine();
		q = Integer.parseInt(s);
		rq = new Request[q];
		nDomino = new int[q];
		for (int i=0; i<q; i++) {
			s = bin.readLine();
			rq[i] = new Request(s);
		}
		bin.close();
	}
	
	int countReq(Request r) {
		int n1,n2;
		int sum=0;
		for (int i=r.r1; i<=r.r2; i++) {
			n1 = (r.c1>0 ? shl[i][r.c1-1] : 0);
			n2 = (r.c2>0 ? shl[i][r.c2-1] : 0);
			sum += (n2-n1);
			if (i<r.r2) {
				n1 = (r.c1>0 ? svl[i][r.c1-1] : 0);
				n2 = svl[i][r.c2];
				sum += (n2-n1);
			}
		}
		return sum;
	}
	
	void calculate() {
		// initialize 
		shl = new int[h][w];
		svl = new int[h][w];
		
		// filling summ tables
		for (int i=0; i<h; i++) {
			int sh=0, sv=0;
			for (int j=0; j<w; j++) {
				if (ta[i][j]=='.') {
					if (ta[i][j+1]=='.') {
						sh++;
					}
					if (ta[i+1][j]=='.') {
						sv++;
					}					
				}	
				shl[i][j] = sh;
				svl[i][j] = sv;
			}
		}
		// solving requests
		for (int i=0; i<q; i++) {
			int nd = countReq(rq[i]);
			nDomino[i] = nd;
			System.out.println(nDomino[i]);
		}
		
	}
	
	void writeRes() throws IOException {
		for (int i=0; i<q; i++) {
			// System.out.println(nDomino[i]);
		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		NewYearDomino p = new NewYearDomino();
		//p.testBinLine();
		//return;
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
