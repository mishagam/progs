// codeforces 559 B done
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EquivalentStrings {
	String a,b;
	boolean equiv;
	
	class Counts {
		int []cnts;
		String base;
		int ll,bb;
		
		Counts(String s, int b, int l) {
			cnts = new int[26];
			base = s;
			ll = l;
			bb = b;
			for (int i=b; i<l; i++) {
				int ic = (int)(s.charAt(i)-'a');
				cnts[ic]++;
			}
		}
		
		boolean sameCnts(Counts b) {			
			for (int i=0; i<26; i++) {
				if (cnts[i] != b.cnts[i]) {
					return false;
				}				
			}
			return true;
		}
		
		int len() {
			return ll - bb;
		}
		
		Counts []breakUp() {
			Counts []aa = new Counts[2];
			int l2 = len()/2;
			aa[0] = new Counts(base, bb, bb+l2);
			aa[1] = new Counts(base, bb+l2, ll);
			return aa;
		}		
		
		boolean same(Counts b) {
			if (this.len() != b.len()) {
				return false;
			}
			if (!sameCnts(b)) {
				return false;
			} else if (this.len() % 2 != 0) {
				// compare strings
				for (int i=0; i<ll-bb; i++) {
					if (base.charAt(i+bb) != b.base.charAt(i+b.bb)) {
						return false;
					}					
				}
				return true;
			} else {
				Counts []aa = this.breakUp();
				Counts []ba = b.breakUp();
				if (aa[0].same(ba[0]) && aa[1].same(ba[1])) {
					return true;
				}
				if (aa[0].same(ba[1]) && aa[1].same(ba[0])) {
					return true;
				}
				return false;
			}
		}
	}
	
	void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		a = sss;
		sss = bin.readLine();
		b = sss;
	}	
	
	// we need to use max flow algorithm
	void calculate() {
		Counts ca = new Counts(a,0,a.length());
		Counts cb = new Counts(b,0,b.length());
		equiv = ca.same(cb);
	}
	
	void writeRes() throws IOException {
		System.out.println(equiv ? "YES" : "NO");
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		EquivalentStrings p = new EquivalentStrings();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
