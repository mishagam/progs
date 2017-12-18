// codeforces 608 B Done
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SummaHemming {
	String a;
	String b;
	int []none;
	long summaHemming;
	
	void readData(BufferedReader bin) throws IOException {
		a = bin.readLine();
		b = bin.readLine();		
	}
	
	void writeRes() throws IOException {
		System.out.println(summaHemming);
	}
	
	void countNone() {
		none = new int[b.length()];
		for (int i=0; i<b.length(); i++) {
			none[i] = (b.charAt(i)=='1' ? 1 : 0);
			if (i>0) {
				none[i] += none[i-1];
			}
		}
	}
	
	// we need to use max flow algorithm
	void calculate() {
		int la = a.length();
		int lb = b.length();
		summaHemming = 0;
		countNone();
		for (int i=0; i<la; i++) {
			int ib0 = i;
			int ib1 = lb - (la - i);
			int so = none[ib1] - (i>0 ? none[i-1] : 0);
			int sz = (ib1 - ib0 +1) - so;
			summaHemming += (a.charAt(i)=='1' ? sz : so);			
		}
	}
	

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		SummaHemming p = new SummaHemming();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
