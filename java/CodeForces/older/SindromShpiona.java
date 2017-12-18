// CodeForces Round #633 C competition, Done (too late, 9 attempts)

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class SindromShpiona {
	
	class TNode {
		String a; // if not null we have this string
		final TNode []chld = new TNode[26];  // number of chars in alphabet
		private final int level;   // 0 for root node
		
		TNode(int la) {
			level = la;
		}
		
		void addWord(String aa, String ba) {
			// adding by b
			int ln = ba.length();
			if (ln < level) {
				System.out.println("Bad addition for " + ba);
				return;
			} else if (ln==level) {
				if (a==null) {
					a = aa;					
				}
			} else {
				char c = ba.charAt(level);
				int idx = (int)(c-'a');
				if (chld[idx]==null) {
					TNode h = new TNode(level+1);
					chld[idx] = h;
				}
				TNode ch = chld[idx];
				ch.addWord(aa, ba);				
			}			
		}
	}	
	
	class Sentence {
		private final Sentence prev;
		final String w;
		
		Sentence() {
			prev=null; w=null;
		}
		
		Sentence(Sentence b, String wa) {
			prev = b;
			w = wa;
		}
		
		void print() {
			List<String> lw = new ArrayList<>();
			Sentence cu = this;
			while (cu != null) {
				lw.add(cu.w);
				cu = cu.prev;
			}
			for (int i=lw.size()-2; i>=0; i--) {
				if (i<lw.size()-2) {
					System.out.print(" ");
				}
				System.out.print(lw.get(i));
			}
			System.out.println();
		}
	}
	
	int n,m;
	int k;
	String a;
	List<Integer> la = new ArrayList<>();
	TNode dictRoot;
	Sentence res = null;
		// TODO Auto-generated method stub
	
	String reverse(String a) {
		StringBuilder sb = new StringBuilder();
		for (int i=a.length()-1; i>=0; i--) {
			char c = a.charAt(i);
			sb.append(Character.toLowerCase(c));				
		}
		String b = "" + sb;
		return b;
	}
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		a = bin.readLine();
		s = bin.readLine();
		ss = s.split(" ");
		m = Integer.parseInt(ss[0]);
		dictRoot = new TNode(0);
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			String sr = reverse(s);
			dictRoot.addWord(s, sr);
		}
	}
	
	void printRes() {
		res.print();
	}
	
	private void calculate() {
		Sentence []sa = new Sentence[n+1];
		// add empty sentence
		sa[0] = new Sentence();
		for (int i=0; i<n; i++) {
			// adding to sentences
			if (sa[i]==null) {
				continue;
			}
			Sentence o = sa[i];
			// look for all words starting in a
			TNode tn = dictRoot;
			for (int j=0; (i+j)<a.length(); j++){
				int idx = (int)(a.charAt(i+j) - 'a');
				if (tn.chld[idx] != null) {
					tn = tn.chld[idx];
					if (tn.a != null && sa[i+j+1]==null) {
						Sentence s = new Sentence(o,tn.a);
						sa[i+j+1] = s;
					}
				} else {
					break;
				}
			}				
		}
		res = sa[n];
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		SindromShpiona dr = new SindromShpiona();
		dr.readData(bin);
		dr.calculate();
		dr.printRes();
	}
}
