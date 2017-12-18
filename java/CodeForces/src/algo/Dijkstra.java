// codeforces 20 C done, second my program doing this
package algo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class Dijkstra {
	
	class Edge {
		private Vertex a;
		private Vertex b;
		int w;
		
		Edge(int ia, int ib, int w) {
			a = va[ia];
			b = va[ib];
			this.w = w;
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
	
	class EdgeEntry implements Comparable<EdgeEntry> {
		private Edge e;
		private long disto;  // distance to other, important to sort on this, not on w
		
		EdgeEntry(Edge e,long disto) {
			this.e = e;
			this.disto = disto;
		}

		public Edge getE() {
			return e;
		}

		public long getDisto() {
			return disto;
		}
		
		@Override
		public int compareTo(EdgeEntry o) {
			return Long.compare(disto, o.disto);
		}	

	}
	
	class Vertex {
		List<Edge> e = new ArrayList<>();
		long dist;   // summ w from 0
		Edge toParent;
		int idx;
		
		Vertex() {
			dist = -1;
		}
		boolean inOstov() {
			return dist>=0;
		}
	}

	PriorityQueue<EdgeEntry> be = new PriorityQueue<>();	
	int n,m;
	Edge []ee;
	Vertex []va;
	List<Integer> path = new ArrayList<>();
	
	void readData(BufferedReader bin) throws IOException {
		String []ss;
		String s = bin.readLine();
		ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		va = new Vertex[n];
		ee = new Edge[m];
		for (int i=0; i<n; i++) {
			va[i] = new Vertex();
			va[i].idx = i;
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
		// print in reverse order
		for (int i=0; i<path.size(); i++) {
			System.out.print(path.get(path.size()-i-1) + " ");
		}
		System.out.println();
	}
	
	void buildTree() {
		Vertex z = va[0];
		z.dist = 0;
		for (Edge e : z.e) {
			EdgeEntry ee = new EdgeEntry(e, e.w);
			be.add(ee);
		}
		while (!be.isEmpty()) {
			EdgeEntry ee = be.poll();
			Edge e = ee.getE();
			Vertex v = e.first();
			Vertex o = e.other(v);
			long d = ee.getDisto();
			if (o.inOstov() && o.dist<=d) {
				continue;
			}
			o.dist = d;
			o.toParent = e;
			// System.out.printf("add vert v,o,w,d %d %d %d %d\n",v.idx, o.idx, e.w, d);
			for (Edge eo : o.e) {
				EdgeEntry eeo = new EdgeEntry(eo, d + eo.w);
				be.add(eeo);
			}
		}	
	}
	
	void countPath() {
		int idx = n-1;
		if (!va[idx].inOstov()) {
			path.add(-1);
			return;
		}
		while (idx != 0) {
			path.add(idx+1);
			int next = va[idx].toParent.other(va[idx]).idx;
			idx = next;
		}
		path.add(1);
	}
	
	void calculate() {
		buildTree();
		countPath();
	}
	

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Dijkstra p = new Dijkstra();
		p.readData(bin);
		p.calculate();
		p.printRes();
	}
}
