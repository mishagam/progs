// http://codeforces.ru/contest/231/problem/C
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;


public class Pribavliay {
	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		String s = bin.readLine();
		String []ss = s.split(" ");
		int n = Integer.parseInt(ss[0]);
		int k = Integer.parseInt(ss[1]);
		ss = (bin.readLine()).split(" ");
		int []na = new int[n];
		int []ncnt = new int[n];
		int []numa = new int[n];
		int i=0;
		for (String si : ss) {
			na[i++] = Integer.parseInt(si);
		}
		Arrays.sort(na);
		int j=0;
		for (i=0; i<n; i++) {
			numa[j] = na[i];
			ncnt[j]++;
			if (i==(n-1) || na[i] < na[i+1]) {
				j++;
			}
		}
		int ndif = j;
		int maxn=0, maxi=0;
		for (j=0; j<ndif; j++) {
			int sum = ncnt[j];
			int leftk = k;
			int jj = j-1;
			while (jj>=0 && leftk>0) {
				int dn = numa[j] - numa[jj];
				int needk = ncnt[jj]*dn;
				if (needk <= leftk) {
					leftk -= needk;
					sum += ncnt[jj];
				} else {
					sum += leftk / dn;
					break;
				}
				jj--;
			}
			if (sum > maxn) {
				maxn = sum;
				maxi = numa[j];
			}
		}
		System.out.println(maxn + " " + maxi);
	}

}
