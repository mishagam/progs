// codeforces 652 b 
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ZSorting {
	
	int n; // number of men
	int []a;  // men
	int maxPost;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		n = Integer.parseInt(bin.readLine());
		a = new int[n];
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}		
		bin.close();
	}	
	
	// we need to use max flow algorithm
	void calculate() {
		Arrays.sort(a);
		int []b = new int[n];
		int i=0;
		for ( ; i+i<n; i++) {
			b[2*i] = a[i];
			if (i+i+1<n) {
				b[2*i+1] = a[n-i-1];
			}
		}
		for (i=0; i<n; i++) {
			a[i] = b[i];
		}
	}
	
	void writeRes() throws IOException {
		for (int i=0; i<n; i++) {
			System.out.print(a[i]+" ");
		}
		System.out.println();
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ZSorting p = new ZSorting();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
