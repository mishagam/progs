// CodeForces Round #228 div 2 D

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ChessBoard {
	
	final static int MAXN = 100;
	int n,m;
	char [][]b;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		b = new char[n][m];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			for (int j=0; j<m; j++) {
				b[i][j] = s.charAt(j);
			}
		}
		bin.close();
	}
	
	void printRes() {
		for (int i=0; i<n; i++) {
			for (int j=0; j<m; j++) {
				System.out.print(b[i][j]);
			}
			System.out.println();
		}		
	}
	
	private void calculate() {
		for (int i=0; i<n; i++) {
			for (int j=0; j<m; j++) {
				char c = (((i+j)%2==0) ? 'B' : 'W');
				if (b[i][j] == '.') {
					b[i][j] = c;
				}
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ChessBoard l = new ChessBoard();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
