// CodeForces Round #518 D competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class IliaEskalator {

	int n;
	double p;
	double []pa;
	double []pn;
	int t;
	double mo;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		p = Double.parseDouble(ss[1]);
		pa = new double[n+1];
		pn = new double[n+1];
		t = Integer.parseInt(ss[2]);
	}

	void printRes() {
		System.out.println(mo);
	}
	
	void step() {
		// count pn
		for (int i=0; i<n; i++) {
			pn[i] = (1-p)*pa[i];
			if (i>0) {
				pn[i] += p*pa[i-1];
			}
		}
		pn[n] = pa[n] + p*pa[n-1]; 
		// pa <- pn
		for (int i=0; i<=n; i++) {
			pa[i] = pn[i];
			pn[i] = 0;
		}		
	}

	private void calculate() {
		for (int i=0; i<=n; i++) {
			pa[i] = 0;
		}
		pa[0] = 1.0;
		for (int i=0; i<t; i++) {
			step();
		}
		mo = 0;
		for (int i=0; i<=n; i++) {
			mo += i*pa[i];
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		IliaEskalator l = new IliaEskalator();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
