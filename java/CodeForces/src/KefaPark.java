// CodeForces Round #580 C done, no problem.

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class KefaPark {
	
	class Vert {
		boolean cat;
		int dist;
		List<Integer> el = new ArrayList<>();
	}
	
	int n,m;  // number vertices, max cats
	Vert []va;
	int nLeafs;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		// reading a
		va = new Vert[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			va[i] = new Vert();
			int icat = Integer.parseInt(ss[i]);
			va[i].cat = (icat == 1);
			va[i].dist = Integer.MAX_VALUE;
		}
		// reading edges
		for (int i = 0; i < n-1; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			int a = Integer.parseInt(ss[0])-1;
			int b = Integer.parseInt(ss[1])-1;
			va[a].el.add(b);
			va[b].el.add(a);
		}
	}

	void printRes() {
		System.out.println(nLeafs);
	}	
	
	// build tree
	void dfs(int idx, int nCat) {
		Vert v = va[idx];
		int nCh = 0;
		if (v.cat) {
			nCat++;
			if (nCat>m) {
				return;
			}
		} else {
			nCat = 0;
		}
		for (int ie : v.el) {
			Vert vv = va[ie];
			if (vv.dist > v.dist) {
				vv.dist = v.dist+1;
				nCh++;
				dfs(ie, nCat);				
			}			
		}
		if (nCh==0) {
			nLeafs ++;
		}
	}
	

	private void calculate() {
		va[0].dist = 0;
		dfs(0,0);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		KefaPark l = new KefaPark();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
