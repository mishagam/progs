// CodeForces Round #228 div 2 A

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class LisaNumbers {
	
	int n,h;
	int []a;    // sorted ao
	int sum;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		s = bin.readLine();
		ss = s.split(" ");
		a = new int[n];
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
		bin.close();
	}
	
	int gcd(int a, int b) {
		if (a<b) return gcd(b,a);
		if (b==0) return a;
		return gcd(b, a%b);
	}
	
	void printRes() {
		System.out.println(sum);
		System.out.println();
	}
	
	private void calculate() {
		int cd = a[0];
		for (int i=1; i<n; i++) {
			cd = gcd(cd, a[i]);			
		}
		sum = cd*n;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		LisaNumbers ln = new LisaNumbers();
		ln.readData(bin);
		ln.calculate();
		ln.printRes();
	}
}
