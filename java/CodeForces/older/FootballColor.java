// CodeForces Round #432 B Done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class FootballColor {

	int n;
	int []hc;
	int []gc;
	int []nhcol; 
	int []nh; 
	int []ng; 
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		hc = new int[n];
		gc = new int[n];
		nhcol = new int[100002];
		nh = new int[n];
		ng = new int[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			hc[i] = Integer.parseInt(ss[0]);
			gc[i] = Integer.parseInt(ss[1]);
			nhcol[hc[i]] ++;
		}
	}
	
	void printRes() {
		for (int i=0; i<n; i++) {
			System.out.println(nh[i] + " " + ng[i]);
		}			
	}
	
	private void calculate() {
		for (int i=0; i<n; i++) {
			int nch = nhcol[gc[i]];
			nh[i] = n-1 + nch;
			ng[i] = 2*(n-1) - nh[i];
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		FootballColor l = new FootballColor();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
