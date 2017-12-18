// CodeForces contest 609 E Almost works,  TIME_LIMIT_EXCEEDED TODO
// need to use Metod Dvoichnogo Podiema to find Lowest_common_ancestor

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

public class MinOstovTree {
	
	class Edge implements Comparable<Edge>{
		private Vertex a;
		private Vertex b;
		int w;
		boolean inMinOst;
		
		Edge(int ia, int ib, int w) {
			a = va[ia];
			b = va[ib];
			this.w = w;
			inMinOst = false;
		}
		
		@Override
		public int compareTo(Edge o) {
			return Integer.compare(w, o.w);
		}	
		
		public Vertex other(Vertex aa) {
			if (aa==a) {
				return b;
			} else if (aa==b) {
				return a;
			} else {
				throw new IllegalArgumentException("Not a or b");
			}
		}
		
		public Vertex first() {
			if (a.inOstov()) {
				return a;
			} else if (b.inOstov()) {
				return b;
			} else {
				throw new IllegalArgumentException("Not a or b in Ostov");
			}
		}
	}
	
	class Vertex {
		List<Edge> e = new ArrayList<>();
		int dist0;   // distance from 0
		Edge toParent;
		
		Vertex() {
			dist0 = -1;
		}
		boolean inOstov() {
			return dist0>=0;
		}
	}

	PriorityQueue<Edge> be = new PriorityQueue<>();	
	int n,m;
	Edge []ee;
	Vertex []va;
	long maxWeight;
	long totWeight;
	long []minOstI;
	
	private void readData(BufferedReader bin) throws IOException {
		String []ss;
		String s = bin.readLine();
		ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		va = new Vertex[n];
		ee = new Edge[m];
		minOstI = new long[m];
		for (int i=0; i<n; i++) {
			va[i] = new Vertex();
		}
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			int ia = Integer.parseInt(ss[0])-1;
			int ib = Integer.parseInt(ss[1])-1;
			int w = Integer.parseInt(ss[2]);
			addEdge(ia, ib, w,i);
		}
	}
	
	void addEdge(int ia, int ib, int w, int i) {		
		Edge e = new Edge(ia,ib,w);
		va[ia].e.add(e);
		va[ib].e.add(e);	
		ee[i] = e;
	}
	
	void printRes() {
		for (int i=0; i<m; i++) {
			System.out.println(minOstI[i]);
		}
	}
	
	/** constructing min ost three with deijkstra method */
	long constructMinOstTree() {
		long totw=0; 
		Vertex z = va[0];
		z.dist0 = 0;
		be.addAll(z.e);
		while (!be.isEmpty()) {
			Edge e = be.poll();
			Vertex v = e.first();
			Vertex o = e.other(v);
			if (o.inOstov()) {
				continue;
			}
			o.dist0 = v.dist0 + 1;
			o.toParent = e;
			totw += e.w;
			e.inMinOst = true;
			be.addAll(o.e);
		}	
		return totw;
	}
	
	Vertex toParent(Vertex v) {
		Edge e = v.toParent;
		if (e.w > maxWeight) {
			maxWeight = e.w;
		}
		v = e.other(v);
		return v;
	}
	
	long calculateIncludeI(Edge ei) {
		// looking for lternative path and max weight
		if (ei.inMinOst) {
			return totWeight;
		}
		maxWeight = -1;
		Vertex a = ei.first();
		Vertex b = ei.other(a);
		while (a.dist0 > b.dist0) {
			a = toParent(a);
		}
		while (b.dist0 > a.dist0) {
			b = toParent(b);
		}
		while (a != b) {
			a = toParent(a);
			b = toParent(b);
		}
		if (ei.w < maxWeight) {
			throw new IllegalStateException("should be in minOst ew, maxWeight = "
					+ ei.w + " " + maxWeight);
		}
		return totWeight + (ei.w - maxWeight);
	}
	
	private void calculate() {
		totWeight = constructMinOstTree();
		for (int i=0; i<m; i++) {
			minOstI[i] = calculateIncludeI(ee[i]);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		MinOstovTree l = new MinOstovTree();
		l.readData(bin);
		l.calculate(); // here for each set
		l.printRes();
	}
}
