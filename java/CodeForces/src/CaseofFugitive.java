// CodeForces Round #555 B train done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.TreeMap;

public class CaseofFugitive {
	
	static class Span {
		long minl;
		long maxl;
		int idx;
		int brIdx;
		
		Span(long l0, long r0, long l1, long r1, int idxa) {
			minl = l1-r0;
			maxl = r1-l0;
			idx = idxa;
			brIdx = -1;
		}
	}
	
	class APair implements Comparable<APair> {
		long a;
		int aidx;
		APair(long aa, int ia) {
			a = aa;
			aidx = ia;
		}
		@Override
		public int compareTo(APair b) {
			if (a != b.a) {
				return Long.compare(a, b.a);
			}
			return (aidx - b.aidx);
		}
		
	}

	int n,m;
	Span []spa;
	APair []a;
	boolean canBridge;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		// read spans
		spa = new Span[n-1];
		long l0,r0,l1,r1;
		l0 = -1;
		r0 = -1;
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			l1 = Long.parseLong(ss[0]);
			r1 = Long.parseLong(ss[1]);
			if (i>0) {
				spa[i-1] = new Span(l0,r0,l1,r1,i-1);
			}
			l0 = l1;
			r0 = r1;			
		}
		// read bridges a
		a = new APair[m];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<m; i++) {
			long aa = Long.parseLong(ss[i]);
			a[i] = new APair(aa, i+1);
		}		
	}

	void printRes() {
		System.out.println(canBridge ? "Yes" : "No");
		if (canBridge) {
			// sort spans by idx
			Arrays.sort(spa, new Comparator<Span>() {
				@Override
				public int compare(Span a, Span b) {
					return a.idx - b.idx;
				}				
			});
			for (int i=0; i<n-1; i++) {
				System.out.print((spa[i].brIdx) + " ");
			}
			System.out.println();
		}
	}
	

	private void calculate() {
		if (m<n-1) {
			canBridge = false;
			return;
		}
		canBridge = true;
		// sort a by length
		Arrays.sort(a, new Comparator<APair>() {
			@Override
			public int compare(APair b, APair c) {
				return Long.compare(b.a, c.a);
			}				
		});
		// sort bridges by minl
		Arrays.sort(spa, new Comparator<Span>() {
			@Override
			public int compare(Span a, Span b) {
				return Long.compare(a.minl, b.minl);
			}				
		});
		// initialize tree sorted by maxl
		TreeMap<APair, Span> trsp = new TreeMap<>();
		
		// placing bridges
		int j = 0;
		for (int i=0; i<m; i++) {
			while (j<n-1 && spa[j].minl<=a[i].a) {
				APair akey = new APair(spa[j].maxl, j);
				trsp.put(akey, spa[j]);
				j++;
			}
			APair first;
			while (!trsp.isEmpty() && (first = trsp.firstKey()).a<a[i].a) {
				trsp.remove(first);
			}
			if (trsp.isEmpty()) {
				continue;
			}
			APair ceil = trsp.firstKey();
			if (ceil==null) {
				continue; // cannot use that bridge
			}
			Span sp = trsp.get(ceil);
			trsp.remove(ceil);
			sp.brIdx = a[i].aidx;
		}	
		for (Span sp : spa) {
			if (sp.brIdx < 0) {
				canBridge = false;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		CaseofFugitive l = new CaseofFugitive();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
