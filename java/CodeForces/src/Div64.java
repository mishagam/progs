// CodeForces Round #887 A train done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Div64 {

	String s;
	boolean canDo;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		s = sss.trim();
	}

	void printRes() {
		System.out.println(canDo ? "yes" : "no");
	}
	

	private void calculate() {
		int i=0,cntz=0;
		for (i=0; i<s.length(); i++) {
			if (s.charAt(i)=='1') {
				break;
			}
		}
		for ( ; i<s.length(); i++) {
			if (s.charAt(i)=='0') {
				cntz++;
			}
		}
		canDo = cntz>=6;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Div64 l = new Div64();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
