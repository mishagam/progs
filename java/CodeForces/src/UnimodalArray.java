// CodeForces Round #831 A done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class UnimodalArray {

	int n;
	int []a;
	boolean isUnimodal;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		s = bin.readLine();
		ss = s.split(" ");
		a = new int[n];
		for (int i = 0; i < a.length; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(isUnimodal ? "YES" : "NO");
	}
	
	enum Status {GROW, CONST, DECR};
	private void calculate() {
		Status st = Status.GROW;
		isUnimodal = true;
		Loop:
		for (int i=0; i<n-1; i++) {
			switch (st) {
			case GROW:
				if (a[i]==a[i+1]) {
					st = Status.CONST;
				} else if (a[i]> a[i+1]) {
					st = Status.DECR;
				}
				break;
			case CONST:
				if (a[i]<a[i+1]) {
					isUnimodal = false;
					break Loop;
				} else if (a[i]> a[i+1]) {
					st = Status.DECR;
				}
				break;
			case DECR:
				if (a[i]<= a[i+1]) {
					isUnimodal = false;
					break Loop;
				}
				break;
			}
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		UnimodalArray l = new UnimodalArray();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
