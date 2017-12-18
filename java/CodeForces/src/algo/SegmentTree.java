package algo;

public class SegmentTree {
	
	final int LEAF = 64;
	
	long bound=1000;
	long []tree = new long[LEAF+LEAF];
	
	void upd(int x, long v) {
		x += LEAF;
		tree[x] = Math.min(v,  bound);
		while ((x >>= 1) != 0) {
			tree[x] = tree[x+x] + tree[x+x+1];
		}		
	}

	long get (int x, int y) {
		long ret = 0;
		x += LEAF; 
		y += LEAF;
		while(x <= y) {
			if( (x & 1) !=0) ret += tree[x];
			if((~y & 1) !=0) ret += tree[y];
			x = (x+1) >> 1;
			y = (y-1) >> 1;
		}
		return ret;
	}

	public static void main(String[] args) {
		// some test code
		SegmentTree st = new SegmentTree();
		st.upd(1, 1);
		st.upd(2, 10);
		st.upd(3, 2);
		st.upd(4, 7);
		long a = st.get(1, 2);
		long b = st.get(2, 3);
		System.out.printf("a,b = %d %d\n", a, b);
	}
}
