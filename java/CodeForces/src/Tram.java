// CodeForces Round #746 C competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Tram {

	int s,x1,x2;
	int t1,t2;
	int p,d;
	int minTime;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		s = Integer.parseInt(ss[0]);
		x1 = Integer.parseInt(ss[1]);
		x2 = Integer.parseInt(ss[2]);
		// read t1,t2
		sss = bin.readLine();
		ss = sss.split(" ");
		t1 = Integer.parseInt(ss[0]);
		t2 = Integer.parseInt(ss[1]);
		// read t1,t2
		sss = bin.readLine();
		ss = sss.split(" ");
		p = Integer.parseInt(ss[0]);
		d = Integer.parseInt(ss[1]);
	}

	void printRes() {
		System.out.println(minTime);
	}

	private void calculate() {
		// time without train
		minTime = t2 * Math.abs(x1-x2);
		if (t1>=t2) {			
			return;
		}
		double dv = (1.0/t1 - 1.0/t2);
		if (x2 > x1) {
			// check intersection with train going up, faster
			if (d==1 && p<=x1) {
				double ti = (x1-p)/dv;
				if (ti < minTime) {
					// return when train goes to x2
					minTime = (x2-p)*t1;
				}
			} else {
				// checking second interval
				int tt0;   // start of train second run
				if (d==1) {
					tt0 = t1*(s-p) + t1*s;
				} else {
					tt0 = t1*p;
				}
				double ti = (x1 + (tt0*1.0)/t2)/dv;
				if (ti<minTime) {
					minTime = tt0 + x2*t1;
				}				
			}
		} else {
			// going down check intersection with train going down, faster
			if (d==-1 && p>=x1) {
				double ti = (p-x1)/dv;
				if (ti < minTime) {
					// return when train goes to x2
					minTime = (p-x2)*t1;
				}
			} else {
				// checking second interval
				int tt0;   // start of train second run
				if (d==-1) {
					tt0 = t1*(p) + t1*s;
				} else {
					tt0 = t1*(s-p);
				}
				double ti = (x1 - (tt0*1.0)/t2)/dv;
				if (ti<minTime) {
					minTime = tt0 + (s-x2)*t1;
				}				
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Tram l = new Tram();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
