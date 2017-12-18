// codeforces 488 c
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MishkaVibori {
	int n;
	int []a;
	int []ao;
	int minKonfet = 0;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		a = new int[n];
		ao = new int[n-1];
		sss = bin.readLine();
		ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
			if (i>0) {
				ao[i-1] = a[i];
			}
		}
		Arrays.sort(ao);
	}
	
	boolean konfOk(int konf) {
		boolean ok=false;
		int newMis = a[0] + konf;
		int sumPodk = 0;
		for (int i=0; i<n-1; i++) {
			if (ao[i] >= newMis) {
				sumPodk += (ao[i] - (newMis - 1));
			}
		}
		return (sumPodk <= konf);
	}
	
	// we need to use max flow algorithm
	void calculate() {
		for (int i=0; i<2000; i++) {
			if (konfOk(i)) {
				minKonfet = i;
				break;
			}
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(minKonfet);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		MishkaVibori p = new MishkaVibori();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
