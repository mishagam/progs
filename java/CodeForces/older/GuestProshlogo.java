// CodeForces Round #625a competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class GuestProshlogo {

	long n;
	long a,b,c;
	long nliter;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		n = Long.parseLong(s);
		s = bin.readLine();
		a = Long.parseLong(s);
		s = bin.readLine();
		b = Long.parseLong(s);
		s = bin.readLine();
		c = Long.parseLong(s);
	}

	void printRes() {
		System.out.println(nliter);
	}

	private void calculate() {
		nliter=0;
		long o=n;
		if(a <= ( b - c )) {
			nliter = n / a;
		} else {
			if (n>=b) {				
				nliter = (n - b) / (b - c);
				o = n - nliter*(b-c);
				while (o>=b) {
					nliter++;
					o =o-b+c;
				}
			} 
			nliter += (o / a);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		GuestProshlogo l = new GuestProshlogo();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
