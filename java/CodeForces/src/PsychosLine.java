// CodeForces Round #319 B TODO too long, need cleverer structure

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class PsychosLine {

	int n;
	int []a;
	int nSteps;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		s = bin.readLine();
		ss = s.split(" ");
		a = new int[n];
		for (int i = 0; i < a.length; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(nSteps);
	}
	
	private void calculate() {
		int []tDead = new int[n];
		int []pKill = new int[n];
		tDead[0] = -1;
		pKill[0] = -1;
		for (int i=1; i<n; i++) {
			if (a[i]<a[i-1]) {
				tDead[i] = 1;
				pKill[i] = i-1;
				continue;
			} 
			int ik = i-1;
			// XXX
			
			
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		PsychosLine l = new PsychosLine();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
