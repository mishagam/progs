// CodeForces Round #760 B done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class FrodoPillows {

	int n,m,k;
	int maxFrodo;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		k = Integer.parseInt(ss[2]);
	}
	
	long noHurtSum(long nf, long k) {
		long np=0;

		if (nf<=0) {
			return 0;
		} else if (nf<k) {
			np = (nf*(nf+1))/2 + (k-nf);
		} else {
			np = (k*(k+1))/2 + k*(nf-k);
		}
		// System.out.printf("noHurtSum(%d,%d) = %d\n", nf,k,np);
		return np;
	}
	
	long nPill(long nf) {
		long np = noHurtSum(nf, k);
		np += noHurtSum(nf-1, n-k);
		return np;		
	}

	int searchMaxNf(int i0, int i1) {
		if (i1-i0<2) {
			return i0;
		}
		int ii = (i0 + i1)/2;
		long np = nPill(ii);
		int mxp;
		if (np>m) {
			mxp = searchMaxNf(i0, ii);
		} else {
			mxp = searchMaxNf(ii, i1);
		}
		return mxp;		
	}

	private void calculate() {
		maxFrodo = searchMaxNf(1, m+1);
	}

	void printRes() {
		System.out.println(maxFrodo);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		FrodoPillows l = new FrodoPillows();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
