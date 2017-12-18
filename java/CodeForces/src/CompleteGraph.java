// CodeForces Round #715 B
// graphs, dijkstra algorithm, not solved

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;

public class CompleteGraph {
	final long MAX_DIST = 10001112223339L;
	
	class Edge {
		int a,b,idx;
		long w;
		
		Edge(int aa, int ba, long wa, int idxa) {
			a=aa; b=ba; w=wa; idx = idxa;
		}
		
		int other(int idx) {
			int o = (a==idx ? b : a);
			return o;
		}
	}
	class Vert implements Comparable<Vert> {
		int idx;
		long dist;
		List<Edge> edges = new ArrayList<>();
		
		Vert(int idxa) {
			idx = idxa;
			dist = MAX_DIST;
		}
		
		@Override
		public int compareTo(Vert o) {
			return Long.compare(dist, o.dist);
		}
		
	}	

	int n,m,L,s,t;
	Edge []edges;
	Vert []verts;
	boolean ok;
	boolean []za;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		L = Integer.parseInt(ss[2]);
		s = Integer.parseInt(ss[3]);
		t = Integer.parseInt(ss[4]);
		verts = new Vert[n];
		for (int i=0; i<n; i++) {
			verts[i] = new Vert(i);
		}
		edges = new Edge[m];
		za = new boolean[m];  // if zero
		for (int i = 0; i < m; i++) {
			sss = bin.readLine();
			ss = sss.split(" ");
			int aa = Integer.parseInt(ss[0]);	
			int ba = Integer.parseInt(ss[1]);	
			int wa = Integer.parseInt(ss[2]);	
			Edge ee = new Edge(aa,ba,wa, i);
			edges[i] = ee;
			verts[aa].edges.add(ee);
			verts[ba].edges.add(ee);
		}
	}

	void printRes() {
		if (!ok) {
			System.out.println("NO");
			return;
		}
		System.out.println("YES");
		for (int i = 0; i < m; i++) {
			System.out.printf("%d %d %d\n", edges[i].a, edges[i].b, edges[i].w);	
		}
	}	

	private void calculate() {
		// looking for paths from s without 0
		List<Edge> path = new ArrayList<>();
		PriorityQueue<Vert> qv = new PriorityQueue<>();
		verts[s].dist = 0;
		qv.add(verts[s]);
		while (!qv.isEmpty()) {
			Vert v = qv.poll();
			int vidx = v.idx;
			for (Edge e : v.edges) {
				if (e.w==0) {
					continue;
				}
				Vert vo = verts[e.other(vidx)];
				if (vo.dist > v.dist + e.w) {
					vo.dist = v.dist + e.w;
					qv.add(vo);
				}
			}
		}
		if (verts[t].dist < L) {
			ok = false;
			return;
		} else if (verts[t].dist == L) {
			ok = true;
			for (int i=0; i<m; i++) {
				if (edges[i].w == 0) {
					edges[i].w = MAX_DIST;
				}
			}
			return;
		}
		// replace 0 with 1, adding to za list
		for (int i=0; i<m; i++) {
			if (edges[i].w == 0) {
				za[i] = true;
				edges[i].w = 1;
			} else {
				za[i] = false;
			}
		}
		
		// looking for shortest path from s to t with 0
		for (int i=0; i<n; i++) {
			if (i != s) {
				verts[i].dist = MAX_DIST;
			}
		}
		qv.clear();
		qv.add(verts[s]);
		while (!qv.isEmpty()) {
			Vert v = qv.poll();
			int vidx = v.idx;
			for (Edge e : v.edges) {
				Vert vo = verts[e.other(vidx)];
				if (vo.dist > v.dist + e.w) {
					vo.dist = v.dist + e.w;
					qv.add(vo);
				}
			}
		}
		if (verts[t].dist > L) {
			ok = false;
			return;
		}
		Vert v = verts[t];
		while (v.dist > 0) {
			long minDist = MAX_DIST;
			Vert vMin = null;
			Edge eMin = null;
			for (Edge e : v.edges) {
				Vert vo = verts[e.other(v.idx)];
				if (vo.dist+e.w < minDist) {
					vMin = vo;
					eMin = e;
					minDist = vMin.dist+e.w;
				}				
			}
			v = vMin;	
			path.add(eMin);
		}
		Collections.reverse(path);
		for (int i=0; i<m; i++) {
			if (za[i]) {
				edges[i].w = MAX_DIST;
			}
		}
		long totLen=0;
		boolean wFixed = false;
		for (Edge e : path) {
			totLen += (za[e.idx] ? 1 : e.w);
		}
		for (Edge e : path) {
			if (za[e.idx]) {
				if (!wFixed) {
					e.w = L - totLen + 1;
					wFixed = true;
				} else {
					e.w = 1;
				}
			}
		}
		ok = true;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		CompleteGraph l = new CompleteGraph();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
