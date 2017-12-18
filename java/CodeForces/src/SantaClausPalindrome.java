// CodeForces Round #752 D - after competition, accepted, very long time

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SantaClausPalindrome {
	
	class Palind implements Comparable<Palind>{
		String s;
		int beauty;
		int n;   // number of times
		List<Integer> bl = new ArrayList<>();   // beauties
		
		Palind(String sa, int ba) {
			s = sa;
			beauty = ba;
			bl.add(ba);
		}

		@Override
		public int compareTo(Palind o) {			
			return beauty - o.beauty;
		}	
		
		void sort() {
			Collections.sort(bl);
			Collections.reverse(bl);
		}
		
		int centAdv() {
			sort();
			int sumc = bl.get(0);
			for (int i=1; i<bl.size()-1; i+=2) {
				int v = bl.get(i) + bl.get(i+1);
				if (v > 0) {
					sumc+= v;
				} else {
					break;
				}
			}
			int sumwc = 0;
			for (int i=0; i<bl.size()-1; i+=2) {
				int v = bl.get(i) + bl.get(i+1);
				if (v > 0) {
					sumwc+= v;
				} else {
					break;
				}
			}
			return (sumc - sumwc);
		}
		int maxPairsBeaty() {
			int sumb = 0;
			for (int i=0; i<bl.size()-1; i+=2) {
				int v = bl.get(i) + bl.get(i+1);
				if (v > 0) {
					sumb+= v;
				} else {
					break;
				}
			}
			return sumb;
		}
	}
	
	class Group {
		String le;        // lesser of string
		String gt;        // greater of strings
		List<Integer> bLe ;   // beauties direct		
		List<Integer> bGt;	 // beauties reversed
		boolean gotPairs = false;
		
		Group(String sa, int beuty) {
			String rev = (new StringBuilder(sa)).reverse().toString();
			bLe = new ArrayList<>();
			bGt = new ArrayList<>();
			if (sa.compareTo(rev)>0) {
				le = rev;
				gt = sa;
				bGt.add(beuty);
			} else {
				le = sa;
				bLe.add(beuty);
				gt = rev;
			}
		}
		
		void addSB(String s, int ba) {
			if (s.equals(le)) {
				bLe.add(ba);
			} else if (s.equals(gt)) {
				bGt.add(ba);
			} else {
				throw new RuntimeException("Bad string " + s + ", le,gt= " + le + " " + gt);
			}
		}		
		
		void sort() {
			Collections.sort(bLe);
			Collections.sort(bGt);
			Collections.reverse(bLe);
			Collections.reverse(bGt);
		}
		
		int maxPairsBeaty() {
			if (gotPairs) {
				return 0;
			}
			this.sort();
			int n = Math.min(bLe.size(), bGt.size());
			int sumb = 0;
			for (int i=0; i<n; i++) {
				int a = bLe.get(i);
				int b = bGt.get(i);
				if (a+b > 0) {
					sumb += a+b;
				} else {
					break;
				}
			}
			gotPairs = true;
			return sumb;
		}
	}
	
	static boolean isPalindrom(String ss) {
		StringBuilder sb = new StringBuilder(ss);
		String sr = sb.reverse().toString();
		return ss.equals(sr);
	}	

	int n, k;
	String []sa;
	int []ba;
	Map<String, Palind> palMap = new HashMap<>();
	Map<String, Group> grMap = new HashMap<>();
	int maxBeauty;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		k = Integer.parseInt(ss[0]);
		n = Integer.parseInt(ss[1]);
		sa = new String[k];
		ba = new int[k];
		for (int i=0; i<k; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			sa[i] = ss[0];
			ba[i] = Integer.parseInt(ss[1]);
		}
	}

	void printRes() {
		System.out.println(maxBeauty);
	}	

	private void calculate() {
		// composing maps of palindroms and graups
		for (int i=0; i<k; i++) {
			String s = sa[i];
			if (isPalindrom(s)) {
				Palind pal = palMap.get(s);
				if (pal==null) {
					pal = new Palind(s, ba[i]);
					palMap.put(s, pal);
				} else {
					pal.bl.add(ba[i]);
				}
			} else {
				Group g = grMap.get(s);
				if (g==null) {
					g = new Group(s, ba[i]);
					grMap.put(g.le, g);
					grMap.put(g.gt, g);
				} else {
					g.addSB(s, ba[i]);
				}				
			}
		}
		// composing list of selected groups and palindroms
		// first palindromes
		// first center
		maxBeauty = 0;
		Palind bestCenter=null;
		int bestCenterAdv = 0;
		for (Palind p : palMap.values()) {
			if (p.centAdv() > bestCenterAdv) {
				bestCenter = p;
				bestCenterAdv = p.centAdv();
			}			
		}
		if (bestCenterAdv > 0) {
			maxBeauty = bestCenter.bl.get(0);
			bestCenter.bl.remove(0);
		}
		//System.out.println("after center mb = " + maxBeauty);
		// adding pairs from palindromes
		for (Palind p : palMap.values()) {
			maxBeauty += p.maxPairsBeaty();		
		}
		//System.out.println("after pals mb = " + maxBeauty);
		// now add pairs from groups
		for (Group g : grMap.values()) {
			maxBeauty += g.maxPairsBeaty();
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SantaClausPalindrome l = new SantaClausPalindrome();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
