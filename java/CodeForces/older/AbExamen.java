// CodeForces Round #479 C competition

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class AbExamen {
	
	class Pair implements Comparable<Pair> {
		int a,b;

		@Override
		public int compareTo(Pair o) {
			if (a != o.a) return (a - o.a);
			return (b - o.b);
		}
		
	}

	int n;
	Pair []pa;
	int val;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		n = Integer.parseInt(s);
		pa = new Pair[n];
		for (int i = 0; i < n; i++) {
			s = bin.readLine();
			String[] ss = s.split(" ");
			pa[i] = new Pair();
			pa[i].a = Integer.parseInt(ss[0]);
			pa[i].b = Integer.parseInt(ss[1]);
		}
		Arrays.sort(pa);
	}

	void printRes() {
		System.out.println(val);
	}

	private void calculate() {
		// search for minimum last day
		int time = -1;
		for (int i=0; i<n; i++) {
			Pair p = pa[i];
			if (time <= p.b) {
				time = p.b;
			} else {
				time = p.a;
			}
		}
		val = time;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		AbExamen l = new AbExamen();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
