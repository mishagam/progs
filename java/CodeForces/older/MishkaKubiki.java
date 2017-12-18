// codeforces 574 D
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MishkaKubiki {
	int n;
	int []h;
	int nop = 0;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		h = new int[n+2];
		h[0] = h[n+1] = 0;
		sss = bin.readLine();
		ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			h[i+1] = Integer.parseInt(ss[i]);
		}
	}
	
	// we need to use max flow algorithm
	void calculate() {
		int hh = 0;
		// flattening h
		for (int i=0; i<n+2; i++) {
			if (h[i]>hh) {
				hh = hh+1;
				h[i] = hh;		
			} else if (h[i]==hh) {
				// do nothing
			} else if (h[i]<hh) {
				// return back
				int h1 = h[i];
				for (int j=i-1; j>=0; j--) {
					if (h[j]<=h1) {
						break;
					}
					h1 = h1+1;
					h[j] = h1;
				}
				hh = h[i];						
			}
		}
		// look for max h
		nop = 0;
		for (int i=0; i<n+2; i++) {
			if (nop < h[i]) {
				nop = h[i];
			}
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(nop);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		MishkaKubiki p = new MishkaKubiki();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
