// CodeForces Round #752 C

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SantaClausRobot {
	
	class Path {
		char a;  // initial dir
		char b;  // continue
		
		Path(char aa) {
			a = aa;
			b = ' ';
		}
		boolean hor(char c) {
			return c=='R' || c=='L';
		}
		boolean vert(char c) {
			return c=='U' || c=='D';
		}
		boolean canAdd(char ba) {
			if (ba==a || ba==b) {
				return true;
			}
			if (((hor(a) && vert(ba)) || (vert(a) && hor(ba))) && b==' ') {
				b = ba;
				return true;
			}
			return false;
		}
	}

	String d;
	int n;
	int m;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		d = bin.readLine();
	}

	void printRes() {
		System.out.println(m);
	}	

	private void calculate() {
		m = 0;
		Path p = null;
		for (int i=0; i<d.length(); i++) {
			char c = d.charAt(i);
			if (p==null || !p.canAdd(c)) {
				p = new Path(c);
				m++;
			}			
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SantaClausRobot l = new SantaClausRobot();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
