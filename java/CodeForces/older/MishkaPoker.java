// codeforces 574 C
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MishkaPoker {
	int n;
	int []a;
	boolean dshek = true;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		a = new int[n];
		sss = bin.readLine();
		ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}
	}
	
	int toBase(int aa) {
		while (aa % 2 ==0) {
			aa = aa / 2;
		}
		while (aa % 3 ==0) {
			aa = aa / 3;
		}
		return aa;
	}
	
	// we need to use max flow algorithm
	void calculate() {
		int base = toBase(a[0]);
		for (int i=1; i<n; i++) {
			int b = toBase(a[i]);
			if (b != base) {
				dshek = false;
				break;				
			}
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(dshek ? "Yes" : "No");
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		MishkaPoker p = new MishkaPoker();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
