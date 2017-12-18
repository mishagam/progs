// CodeForces Round #673 A competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class IsRated {

	int n;
	int []a;
	int []b;
	String ans;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read t
		a = new int[n];
		b = new int[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			a[i] = Integer.parseInt(ss[0]);
			b[i] = Integer.parseInt(ss[1]);
		}		
	}

	void printRes() {
		System.out.println(ans);
	}
	

	private void calculate() {
		ans = "maybe";
		for (int i=0; i<n; i++) {
			if (a[i] != b[i]) {
				ans = "rated";
				return;
			}
		}
		for (int i=1; i<n; i++) {
			if (a[i]>a[i-1]) {
				ans = "unrated";
				return;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		IsRated l = new IsRated();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
