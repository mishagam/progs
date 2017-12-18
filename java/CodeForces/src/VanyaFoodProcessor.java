// CodeForces Round #677 B training done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class VanyaFoodProcessor {

	int n,h,k;
	int []a;
	long numSec;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		h = Integer.parseInt(ss[1]);
		k = Integer.parseInt(ss[2]);
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i = 0; i < n; i++) {
			a[i] = Integer.parseInt(ss[i]);	
		}
	}

	void printRes() {
		System.out.println(numSec);			
	}	

	private void calculate() {
		numSec = 0;
		int curh = 0;
		for (int i=0; i<n; i++) {
			if (curh + a[i] > h) {
				int t = (curh+a[i] - h);
				int kt = (t+k-1)/k;
				curh -= kt*k;
				numSec += kt;
				if (curh<0) {
					curh = 0;
				}
			}
			curh += a[i];
		}
		int kt = (curh + k - 1)/k;
		numSec += kt;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		VanyaFoodProcessor l = new VanyaFoodProcessor();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
