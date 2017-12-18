// CodeForces Round #820 B Mister B and Angle in Polygon. Done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ImBoredLife {

	int a,b;
	long comDiv;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		a = Integer.parseInt(ss[0]);
		b = Integer.parseInt(ss[1]);
	}

	void printRes() {
		System.out.println(comDiv);
	}
	

	private void calculate() {
		if (b<a) {
			a = b;
		}
		comDiv = 1;
		for (int i=1; i<=a; i++) {
			comDiv *= i;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ImBoredLife l = new ImBoredLife();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
