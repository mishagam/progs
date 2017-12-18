// problem 578 B wrong
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class OrGame {

	int n,k,x;
	int []a;
	long maxOr;
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
		x = Integer.parseInt(ss[2]);
		
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}
	void calculate() {
		Arrays.sort(a);
		long maxv = a[n-1];
		for (int i=0; i<k; i++) {
			maxv = maxv*x;
		}
		maxOr = 0;
		for (int i=0; i<n-1; i++) {
			maxOr = maxOr | a[i];
		}
		maxOr = maxOr | maxv;
	}
	
	void printRes() {
		System.out.println(maxOr);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		OrGame l = new OrGame();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}

}