// Codeforces 606 B done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class TestingRobots {
	int x,y,x0,y0;
	int [][]ftime;
	int []cnts;
	String s;

	private void readData(BufferedReader bin) throws IOException {
		String si = bin.readLine();
		String[] ss = si.split(" ");
		x =  Integer.parseInt(ss[0]);
		y =  Integer.parseInt(ss[1]);
		x0 = Integer.parseInt(ss[2])-1;
		y0 = Integer.parseInt(ss[3])-1;
		s = bin.readLine();
	}

	void printRes() {
		for (int i=0; i<cnts.length; i++) {
			System.out.print(cnts[i] + " ");
		}
		System.out.println();
	}
	
	void walk() {
		int slen = s.length();
		for (int i=0; i<x; i++) {
			for (int j=0; j<y; j++) {
				ftime[i][j] = slen;
			}
		}
		int xx = x0;
		int yy = y0;
		ftime[xx][yy] = 0;
		for (int idx=0; idx < s.length(); idx++) {
			char c = s.charAt(idx);
			if (c=='L') {
				yy--;
			} else if (c=='R') {
				yy++;
			} else if (c=='U') {
				xx--;
			} else if (c=='D') {
				xx++;
			}
			if (xx<0) xx=0;
			if (xx>=x) xx=x-1;
			if (yy<0) yy=0;
			if (yy>=y) yy=y-1;
			if (ftime[xx][yy] > idx+1) {
				ftime[xx][yy] = idx+1;			
			}
		}
	}

	private void calculate() {
		// prepare ftime
		ftime = new int[x][y];
		walk();
		// prepare cnts
		cnts = new int[s.length() + 1];
		for (int i=0; i<x; i++) {
			for (int j=0; j<y; j++) {
				cnts[ftime[i][j]]++;
			}
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		TestingRobots l = new TestingRobots();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}