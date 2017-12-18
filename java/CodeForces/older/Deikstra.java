// codeforces 20C done
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.FileReader;
import java.io.PrintStream;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Random;

public class Deikstra {
	int m,n;
	Vert vv[];
	
	boolean FILE_DEBUG = false;
	
	enum VType {OLD, CUR, NEW};
	
	class Vert  {
		int idx;
		Map<Integer, Long> edges = new HashMap<Integer,Long>(); // edges to weights
		VType type = VType.NEW;
		long dist = Long.MAX_VALUE;	
		int parent;
	}
	
	class VPair implements Comparable<VPair> {
		int idx;
		long dist;
		
		public VPair(int ia, long da) {
			idx = ia;
			dist = da;
		}
		
		public int compareTo(VPair b) {
			return (dist < b.dist ? -1 :(dist == b.dist ? 0 : 1));
		}
	}
	
	void readEdges(BufferedReader bin) throws IOException {
		String ss[] = bin.readLine().split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		vv = new Vert[n];
		for (int i=0; i<n; i++) {
			vv[i] = new Vert();
		}
		for (int j=0; j<m; j++) {
			ss = bin.readLine().split(" ");
			int i = Integer.parseInt(ss[0]);
			int jj = Integer.parseInt(ss[1]);
			long w = Long.parseLong(ss[2]);
			long oldW = (vv[i-1].edges.get(jj-1)==null ? 1000000000L : vv[i-1].edges.get(jj-1));
			if (w < oldW) {
				vv[i-1].edges.put(jj-1, w);
				vv[jj-1].edges.put(i-1, w);
			}
		}	
	}
	
	List<Integer> shortPath(int a, int b) {
		LinkedList<Integer> ret = new LinkedList<Integer>();
		PriorityQueue<VPair> vq = new PriorityQueue<VPair>(n + 80000);		

		vq.add(new VPair(a, 0));
		vv[a].dist = 0;
		vv[a].type = VType.CUR;
		while (!vq.isEmpty()) {
			VPair vp = vq.poll();
			int i = vp.idx;
			Vert v = vv[i];
			if (v.type != VType.CUR) continue;
			for (int j : v.edges.keySet()) {
				long w = v.edges.get(j);
				Vert vj = vv[j];
				if (vj.type == VType.OLD) continue;
				long dj = v.dist + w;
				// System.out.printf("dist i,j,o,n = %d %d %d %d\n",i,j,vj.dist,dj);
				if (dj < vj.dist) {
					// vq.remove(j);
					vj.dist = dj;
					vj.parent = i;
					vj.type = VType.CUR;
					vq.add(new VPair(j, dj));
				}
			}
			v.type = VType.OLD;
		}
		if (vv[b].type == VType.NEW) {
			ret.add(-2);
		} else {
			int n = 0;
			ret.addFirst(b);
			while (b != a) {
				b = vv[b].parent;
				ret.addFirst(b);
			}
		}
		return ret;
	}
	
	void prepDeikstra(String fn) throws IOException {
		PrintStream pr = new PrintStream(fn);
		Random rnd = new Random();
		int n = 120000;
		pr.println((n) + " " + (n-1));
		for (int i=0; i<n-1; i++) {			
			int d = 100000 + rnd.nextInt(1000000);
			pr.printf("%d %d %d\n", i+1, i+2, d);
		}
		pr.close();
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = null;
		Deikstra d = new Deikstra();
		if (d.FILE_DEBUG) {
			String fnPrep = "dprep.iin";
		    d.prepDeikstra(fnPrep);
		    bin = new BufferedReader(new FileReader(fnPrep));
		} else {
			bin = new BufferedReader(new InputStreamReader(System.in));
		}
		d.readEdges(bin);
		List<Integer> lp = d.shortPath(0, d.n-1);
		StringBuffer sb = new StringBuffer();
		for (int i: lp) {
			sb.append((i+1) + " ");
		}
		if (d.FILE_DEBUG) {
			PrintStream pr = new PrintStream("deikstra.out");
			pr.println(sb.toString());
			pr.close();
		}
		System.out.println(sb.toString());
	}

}
