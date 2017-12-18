// CodeForces Round #625B prochel reshenie

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class PinappleGogol {	
	String gname;
	String aname;
	int minSq;
	int n;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		gname = s;
		s = bin.readLine();
		aname = s;
		n = aname.length();
	}
	
	void printRes() {
		System.out.println(minSq);
	}
	
	private void calculate() {
		minSq=0;
		int pos=0;
		while (pos < gname.length()) {
			pos = gname.indexOf(aname, pos);
			if (pos>=0) {
				minSq++;
				pos += aname.length();					
			} else {
				break;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		PinappleGogol dr = new PinappleGogol();
		dr.readData(bin);
		dr.calculate();
		dr.printRes();
	}
}
