// CodeForces Round #760 B done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BinaryProtocol {

	String s;
	int lns;
	int numb;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		lns = Integer.parseInt(ss[0]);
		s = bin.readLine();
	}

	private void calculate() {
		numb=0;
		int r=0;
		for (int i=0; i<=lns; i++) {
			if (i==lns) {
				numb = 10*numb+r;
			} else {
				int ic = (int)(s.charAt(i) - '0');
				if (ic==0) {
					numb = 10*numb+r;
					r = 0;
				} else {
					r++;
				}
			}
		}		
	}

	void printRes() {
		System.out.println(numb);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		BinaryProtocol l = new BinaryProtocol();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
