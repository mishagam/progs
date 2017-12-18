// codeforces 289 B
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;


public class SwapSort {
	
	class APair implements Comparable<APair> {
		int a;
		int idx;
		boolean used;
		APair(int aa, int ii) {
			a=aa; idx=ii;
			used = false;
		}
		public int compareTo(APair b) {
			return Integer.compare(a,  b.a);
		}		
	}
	
	int n;
	APair []ap; 
	int []al; 
	int []bl;
	int []x;
	int []y;
	int k=0;
	
	public SwapSort() throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		n = Integer.parseInt(bin.readLine());
		// read ap
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		ap = new APair[n];
		x = new int[n];
		y = new int[n];
		
		for (int i=0; i<n; i++) {
			int a = Integer.parseInt(ss[i]);
			ap[i] = new APair(a, i);
		}		
		bin.close();
	}
	
	int findNotUsed(int j0) {
		for (int j=j0; j<n; j++) {
			if (!ap[j].used) {
				return j;
			}
		}
		return -1;
		
	}
	
	void addPairs(LinkedList<Integer> l) {
		if (l.size() < 2) {
			throw new IllegalStateException("Too short cycle");
		}
		while (l.size() >= 2) {
			x[k] = l.get(0);
			y[k] = l.get(1);
			k++;
			l.remove(0);			
		}		
	}
	
	// we need to use max flow algorithm
	void calculate() {
		LinkedList<Integer> seq = new LinkedList<>();
		int j=0;
		k = 0;
		Arrays.sort(ap);
		while ((j=findNotUsed(j))>=0) {
			if (ap[j].idx==j) {
				j++;
				continue;
			}
			seq.clear();
			int jj = j;
			while (jj >= 0) {
				seq.add(jj);
				ap[jj].used = true;
				jj = ap[jj].idx;
				if (jj==j) {
					jj = -1;
				}
			}
			addPairs(seq);
			j++;
		}		
	}
	
	void writeRes() throws IOException {
		System.out.println(k);
		for (int i=0; i<k; i++) {
			System.out.println(x[i] + " " + y[i]);
		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		SwapSort p = new SwapSort();
		p.calculate();
		p.writeRes();
	}
}
