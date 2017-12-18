// CodeForces Round #753 B testing
// quite special interactive interface

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.swing.text.html.HTMLDocument.HTMLReader.IsindexAction;

public class InteractiveBullsCows {
	final static boolean TESTING = false;
	int bulls, cows;
	String []tab=new String[]{
			"1234","1243","1324","1342","1423","1432",
			"2134","2143","2314","2341","2413","2431",
			"3124","3142","3214","3241","3412","3421",
			"4123","4132","4213","4231","4312","4321"};
	boolean []posa = new boolean[24];
	int curIdx, curChar;
	String lastQues;
	char []aa = new char[4];
	int []nba = new int[5];  // number of variants with bulls from 0 to 4 */
	
	
	class BCPair {
		int b,c;
		public BCPair() {
			b = c = 0;
		}
	}	
	
	void init() {
		for (int i=0; i<24; i++) {
			posa[i] = true;
		}
	}

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		bulls = Integer.parseInt(ss[0]);
		cows = Integer.parseInt(ss[1]);
	}
	
	boolean isDone() {
		return bulls==4;
	}
	
	void countNba(String sq) {
		for (int i=0; i<5; i++) {
			nba[i] = 0;
		}
		for (int i=0; i<24; i++) {
			if (posa[i]) {
				BCPair bc = countBC(sq, tab[i]);
				nba[bc.b] ++;
			}			
		}
//		System.out.print("Nba sq:" + sq + " nba:");
//		for (int i=0; i<5; i++) {
//			System.out.print(nba[i] + " ");
//		}
//		System.out.println();
	}
	
	/** a - ques */
	BCPair countBC(String s, String x) {
		// count cows
		BCPair bc = new BCPair();
		for (int i=0; i<4; i++) {
			char c = s.charAt(i);
			for (int j=0; j<4; j++) {
				if (i!=j && x.charAt(j)==c) {
					bc.c++;
					break;
				}
			}
		}
		// count bulls
		for (int i=0; i<4; i++) {
			if (s.charAt(i)==x.charAt(i)) {
				bc.b++;
			}
		}
		return bc;
	}
	
	/** analyse bulls and cows */
	private void analyseResponse() {
		if (curIdx < 10) {
			char c = (char)('0' + curIdx);
			if (bulls==1 && cows==0) {
				aa[curChar++] = c;
				curIdx++;
			} else if (bulls==0 && cows==0) {
				curIdx++;
			} else {
				System.out.println("Illegal idx,bulls,cows = "+curIdx+" "+bulls+" "+cows);
				return;
			}
		} else {
			for (int i=0; i<24; i++) {
				BCPair bc = countBC(lastQues, tab[i]);
				if (bc.b!=bulls || bc.c!=cows) {
					posa[i] = false;
				}
			}
		}
	}

	private String nextQues() {
		// at first seq like 0000 1111 9999
		String ques="";
		if (curIdx<10) {
			char c = (char)('0' + curIdx);
			ques = "" + c + c + c + c;
		} else {
			// find ques with min max nba
			int minMaxNba = 1000;
			String qq=null;
			for (int i=0; i<24; i++) {
				if (!posa[i]) {
					continue;
				}
				String q = tab[i];
				countNba(q);
				int maxn = -1;
				for (int j=0; j<5; j++) {
					maxn = Math.max(maxn, nba[j]);
				}
				if (maxn < minMaxNba) {
					minMaxNba = maxn;
					qq = q;
				}
			}
			// System.out.println("max qq: " + qq);
			lastQues = qq;
			// replace 1234 -> aa[0] ... aa[4]
			for (int i=0; i<4; i++) {
				int idx = qq.charAt(i) - '1';
				char c = aa[idx];
				ques = ques + c;
			}
		}
		return ques;
	}
	
	String testWord = "1739";
	void doTestQues(String q) {
		BCPair bc = countBC(testWord, q);
		bulls = bc.b;
		cows = bc.c;
		System.out.println("doTestQues("+q+") produced "+bulls+" "+cows);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		InteractiveBullsCows l = new InteractiveBullsCows();
		l.init();
		while (!l.isDone()) {
			String ques = l.nextQues();
			System.out.println(ques);
			System.out.flush();
			if (TESTING) {
				l.doTestQues(ques);
			} else {
				l.readData(bin);
			}
			l.analyseResponse();
		}
	}
}
