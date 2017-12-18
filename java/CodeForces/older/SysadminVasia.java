// CodeForces Round #31 B , Done, 4 attempts ;(

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class SysadminVasia {

	String s;
	List<String> emails;

	private void readData(BufferedReader bin) throws IOException {
		s = bin.readLine();
	}

	void printRes() {
		boolean first = true;
		for (String e : emails) {
			if (!first) {
				System.out.print(",");
			}
			System.out.print(e);
			first = false;
		}
	}

	private void calculate() {
		String[] ss = s.split("@");
		emails = new ArrayList<String>();
		// check ok
		int n = ss.length;
	    if (n <= 1 || s.charAt(0)=='@' || s.charAt(s.length()-1)=='@') {
		    emails.add("No solution");
		    return;
	    }
		for (int i = 0; i < n; i++) {
			int slen = ss[i].length();
			if (i == 0 || i == n - 1) {
				if (slen==0) {
					emails.add("No solution");
					return;
				}
			} else if (slen <= 1) {
				emails.add("No solution");
				return;
			}
		}
		String u = ss[0];
		for (int i = 1; i < n; i++) {
			String t = (i == n - 1 ? ss[i] : ss[i].substring(0, 1));
			emails.add(u + "@" + t);
			u = ss[i].substring(1);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SysadminVasia l = new SysadminVasia();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
