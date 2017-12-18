// CodeForces Round #447 B competition

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Treasure {
	
	String s;
	int nsq=0;
	int nop,ncl;
	int []cnts;
	boolean can;
	
	private void readData(BufferedReader bin) throws IOException {
		s = bin.readLine();
		for (char c : s.toCharArray()) {
			if (c=='(') nop++;
			else if (c==')') ncl++;
			else if (c=='#') nsq++;
		}
		cnts = new int[nsq];
	}
	
	void printRes() {
		if (can) {
			for (int i=0; i<nsq; i++) {
				System.out.println(cnts[i]);
			}
		} else {
			System.out.println("-1");
		}
	}
	
	private void calculate() {
		if (nop<ncl+nsq) {
			can = false;
			return;
		}
		int lastCnt = nop-ncl-nsq+1;
		nop=0;
		ncl=0;
		int ns=0;
		for (int i=0; i<s.length(); i++) {
			char c = s.charAt(i);
			if (c=='(') {
				nop++;
			} else if (c==')') {
				ncl++;
				if (ncl+ns > nop) {
					can=false;
					return;
				}
			} else {
				ns++;
				if (ncl+ns > nop) {
					can=false;
					return;
				}
				if (ns==nsq) {
					if (ncl + ns + lastCnt-1 > nop) {
						can=false;
						return;
					}
					ns = nsq + lastCnt-1;
				}
			}
		}
		can=true;
		for (int i=0; i<nsq-1; i++) {
			cnts[i] = 1;
		}
		cnts[nsq-1] = lastCnt;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Treasure l = new Treasure();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
