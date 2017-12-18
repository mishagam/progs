// CodeForces Round #522 B wrong XXX

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class FlashCard {

	int n,m;
	int []a;
	int nCards;
	
	private void readData(BufferedReader bin) throws IOException {
		String []ss;
		String s = bin.readLine();
		n = Integer.parseInt(s);
		s = bin.readLine();
		m = Integer.parseInt(s);
		a = new int[n];
		for (int i=0; i<n; i++) {
			// read m,k,a
			s = bin.readLine();
			a[i] = Integer.parseInt(s);
		}
	}
	
	void printRes() {
		System.out.println(nCards);
	}
	
	private void calculate() {
		Arrays.sort(a);
		nCards=0;
		for (int i=n-1; i>=0; i--) {
			if (m>0) {
				nCards++;
				m -= a[i];
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		FlashCard l = new FlashCard();
		l.readData(bin);
		l.calculate(); // here for each set
		l.printRes();
	}
}
