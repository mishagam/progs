// CodeForces Round #669 C competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class SaveProblem {

	int a;  // number solutions
	int n,m;
	int []d;

	void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		a = Integer.parseInt(ss[0]);
	}
	
	void calculate() {
		m = 2;
		d = new int[2];
		d[0] = 2;
		d[1] = 3;
		if (a==1) {
			n = 3;
		} else {
			n = 6*(a-1);
		}
	}
	
	void printRes() {
		System.out.println(n + " " + m);
		for (int i=0; i<m; i++) {
			System.out.print(d[i] + " ");
		}
		System.out.println();
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SaveProblem l = new SaveProblem();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
