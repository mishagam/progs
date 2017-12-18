// CodeForces Round #862 B train done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class MahmoudEhabBipartite {
	
	static class Vertice {
		List<Integer> edges = new ArrayList<Integer>();
		int color=-1;   // 0 - white, 1 - black
	}

	int n;
	Vertice []va;
	long maxAdd;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read spans
		va = new Vertice[n];		
		for (int i=0; i<n; i++) {
			va[i] = new Vertice();
		}
		for (int i=0; i<n-1; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			int u = Integer.parseInt(ss[0])-1;
			int v = Integer.parseInt(ss[1])-1;
			va[u].edges.add(v);
			va[v].edges.add(u);
		}
	}

	void printRes() {
		System.out.println(maxAdd);
	}
	
	void color(int iv, int cola) {
		Vertice v = va[iv];
		if (v.color >= 0) {
			return;
		} else {
			v.color = cola;
		}
		int col = 1-v.color;
		for (int j : v.edges) {
			color(j, col);			
		}
	}

	private void calculate() {
		color(0, 0);
		long nw=0;
		long nb=0;
		for (Vertice v : va) {
			if (v.color==0) {
				nw++;
			} else if (v.color==1) {
				nb++;
			} else {
				throw new RuntimeException("Bad color " + v.color);
			}
		}
		maxAdd = nw*nb-(n-1);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		MahmoudEhabBipartite l = new MahmoudEhabBipartite();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
