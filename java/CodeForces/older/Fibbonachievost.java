// CodeForces Round #633D Fibonacci-ish Done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;


public class Fibbonachievost {

	int n;
	int []aa;
	// Map<Integer,Integer> a2i = new HashMap<>();
	Map<Integer,Integer> aCnt = new HashMap<>();
	Map<Integer, Boolean> usedPair = new HashMap<>();
	
	int maxLen;
	int nzero = 0;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		aa = new int[n];
		
		s = bin.readLine();
		ss = s.split(" ");		
		for (int i=0; i<n; i++) {
			aa[i] = Integer.parseInt(ss[i]);
			if (aa[i]==0) {
				nzero++;
			}
			if (aCnt.containsKey(aa[i])) {
				addCnt(aa[i]);
			} else {
				aCnt.put(aa[i], 1);
			}
		}
		bin.close();
	}
	
	void printRes() {
		System.out.println(maxLen);
	}
	void addCnt(int a) {
		int c = aCnt.get(a);
		aCnt.put(a, c+1);
	}
	boolean checkCnt(int a) {		
		if (!aCnt.containsKey(a) || aCnt.get(a)==0) {
			return false;
		} else {
			int c = aCnt.get(a);
			aCnt.put(a, c-1);
			return true;
		}
	}
	
	int tryPair(int a, int b) {
		if (a==0 && b==0) {
			return nzero;
		}
		int len;
		int c = a+b;
		if (checkCnt(c)) {
			int l = tryPair(b, c);
			addCnt(c);
			len = l+1;
		} else {
			len = 2;
		}
		return len;
	}
	
	private void calculate() {
		maxLen = nzero;
		for (int i=0; i<n; i++) {
			for (int j=0; j<n; j++) {
				if (i==j) {
					continue;
				}
				int a = aa[i];
				int b = aa[j];
				int key = a*1002 + b;
				if (usedPair.containsKey(key)) {
					continue;
				}
				if (!checkCnt(a) || !checkCnt(b)) {
					throw new IllegalStateException("bad a,b = " + a + " " + b);
				}
				int m = tryPair(a,b);
				addCnt(a);
				addCnt(b);
				usedPair.put(key, true);
				if (m>maxLen) {
					maxLen = m;
				}
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Fibbonachievost l = new Fibbonachievost();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
