// CodeForces Round #515 B done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DrazilFriends {

	int n, m;
	int []x;
	int []y;
	boolean allHappy;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		x = new int[n];
		y = new int[m];
		// happy man
		s = bin.readLine();
		ss = s.split(" ");
		int b = Integer.parseInt(ss[0]);
		for (int i=1; i<=b; i++) {
			int j = Integer.parseInt(ss[i]);
			x[j] = 1;
		}
		// happy girls
		s = bin.readLine();
		ss = s.split(" ");
		int g = Integer.parseInt(ss[0]);
		for (int i=1; i<=g; i++) {
			int j = Integer.parseInt(ss[i]);
			y[j] = 1;
		}
	}
	
	void printRes() {
		String ans = (allHappy ? "Yes" : "No");
		System.out.println(ans);
	}
	
	private void calculate() {
		boolean changed = true;
		while (changed) {
			changed = false;
			for (int k=0; k<n*m; k++) {
				int i = k % n;
				int j = k % m;
				if (x[i] != y[j]) {
					x[i] = 1;
					y[j] = 1;
					changed = true;
				}				
			}
		}
		allHappy = true;
		for (int i=0; i<n; i++) {
			if (x[i]==0) {
				allHappy = false;
			}
		}
		for (int i=0; i<m; i++) {
			if (y[i]==0) {
				allHappy = false;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DrazilFriends l = new DrazilFriends();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
