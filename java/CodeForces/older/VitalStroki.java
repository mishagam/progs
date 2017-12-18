// CodeForces Round #518 A competition - failed on comp, done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class VitalStroki {

	String a,b;
	char []sret;
	boolean ok;

	private void readData(BufferedReader bin) throws IOException {
		a = bin.readLine();
		b = bin.readLine();
	}

	void printRes() {
		if (ok) {
			System.out.println(new String(sret));
		} else {
			System.out.println("No such string");
		}
	}
	
	boolean canDecB(int i) {
		for (int j=i+1; j<b.length(); j++) {
			if (b.charAt(j)>'a') {
				return true;
			}
		}
		return false;
	}
	
	boolean canIncA(int i) {
		for (int j=i+1; j<a.length(); j++) {
			if (a.charAt(j)<'z') {
				return true;
			}
		}
		return false;
	}
	
	void fillRes(int i, char c) {
		for (int j=i+1; j<a.length(); j++) {
			sret[j] = c;
		}
	}


	private void calculate() {
		ok = false;
		int len = a.length();
		sret = new char[len];
		for (int i=0; i<len; i++) {
			char ca = a.charAt(i);
			char cb = b.charAt(i);
			if (ca==cb) {
				sret[i] = ca;
			} else if (ca+2 <= cb) {
				sret[i] = (char)(ca + 1);
				ok = true;
			} else if (ca+1==cb) {
				if (!ok) {
					if (canDecB(i)) {
						sret[i] = (char)(ca+1);
						fillRes(i, 'a');
						ok=true;
						return;
					} else if (canIncA(i)) {
						sret[i] = (char)(ca);
						fillRes(i, 'z');
						ok=true;
						return;
					} else {
						ok=false;
						return;
					}
				} else {
					sret[i] = ca;
				}
			} else {
				sret[i] = ca;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		VitalStroki l = new VitalStroki();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
