// CodeForces Round #760 B done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class KRound {

	int n,k;
	String kround;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
	}

	void printRes() {
		System.out.println(kround);
	}

	private void calculate() {
		int n2=0,n5=0;
		int kk = n;
		while (kk%2==0) {
			n2++;
			kk = kk/2;
		}
		kk=n;
		while (kk%5==0) {
			n5++;
			kk = kk/5;
		}
		kk=0;
		while (kk<k && kk<n2) {
			kk++;
			n = n/2;
		}
		kk=0;
		while (kk<k && kk<n5) {
			kk++;
			n = n/5;
		}
		kround = ""+n;
		for (int i=0; i<k; i++) {
			kround = kround + "0";
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		KRound l = new KRound();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
