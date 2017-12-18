// CodeForces Round #608 D done, after reading answer

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class GarmonAnalysis {

	int k;
	String[] ans;
	int na;
	byte [][]a;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String[] ss = sss.split(" ");
		k = Integer.parseInt(ss[0]);
		a = new byte[1100][1100];
	}

	void printRes() {
		for (int i = 0; i < na; i++) {
			System.out.println(ans[i]);
		}
	}
	
	void doublea() {
		for (int i=0; i<na; i++) {
			for (int j=0; j<na; j++) {
				a[na+i][j] = a[i][j];
				a[na+i][na+j] = a[i][j];
				a[i][na+j] = (byte)(1-a[i][j]);
			}
		}
		na = 2*na;
	}
	
	String copyLine(int row) {
		StringBuilder sb = new StringBuilder();
		for (int i=0; i<na; i++) {
			char  c= (a[row][i]==0 ? '+' : '*');
			sb.append(c);
		}
		return "" + sb;
	}

	private void calculate() {
		na = 1;
		a[0][0] = 0;
		for (int i=0; i<k; i++) {
			doublea();
		}
		ans = new String[na];
		for (int i=0; i<na; i++) {
			ans[i] = copyLine(i);
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		GarmonAnalysis l = new GarmonAnalysis();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
