// CodeForces Round #447 B competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;

public class ArraySet {

	int n;
	int []a;
	ArrayList<Integer> nega = new ArrayList<>();
	ArrayList<Integer> posa = new ArrayList<>();
	ArrayList<Integer> zera = new ArrayList<>();
	
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
	}
	
	void printSet(ArrayList< Integer> l) {
		System.out.print(l.size());
		for (int i : l) {
			System.out.print(" " + i);
		}
		System.out.println();
	}
	
	void printRes() {
		printSet(nega);
		printSet(posa);
		printSet(zera);
	}
	
	private void calculate() {
		// search max in w;
		for (int i=0; i<n; i++) {
			if (a[i] > 0) {
				posa.add(a[i]);
			} else if (a[i] < 0) {
				nega.add(a[i]);
			} else {
				zera.add(a[i]);
			}
		}
		if (posa.isEmpty()) {
			// move 2 from nega
			int a = nega.remove(0); posa.add(a);
			int b = nega.remove(0); posa.add(b);
		}
		if (nega.size() % 2 == 0) {
			int a = nega.remove(0); zera.add(a);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ArraySet l = new ArraySet();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
