// codeforces 608 C
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class CepnaiaReakcia {
	
	class Pab implements Comparable<Pab> {
		int a,b;
		int nExp;
		Pab(int aa, int ba) {
			a=aa; b=ba;
		}
		@Override
		public int compareTo(Pab o) {
			return a - o.a;
		}
		
	}
	int n, na=0; // n maiakov
	Pab []ab;
	int []b;
	int minU;
	int []mind;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		ab = new Pab[n];
		for (int i=0; i<n; i++) {
			sss = bin.readLine();
			ss = sss.split(" ");
			int a = Integer.parseInt(ss[0]);
			int b = Integer.parseInt(ss[1]);
			ab[i] = new Pab(a,b);
		}
		Arrays.sort(ab);
	}
	
	void writeRes() throws IOException {
		System.out.println(minU);
	}
	
	void estExp(int ip) {
		// looking for a == a - b
		int i0 = 0;
		int i1 = ip;
		Pab p = ab[ip];
		int amb = p.a - p.b;
		// krainie sluchai
		if (amb <= ab[0].a) {
			// all exploded
			p.nExp = ip;
			return;
		} else if (amb > ab[ip-1].a) {
			// no explosions
			p.nExp = ab[ip-1].nExp;
			return;
		}
		while (i1 > i0) {
			int ii = (i0 + i1) / 2;
			if (ab[ii].a < amb) {
				// not exploded
				i0 = ii;
				if (ab[ii+1].a >= amb) {
					break;
				}
			} else  {
				// element ii exploded
				i1 = ii;
			}
		}
		p.nExp = ab[i0].nExp + (ip - (i0+1));
	}
	
	// we need to use max flow algorithm
	void calculate() {
		mind = new int[n];
		ab[0].nExp = 0;
		for (int i=1; i<n; i++) {
			estExp(i);
		}
		minU = n;
		for (int i=n-1; i>=0; i--) {
			int u = ((n-1)-i) + ab[i].nExp;
			if (u < minU) {
				minU = u;
			}
		}		
	}
	

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		CepnaiaReakcia p = new CepnaiaReakcia();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
