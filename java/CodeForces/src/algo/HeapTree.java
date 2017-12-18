// structure HeapTree worked in BearColor problem
package algo;

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

public class HeapTree {

	ColCnt []cca;
	int nc;
	
	public HeapTree(int sz) {
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

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
