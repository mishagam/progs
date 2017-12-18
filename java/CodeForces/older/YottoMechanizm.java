// CodeForces Round #514 C competition - doesn't work yet

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class YottoMechanizm {
	class Tria {
		Tria[] abc;

		Tria() {
			abc = new Tria[3];
		}

		void add(String s, int idx) {
			if (s.length() > idx) {
				char c1 = s.charAt(idx);
				int ic = c1 - 'a';
				if (abc[ic] == null) {
					abc[ic] = new Tria();
				}
				abc[ic].add(s, idx + 1);
			}
		}
	}

	int n, m;
	String[] sm;
	String[] sq;
	boolean[] ans;
	Map<Integer, Tria> itri = new HashMap<>();

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String[] ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		ans = new boolean[m];
		sm = new String[n];
		sq = new String[m];
		for (int i = 0; i < n; i++) {
			sm[i] = bin.readLine();
		}
		for (int i = 0; i < m; i++) {
			sq[i] = bin.readLine();
		}
	}

	void printRes() {
		for (int j = 0; j < m; j++) {
			System.out.println(ans[j] ? "YES" : "NO");
		}
	}

	Tria lenToTria(int len) {
		if (itri.get(len) == null) {
			itri.put(len, new Tria());
		}
		return itri.get(len);
	}

	boolean checkString(Tria t, String s, int idx, int nerr) {
		boolean found;
		if (t == null) {
			found = false;
		} else if (s.length() == idx) {
			found = true;
		} else if (nerr == 0) {
			// exact find
			int ic = s.charAt(idx) - 'a';
			found = checkString(t.abc[ic], s, idx + 1, nerr);
		} else {
			found = false;
			for (int k = 0; k < 3 && !found; k++) {
				boolean sameChar = (s.charAt(idx) - 'a') == k;
				int ne = (sameChar ? nerr : 0);
				found = checkString(t.abc[k], s, idx + 1, ne);
			}
		}
		return found;
	}

	private void calculate() {
		// adding strings
		for (int i = 0; i < n; i++) {
			int len = sm[i].length();
			Tria t = lenToTria(len);
			t.add(sm[i], 0);
		}
		// checking strings
		for (int j = 0; j < m; j++) {
			int len = sq[j].length();
			Tria t = lenToTria(len);
			ans[j] = checkString(t, sq[j], 0, 1);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		YottoMechanizm l = new YottoMechanizm();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
