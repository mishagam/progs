// CodeForces Round #629 B done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class FarRelative {
	
	final int DAYS = 370;
	int n;
	int []fem = new int[DAYS];
	int []mal = new int[DAYS];
	int nVis;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			char sex = ss[0].charAt(0);
			int st = Integer.parseInt(ss[1]);
			int en = Integer.parseInt(ss[2]);
			if (sex=='M') {
				for (int j=st; j<=en; j++) {
					mal[j]++;
				}
			} else {
				for (int j=st; j<=en; j++) {
					fem[j]++;
				}
			}
		}
		bin.close();
	}
	
	void printRes() {
		System.out.println(nVis*2);
	}
	
	private void calculate() {
		nVis = 0;
		for (int i=0; i<DAYS; i++) {
			if (nVis<fem[i] && nVis<mal[i]) {
				nVis = Math.min(fem[i], mal[i]);
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		FarRelative dr = new FarRelative();
		dr.readData(bin);
		dr.calculate();
		dr.printRes();
	}
}
