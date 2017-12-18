// CodeForces Round #825 C comp july 16 2017, rendzu

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MinimalLabels {
	
	class Vertex implements Comparable<Vertex>{
		int idx;
		int label = 0;
		int minIdx = 1000111222;
		int inCnt = 0;
		List<Integer> edges = new ArrayList<>();
		
		@Override
		public int compareTo(Vertex o) {
			return minIdx - o.minIdx;
		}		
	}

	int n,m;
	int []v;
	int []u;
	Vertex []va;
	int curLabel = 1;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		// read a
		v = new int[m];
		u = new int[m];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			v[i] = Integer.parseInt(ss[0])-1;
			u[i] = Integer.parseInt(ss[1])-1;
		}
	}

	void printRes() {
		for (int i=0; i<n; i++) {
			System.out.print(va[i].label + " ");
		}
		System.out.println();
	}
	
	void prepareEdges() {
		va = new Vertex[n];
		for (int i=0; i<n; i++) {
			va[i] = new Vertex();	
			va[i].idx = i;
		}
		for (int i=0; i<m; i++) {
			va[v[i]].edges.add(u[i]);
			va[u[i]].inCnt++;
		}
	}
	
	void minIdx(Vertex v) {
		if (v.minIdx < 1000111000) {
			return;
		}
		int minIdx = 1000111222;
		for (int j : v.edges) {
			minIdx = Math.min(minIdx, va[j].idx);
		}
		v.minIdx = minIdx;
	}
	
	void labelVertex(Vertex v) {
		if (v.label > 0) {
			return;
		}
		int ne = v.edges.size();
		if (ne==0) {
			return;
		}
		Vertex []wv = new Vertex[ne];
		for (int i=0; i<ne; i++) {
			wv[i] = va[v.edges.get(i)];
		}
		Arrays.sort(wv);
		for (Vertex vv : wv) {
			labelVertex(vv);
		}	
		v.label = curLabel++;
	}	

	private void calculate() {
		prepareEdges();
		for (int i=0; i<n; i++) {
			minIdx(va[i]);
		}
		Arrays.sort(va);
		for (Vertex v : va) {
			if (v.inCnt == 0) {
				labelVertex(v);
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		MinimalLabels l = new MinimalLabels();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
