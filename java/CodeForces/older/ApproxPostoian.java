// codeforces 602 b 
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ApproxPostoian {
	
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
		int d1 = a[0]-1;
		int d2 = a[0];
		int l1=1, l2=1;
		for (int i=1; i<n; i++) {
			if (a[i]<a[i-1]) {
				// end of d2
				if (maxPost<l2) {
					maxPost=l2;
				}
				d2=a[i];
				l2=l1+1;
				d1=d2-1;
				l1=1;				
			} else if (a[i]>a[i-1]) {
				// end of d1
				if (maxPost<l1) {
					maxPost=l1;
				}
				d1=a[i]-1;
				l1=l2+1;
				d2=d1+1;
				l2=1;				
			} else {
				l1++;
				l2++;
			}
		}
		if (maxPost<l1) {
			maxPost=l1;
		}
		if (maxPost<l2) {
			maxPost=l2;
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(maxPost);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ApproxPostoian p = new ApproxPostoian();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
