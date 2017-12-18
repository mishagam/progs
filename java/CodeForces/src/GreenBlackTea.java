// CodeForces Round #746 0 competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class GreenBlackTea {

	int n,k,a,b;
	String gb;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
		a = Integer.parseInt(ss[2]);
		b = Integer.parseInt(ss[3]);
	}

	void printRes() {
		System.out.println(gb);
	}
	boolean ok = true;
	int idx;
	int curg = 0, curb=0;
	char []cc;
	void putg() {
		cc[idx] = 'G';
		curg++;
		curb = 0;
		a--;
	}
	void putb() {
		cc[idx] = 'B';
		curb++;
		curg = 0;
		b--;
	}

	private void calculate() {
		cc = new char[n];		
		for (idx=0; idx<n & ok; idx++) {
			if (curg==k) {
				putb();
			} else if (curb==k) {
				putg();
			} else if (a>b) {
				putg();
			} else {
				putb();
			}
			if (a<0 || b<0) {
				break;
			}
		}
		if (idx==n) {
			gb = new String(cc);
		} else {
			gb = "NO";
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		GreenBlackTea l = new GreenBlackTea();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
