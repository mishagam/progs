// CodeForces Round #332 B Done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Pifagor {

	int n;
	long nt;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
	}
	
	void printRes() {
		System.out.println(nt);
	}
	
	private void calculate() {
		int a,b,c;
		nt = 0;
		for (a=1; a<n; a++) {
			for (b=a; b<n; b++) {
				double fc = Math.sqrt(a*a + b*b);
				c = (int)fc;
				if (c*c == (a*a + b*b) && c<=n) {
					nt++;
				}
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Pifagor l = new Pifagor();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
