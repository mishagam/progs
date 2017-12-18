// CodeForces Round #447 B competition - still doesn't work

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class TavasNafas {

	int s;
	String res;
	String []last = new String[]{"zero","one", "two","three","four","five","six","seven","eight","nine"};
	String []decs= new String[]{"zero", "ten","twenty","thirty", "forty","fifty","sixty", "seventy","eighty","ninety"};
	String []tentwen = new String[]{"ten","eleven", "twelve", "thirteen", "fourteen","fifteen",
			"sixteen","seventeen","eighteen","nineteen"};
	
	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		s = Integer.parseInt(ss[0]);
	}
	
	void printRes() {
		System.out.println(res);
	}
	
	private void calculate() {
		int d = s/10;
		int e = s % 10;
		if (s<10) {
			res = last[e];		    
		} else if (s<20) {
			res = tentwen[e];
		} else {
			res = (e==0 ? decs[d] : decs[d] + "-" + last[e]);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		TavasNafas l = new TavasNafas();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
