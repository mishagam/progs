// CodeForces Round #845 B done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class LubaTicket {

	String s;
	int d0,d1;
	long minDig;	

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		s = sss;
	}

	void printRes() {
		System.out.println(minDig);
	}	
	
	int sumDig(String s) {
		int sum=0;
		for (int i=0; i<s.length(); i++) {
			char c = s.charAt(i);
			if (c < '0' || '9'<c) {
				throw new IllegalStateException("Non digit char c = |" + c + "|");
			}
			sum += c - '0';
		}
		return sum;
	}
	
	void newd(int d) {
		if (d>d0) {
			d1 = d0;
			d0 = d;
		} else if (d>d1) {
			d1 = d;
		}
	}

	private void calculate() {
		String s1 = s.substring(0,3);
		String s2 = s.substring(3,6);
		int n1 = sumDig(s1);
		int n2 = sumDig(s2);
		if (n1==n2) {
			minDig = 0;
			return;
		} else if (n1 > n2) {
			String st = s2; s2 = s1; s1 = st;
			int nt = n2; n2 = n1; n1 = nt;
		}
		int dif = n2 - n1;
		for (int i=0; i<3; i++) {
			// increasing n1
			int d = ('9' - s1.charAt(i));
			newd(d);
			// decreasing n2
			d = (s2.charAt(i) - '0');
			newd(d);
		}
		if (d0>=dif) {
			minDig = 1;			
		} else if (d0+d1>=dif) {
			minDig = 2;
		} else {
			minDig = 3;
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		LubaTicket l = new LubaTicket();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
