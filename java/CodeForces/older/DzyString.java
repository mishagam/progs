// CodeForces Round #447 B competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DzyString {

	int ls, k;
	int []w;
	String sv;
	int val;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		sv = s;
		ls = sv.length();
		s = bin.readLine();
		String []ss = s.split(" ");
		k = Integer.parseInt(ss[0]);
		s = bin.readLine();
		ss = s.split(" ");
		w = new int[26];
		for (int i=0; i<26; i++) {
			w[i] = Integer.parseInt(ss[i]);
		}
	}
	
	void printRes() {
		System.out.println(val);
	}
	
	private void calculate() {
		// search max in w;
		int mi = -1, mw = -1;
		char []a = new char[ls + k];
		for (int i=0; i<26; i++) {
			if (w[i] > mw) {
				mw = w[i];
				mi = i;
			}
		}
		for (int i=0; i<ls; i++) {
			a[i] = sv.charAt(i);
		}
		for (int i=ls; i<ls+k; i++) {
			a[i] = (char)('a' + mi);
		}
		// count val
		val = 0;
		for (int i=0; i<ls + k; i++) {
			val += (i+1)*w[a[i]-'a'];
		}
		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DzyString l = new DzyString();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
