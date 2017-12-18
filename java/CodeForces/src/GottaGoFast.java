// CodeForces Round #867 D Gotta Go Fast comp ToDo

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class GottaGoFast {
	
	static class Pizza {
		int s;
		long a,b;
	}

	int n,ns;  // number solutions
	Pizza []p;
	long maxHap;

	void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		ns = Integer.parseInt(ss[1]);
		p = new Pizza[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			p[i] = new Pizza();
			p[i].s = Integer.parseInt(ss[0]);
			p[i].a = Integer.parseInt(ss[1]);
			p[i].b = Integer.parseInt(ss[2]);
		}
	}
	
	void calculate() {
		long aa=0;  // sum a better
		long bb;  // sum b better
		for (int i=0; i<n; i++) {
			if (p[i].a > p[i].b) {
				aa += p[i].s;
			}
		}
		// TODO
	}
	
	void printRes() {
		System.out.println(maxHap);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		GottaGoFast l = new GottaGoFast();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
