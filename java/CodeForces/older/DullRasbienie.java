// CodeForces Round #148 div 2 D

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DullRasbienie {
	
	int n,h;
	int []a;    // sorted ao
	int []ao;   // original a
	int minhor;
	boolean useh;
	
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		h = Integer.parseInt(ss[1]);
		s = bin.readLine();
		ss = s.split(" ");
		a = new int[n];
		ao = new int[n];
		for (int i=0; i<n; i++) {
			ao[i] = Integer.parseInt(ss[i]);
			a[i] = ao[i];
		}
		Arrays.sort(a);
		bin.close();
	}
	
	/**
	 * calculating horoshesti without using h
	 * @return
	 */
	int calcMin0() {
		int b0 = a[0] + a[1];
		int b1 = a[n-2] + a[n-1];
		return b1 - b0;		
	}
	
	/**
	 * calculating horoshesti without using h
	 * @return
	 */
	int calcMin1() {
		if (n < 3) {
			return 200000003;
		}
		int i1 = -1;
		for (int i=1; i<n; i++) {
			if (a[i] > a[0]) {
				i1 = i;
				break;
			}
		}
		int b0 = 0;
		if (i1 <= 2) {
			int b00 = a[0] + a[1] + h;  // 0 is different
			int b02 = a[1] + a[2];
			b0 = Math.min(b00,  b02);
		} else {
			b0 = a[0] + a[1];  // we cannot escape adding two minimums
		}
		int b10 = a[n-2] + a[n-1];
		int b11 = a[0] + a[n-1] + h;
		int b1 = Math.max(b10, b11);
		int min1 = b1 - b0;
		// System.out.println("min_1 = " + min1);
		return min1;		
	}
	
	void printRes() {
		System.out.println(minhor);
		if (useh) {
			boolean printedOne = false;
			for (int i=0; i<n; i++) {
				if (i>0) {
					System.out.print(" ");
				}
				if (!printedOne && ao[i]==a[0]) {
					System.out.print(1);
					printedOne = true;
				} else {
					System.out.print(2);
				}
			}
		} else {
			for (int i=0; i<n; i++) {
				if (i>0) {
					System.out.print(" ");
				}
				System.out.print(2);
			}
		}
		System.out.println();
		// System.out.println("useh = " + useh);
	}
	
	private void calculate() {
		int m0 = calcMin0();
		int m1 = calcMin1();
		if (m0 < m1) {
			minhor = m0;
			useh = false;
		} else {
			minhor = m1;
			useh = true;
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DullRasbienie dr = new DullRasbienie();
		dr.readData(bin);
		dr.calculate();
		dr.printRes();
	}
}
