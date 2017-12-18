// CodeForces Round #841 B training done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Godsend {

	int n;
	int []a;
	boolean firstWin;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i = 0; i < n; i++) {
			a[i] = Integer.parseInt(ss[i]);	
		}
	}

	void printRes() {
		System.out.println(firstWin ? "First" : "Second");			
	}	

	private void calculate() {
		int sm = 0;
		boolean hasOdd = false;
		for (int i=0; i<n; i++) {
			sm += a[i];
			if (a[i]%2==1) {
				hasOdd = true;
			}
		}
		if (sm%2==1) {
			firstWin = true;
		} else if (hasOdd) {
			firstWin = true;
		} else {
			firstWin = false;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Godsend l = new Godsend();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
