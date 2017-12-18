// CodeForces Round #441 B training Done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ValeraFruct {

	int n,v;
	int []a;
	int sobr=0;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		v = Integer.parseInt(ss[1]);
		a = new int[3000+2];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			int aa = Integer.parseInt(ss[0]);
			int bb = Integer.parseInt(ss[1]);
			a[aa] += bb;
		}
	}
	
	void printRes() {
		System.out.println(sobr);
	}
	
	private void calculate() {
		// search max in w;
		int rem = 0;
		for (int i=0; i<3002; i++) {
			int r = rem;
			int as = Math.min(v-rem, a[i]);
			sobr += (r + as);
			rem = Math.min(v,  a[i] - as);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ValeraFruct l = new ValeraFruct();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
