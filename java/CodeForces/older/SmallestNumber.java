// CodeForces Round #55 B done - first run!!

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class SmallestNumber {

	int n = 4;
	long[][] aa;
	char[] ops;
	long res;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String[] ss = s.split(" ");
		n = 4;
		aa = new long[4][n];
		ops = new char[3];
		for (int i = 0; i < n; i++) {
			aa[0][i] = Integer.parseInt(ss[i]);
		}
		// reading ops
		s = bin.readLine();
		ss = s.split(" ");
		for (int i = 0; i < n - 1; i++) {
			ops[i] = ss[i].charAt(0);
		}
	}

	void printRes() {
		System.out.println(res);
	}

	long minRec(int step) {
		long[] ao = aa[step];
		long[] an = aa[step + 1];
		int m = n - step; // size of ao
		long minv = 100000000000000L;
		long v;
		char cop = ops[step];
		if (m == 2) {
			if (cop == '+') {
				v = ao[0] + ao[1];
			} else {
				v = ao[0] * ao[1];
			}
			if (v < minv) {
				minv = v;
			}
		} else {
			for (int i = 0; i < m - 1; i++) {
				for (int j = i + 1; j < m; j++) {
					long a = ao[i];
					long b = ao[j];
					int jj = 1;
					for (int k = 0; k < m; k++) {
						if (i != k && j != k) {
							an[jj++] = ao[k];
						}
					}

					an[0] = (cop == '+' ? a + b : a * b);
					v = minRec(step + 1);
					if (v < minv) {
						minv = v;
					}
				}
			}
		}
		return minv;
	}

	private void calculate() {
		res = minRec(0);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SmallestNumber l = new SmallestNumber();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
