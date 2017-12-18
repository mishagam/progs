// CodeForces Round #513 C

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class TemniySvetliy {
	
	int a,b,c;
	boolean pos;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		a = Integer.parseInt(ss[0]);
		b = Integer.parseInt(ss[1]);
		c = Integer.parseInt(ss[2]);
	}
	
	void printRes() {
		System.out.println(pos ? "Yes" : "No");
	}
	
	private void calculate() {
		pos = false;
		for (int i=0; a*i <= c; i++) {
			if (((c-i*a) % b) == 0) {
				pos = true;
				break;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		TemniySvetliy dr = new TemniySvetliy();
		dr.readData(bin);
		dr.calculate();
		dr.printRes();
	}
}
