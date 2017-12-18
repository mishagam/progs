// CodeForces Round #136 B done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class TernaryLogic {

	long a,c;
	long b;
	int n3=20;  // number of ternary digits

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		a = Integer.parseInt(ss[0]);
		c = Integer.parseInt(ss[1]);
	}

	void printRes() {
		System.out.println(b);
	}	
	
	/** a -> tern */
	byte [] toTernary(long a) {
		byte []tern = new byte[n3];
		for (int i=0; i<n3; i++) {
			byte o = (byte)(a % 3);
			a = a/3;
			tern[i] = o;
		}
		return tern;
	}
	
	long fromTern(byte []tern) {
		long a = 0;
		for (int i=n3-1; i>=0; i--) {
			a = 3*a + tern[i];
		}
		return a;
	}

	private void calculate() {
		byte []a3 = toTernary(a);
		byte []c3 = toTernary(c);
		byte []b3 = new byte[n3];
		for (int i=0; i<n3; i++) {
			b3[i] = (byte)((9 + c3[i] - a3[i]) % 3);
		}
		b = fromTern(b3);		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		TernaryLogic l = new TernaryLogic();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
