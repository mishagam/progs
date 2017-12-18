// CodeForces Round #669 C competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class BetweenOffices {

	int n;  // number of requests
	String sf;
	boolean moreSf;

	void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// reading requests
		sf = bin.readLine().trim();
	}
	
	void calculate() {
		if (sf.charAt(0)=='S' && sf.charAt(n-1)=='F') {
			moreSf = true;
		} else {
			moreSf = false;
		}
	}
	
	void printRes() {
		System.out.println(moreSf ? "YES" : "NO");
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		BetweenOffices l = new BetweenOffices();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
