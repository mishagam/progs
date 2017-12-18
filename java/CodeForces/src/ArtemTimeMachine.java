// CodeForces Round #669 C competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class ArtemTimeMachine {
	
	class Request {
		int a;  // type 1 add, 2 - remove, 3 ask
		int t;  // time
		int x;  // key
		int idx;
		long ans;  // answer in case of ask
	}
	class SegmentTree {
		
		final int LEAF = 1<<17; // about 128000 > 100000
		int leaf;     // variable size
		
		long []tree = new long[LEAF+LEAF];
		
		void upd(int x, long v) {
			x += leaf;
			tree[x] = v;
			while ((x >>= 1) != 0) {
				tree[x] = tree[x+x] + tree[x+x+1];
			}		
		}

		long get (int x, int y) {
			long ret = 0;
			x += leaf; 
			y += leaf;
			while(x <= y) {
				if( (x & 1) !=0) ret += tree[x];
				if((~y & 1) !=0) ret += tree[y];
				x = (x+1) >> 1;
				y = (y-1) >> 1;
			}
			return ret;
		}
		
		void clear(int la) {
			leaf = 2;
			while (leaf<=la) {
				leaf *= 2;
			}
			for (int i=0; i<leaf+leaf; i++) {
				tree[i] = 0;
			}
		}
	}

	int n;  // number of requests
	Request []ra;
	int nt;
	int []ta;
	SegmentTree st;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// reading requests
		ra = new Request[n];
		ta = new int[n];
		for (int i = 0; i < n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			Request r = new Request();
			r.a = Integer.parseInt(ss[0]);
			r.t = Integer.parseInt(ss[1]);
			r.x = Integer.parseInt(ss[2]);
			r.idx = i;
			ra[i]= r;
		}
		st = new SegmentTree();
	}
	
	void sortIdx() {
		Arrays.sort(ra, new Comparator<Request>() {
			public int compare(Request a, Request b) {
				return a.idx - b.idx;
			}
		});
	}
	
	void sortX() {
		Arrays.sort(ra, new Comparator<Request>() {
			public int compare(Request a, Request b) {
				return a.x - b.x;
			}
		});
	}
	
	void extractTimes(int b, int e) {
		nt = e-b;
		for (int i=b; i<e; i++) {
			ta[i-b] = ra[i].t;
		}
		Arrays.sort(ta,0,nt);		
	}
	
	/**
	 * search for time using binary search in ta; 
	 * @param t
	 * @return
	 */
	int getTimeIdx(int t) {
		int idx = Arrays.binarySearch(ta,0,nt,t);
		return idx;		
	}

	void printRes() {
		sortIdx();
		for (int i = 0; i < n; i++) {
			if (ra[i].a == 3) {
				System.out.println(ra[i].ans);
			}
		}
	}	
	
	/**
	 * do with all requests for one key.
	 * @param b - beg of key interval
	 * @param e - end of key interval
	 */
	void doOneKey(int b, int e) {
		// sort our interval by idx
		Arrays.sort(ra,b,e,new Comparator<Request>() {
			public int compare(Request a, Request b) {
				return a.idx - b.idx;
			}
		});
		extractTimes(b, e);
		st.clear(nt);
		for (int i=b; i<e; i++) {
			Request r = ra[i];
			int ti = getTimeIdx(r.t);
			if (r.a==1) {
				// add
				st.upd(ti,1);
			} else if (r.a==2) {
				// remove
				st.upd(ti, -1);
			} else if (r.a==3) {
				r.ans = st.get(0, ti); 
			}			
		}
	}

	private void calculate() {
		sortX();
		int i0 = 0;
		for (int i=0; i<n; i++) {
			if (ra[i].x != ra[i0].x) {
				doOneKey(i0, i);
				i0 = i;
			}			
		}
		doOneKey(i0, n);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ArtemTimeMachine l = new ArtemTimeMachine();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
