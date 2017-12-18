// CodeForces Round #633 B competition

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class TrivFact {
	
	int m;
	int k;
	List<Integer> la = new ArrayList<>();
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		m = Integer.parseInt(ss[0]);
	}
	
	void printRes() {
		System.out.println(k);
		for (int i : la) {
			System.out.print(i + " ");
		}
		System.out.println();
	}
	
	private void calculate() {
		int n5=0;
		for (int i=0; n5<=m; i++) {
			int r=i;
			while (r!=0 && r%5==0) {
				n5++;
				r = r/5;
			}
			if (n5==m) {
				la.add(i);
				k++;
			} else if (n5>m) {
				break;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		TrivFact dr = new TrivFact();
		dr.readData(bin);
		dr.calculate();
		dr.printRes();
	}
}
