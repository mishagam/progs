// CodeForces Round #673 A competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class BearGame {

	int n;
	int []t;
	int minutes;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read t
		t = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			t[i] = Integer.parseInt(ss[i]);
		}		
	}

	void printRes() {
		System.out.println(minutes);
	}
	

	private void calculate() {
		if (t[0]>15) {
			minutes = 15;
			return;
		}
		for (int i=0; i<n; i++) {
			if (i==(n-1) || t[i+1]-t[i]>15) {
				minutes = t[i] + 15;
				break;
			}
		}
		minutes = Math.min(minutes, 90);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		BearGame l = new BearGame();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
