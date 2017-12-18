// CodeForces Round #518 B competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class TaniaPozdravlenie {

	String s;
	String t;
	int [][]ns;
	int [][]nt;
	int nura=0;
	int nopa=0;

	private void readData(BufferedReader bin) throws IOException {
		s = bin.readLine();
		t = bin.readLine();
		ns = new int[26][2];
		nt = new int[26][2];
	}
	
	void StrToN(String s, int [][]ns) {
		int ic,iu;
		for (int i=0; i<s.length(); i++) {
			char c = s.charAt(i);
			if (Character.isUpperCase(c)) {
				ic = c-'A';
				iu = 1;				
			} else {
				ic = c-'a';
				iu = 0;
			}
			ns[ic][iu]++;
		}
	}

	void printRes() {
		System.out.println(nura + " " + nopa);
	}
	
	void countTwo(int []nns, int []nnt) {
		int sms=0;
		int smt=0;
		for (int k=0; k<2; k++) {
			int mn = Math.min(nns[k], nnt[k]);
			nura += mn;
			nns[k] -= mn;
			nnt[k] -= mn;
			sms += nns[k];
			smt += nnt[k];			
		}
		nopa += Math.min(sms, smt);
	}
	
	void countNuNo() {
		for (int i=0; i<26; i++) {
			countTwo(ns[i], nt[i]);
		}
	}

	private void calculate() {
		StrToN(s, ns);
		StrToN(t, nt);
		countNuNo();
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		TaniaPozdravlenie l = new TaniaPozdravlenie();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
