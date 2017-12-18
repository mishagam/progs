// CodeForces Round #522 B training, done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class PineappleIncident {

	int t,s,x;
	boolean barks;
	
	private void readData(BufferedReader bin) throws IOException {
		String []ss;
		String s0 = bin.readLine();
		ss = s0.split(" ");
		t = Integer.parseInt(ss[0]);
		s = Integer.parseInt(ss[1]);
		x = Integer.parseInt(ss[2]);
	}
	
	void printRes() {
		System.out.println(barks ? "YES" : "NO");
	}
	
	private void calculate() {
		if (s<t) {
			barks = false;
			return;
		}
		x = x-t;
		if (x==0) {
			barks = true;
		} else if (x==1) {
			barks = false;
		} else {
			x = x % s;
			if (x==0 || x==1) {
				barks = true;
			} else {
				barks = false;
			}
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		PineappleIncident l = new PineappleIncident();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
