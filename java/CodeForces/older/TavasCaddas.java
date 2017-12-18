// CodeForces Round #447 B competition - still doesn't work

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class TavasCaddas {

	String sn;
	int res;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		sn = ss[0];
	}
	
	void printRes() {
		System.out.println(res);
	}
	
	private void calculate() {
		int nb = 0;
		sn = '7' + sn;
		for (int i=0; i < sn.length(); i++) {
			if (sn.charAt(sn.length() - i - 1) == '7') {
				nb += (1 << i);
			}			
		}
		res = nb-1;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		TavasCaddas l = new TavasCaddas();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
