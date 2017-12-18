// CodeForces Round #746 0 competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Decoding {

	int n;
	String sm;
	int []idx;   // original indexes
	int []midx;  // indexes after medians

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(s);
		sm = bin.readLine();
	}

	void printRes() {
		System.out.println(sm);
	}
	
	public void prepareIndexes() {
		idx = new int[n];
		midx = new int[n];
		for (int i=0; i<n; i++) {
			idx[i] = i;
		}
		int im = 0;
		int ln = n;
		for (int i=0; i<n; i++) {
			int m = (ln%2==1 ? ln/2 : ln/2-1);
			midx[im++] = idx[m];
			for (int j=m; j<ln-1; j++) {
				idx[j] = idx[j+1];
			}
			ln--;
		}
	}	

	private void calculate() {
		char []cc = sm.toCharArray();
		char []cout = new char[n];
		prepareIndexes();
		for (int i=0; i<n; i++) {
			cout[midx[i]] = cc[i];
		}
		sm = new String(cout);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Decoding l = new Decoding();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
