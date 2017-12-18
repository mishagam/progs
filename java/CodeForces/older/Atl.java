import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Atl {
	int n;
	int m;
	int []a;
	int []b;
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		a = new int[n];
		b = new int[m];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<m; i++) {
			b[i] = Integer.parseInt(ss[i]);
		}
	}
	
	int countTl() {
		int maxa = -100;
		int mina = 200;
		int minb =  200;

		for (int i=0; i<n; i++) {
			if (a[i] > maxa) {
				maxa = a[i];
			} 
			if (a[i] < mina) {
				mina = a[i];
			}
		}
		if (maxa < 2*mina) {
			maxa = 2*mina;
		}
		for (int i=0; i<m; i++) {
			if (b[i] < minb) {
				minb = b[i];
			}
		}
		if (maxa < minb) {
			return maxa;
		} else {
			return -1;
		}
		
	}
	

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Atl atl = new Atl();
	    atl.readData(bin);
	    int ret = atl.countTl();
		System.out.printf("%d\n", ret);
	}

}
