// CodeForces Round #332 B Done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DzyHash {

	int n,p;
	int []ca;
	int []x;
	int icoll = -1;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		p = Integer.parseInt(ss[0]);
		n = Integer.parseInt(ss[1]);
		x = new int[n];
		ca = new int[p];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			x[i] = Integer.parseInt(s);
		}
	}
	
	void printRes() {
		System.out.println(icoll);
	}
	
	private void calculate() {
		for (int i=0; i<p; i++) {
			ca[i] = -1;
		}
		for (int i=0; i<n; i++) {
			int xp = x[i] % p;
			if (ca[xp] != -1) {
				icoll = i+1;
				break;
			} else {
				ca[xp] = x[i];
			}			
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DzyHash l = new DzyHash();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
