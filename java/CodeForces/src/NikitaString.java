// CodeForces Round #877 B train done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class NikitaString {

	String a;
	int maxBeauty;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		a = sss.trim();
	}
	
	void printRes() {
		System.out.println(maxBeauty);
	}
	

	private void calculate() {
		int n = a.length();
		int []na = new int[n+1];
		int []nab = new int[n+1];
		int []naba = new int[n+1];
		na[0] = nab[0] = naba[0];
		for (int i=0; i<n; i++) {
			int c = a.charAt(i);
			// update na i+1
			if (c=='a') {
				na[i+1] = 1 + na[i];
			} else {
				na[i+1] = na[i];
			}
			// update nab
			if (c=='a') {
				nab[i+1] = Math.max(nab[i], na[i+1]);
			} else if (c=='b') {
				nab[i+1] = 1 + nab[i];
			} else {
				throw new IllegalStateException("Illegal char " + c);
			}
			// update naba
			if (c=='b') {
				naba[i+1] = Math.max(naba[i], nab[i+1]);
			} else if (c=='a') {
				naba[i+1] = 1 + naba[i];
			} else {
				throw new IllegalStateException("Illegal char " + c);
			}
		}
		maxBeauty = naba[n];
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		NikitaString l = new NikitaString();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
