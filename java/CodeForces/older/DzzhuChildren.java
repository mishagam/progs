// CodeForces Round #447 B competition - still doesn't work

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class DzzhuChildren {

	int n,m;
	int []a;
	int []oidx;
	int last;
	int idx,len;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		s = bin.readLine();
		ss = s.split(" ");
		a = new int[n];
		oidx = new int[n];
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
			oidx[i] = i;
		}
	}
	
	void printRes() {
		System.out.println(last+1);
	}
	
	void pack(int idx) {
		for (int i=idx; i<n-1; i++) {
			a[i] = a[i+1];
			oidx[i] = oidx[i+1];
		}
	}
	
	private void calculate() {
		// search max in w;
        len = n;
        idx = 0;
		while (len>1) {
			a[idx] -= m;
			if (a[idx]<= 0) {
				pack(idx);
				len--;
				if (len==1) {
					last = oidx[idx];
					break;
				} else {
					idx--;
				}				
			}
			if (idx<len-1) {
				idx++;
			} else {
				idx=0;
			}			
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		DzzhuChildren l = new DzzhuChildren();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
