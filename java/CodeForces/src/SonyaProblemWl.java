// CodeForces Round #713 C Sonya and Problem Wihtout a Legend

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class SonyaProblemWl {

	int n;
	int []a;
	long nops;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read t
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}		
	}

	void printRes() {
		System.out.println(nops);
	}
	private void calculate() {
		// TODO need to Use dynamic programming probably
		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SonyaProblemWl l = new SonyaProblemWl();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
