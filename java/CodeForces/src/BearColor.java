// CodeForces Round #673 C competition, done later
// implement heap tree.

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BearColor {
	
	class ColCnt implements Comparable<ColCnt>{
		int col;
		int cnt;
		int idx;  // index in heap
		
		public ColCnt(int co, int cn) {
			col = co;
			cnt = cn;
		}

		@Override
		public int compareTo(ColCnt o) {
			if (cnt!=o.cnt) {
				return cnt-o.cnt;
			}
			return (o.col-col);
		}
		
	}
	
	/**
	 * hash table of ColCnt
	 */
	class MyQueue {
		ColCnt []cca;
		int nc;
		
		public MyQueue(int sz) {
			cca = new ColCnt[sz];
			nc = 0;
		}
		
		void clear() {
			nc = 0;
		}
		
		void addItem(ColCnt c) {
			cca[nc] = c;
			c.idx = nc;
			nc++;
			place(c);
		}
		
		void place(ColCnt c) {
			while (true) {
				int ib = c.idx/2;
				if (ib == c.idx) {
					break;
				}
				ColCnt b = cca[ib];
				if (b.compareTo(c) < 0) {
					cca[ib] = c;
					cca[c.idx] = b;
					b.idx = c.idx;
					c.idx = ib;
				} else {
					break;
				}
			}
		}
		
		ColCnt peek() {
			return cca[0];
		}
	}

	int n;
	int []cols;
	int []colCnt;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read t
		cols = new int[n];
		colCnt = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			cols[i] = Integer.parseInt(ss[i])-1;
		}		
	}

	void printRes() {
		for (int i=0; i<n; i++) {
			System.out.print(colCnt[i] + " ");
		}
		System.out.println();
	}
	

	private void calculate() {
		MyQueue mq = new MyQueue(n+2);
		ColCnt []hm = new ColCnt[n+1];
		for (int i=0; i<n+1; i++) {
			hm[i] = new ColCnt(i,0);
		}
		for (int ib=0; ib<n; ib++) {
			mq.clear();
			for (int i=0; i<n+1; i++) {
				hm[i].cnt=0;
			}
			for (int il=ib; il<n; il++) {
				// update cnts
				int col = cols[il];
				ColCnt cc = hm[col]; 
				if (cc.cnt==0) {
					mq.addItem(cc);
				}
				cc.cnt++;
				mq.place(cc);
				//System.out.println("cc added col,cnt= " + cc.col + " " + cc.cnt);
				cc = mq.peek();
				//System.out.println("ib,il,cc = " + ib + " " + il + " " + cc.col);
				colCnt[cc.col]++;
			}			
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		BearColor l = new BearColor();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
