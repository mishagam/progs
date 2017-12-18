// CodeForces Round #673 A competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class FindExtraOne {

	int n;
	int []x;
	int []y;
	boolean havePoint;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read t
		x = new int[n];
		y = new int[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			x[i] = Integer.parseInt(ss[0]);
			y[i] = Integer.parseInt(ss[1]);
		}		
	}

	void printRes() {
		System.out.println(havePoint ? "Yes" : "No");
	}	

	private void calculate() {
		int nPo = 0;
		for (int i=0; i<n; i++) {
			if (x[i]>0) {
				nPo++;
			}
		}
		havePoint = (nPo <= 1) || (nPo >= (n-1));
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		FindExtraOne l = new FindExtraOne();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
