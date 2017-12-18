// CodeForces Round #148 div 2 D

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Igra {
	
	int n1,n2,k1,k2;
	
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n1 = Integer.parseInt(ss[0]);
		n2 = Integer.parseInt(ss[1]);
		k1 = Integer.parseInt(ss[2]);
		k2 = Integer.parseInt(ss[3]);
		bin.close();
	}
	
	void printRes() {
		String res = (n1>n2 ? "First" : "Second");
		System.out.println(res);
	}
	
	private void calculate() {
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Igra dr = new Igra();
		dr.readData(bin);
		dr.calculate();
		dr.printRes();
	}
}
