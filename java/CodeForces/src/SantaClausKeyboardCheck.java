// CodeForces Round #752 B
// graphs, dijkstra algorithm, not solved

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;

public class SantaClausKeyboardCheck {

	String s,t;
	int n;
	boolean ok;
	List<String>pairs;
	int []tab;

	private void readData(BufferedReader bin) throws IOException {
		s = bin.readLine();
		t = bin.readLine();
		n = s.length();
	}

	void printRes() {
		if (!ok) {
			System.out.println("-1");
			return;
		}
		System.out.println(pairs.size());
		for (String ss : pairs) {
			System.out.println(ss);
		}
	}	

	private void calculate() {
		tab = new int[26];
		for (int i=0; i<26; i++) {
			tab[i] = -1;
		}
		pairs = new ArrayList<>();
		ok = true;
		for (int i=0; i<n && ok; i++) {
			int is = s.charAt(i)-'a';
			int it = t.charAt(i)-'a';
			if (is==it) {
				if (tab[is]==-1) {
					// new correct pair
					tab[is] = it;
					// pairs.add(s.charAt(i) + " " + t.charAt(i));
				} else if (tab[is]==it) {
					// correct pair second time ok					
				} else {
					// incorrect -> correct
					ok = false;
					break;
				}
			} else {
				if (tab[is]==-1 && tab[it]==-1) {
					// new incorrect pair
					tab[is] = it;
					tab[it] = is;
					pairs.add(s.charAt(i) + " " + t.charAt(i));
				} else if (tab[is]==it && tab[it]==is) {
					// incorrect pair second time ok					
				} else {
					// error
					ok = false;
					break;
				}
			}			
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SantaClausKeyboardCheck l = new SantaClausKeyboardCheck();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
