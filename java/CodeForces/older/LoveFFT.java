// CodeForces Round #254 div 2 B

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

public class LoveFFT {
	
	final static int MAXN = 100;
	int n,d;
	long x;
	int []a;
	int []b;
	int []c;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		d = Integer.parseInt(ss[1]);
		x = Long.parseLong(ss[2]);
		bin.close();
	}
	
	private void printRes() {
		for (int i=0; i<n; i++) {
			System.out.println(c[i]);
		}
	}
	
	void swap(int []a, int i, int j) {
		int t = a[i]; a[i] = a[j]; a[j] = t;
	}

	//x - это 64-битная переменная
	private long getNextX() {
	    x = (x * 37 + 10007) % 1000000007;
	    return x;
	}
	private void initAB() {
		int i;
		a = new int[n];
		b = new int[n];
		c = new int[n];
	    for(i = 0; i < n; i = i + 1){
	        a[i] = i + 1;
	    }
	    for(i = 0; i < n; i = i + 1){
	        swap(a, i, (int)(getNextX() % (i + 1)));
	    }
	    for(i = 0; i < n; i = i + 1){
	        if (i < d)
	            b[i] = 1;
	        else
	            b[i] = 0;
	    }
	    for(i = 0; i < n; i = i + 1){
	        swap(b, i,  (int)(getNextX() % (i + 1)));
	    }
	}
	
	void countc() {
		for (int i=0; i<n; i++) {
			c[i] = -10000000;
			for (int j=0; j<=i; j++) {
				c[i] = Math.max(c[i], a[j]*b[i-j]);
			}
		}
	}
	
	private void calculate() {
		initAB();
		countc();
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		LoveFFT l = new LoveFFT();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
