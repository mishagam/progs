// CodeForces Round #820 B Mister B and Angle in Polygon. Done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class MisterBAnglePolygon {

	long n;
	long a;
	int v1,v2,v3;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		a = Integer.parseInt(ss[1]);
	}

	void printRes() {
		System.out.printf("%d %d %d\n", v1,v2,v3);
	}
	

	private void calculate() {
		v3 = 2;
		v2 = 1;
		// TODO
		if (n==3) {
			v1 = 3;
			return;
		} 
		long k2 = (a*n)/180;  // k - 2
		if (k2 > n-1) {
			v1 = (int)n;
			return;
		} else if (k2<1) {
			v1 = 3;
			return;
		}
		long d2 = a*n - k2*180;
		long d1 = (k2+1)*180 - a*n;
		if (d2<0 || d1<0) {
			throw new IllegalStateException("Unexpected negative d1,d2 = " + d1 + " " + d2);
		}
		v1 = (int)(d2<d1 ? (k2+2) : (k2+3));
		if (v1>n) {
			v1 = (int)n;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		MisterBAnglePolygon l = new MisterBAnglePolygon();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
