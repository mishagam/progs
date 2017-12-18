// CodeForces Round #797 B archive done
// probably dynamic programming

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class OddSum {

	int n;
	int []a;
	int []odd;
	int []even;
	int no,ne;
	int maxOdd;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read a
		s = bin.readLine();
		ss = s.split(" ");
		a = new int[n];
		for (int i = 0; i < n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(maxOdd);
	}
	
	private void prepare_odd_even() {
		odd = new int[n];
		even = new int[n];
		ne = no = 0;
		for (int i=0; i<n; i++) {
			if (a[i]%2==0) {
				even[ne++] = a[i];
			} else {
				odd[no++] = a[i];
			}
		}
		Arrays.sort(odd,0, no);
		Arrays.sort(even,0, ne);
	}
	

	private void calculate() {
		prepare_odd_even();
		int sEven = 0;  // summ of positive even numbers
		int sOdd = 0;
		for (int i=0; i<ne; i++) {
			if (even[i]>0) {
				sEven += even[i];
			}
		}
		// adding last (biggest) odd number
		sOdd = odd[no-1];
		no--;
		while (no>1) {
			int oo = odd[no-1] + odd[no-2];
			if (oo>0) {
				sOdd += oo;
				no -= 2;
			} else {
				break;
			}
		}
		maxOdd = sOdd + sEven;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		OddSum l = new OddSum();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
