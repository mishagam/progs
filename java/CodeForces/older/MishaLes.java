
// Codeforces 501C Misha i Les - Done (First attempt !!)
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;

public class MishaLes {
	int m=0;
	int n;
	LinkedList<Integer> []conn = null;
	int []degree;
	int []si;
	boolean changed = true;
	ArrayList<Integer> onel = new ArrayList<Integer>();
	ArrayList<Integer> newol = new ArrayList<Integer>();
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		degree = new int[n];
		si = new int[n];
		conn = (LinkedList<Integer>[])new LinkedList[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			degree[i] = Integer.parseInt(ss[0]);
			si[i] = Integer.parseInt(ss[1]);
			conn[i] = new LinkedList<Integer>();
		}
		
	}
	
	void printRes() {
		System.out.println(m);
		for (int i=0; i<n; i++) {
			for (int j : conn[i]) {
				System.out.println(i + " " + j);
			}
		}
	}
	
	void initOneL() {
		onel.clear();
		for (int i=0; i<n; i++) {
			if (degree[i]==1) {
				onel.add(i);
			}
		}
	}
	
	void addVertex(int aa, int bb) {
		int a,b;
		if (aa<bb) {
			a = aa;
			b = bb;
		} else {
			a = bb;
			b = aa;			
		}
		degree[a]--;
		si[a] = si[a] ^ b;
		degree[b]--;
		si[b] ^= a;
		m++;
		conn[a].add(b);
	}
	
	void removeOne() {
		int a,b;
		newol.clear();
		changed = false;
		for (int ii : onel) {
			if (degree[ii] == 0) {
				continue;
			} else if (degree[ii] != 1) {
				throw new IllegalStateException("Degree not 1,ii,deg = " + ii + " " + degree[ii]);
			}
			int bb = si[ii];
			addVertex(ii, bb);
			if (degree[bb]==1) {
				newol.add(bb);
			}
			changed = true;
		}
		onel.clear();
		onel.addAll(newol);
	}
	
	void calculate() {
		initOneL();
		while (changed) {
			removeOne();
		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		MishaLes l = new MishaLes();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}

}
