import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MusicPause {
	class OnePos {
		int nsong;  // number songs guessed
		int nsec;   // seconds with last song
		double prob;
		String key;
		
		OnePos(int nsong, int nsec) {
			this.nsong = nsong;
			this.nsec = nsec;
			key = nsong + "-" + nsec;
		}
		
		OnePos []guess() {
			OnePos []opa = new OnePos[2];
			if (nsong >= n) {
				// pass current one with prob 1
				opa[0] = this;
				opa[1] = null;
			} else if (nsec+1<t[nsong]) {
				// correct
				OnePos o = new OnePos(nsong+1, 0);
				o.prob = prob*p[nsong];
				opa[0] = o;
				// false
				o = new OnePos(nsong, nsec+1);
				o.prob = prob*(1.0 - p[nsong]);
				opa[1] = o;
			} else {
				// correct
				OnePos o = new OnePos(nsong+1, 0);
				o.prob = prob;
				opa[0] = o;
				// no false case
				opa[1] = null;
				
			}				
			return opa;
		}
		
	}
	int n;
	int T;
	double []p;
	int []t;
	double matO;
	Map<String, OnePos> mop = new HashMap<>();
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		T = Integer.parseInt(ss[1]);
		p = new double[n];
		t = new int[n];
		for (int i=0; i<n; i++) {
			ss = (bin.readLine()).split(" ");
			p[i] = 0.01*Integer.parseInt(ss[0]);
			t[i] = Integer.parseInt(ss[1]);
		}
	}
	
	void step() {
		List<OnePos> lop = new ArrayList<MusicPause.OnePos>();
		lop.addAll(mop.values());
		mop.clear();
		for (OnePos op : lop) {
			OnePos []bo = op.guess();
			for (int k=0; k<2; k++) {
				OnePos b = bo[k];
				if (b!=null) {
					OnePos bb= mop.get(b.key);
					if (bb==null) {
						mop.put(b.key, b);
					} else {
						bb.prob += b.prob;
					}
				}
			}
		}
	}
	
	void calculate() {
		OnePos o = new OnePos(0,0);
		o.prob = 1.0;
		mop.put(o.key, o);
		for (int it=0; it<T; it++) {
			step();
		}
		matO = 0;
		for (OnePos op : mop.values()) {
			matO += op.prob * op.nsong;
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
		MusicPause l = new MusicPause();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}

}
