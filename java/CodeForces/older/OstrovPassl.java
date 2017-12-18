// codeforces 635A
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OstrovPassl {
	int n;
	int []a;
	int []b;
	boolean can;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		
		a = new int[n];
		sss = bin.readLine();
		ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
		
		b = new int[n];
		sss = bin.readLine();
		ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			b[i] = Integer.parseInt(ss[i]);
		}
	}
	
	int next(int o, int []ab) {
		if (++o>=n) {
			o=0;
		}
		if (ab[o]==0) {
			if (++o>=n) {
				o=0;
			}			
		}
		return o;
	}
	
	// we need to use max flow algorithm
	void calculate() {
		int ia=0,ib=0;
		int st=-1;
		// starting number != 0
		for (int i=0; i<n; i++) {
			if (a[i] != 0) {
				ia = i;
				st = a[i];
				break;
			}
		}
		for (int i=0; i<n; i++) {
			if (b[i]==st) {
				ib=i;
				break;
			}
		}
		// cycle 
		can = true;
		for (int i=0; i<n+20; i++) {
			ia = next(ia, a);
			ib = next(ib, b);
			if (a[ia] != b[ib]) {
				can = false;
				break;
			}			
		}		
	}
	
	void writeRes() throws IOException {
		System.out.println(can ? "YES" : "NO");
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		OstrovPassl p = new OstrovPassl();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
