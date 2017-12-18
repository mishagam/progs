// CodeForces Round #623B prochel reshenie

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class NodArray {	
	int n,a,b;
	int []aa;
	long cost=0;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		a = Integer.parseInt(ss[1]);
		b = Integer.parseInt(ss[2]);
		// reading aa
		aa = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			aa[i] = Integer.parseInt(ss[i]);
		}
	}
	
	void printRes() {
		System.out.println(cost);
	}
	
	private void calculate() {
		// TODO
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		NodArray inst = new NodArray();
		inst.readData(bin);
		inst.calculate();
		inst.printRes();
	}
}
