// CodeForces Round #513 C

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class AuctionSecondPrice {
	
	final int SZ = 12;
	int n;
	int []li;
	int []ri;
	double mo;
	double [][]fs = new double[SZ][SZ];	// price, sec price
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		li = new int[n];
		ri = new int[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			li[i] = Integer.parseInt(ss[0]);
			ri[i] = Integer.parseInt(ss[1]);
		}
		bin.close();
	}
	
	void printRes() {
		System.out.println(mo);
	}
	
	private void calculate() {
		// first price
		double d0 = 1.0  / (ri[0] - li[0] + 1);
		// second price
		double d1 = 1.0 / (ri[1] - li[1] + 1);
		double [][]fsn = new double[SZ][SZ];
		for (int p1=li[1]; p1<=ri[1]; p1++) {
			for (int j=li[0]; j<=ri[0]; j++) {
				if (p1 > j) {
					fs[p1][j] += d1*d0;
				} else if (p1 < j) {
					fs[j][p1] += d1*d0;
				} else {
					fs[j][p1] += d1*d0;
				}
			}
		}
		// other prices
		double dd = d1*d0;
		for (int k=2; k<n; k++) {
			fsn = new double[SZ][SZ];
			dd = 1.0 / (ri[k] - li[k] + 1);
			for (int pk=li[k]; pk<=ri[k]; pk++) {
				for (int i=0; i<SZ; i++) {
					for (int j=0; j<=i; j++) {
						if (pk<j) {
							// copy
							fsn[i][j] += fs[i][j]*dd;
						} else if (pk < i) {
							// pk second price
							fsn[i][pk] += fs[i][j]*dd;							
						} else {
							// pk first price
							fsn[pk][i] += fs[i][j]*dd;
						}
					}
				}
			}
			fs = fsn;			
		}
		// count mo from fs
		mo = 0;
		for (int i=0; i<SZ; i++) {
			for (int j=0; j<SZ; j++) {
				mo += j*fs[i][j];
			}
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		AuctionSecondPrice dr = new AuctionSecondPrice();
		dr.readData(bin);
		dr.calculate();
		dr.printRes();
	}
}
