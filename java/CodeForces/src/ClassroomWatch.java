// CodeForces Round #876 C train

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ClassroomWatch {

	int k;
	int nx;
	int []x;  

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		k = Integer.parseInt(ss[0]);
	}

	void printRes() {
		System.out.println(nx);
		for (int i = 0; i < nx; i++) {
			System.out.print(x[i] + " ");
		}
		System.out.println();
	}
	
	int sumDigits(int n) {
		int sd = 0;
		while (n>0) {
			sd += n%10;
			n = n/10;
		}
		return sd;
	}

	private void calculate() {
		List<Integer> lx = new ArrayList<Integer>();
		for (int i=1; i<100; i++) {
			if (i>=k) {
				continue;
			}
			int kk = (k-i) + sumDigits(k-i);
			if (k == kk) {
				lx.add(k-i);
			}
			// System.out.println("n,sd = " + (k-i) + " " + kk);
		}
		nx = lx.size();
		if (nx>0) {
			x = new int[nx];
			for (int i=0; i<nx; i++) {
				x[i] = lx.get(nx-i-1);
			}
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ClassroomWatch l = new ClassroomWatch();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
