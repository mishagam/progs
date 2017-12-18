// CodeForces Round #861 B comp/train done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class WhichFloor {

	int n,m;
	int []k,f;
	int floor;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		k = new int[m];
		f = new int[m];
		for (int i=0; i<m; i++) {
			sss = bin.readLine();
			ss = sss.split(" ");
			k[i] = Integer.parseInt(ss[0]);
			f[i] = Integer.parseInt(ss[1]);
		}
	}

	void printRes() {
		System.out.println(floor);
	}

	private void calculate() {
		int gMin = -10000;  // max minov
		int gMax = 10000; // min maxov
		for (int i=0; i<m; i++) {
			int gmn,gmx;
			if (f[i]==1) {
				gmx = 10000;
				gmn = k[i];
			} else {
				gmx = (k[i]-1)/(f[i]-1);
				gmn= k[i]/f[i];	
				if (gmn*f[i]<k[i]) {
					gmn++;
				}
			}
			if (gMax > gmx) {
				gMax = gmx;
			}
			if (gMin < gmn) {
				gMin = gmn;
			}
		}
		int fmn = (n+gMin-1)/gMin;
		int fmx = (n+gMax-1)/gMax;
		if (fmn==fmx) {
			floor = fmn;
		} else {
			floor = -1;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		WhichFloor l = new WhichFloor();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
