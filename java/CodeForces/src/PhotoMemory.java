// CodeForces Round #522 B training, done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class PhotoMemory {

	int n;
	int []w;
	int []h;
	int maxH=0;
	int nextH=0;
	int maxHidx=-1;
	int sumW=0;
	
	private void readData(BufferedReader bin) throws IOException {
		String []ss;
		String s = bin.readLine();
		n = Integer.parseInt(s);
		w = new int[n];
		h = new int[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			w[i] = Integer.parseInt(ss[0]);
			h[i] = Integer.parseInt(ss[1]);
		}
	}
	
	void printRes() {
		for (int i=0; i<n; i++) {
			int a = calcArea(i);
			System.out.print(a + " ");
		}
		System.out.println();
	}
	
	int calcArea(int i) {
		int ww = sumW - w[i];
		int hh = maxH;
		if (i==maxHidx) {
			hh = nextH;			
		}
		return ww*hh;
	}
	
	private void calculate() {
		for (int i=0; i<n; i++) {
			sumW += w[i];
			if (h[i]>maxH) {
				nextH = maxH;
				maxH = h[i];
				maxHidx = i;
			} else if (h[i]>nextH) {
				nextH = h[i];
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		PhotoMemory l = new PhotoMemory();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
