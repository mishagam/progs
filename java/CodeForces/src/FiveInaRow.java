// CodeForces Round #825 B comp july 16 2017, rendzu

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class FiveInaRow {

	char [][]mp;   // game map
	boolean aliceWin;

	private void readData(BufferedReader bin) throws IOException {
		mp = new char[10][];
		for (int i=0; i<10; i++) { 
			String s = bin.readLine();
			mp[i] = new char[10];
			for (int j=0; j<10; j++) {
				mp[i][j] = s.charAt(j);
			}
		}
	}

	void printRes() {
		System.out.println(aliceWin ? "YES" : "NO");
	}
	
	boolean checkLine(char []m, int ln) {
		if (ln<5) {
			return false;
		}
		int nX=0;
		int nO = 0;
		for (int i=0; i<ln; i++) {
			if (m[i]=='X') {
				nX++;
			} else if (m[i]=='O') {
				nO++;
			}
			if (i>=5) {
				int io=i-5;
				if (m[io]=='X') {
					nX--;
				} else if (m[io]=='O') {
					nO--;
				}
			}
			if (nX>=4 && nO==0) {
				aliceWin = true;
				return true;
			}
 		}
		return false;
	}

	private void calculate() {
		char []m = new char[10];	
		aliceWin = false;
		// check rows
		int ln = 10;
		for (int i=0; i<10; i++) {
			for (int j=0; j<10; j++) {
				m[j] = mp[i][j];
			}
			if (checkLine(m, ln)) {
				return;
			}
		}
		// check columns
		for (int j=0; j<10; j++) {
			for (int i=0; i<10; i++) {
				m[i] = mp[i][j];
			}
			if (checkLine(m, ln)) {
				return;
			}
		}
		// check down diagonals 
		int i0,j0;
		for (int j00=-7; j00<7; j00++) {
			j0 = Math.max(0, -j00);
			i0 = Math.max(0,  j00);
			ln = 0;
			for (int ij=0; ij<10; ij++) {
				int i = i0+ij;
				int j = j0+ij;
				if (i<10 && j<10) {
					m[ij] = mp[i][j];
					ln++;					
				}
			}
			if (checkLine(m, ln)) {
				return;
			}
		}
		// check up diagonals 
		for (int i00=3; i00<17; i00++) {
			if (i00 <= 9) {
				j0 = 0;
				i0 = i00;
			} else {
				i0 = 9;
				j0 = i00-9;
			}
			ln = 0;
			for (int ij=0; ij<10; ij++) {
				int i = i0-ij;
				int j = j0+ij;
				if (i>=0 && j<10) {
					m[ij] = mp[i][j];
					ln++;					
				}
			}
			if (checkLine(m, ln)) {
				return;
			}
		}			
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		FiveInaRow l = new FiveInaRow();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
