// CodeForces Round #669 A competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ArtemPodarki {

	int n;
	int maxPod;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
	}

	void printRes() {
		System.out.println(maxPod);
	}
	

	private void calculate() {
		int d = n/3;
		int o = n%3;
		maxPod = 2*d + (o==0 ? 0 : 1);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ArtemPodarki l = new ArtemPodarki();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
