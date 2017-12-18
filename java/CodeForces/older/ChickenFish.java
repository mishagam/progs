// CodeForces Round #522 C wrong XXX

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ChickenFish {

	int nt,m,k;
	int []a;
	int []t;
	int []r;
	char []res;
	int nUnKnown;
	
	private void readData(BufferedReader bin) throws IOException {
		String []ss;
		String s = bin.readLine();
		nt = Integer.parseInt(s);
		for (int i=0; i<nt; i++) {
			// read m,k,a
			s = bin.readLine();
			s = bin.readLine();
			ss = s.split(" ");
			m = Integer.parseInt(ss[0]);
			k = Integer.parseInt(ss[1]);
			a = new int[k];
			res = new char[k];
			t = new int[m];
			r = new int[m];
			s = bin.readLine();
			ss = s.split(" ");
			for (int j=0; j<k; j++) {
				a[j] = Integer.parseInt(ss[j]);				
			}
			for (int j=0; j<m-1; j++) {
				s = bin.readLine();
				ss = s.split(" ");
				t[j] = Integer.parseInt(ss[0]);
				r[j] = Integer.parseInt(ss[1]);				
			}
			calculate();
			printRes();
		}
	}
	
	void printRes() {
		System.out.println(new String(res));
	}
	
	private void calculate() {
		nUnKnown = 0;
		for (int i=0; i<m-1; i++) {			
			if (t[i] > 0) {
				int ti = t[i]-1;
				if (r[i]==0) {
					a[ti] --;
				} else {
					nUnKnown -= a[ti];
					nUnKnown++;
					a[ti] = 0;
				}
			} else {
				nUnKnown++;
			}
		}
		for (int i=0; i<k; i++) {
			res[i] = (a[i]>nUnKnown ? 'N' : 'Y');
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ChickenFish l = new ChickenFish();
		l.readData(bin);
		//l.calculate(); // here for each set
		//l.printRes();
	}
}
