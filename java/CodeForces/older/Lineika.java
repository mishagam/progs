// CodeForces Round #479 C competition

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Lineika {

	int n;
	int []a;
	int l,x,y;
	int val, ax, ay;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String[] ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		l = Integer.parseInt(ss[1]);
		x = Integer.parseInt(ss[2]);
		y = Integer.parseInt(ss[3]);
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i = 0; i < n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		if (val == 0) {
			System.out.println(val);
		} else if (val==1) {
			System.out.println(val);
			System.out.println(ax);
		} else {
			System.out.println(val);
			System.out.println(x + " " + y);
		}
	}
	
	private boolean checknum(int num) {
		for (int i=0; i<n-1; i++) {
			int aj = a[i] + num;
			if (haveValue(aj)) {
				return true;
			}
		}
		return false;
	}
	
	private boolean check0() {
		return checknum(x) && checknum(y);
	}
	
	boolean haveValue(int aj) {
		int i0 = 0;
		int i1 = n;
		while (i0<i1) {
			int ii = (i0+i1) / 2;
			if (a[ii] == aj) {
				return true;
			} else if (a[ii] < aj) {
				i0 = ii + 1;
			} else {
				i1 = ii;
			}
		}
		return false;
	}
	
	boolean check1() {
		// check x+y
		for (int i=0; i<n-1; i++) {
			int aj = a[i] + (x+y);
			if (haveValue(aj)) {
				ax = a[i] + y;
				return true;
			}
		}
		// check y - x
		for (int i=0; i<n-1; i++) {
			int aj = a[i] + (y-x);
			if (haveValue(aj)) {
				if (a[i] + y <= l) {
					ax = a[i] + y;
					return true;
				} else if (a[i] -x >= 0) {
					ax = a[i] - x;
					return true;
				}
			}
		}
		
		if (checknum(x)) {
			ax = y;
			return true;
		}
		if (checknum(y)) {
			ax = x;
			return true;
		}
		return false;
	}
	

	private void calculate() {
		// search for minimum last day
		val = 2;
		if (check0()) {
			val = 0;
		} else if (check1()) {
			val = 1;
		} 
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Lineika l = new Lineika();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
