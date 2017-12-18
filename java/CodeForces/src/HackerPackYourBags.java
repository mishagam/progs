// CodeForces Round #822 C HackerPackYourBags too long
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class HackerPackYourBags {
	
	class Voucher implements Comparable<Voucher>{
		int l,r;
		long cost;
		
		Voucher(String s) {
			String []ss = s.split(" ");
			l = Integer.parseInt(ss[0]);
			r = Integer.parseInt(ss[1]);
			cost = Integer.parseInt(ss[2]);			
		}

		/**
		 * compare by duration and left
		 */
		@Override
		public int compareTo(Voucher o) {
			int durthis = duration();
			int duro = o.duration();
			if (durthis != duro) {
				return durthis - duro;
			}
			return l - o.l;
		}
		
		final int duration() {
			return r - l + 1;
		}		
	}

	int n,x;
	Voucher []va;
	int []didx;
	long minCost;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		x = Integer.parseInt(ss[1]);
		// reading vouchers
		va = new Voucher[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			va[i] = new Voucher(s);
		}
	}

	void printRes() {
		System.out.println(minCost);
	}
	
	void doGroup(int du) {
		int du1 = x-du;
		int nu = didx[du+1] - didx[du];
		int nu1 = didx[du1+1] - didx[du1];
		int np = 2*(nu + nu1);
		int []pnts = new int[np];
		int ip = 0;
		// adding points
		for (int i=didx[du]; i<didx[du+1]; i++) {
			Voucher v = va[i];
			pnts[ip++] = v.l;
			pnts[ip++] = v.r;
		}
		for (int i=didx[du1]; i<didx[du1+1]; i++) {
			Voucher v = va[i];
			pnts[ip++] = v.l;
			pnts[ip++] = v.r;
		}
		Arrays.sort(pnts);
		ip = 0;
		int oldPnt = -1;
		for (int i=0; i<np; i++) {
			int pnt = pnts[i];
			if (pnt != oldPnt) {
				pnts[ip++] = pnt;
			}
		}
		np = ip;
		long []minm0 = new long[np]; 
		// min cost voucher ending before i
		long []minm1 = new long[np];  // min cost vouher starting after i
		long minCost0 = 2000111222;
		int ipnt = 0;
		for (int i=didx[du]; i<didx[du+1]; i++) {
			int rr = va[i].r;
			while (pnts[ipnt] < rr) {
				minm0[ipnt++] = minCost0;
			}
			if (va[i].cost < minCost0) {
				minCost0 = va[i].cost;
			}
			if (pnts[ipnt] != rr) {
				throw new IllegalStateException("pnts[ipnt=" + ipnt+"]="+pnts[ipnt]+" != rr=" + rr);
			}
			minm0[ipnt++] = minCost0;			
		}
		for ( ; ipnt < np; ipnt++) {
			minm0[ipnt] = minCost0;
		}
		// countng minm1
		long minCost1 = 2000111222;
		ipnt = np-1;
		for (int i = didx[du1+1]-1; i>=didx[du1]; i--) {
			int ll = va[i].l;
			while (pnts[ipnt] > ll) {
				minm1[ipnt--] = minCost1;
			}
			if (va[i].cost < minCost1) {
				minCost1 = va[i].cost;
				minm1[ipnt] = minCost1;
			}
			if (pnts[ipnt] != ll) {
				throw new IllegalStateException("pnts[ipnt=" + ipnt+"]="+pnts[ipnt]+" != ll=" + ll);
			}						
		}
		for ( ; ipnt >=0; ipnt--) {
			minm1[ipnt] = minCost1;
		}
		// looking for 
		for(int i=0; i<np-1; i++) {
			long co = minm0[i] + minm1[i+1];
			if (co < minCost) {
				minCost = co;
			}			
		}
	}
	
	void packSameVouchers() {
		List<Voucher> lva = new ArrayList<>();
		for (int i=0; i<n && va[i].duration()<x; i++) {
			if (i==n-1 || va[i].l!=va[i+1].l || va[i].r!=va[i+1].r) {
				lva.add(va[i]);
			} else {
				va[i+1].cost = Math.min(va[i].cost, va[i+1].cost);
			}
		}
		n = lva.size();
		va = lva.toArray(va);		
	}

	private void calculate() {
		// sorting vouchers
		Arrays.sort(va);
		packSameVouchers();
		// preparing duration groups, max useful duration is x
		didx = new int[x+1];
		int lastDu = -1;
		for (int i=0; i<n; i++) {
			int du = va[i].duration();
			if (du != lastDu) {		
				for (int j=lastDu+1; j<x; j++) {
					didx[j] = i;
				}
				didx[du] = i;
				lastDu = du;
			}			
		}
		for (int j=lastDu+1; j<=x; j++) {
			didx[j] = n;
		}
		// looking for best trip
		minCost = 2000111222;
		for (int du=1; du<x; du++) {
			if ((didx[du] < didx[du+1]) && (didx[x-du] < didx[x-du+1])) {
				doGroup(du);
			}
		}
		if (minCost == 2000111222) {
			minCost = -1;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		HackerPackYourBags l = new HackerPackYourBags();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}}
