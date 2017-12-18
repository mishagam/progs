// CodeForces Round #566 problem D July 30 2015 TODO

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

public class RestructKom {
	class Request {
		int type;
		int x,y;
		Request(String s) {
			String []ss = s.split(" ");
			type = Integer.parseInt(ss[0]);
			x = Integer.parseInt(ss[1])-1;
			y = Integer.parseInt(ss[2])-1;
		}
	}
	class Team {
		int idx;
		int dep;
		Team parent;
		Team(int i, int d) {
			idx = i;
			dep = d;
			parent=null;
		}
		int findParentIdx() {
			Team t = this;
			while (t.parent!=null) {
				t = t.parent;				
			}
			return t.idx;
		}
		boolean sameTeam(Team b) {
			return (findParentIdx() == b.findParentIdx()); 
		}
		
		/**
		 * this team joins to team b
		 * @param b
		 */
		void joinTo(Team b) {
			this.parent = b;
			b.dep = Math.max(b.dep, this.dep + 1);			
		}
		
		Team topParent() {
			Team t = this;
			while (t.parent!=null) {
				t = t.parent;				
			}
			if (t != this) {
				this.parent = t;
			}
			return t;			
		}
		
		void join(Team b) {
			if (!sameTeam(b)) {
				// trying to make flat tree
				Team ta = this.topParent();
				Team tb = b.topParent();
				if (ta.dep > tb.dep) {
					tb.joinTo(ta);
				} else {
					ta.joinTo(tb);
				}
			}
		}
	}

	int n,q;
	Team []teams;
	Request []req;
	
	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		q = Integer.parseInt(ss[1]);
		teams = new Team[n];
		for (int i=0; i<n; i++) {
			teams[i] = new Team(i,0);
		}
		req = new Request[q];
		for (int i=0; i<q; i++) {
			s = bin.readLine();
			req[i] = new Request(s);
		}
	}
	
	void printRes() {
		// here do nothing, print in doRequest
	}
	
	void doRequest(Request r) {
		if (false && q>100000) {
			if (r.type != 3) {
				System.out.println(r.type+" "+r.x+" "+r.y);
			} else {
				System.out.print(".");
			}
			return;
		}
		if (r.type==1) {
			teams[r.x].join(teams[r.y]);
		} else if (r.type==2) {
			for (int i=r.x; i<r.y; i++) {
				teams[i].join(teams[i+1]);
			}
		} else if (r.type==3) {
			if (teams[r.x].sameTeam(teams[r.y])) {
				System.out.println("YES");
			} else {
				System.out.println("NO");
			}
		} else {
			System.out.println("*** wrong type");
		}
	}
	
	private void calculate() {
		for (int i=0; i<q; i++) {
			doRequest(req[i]);
		}
	}
	
	static void prepareData(String fn) throws IOException {
		PrintWriter w = new PrintWriter(fn);
		Random rnd = new Random();
		int n = 20;
		int q = 500000;
		w.println(n + " "+q);
		for (int i=0; i<q; i++) {
			int x = rnd.nextInt(20)+1;
			int y = rnd.nextInt(20)+1;
			w.println("3 " + x+" "+y);
		}
		w.close();
	}

	public static void main(String[] args) throws IOException {
		String fn = "RestructComp.in";
		prepareData(fn);
		BufferedReader bin = new BufferedReader(new FileReader(fn));
		// BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		RestructKom l = new RestructKom();
		long t0 = System.currentTimeMillis();
		l.readData(bin);
		l.calculate();
		l.printRes();
		long t1 = System.currentTimeMillis();
		System.out.println("total spend time = " + (t1-t0));
	}
}
