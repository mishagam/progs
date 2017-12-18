// CodeForces Round #489 F done first attempt !!!

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OsobMatrix {
	
	class TriSet {
		final int n0;
		final int n1;
		final int n2;
		final String keys;
		long count;
		
		TriSet(int na0, int na1, int na2) {
			if (na0<0 || na1<0 || na2<0) {
				throw new IllegalArgumentException("na.. < 0, na0,na1,na2 = " + na0 + " " + na1 + " " + na2);
			}
			n0 = na0;
			n1 = na1;
			n2 = na2;
			keys = n0 + "-" + n1 + "-" + n2;
			count = 0;
		}
		TriSet []addTwo() {
			TriSet []tret = new TriSet[3];
			if (n0>=2) {
				// can add to n0
				TriSet b = new TriSet(n0-2, n1+2, n2);
				b.count = (n0 * (n0-1)) / 2;
				tret[0] = b;
			}
			if (n1>=2) {
				// can add to n1
				TriSet b = new TriSet(n0, n1-2, n2+2);
				b.count = (n1 * (n1-1)) / 2;
				tret[1] = b;
			}
			if (n0>=1 && n1>=1) {
				// can add to n1
				TriSet b = new TriSet(n0-1, n1, n2+1);
				b.count = n0 * n1;
				tret[2] = b;
			}
			return tret;
		}
		
		String key() {
			return keys;
		}
	}

	int n,m;
	long mod;
	int nMat;
	Map<String, TriSet> freq = new HashMap<String, TriSet>();

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		mod = Long.parseLong(ss[2]);
		int []cnts = new int[n];
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			for (int j=0; j<n; j++) {
				cnts[j] += (int)(s.charAt(j) - '0');
			}
		}
		int n0=0,n1=0,n2=0;
		for (int j=0; j<n; j++) {
			if (cnts[j]==0) n0++;
			else if (cnts[j]==1) n1++;
			else if (cnts[j]==2) n2++;
			else throw new IllegalStateException("Illegal Count j,cnts= " + j + " " + cnts[j]);
		}
		TriSet ts = new TriSet(n0, n1, n2);
		ts.count = 1;
		freq.put(ts.key(), ts);		
	}

	void printRes() {
		System.out.println(nMat);
	}
	
	/** recalculate freq */
	void step() {
		List<TriSet> lts = new ArrayList<>();
		lts.addAll(freq.values());
		freq.clear();
		for (TriSet ts : lts) {
			TriSet []ba = ts.addTwo();
			for (int k=0; k<3; k++) {
				TriSet b = ba[k];
				if (b==null) {
					continue;
				}
				b.count = (b.count*ts.count) % mod;
				TriSet bo = freq.get(b.key());
				if (bo==null) {
					freq.put(b.key(), b);
				} else {
					bo.count = (bo.count + b.count) % mod;
				}
			}
		}
		
	}
	private void calculate() {
		for (int i=m; i<n; i++) {
			step();
		}
		if (freq.size() != 1) {
			throw new IllegalStateException("Illegal freq size!=1 size = " + freq.size());
		}
		String key = "0-0-" + n;
		TriSet ts = freq.get(key);
		nMat = (int)(ts.count);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		OsobMatrix l = new OsobMatrix();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
