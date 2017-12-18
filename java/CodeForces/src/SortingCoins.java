// CodeForces Round #876 D Sorting the Coins train done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SortingCoins {

	int n;
	int []p;  
	int []a;  

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		p = new int[n];
		a = new int[n+1];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			p[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		for (int i = 0; i < n+1; i++) {
			System.out.print(a[i] + " ");
		}
		System.out.println();
	}

	private void calculate() {
		int lastZ = n-1;
		boolean []inc = new boolean[n];  // in circulation
		Arrays.fill(inc,  false);
		a[0] = 1;
		for (int i=0; i<n; i++) {
			inc[p[i]-1] = true;
			if (lastZ == p[i]-1) {
				while (lastZ>=0 && inc[lastZ]) {
					lastZ--;
				}
			}
			a[i+1] = lastZ - (n-i-2) +1;			
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SortingCoins l = new SortingCoins();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
