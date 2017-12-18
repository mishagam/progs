// CodeForces Round #841 B training done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ScarboroughFair {
	
	class Operation {
		int l,r;
		char c1,c2;
		
		Operation(String s) {
			String []ss = s.split(" ");
			l = Integer.parseInt(ss[0])-1;
			r = Integer.parseInt(ss[1])-1;
			c1 = ss[2].charAt(0);
			c2 = ss[3].charAt(0);
		}
		
		void apply() {
			for (int i=l; i<=r; i++) {
				if (ca[i] ==  c1) {
					ca[i] = c2;
				}
			}
		}
	}
	

	int n,m;
	char []ca;
	Operation []ops;
	boolean firstWin;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		ca = new char[n];
		s = bin.readLine();
		for (int i = 0; i < n; i++) {
			ca[i] = s.charAt(i);
		}
		ops = new Operation[m];
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ops[i] = new Operation(s);
		}		
	}

	void printRes() {
		System.out.println(new String(ca));			
	}	

	private void calculate() {
		for (int i=0; i<m; i++) {
			ops[i].apply();
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ScarboroughFair l = new ScarboroughFair();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
