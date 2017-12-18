// CodeForces Round #897 B training done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ChthollyRequest {
	

	int k,p;
	long sumZcy;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		k = Integer.parseInt(ss[0]);
		p = Integer.parseInt(ss[1]);
	}

	void printRes() {
		System.out.println(sumZcy);			
	}
	
	int invert(int a) {
		int b = 0;
		while (a>0) {
			int d = a%10;
			a = a/10;
			b = 10*b + d;
		}
		return b;
	}
	
	/** smallest pow 10 > a */
	long pow10(int a) {
		long p10 = 1;
		while (p10<=a) {
			p10 *= 10;
		}
		return p10;
	}
	
	long zcy(int a) {
		long b = invert(a)*pow10(a);
		b = b + a;
		return b;		
	}

	private void calculate() {
		sumZcy = 0;
		int cnt = 0;
		for (int i=1; cnt<k; i++) {
			if (i%10 == 0) {
				continue;
			}
			sumZcy += zcy(i);
			cnt++;
		}
		sumZcy = sumZcy % p;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ChthollyRequest l = new ChthollyRequest();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
