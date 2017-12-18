// CodeForces Round #572 B training done.

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class OrderBook {
	
	class Order implements Comparable<Order> {
		final char d;
		final int p;
		final int q;
		
		Order(String s) {
			String []ss = s.split(" ");
			d = ss[0].charAt(0);
			p = Integer.parseInt(ss[1]);
			q = Integer.parseInt(ss[2]);			
		}
		Order(char da, int pa, int qa) {
			d = da;
			p = pa;
			q = qa;			
		}
		@Override
		public int compareTo(Order o) {
			return o.p-p;
		}
		@Override
		public String toString() {
			return String.format("%c %d %d", d,p,q);
		}
		
		Order add(Order b) {
			if (d != b.d || p != b.p) {
				throw new IllegalStateException("Incompatible orders " + this + " ~ " + b);
			}
			Order o = new Order(d, p, q + b.q);
			return o;
		}
		
		boolean canAgg(Order b) {
			return d==b.d && p==b.p;
		}
	}

	int n,s;
	Order []oa;
	ArrayList<Order> outl;
	int maxSum;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		s = Integer.parseInt(ss[1]);
		oa = new Order[n];
		for (int i=0; i<n; i++) {
			sss = bin.readLine();
			oa[i] = new Order(sss);			
		}
	}

	void printRes() {
		for (Order o : outl) {
			System.out.println(o);
		}
	}
	
	ArrayList<Order> join(ArrayList<Order> ol) {
		if (ol.size()==0) {
			return ol;
		}
		Collections.sort(ol);
		ArrayList<Order> out = new ArrayList<>();
		Order oo = null;
		for (Order o : ol) {
			if (oo==null) {
				oo = o;
			} else if (oo.canAgg(o)) {
				oo = oo.add(o);
			} else {
				out.add(oo);
				oo = o;
			}			
		}
		out.add(oo);
		return out;		
	}

	private void calculate() {
		ArrayList<Order> buyl = new ArrayList<>();
		ArrayList<Order> selll = new ArrayList<>();
		for (int i=0; i<n; i++) {
			Order o = oa[i];
			if (o.d=='B') {
				buyl.add(o);
			} else {
				selll.add(o);
			}
		}
		buyl = join(buyl);
		selll = join(selll);
		outl = new ArrayList<>();
		int i0 = Math.max(0, selll.size() - s);
		for (int i=i0; i<selll.size(); i++) {
			Order o = selll.get(i);
			outl.add(o);
		}
		int i1 = Math.min(s, buyl.size());
		for (int i=0; i<i1; i++) {
			Order o = buyl.get(i);
			outl.add(o);
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		OrderBook l = new OrderBook();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
