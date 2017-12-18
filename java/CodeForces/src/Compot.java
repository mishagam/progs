// CodeForces Round #746 0 competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Compot {

	int a,b,c;
	int maxSum;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		a = Integer.parseInt(s);
		s = bin.readLine();
		b = Integer.parseInt(s);
		s = bin.readLine();
		c = Integer.parseInt(s);
	}

	void printRes() {
		System.out.println(maxSum);
	}
	

	private void calculate() {
		int aa = a;
		if (aa*2 > b) {
			aa = b/2;
		}
		if (aa*4 > c) {
			aa = c/4;
		}
		maxSum = aa*7;		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Compot l = new Compot();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
