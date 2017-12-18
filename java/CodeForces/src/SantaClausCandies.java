// CodeForces Round #753 A fignia, done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class SantaClausCandies {
	
	int n;
	int k;
	List<Integer> la = new ArrayList<>();

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
	}

	void printRes() {
		System.out.println(k);
		for (int i=0; i<k; i++) {
			System.out.print(la.get(i) + " ");
		}
		System.out.println();
	}
	

	private void calculate() {
		int cu = 1;
		int o = n;
		while (o-cu > cu) {
			la.add(cu);
			o = o - cu;
			cu = cu+1;
		}
		la.add(o);
		k = la.size();
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SantaClausCandies l = new SantaClausCandies();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
