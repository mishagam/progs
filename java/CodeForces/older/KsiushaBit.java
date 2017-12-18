// codeforces 339 D, slegka podsmotrel.

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class KsiushaBit {
	
	class TreeNode {
		int v;
		boolean opOr;  // true - OR, false XOR
		TreeNode l,r;
		TreeNode par;
		
		public TreeNode() {
			l=r=par=null;
			opOr = false;
		}
		
		public TreeNode other(TreeNode b) {
			if (b==l) {
				return r;
			} else if (b==r) {
				return l;
			} else {
				throw new IllegalStateException("node not l or r");
			}
		}
		
		void copy(TreeNode b) {
			r = b.r;
			l = b.l;
			par = b.par;
			v = b.v;
			opOr = b.opOr;
		}
		
		void calculate() {
			if (l.opOr != r.opOr) {
				throw new IllegalStateException("different ops l r");
			}
			opOr = !l.opOr;
			v = (opOr ? l.v|r.v : l.v^r.v);
		}
	}
	int n,n2,m;
	int []a;
	int []ans;
	int []rqidx;
	int []rqv;
	List<TreeNode> ltn = new ArrayList<>();
	TreeNode []firstRow;
	
	void readData(BufferedReader bin) throws IOException {
		String []ss;
		String s = bin.readLine();
		ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		n2 = 1 << n;
		
		// allocations
		a = new int[n2];
		rqidx = new int[m];
		rqv = new int[m];
		ans = new int[m];
		firstRow = new TreeNode[n2];
		
		// read a
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n2; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
		// read req
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			rqidx[i] = Integer.parseInt(ss[0])-1;
			rqv[i] = Integer.parseInt(ss[1]);
		}
	}
	
	void printRes() {
		// print in reverse order
		for (int i=0; i<m; i++) {
			System.out.println(ans[i]);
		}
	}
	
	void composeFirstRow() {
		for (int i=0; i<n2; i++) {
			TreeNode t = new TreeNode();
			t.v = a[i];
			t.r = t.l = t.par = null;
			t.opOr = false;
			firstRow[i] = t;
			ltn.add(t);
		}		
	}
	
	void nextRow() {
		List<TreeNode> newl = new ArrayList<>();
		for (int i=0; i<ltn.size(); i+=2) {
			TreeNode a = ltn.get(i);
			TreeNode b = ltn.get(i+1);
			TreeNode p = join(a,b);
			newl.add(p);			
		}
		ltn = newl;		
	}
	
	void buildTree() {
		composeFirstRow();
		for (int i=0; i<n; i++) {
			nextRow();
		}
	}
	
	int findAns(int idx, int v) {
		TreeNode t = firstRow[idx];
		t.v = v;
		for (int i=0; i<n; i++) {
			TreeNode p = t.par;
			t = joinNew(t);
		}
		return t.v;		
	}
	
	TreeNode join(TreeNode ll, TreeNode rr) {
		TreeNode p = new TreeNode();
		p.l = ll;
		p.r = rr;
		ll.par = p;
		rr.par = p;
		p.par = null;
		p.calculate();
		return p;
	}
	
	TreeNode joinNew(TreeNode t) {
		TreeNode p = t.par;
		p.calculate();
		return p;
	}
	
	void calculate() {
		buildTree();
		for (int i=0; i<m; i++) {
			ans[i] = findAns(rqidx[i], rqv[i]);  
		}
	}
	

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		KsiushaBit p = new KsiushaBit();
		p.readData(bin);
		p.calculate();
		p.printRes();
	}
}
