// CodeForces Round #853 B train done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class JuryMeeting {
	
	class Flight implements Comparable<Flight> {
		int d,f,t,c;
		Flight(String []ss) {
			d = Integer.parseInt(ss[0]);
			f = Integer.parseInt(ss[1]);
			t = Integer.parseInt(ss[2]);
			c = Integer.parseInt(ss[3]);
		}
		@Override
		public int compareTo(Flight o) {
			int comp = d - o.d;
			return comp;
		}		
	}
	
	class Delivery {
		long []co;
		long fullCost;
		
		Delivery(int n) {
			co = new long[n+1];
			fullCost = 0;
			for (int i=1; i<=n; i++) {
				co[i] = UNOBTAIN;
				fullCost += co[i];
			}
		}
		
		void addFlight(Flight fl) {
			int ci = (fl.f==0 ? fl.t : fl.f);
			if (fl.c < co[ci]) {
				fullCost -= (co[ci] - fl.c);
				co[ci] = fl.c;
			}
		}
	}

	int n,m,k;
	Flight []fa;
	int maxD;
	long minCost;
	final long UNOBTAIN = 1000111222333l;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		k = Integer.parseInt(ss[2]);
		
		// read flights
		fa = new Flight[m];
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			fa[i] = new Flight(ss);
			if (maxD < fa[i].d) {
				maxD = fa[i].d;
			}
		}
	}

	void printRes() {
		System.out.println(minCost);
	}	

	private void calculate() {
		long []minCosta = new long[maxD+1];
		long []minCostd = new long[maxD+1];
		Arrays.sort(fa);
		Delivery dv = new Delivery(n);
		// flies to metropolis
		int last = 0;
		for (int i=0; i<m; i++) {
			if (fa[i].t==0) {
				for (int j=last; j<=fa[i].d; j++) {
					minCosta[j] = dv.fullCost;
				}
				dv.addFlight(fa[i]);
				last = fa[i].d+1;
			}
		}
		for (int j=last; j<=maxD; j++) {
			minCosta[j] = dv.fullCost;
		}
		// flies from metropolis , last flieghts first
		dv = new Delivery(n);
		last = maxD;
		for (int i=m-1; i>=0; i--) {
			if (fa[i].f==0) {
				for (int j=last; j>=fa[i].d; j--) {
					minCostd[j] = dv.fullCost;
				}
				dv.addFlight(fa[i]);
				last = fa[i].d-1;
			}
		}
		for (int j=last; j>=0; j--) {
			minCostd[j] = dv.fullCost;
		}	
		minCost = UNOBTAIN;
		for (int i=0; i<maxD; i++) {
			int io = i+k-1;
			if (io>maxD) {
				break;
			}
			long cost = minCosta[i] + minCostd[io];
			if (cost < minCost) {
				minCost = cost;
			}
		}
		if (minCost >= UNOBTAIN) {
			minCost = -1;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		JuryMeeting l = new JuryMeeting();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
