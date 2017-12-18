// CodeForces Round #566 problem A July 30 2015 TODO

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class PodborImen {
	class Pair {
		int inm,ips;
	}

	int n;
	String []names;
	String []psevd;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		names = new String[n];
		psevd = new String[n];
		for (int i=0; i<n; i++) {
		    s = bin.readLine();
			names[i] = s;
		}
		for (int i=0; i<n; i++) {
		    s = bin.readLine();
			psevd[i] = s;
		}
	}
	
	void printRes() {
	}
	
	private void calculate() {
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		PodborImen l = new PodborImen();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
