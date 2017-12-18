// CodeForces Round #447 B competition

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ModuleEqu {
	
	final long ROOT = 40000; // about sqrt(10^9)

	int a,b;
	int x;
	int val=0;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		a = Integer.parseInt(ss[0]);
		b = Integer.parseInt(ss[1]);
	}
	
	void printRes() {
		if (val<0) {
			System.out.println("infinity");
		} else {
			System.out.println(val);
		}
	}
	
	int countDivs(int ab) {
		int cnt = 0;
		for (int x=1; x*x<=ab; x++) {
			if (ab % x == 0) {
				if (x>b) {
					cnt++;
				} 
				if (x >= ab/x) {
					break;
				}
				if (ab/x > b) {
					cnt++;
				}
			}
		}
		return cnt;
	}
	
	private void calculate() {
		if (a < b) {
			val = 0;
		} else if (a == b) {
			val = -1;
		} else {
			val = countDivs(a-b);
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ModuleEqu l = new ModuleEqu();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
