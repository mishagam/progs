// CodeForces Round #673 A competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class SuccessRate {

	int t;
	long []xa;
	long []ya;
	long []pa;
	long []qa;
	long []npop;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		t = Integer.parseInt(ss[0]);
		// read t
		xa = new long[t];
		ya = new long[t];
		pa = new long[t];
		qa = new long[t];
		npop = new long[t];
		for (int i=0; i<t; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			xa[i] = Long.parseLong(ss[0]);
			ya[i] = Long.parseLong(ss[1]);
			pa[i] = Long.parseLong(ss[2]);
			qa[i] = Long.parseLong(ss[3]);
		}		
	}

	void printRes() {
		for (int i=0; i<t; i++) {
			System.out.println(npop[i]);
		}
	}
	
	long mink(long x, long p) {
		long k = (x-3)/p;
		while (x>k*p) {
			k++;
		}
		return k;
	}
	
	long countOne(int it) {
		long x = xa[it];
		long y = ya[it];
		long p = pa[it];
		long q = qa[it];
		if (q==1) {
			if (p==0 && x>0) {
				return -1;
			} else if (p==1 && x!=y){
				return -1;
			} else {
				return 0;
			}
		}
		int np = 0;
		// min k, kp>=x kq>=y
		long kv = mink(x, p);
		long kp = mink(y-x, q-p);
		long k = Math.max(kv, kp);
		long needv = k*p - x;
		long needp = k*(q-p) - (y-x);
		return needv + needp;
	}
	

	private void calculate() {
		for (int it=0; it<t; it++) {
			npop[it] = countOne(it);
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SuccessRate l = new SuccessRate();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
