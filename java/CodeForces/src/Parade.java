// CodeForces Round #733 B done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Parade {

	int n;
	int []la;
	int []ra;
	int ichange;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		la = new int[n];
		ra = new int[n];
		for (int i = 0; i < n; i++) {
			sss = bin.readLine();
			ss = sss.split(" ");
			la[i] = Integer.parseInt(ss[0]);
			ra[i] = Integer.parseInt(ss[1]);
		}
	}

	void printRes() {
		System.out.println(ichange);
	}	

	private void calculate() {
		ichange = 0;
		// calculate L, R, diff
		int L=0, R=0, diff = 0;
		for (int i=0; i<n; i++) {
			L += la[i];
			R += ra[i];
		}
		diff = Math.abs(L-R);
		// checking every change
		int iMax=-1, diffMax=diff;
		for (int i=0; i<n; i++) {
			int lL = L - la[i] + ra[i];
			int rR = R - ra[i] + la[i];
			int d = Math.abs(lL - rR);
			if (d>diffMax) {
				iMax = i;
				diffMax = d;
			}
		}
		ichange = iMax + 1;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Parade l = new Parade();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
