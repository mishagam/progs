// codeforces 660 c done
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HardProcess {
	byte []a;
	int n,k;
	int maxLen;
	int ii0=-1,ii1=-1;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
		// read a
		sss = bin.readLine();
		ss = sss.split(" ");
		a = new byte[n];
		for (int i=0; i<n; i++) {
			a[i] = Byte.parseByte(ss[i]);
		}
	}
	
	// we need to use max flow algorithm
	void calculate() {
		int i0 = 0;
		int i1 = 0;
		int ni=0;
		for (i1=0; i1<n; i1++) {
			ni += (1-a[i1]);
			while (ni>k) {
				ni -= (1-a[i0]);
				i0++;
			}
			if ((i1-i0+1) > maxLen) {
				maxLen = i1-i0+1;
				ii0 = i0;
				ii1 = i1;
			}
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(maxLen);
		for (int i=0; i<n; i++) {
			int aa = a[i];
			if (ii0<=i && i<=ii1) {
				aa = 1;
			}
			System.out.print(aa + " ");
		}
		System.out.println();
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		HardProcess p = new HardProcess();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
