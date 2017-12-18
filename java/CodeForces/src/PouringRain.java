// CodeForces Round #669 C competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class PouringRain {

	int d,h,v,e;
	double tm;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		d = Integer.parseInt(ss[0]);
		h = Integer.parseInt(ss[1]);
		v = Integer.parseInt(ss[2]);
		e = Integer.parseInt(ss[3]);
	}

	void printRes() {
		if (tm>0) {
			System.out.println("YES");
			System.out.println(tm);
		} else {
			System.out.println("NO");
		}
	}	

	private void calculate() {
		double s = ((Math.PI*d)*d)/4.0;
		if (e*s>v) {
			tm = -1;
		} else {
			tm = (h*s) / (v-e*s);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		PouringRain l = new PouringRain();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
