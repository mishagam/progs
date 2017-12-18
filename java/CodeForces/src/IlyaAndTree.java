// CodeForces Round #842 C training TODO

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class IlyaAndTree {
	
	class Vert {
		List<Integer> edges = new ArrayList<>();
		int aa;
	}

	int n;
	Vert []va;
	int []maxb;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		va = new Vert[n];
		maxb = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i = 0; i < n; i++) {
			int a = Integer.parseInt(ss[i]);	
			va[i] = new Vert();
			va[i].aa = a;
		}
		for (int i=0; i<n-1; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			int x = Integer.parseInt(ss[0])-1;
			int y = Integer.parseInt(ss[1])-1;
			va[x].edges.add(y);			
		}
	}

	void printRes() {
		for (int i = 0; i < maxb.length; i++) {
			System.out.print(maxb[i] + " ");
		}
		System.out.println();			
	}	
	
	int gcd(int a, int b) {
		if (a>b) {
			return gcd(b,a);
		} else if (a==0) {
			return b;
		} 
		return gcd(b%a, a);
		
	}
	
	void calcOneMaxBeauty(int x, int []p, int np, int iExcl, int beauty) {
		int a = va[x].aa;
		p[np++] = a;
		if (np==0) {
			iExcl = 0;
			beauty = a;
		} else {
			int b0 = gcd(a, beauty);
			int b1 = gcd(va[iExcl].aa, beauty);
			if (b0>b1) {
				iExcl = np-1;
				beauty = b0;
			} else {
				beauty = b1;
			}
		}
		maxb[x] = beauty;
		for (int y : va[x].edges) {
			calcOneMaxBeauty(y, p, np, iExcl, beauty);
		}		
	}

	private void calculate() {
		int []pa = new int[n];
		calcOneMaxBeauty(0, pa, 0, 0, 0);		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		IlyaAndTree l = new IlyaAndTree();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
