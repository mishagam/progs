// codeforces 244C

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

public class NewFunction {
	int n;
	int []aa;
	Set<Integer>allSet = new HashSet<Integer>();
	
	public NewFunction() throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		n = Integer.parseInt(bin.readLine());
		String s = bin.readLine();
		String []ss = s.split(" ");
		aa = new int[n];
		for (int i=0; i<n; i++) {
			aa[i] = Integer.parseInt(ss[i]);
		}		
	}
	
	public void addWithMiddle(int a, int b, int m) {
		Set<Integer> mids = new HashSet<Integer>();
		Set<Integer> ns = new HashSet<Integer>();
		mids.add(aa[m]);
		int iis = aa[m];
		for (int i=m+1; i<b; i++) {
			iis = iis | aa[i];
			mids.add(iis);
		}
		iis = aa[m];
		for (int i=m-1; i>=a; i--) {
			ns.clear();
			iis = iis | aa[i];
			for (int x : mids) {
				ns.add(x | iis);				
			}
			mids.addAll(ns);
		}
		allSet.addAll(mids);
//		System.out.printf("\naddWithMiddle (%d, %d, %d) passed,set: ", a, b, m);
//		for (int i:mids) {
//			System.out.print(i + " ");
//		}
	}
	
	public void addRange(int a, int b) {
		if (b <= a) return;
		else if (b == a+1) {
			allSet.add(aa[a]);
			return;
		} 
		int m = (a + b)/2;
		addRange(a,m);
		addRange(m+1,b);
		addWithMiddle(a, b, m);	
//		System.out.printf("\naddRange (%d, %d) passed,set: ", a, b);
//		for (int i:allSet) {
//			System.out.print(i + " ");
//		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		NewFunction nn = new NewFunction();
		nn.addRange(0, nn.n);
		System.out.println(nn.allSet.size());
	}
}
