// codeforces 488 d - too long time
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Lenta {
	
	class Partsol {
		int min;
		int max;
		int len;
		int first;
	}
	int n,s,l;
	int []a;
	int []minparts;
	int nparts;
	
	void readData(BufferedReader bin) throws IOException {
		// n
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		s = Integer.parseInt(ss[1]);
		l = Integer.parseInt(ss[2]);
		// a
		a = new int[n];
		minparts = new int[n];
		sss = bin.readLine();
		ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
			minparts[i] = -1;
		}
	}
	List<Partsol> pal = new ArrayList<>();
	List<Partsol> newpal = new ArrayList<>();
	
	void step(int i) {
		int aa = a[i];
		newpal.clear();
		for (Partsol p : pal) {
			// try if can put a in min .. max
			int amin = (aa<p.min ? aa : p.min);
			int amax = (aa>p.max ? aa : p.max);
			if (amax - amin <= s) {
				p.min = amin;
				p.max = amax;
				p.len++;
				newpal.add(p);
				if (p.len >= l) {
					int np = (p.first==0 ? 1 : minparts[p.first-1] + 1);
					if (minparts[i]==-1 || minparts[i]>np) {
						minparts[i] = np;
					}
				}
			} else {
				// dropping p
			}			
		}
		// new partsol starting at i
		if (i==0 || minparts[i-1] > 0) {
			Partsol p = new Partsol();
			p.min = aa;
			p.max = aa;
			p.first = i;
			p.len = 1;
			newpal.add(p);
			if (p.len >= l) {
				int np = (p.first==0 ? 1 : minparts[p.first-1] + 1);
				if (minparts[i]==-1 || minparts[i]>np) {
					minparts[i] = np;
				}
			}
		}
		// exchange pal and newpal
		List<Partsol> temp = pal;
		pal = newpal;
		newpal = temp;		
	}
	
	// we need to use max flow algorithm
	void calculate() {
		for (int i=0; i<n; i++) {
			step(i);
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(minparts[n-1]);		
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Lenta p = new Lenta();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
