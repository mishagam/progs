// CodeForces Round #540 A

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class KodoZamok {

	int n;
	String sa,sb;
	int ret;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		sa = bin.readLine();
		sb = bin.readLine();		
	}
	
	void printRes() {
		System.out.println(ret);
	}
	
	private void calculate() {
		ret = 0;
		for (int i=0; i<n; i++) {
			int a = sa.charAt(i) - '0';
			int b = sb.charAt(i) - '0';
			if (b<a) {
				int t=b; b=a; a=t;
			}
			int d = Math.min(b-a, a+10-b);
			ret += d;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		KodoZamok l = new KodoZamok();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
