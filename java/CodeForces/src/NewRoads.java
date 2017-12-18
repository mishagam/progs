// CodeForces Round #746 0 competition

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class NewRoads {

	int n,t,k;
	int []a;
	int []e;    // links from child to parent
	int []gr;
	int curk;   // current k - (number leaves)

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		t = Integer.parseInt(ss[1]);
		k = Integer.parseInt(ss[2]);
		// read a
		a = new int[t+1];
		e = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		a[0] = 1;
		for (int i=0; i<t; i++) {
			a[i+1] = Integer.parseInt(ss[i]);
		}
	}

	void printRes() {
		System.out.println(n);
		if (n>0) {
			for (int i=1; i<n; i++) {
				System.out.printf("%d %d\n", (i+1), (e[i]+1));
			}
		}
	}
	
	int countGroups() {
		gr = new int[t+1];
		gr[0] = 0;
		for (int i=1; i<=t; i++) {
			if (a[i]==0) {
				n = -1;
				return 0;
			}
			gr[i] = gr[i-1] + a[i-1];
		}
		return 1;
	}
	
	/** link to corresponding element in prev group */
	void initialTree() {
		curk = 0;	
		for (int ig=1; ig<=t; ig++) {
			// connect group ig
			for (int j=0; j<a[ig]; j++) {
				// connecting element gr[ig] + j
				int el = gr[ig] + j;
				if (j<a[ig-1]) {
					e[el] = gr[ig-1]+j;
				} else {
					e[el] = gr[ig-1];
				}
			}
			if (a[ig]<a[ig-1]) {
				curk += (a[ig-1] - a[ig]);
			}
		}
		curk += a[t];
	}
	
	void ensureK() {
		for (int ig=t-1; ig>0 && curk<k; ig--) {
			for (int j=0; j<a[ig] && curk<k; j++) {
				int el = gr[ig] + j;
				if (e[el] != gr[ig-1]) {
					e[el] = gr[ig-1];
					curk++;
				}
			}
		}
		if (curk<k) {
			n = -1;
		}
	}

	private void calculate() {
		int ret = countGroups();
		if (ret==0) {
			return;
		}
		initialTree();
		if (curk > k) {
			n = -1;
		} else if (curk<k) {
			ensureK();
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		NewRoads l = new NewRoads();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
