// CodeForces Round #879 B train done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class TableTennis {

	int n;
	long k;
	int []a;   // player powers
	int winPower;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Long.parseLong(ss[1]);
		a = new int[n];
		s = bin.readLine();
		ss = s.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}		
	}

	void printRes() {		
			System.out.println(winPower);
	}
	
	int curr;
	int cur() {
		return curr;
	}
	int next() {
		return (curr+1) %n;
	}
	void swap(int ia, int ib) {
		int t=a[ia]; a[ia] = a[ib]; a[ib] = t;
	}

	private void calculate() {
		int winCnt = 0;
		for (curr=0; curr<n; curr++) {
			if (a[cur()] > a[next()]) {
				winCnt++;
				if (winCnt>=k) {
					winPower = a[cur()];
					return;
				}
				swap(cur(), next());
			} else {
				winCnt = 1;
			}
		}
		winPower = n;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		TableTennis l = new TableTennis();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
