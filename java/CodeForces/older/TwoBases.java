// CodeForces Round #312 B done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;

public class TwoBases {
	int nx, bx;
	int []x;
	int ny,by;
	int []y;
	String sRes;
	
	private void readData(BufferedReader bin) throws IOException {
		// read x
		String s = bin.readLine();
		String []ss = s.split(" ");
		nx = Integer.parseInt(ss[0]);
		bx = Integer.parseInt(ss[1]);
		x = new int[nx];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<nx; i++) {
			x[i] = Integer.parseInt(ss[i]);
		}
		// read y
		s = bin.readLine();
		ss = s.split(" ");
		ny = Integer.parseInt(ss[0]);
		by = Integer.parseInt(ss[1]);
		y = new int[ny];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<ny; i++) {
			y[i] = Integer.parseInt(ss[i]);
		}
	}
	
	void printRes() {
		System.out.println(sRes);
	}
	
	BigInteger baseNum(int b, int []d) {
		BigInteger bi = new BigInteger("" + d[0]);
		BigInteger base = new BigInteger("" + b);
		for (int i=1; i<d.length; i++) {
			BigInteger dg = new BigInteger("" + d[i]);
			bi = bi.multiply(base).add(dg);
		}
		return bi;
	}
	
	private void calculate() {
		BigInteger bix = baseNum(bx, x);
		BigInteger biy = baseNum(by, y);
		//System.out.println("bix: " + bix);
		//System.out.println("biy: " + biy);
		if (bix.compareTo(biy) > 0) {
			sRes = ">";
		} else if (bix.compareTo(biy) < 0) {
			sRes = "<";
		} else {
			sRes = "=";
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		TwoBases l = new TwoBases();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
