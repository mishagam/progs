// CodeForces Round #447 B competition - still doesn't work

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DzzhuSeq {

	final int MOD = 1000000007;
	long x,y,n;
	long fn;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		x = Integer.parseInt(ss[0]);
		y= Integer.parseInt(ss[1]);
		s = bin.readLine();
		ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
	}
	
	void printRes() {
		System.out.println(fn);
	}
	
	private void calculate() {
		x = 1;
		y = 1;
		long z;
		for (int i=0;i<1000; i++) {
			z = (x+y) % MOD;
			System.out.printf("x, y,z= %10d %10d %10d\n", x,y,z);
			x = y;
			y = z;			
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DzzhuSeq l = new DzzhuSeq();
		// l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
