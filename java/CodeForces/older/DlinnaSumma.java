// CodeForces Round #489 C done - 3 fixes

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DlinnaSumma {

	int m,s;
	char []mx;
	char []mn;
	boolean ok;

	private void readData(BufferedReader bin) throws IOException {
		String si = bin.readLine();
		String[] ss = si.split(" ");
		m = Integer.parseInt(ss[0]);
		s = Integer.parseInt(ss[1]);
		mn = new char[m];
		mx = new char[m];
	}

	void printRes() {
		if (ok) {
			System.out.println(new String(mn) + " " + new String(mx));
		} else {
			System.out.println("-1 -1");
		}
	}


	private void calculate() {
		if ((m==0 && s>0) || (s==0 && m>1) || (s>9*m)) {
			ok = false;
			return;
		}
		// mx and reverse mn
		for (int i=0; i<m; i++) {
			int c = (s>9 ? 9 : s);
			s = s - c;
			mx[i] = (char)('0'+c);
			mn[m-i-1] = mx[i];
		}
		if (m>1 && mn[0]=='0') {
			mn[0] = '1';
			for (int i=1; i<m; i++) {
				if (mn[i] != '0') {
					mn[i]--;
					break;
				}
			}
		}
		ok = true;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		DlinnaSumma l = new DlinnaSumma();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
