// CodeForces Round #897 C comp failed

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class NephrenRiddle {	

	int q;
	int []na;
	long []ka;
	char []aa;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		q = Integer.parseInt(ss[0]);
		na = new int[q];
		ka = new long[q];
		for (int i=0; i<q; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			na[i] = Integer.parseInt(ss[0]);
			ka[i] = Long.parseLong(ss[1]);
		}		
	}

	void printRes() {
		System.out.println(new String(aa));			
	}
	
	final static int MAXN = 100002;
	String []sz = new String[]{"What are you doing at the end of the world? Are you busy? Will you save us?",
	"What are you doing while sending \"",
	"\"? Are you busy? Will you send \"",
	"\"?"};	
	long [][]idx;
	long []totl;
	int []lnsz;
	
	void calcIdx() {
		idx = new long[MAXN][7];
		totl = new long[MAXN];
		lnsz = new int[4];
		for (int i=0; i<4; i++) {
			lnsz[i] = sz[i].length();
		}
		idx[0][0] = 0;
		idx[0][1] = lnsz[0];
		totl[0] = lnsz[0];
		for (int n=1; n<MAXN; n++) {
			idx[n][0] = 0;
			idx[n][1] = lnsz[1];
			idx[n][2] = idx[n][1] + totl[n-1];
			idx[n][3] = idx[n][2] + lnsz[2];
			idx[n][4] = idx[n][3] + totl[n-1];
			idx[n][5] = idx[n][4] + lnsz[3];
			idx[n][6] = Long.MAX_VALUE;
			totl[n] = idx[n][5];			
		}		
	}
	
	char getChar(int nq, long kq) {
		if (nq==0) {
			return (kq<lnsz[0] ? sz[0].charAt((int)kq) : '.');
		}
		long k = kq;
		for (int n=nq; n>=0; n--) {
			for (int j=0; j<6; j++) {
				if (k < idx[n][j+1]) {
					if (j==0 || j==2 || j==4) {
						k = k - idx[n][j];
						int sidx = (n==0 ? 0 : 1 + j/2);
						char c = sz[sidx].charAt((int)k);
						return c;
					} else if (j==1 || j==3) {
						k = k - idx[n][j];
						break;
					} else {
						// j==5
						return '.';
					}
				}
			}
		}
		return '*';  // error
	}
	private void calculate() {
		calcIdx();
		aa = new char[q];
		for (int i=0; i<q; i++) {
			char c = getChar(na[i], ka[i]-1);
			aa[i] = c;
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		NephrenRiddle l = new NephrenRiddle();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
