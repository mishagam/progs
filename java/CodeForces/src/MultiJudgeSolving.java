// CodeForces Round #825 C comp july 16 2017, rendzu

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class MultiJudgeSolving {

	int n,k;
	int []a;
	int minJud;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
		// read a
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(minJud);
	}

	private void calculate() {
		Arrays.sort(a);
		minJud = 0;
		for (int i=0; i<n; i++) {
			int exp = k;
			if (i>0) {
				exp = Math.max(k, a[i-1]);
			}
			if (a[i] > exp*2) {
				minJud++;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		MultiJudgeSolving l = new MultiJudgeSolving();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
