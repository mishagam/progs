import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * too long with this:
 * 3 3632
61 2258
45 1723
71 3615

 * @author misha
 *
 */

public class NameThatTune {
	
	class OneSong {
		double []pb;   /// probs of sound that long
		OneSong(int pperc, int t) {
			double p = pperc*0.01;
			pb = new double[T+1];
			double pleft = 1.0;
			int i;
			for (i=1; i<t; i++) {
				pb[i] = pleft * p;
				pleft = pleft * (1.0 - p);
			}
			pb[t] = pleft;
		}
	}

	int n;
	int T;
	double matO;
	OneSong []songs;
	double []pt;
	double []npt;
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		T = Integer.parseInt(ss[1]);
		pt = new double[T+1];
		npt = new double[T+1];
		songs = new OneSong[n];
		for (int i=0; i<n; i++) {
			ss = (bin.readLine()).split(" ");
			int ppp = Integer.parseInt(ss[0]);
			int ttt = Integer.parseInt(ss[1]);
			songs[i] = new OneSong(ppp, ttt);
		}
	}
	
	/** one step per one song, join p and one song */
	void step(OneSong os) {
		Arrays.fill(npt, 0.0);
		for (int i=0; i<=T; i++) {  // i - start of song os
			for (int j=0; j<=T; j++) {  // moment in os song
				int k = i+j;
				if (k>T) {
					continue;
				}
				double ptp = pt[i] * os.pb[j];  // probability
				//System.out.println("i,j,k,ptp,matO = " + i+" " + j+" " +k+" " + ptp + " " + matO);
				npt[k] += ptp;
				matO += ptp;
			}
		}
		for (int i=0; i<=T; i++) {
			pt[i] = npt[i];
		}
	}
	
	void calculate() {
		matO = 0;
		pt[0] = 1.0;
		for (int i=0; i<n; i++) {
			step(songs[i]);
		}
	}
	
	void printRes() {
		System.out.println(matO);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		NameThatTune l = new NameThatTune();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}

}