// codeforces 488 b - Done in doreshivanii
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class KorobKonfet {
	int n;
	int []a;
	int nb;
	int []b;
	boolean hasans;
	
	void readData(BufferedReader bin) throws IOException {
		// n
		String s = bin.readLine();
		n = Integer.parseInt(s);
		a = new int[n];
		b = new int[4];
		// a
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			a[i] = Integer.parseInt(s);
		}
	}
	
	boolean isOsob(int []aa) {
		int med = (aa[1] + aa[2]) / 2;
		int meanad = (aa[0] + aa[3]) / 2;
		int diap = aa[3] - aa[0];
		boolean ha = (med == meanad) && (med == diap);
		return ha;		
	}
	
	// we need to use max flow algorithm
	void calculate() {
		nb = 4 - n;
		if (n==0) {
			b[0] = 1;
			b[1] = 1;
			b[2] = 3;
			b[3] = 3;
			hasans = true;
		} else if (n==1) {
			b[0] = 1*a[0];
			b[1] = 3*a[0];
			b[2] = 3*a[0];
			hasans = true;
		} else if (n==2) {
			Arrays.sort(a);
			int aa = a[0];
			int bb = a[1];
			b[0] = 4*aa - bb;
			b[1] = 3*aa;
			hasans = (b[0]>0 && b[1] > 0);
		} else if (n==3) {
			Arrays.sort(a);
			// check all places; array aa = a and k
			int []aa = new int[4]; 
			int bb=0;
			hasans = false;
			for (int k=0; k<4; k++) {
				for (int i=0; i<4; i++) {
					if (i<k) {
						aa[i] = a[i];
					} else if (i>k){
						aa[i] = a[i-1];
					}
				}
				if (k==0) {
					bb = aa[k] = a[0] - (a[2] - a[1]);
				} else if (k==1) {
					bb = aa[k] = a[0] + (a[2] - a[1]);
				} else if (k==2) {
					bb = aa[k] = a[2] - (a[1] - a[0]);
				} else if (k==3) {
					bb = aa[k] = a[2] + (a[1] - a[0]);
				}
				if (bb<=0) {
					continue;
				}
				hasans = isOsob(aa);
				if (hasans) {
					b[0] = bb;
					break;
				}
			}
		} else if (n==4) {
			// just check that it is osobennoe 
			Arrays.sort(a);			
			hasans = isOsob(a);
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(hasans ? "YES" : "NO");
		if (hasans) {
			for (int i=0; i<nb; i++) {
				System.out.println(b[i]);
			}			
		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		KorobKonfet p = new KorobKonfet();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
