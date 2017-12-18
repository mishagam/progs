// CodeForces Round #876 B train

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DivisiblityDifferences {

	int n,k,m;
	int []a;   // original indexes
	int []b;  // indexes after medians
	boolean canSelect;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
		m = Integer.parseInt(ss[2]);
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}		
	}

	void printRes() {
		if (canSelect) {
			System.out.println("Yes");
			for (int i=0; i<k; i++) {
				System.out.print(b[i] + " ");
			}
			System.out.println();
		} else {
			System.out.println("No");
		}
	}

	private void calculate() {
		int []no = new int[m];
		for (int i=0; i<n; i++) {
			no[a[i]%m]++;
		}
		int selo=-1;
		canSelect = false;
		for (int i=0; i<m; i++) {
			if (no[i] >= k) {
				selo = i;
				canSelect = true;
				break;
			}
		}
		if (!canSelect) {
			return;
		}
		b = new int[k];
		int ib = 0;
		for (int i=0; i<n; i++) {
			if (a[i]%m == selo) {
				b[ib++] = a[i];
				if (ib==k) {
					break;
				}
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		DivisiblityDifferences l = new DivisiblityDifferences();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
