// CodeForces Round #863 B train done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Kayaking {

	int n;
	int []w;
	int [][]mis;  // [0][i] - instab 0 single, 1 - 1 single, 2 - two singles
	long minInstab;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		w = new int[2*n];
		// read a
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<2*n; i++) {
			w[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(minInstab);
	}
	
	int getMis(int k, int i) {
		if (i==-1) {
			return 0;
		}
		return mis[k][i];
	}

	private void calculate() {
		int i0,i1;
		mis = new int[3][2*n];
		for (int k=0; k<3; k++) {
			mis[k] = new int[2*n];
		}
		Arrays.sort(w);
		for (int i=1; i<2*n; i++) {
			for (int k=0; k<3; k++) {
				i0 = getMis(k,i-2) + (w[i]-w[i-1]);
				if (k>0) {
					i1 = mis[k-1][i-1];
					i0 = Math.min(i0,i1);
				}
				mis[k][i] = i0;
			}			
		}
		minInstab = mis[2][n*2-1];
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Kayaking l = new Kayaking();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
