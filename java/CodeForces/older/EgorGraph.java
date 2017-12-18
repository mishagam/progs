import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Random;

public class EgorGraph {
	int n;
	int [][]e;
    int []xidx;
    int []xidxfixed;
	int [][]d;
	int nn;
	boolean []changed;
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		e = new int[n][n];
        xidx = new int[n];
        xidxfixed = new int[n];
        changed = new boolean[n];
        d = new int[n][n];
		for (int i=0; i<n; i++) {
			ss = (bin.readLine()).split(" ");
			for (int j=0; j<n; j++) {
			    e[i][j] = Integer.parseInt(ss[j]);
			}
		}
        ss = (bin.readLine()).split(" ");
        for (int j=0; j<n; j++) {
            xidx[j] = j+1;
            xidxfixed[j] = Integer.parseInt(ss[j]);
        }
        nn = n;  // for start
	}
	
	void generateData(int na) {
	    Random rnd = new Random();
        n = na;
        e = new int[n][n];
        xidx = new int[n];
        xidxfixed = new int[n];
        changed = new boolean[n];
        d = new int[n][n];
        for (int i=0; i<n; i++) {
            for (int j=0; j<n; j++) {
                e[i][j] = rnd.nextInt(10000);
            }
        }
        for (int j=0; j<n; j++) {
            xidx[j] = j+1;
            xidxfixed[j] = j+1;
        }
        nn = n;  // for start
	}
	
	void removeIdx(int idx) {
	    int ii = -1;
	    for (int i=0; i<nn; i++) {
	        if (xidx[i] == idx) {
	            ii = i;
	            break;
	        }
	    }
	    if (ii==-1) {
	        throw new IllegalStateException("idx not found");
	    }
	    // removing idx from xidx
	    for (int j=ii; j<nn - 1; j++) {
	        xidx[j] = xidx[j+1];
	    }
	    // removing idx from e - rows
        for (int i=ii; i<nn-1; i++) {
            for (int j=0; j<nn; j++) {
                e[i][j] = e[i+1][j];
            }
        }
        for (int i=0; i<nn; i++) {
            for (int j=ii; j<nn-1; j++) {
                e[i][j] = e[i][j+1];
            }
        }
        nn = nn-1;
	}
	
	long countDists() {
        for (int i=0; i<nn; i++) {
            for (int j=0; j<nn; j++) {
                d[i][j] = e[i][j];
            }
        }
	    
	    for (int k=0; k<nn; k++) {
	        for (int i=0; i<nn; i++) {
	            for (int j=0; j<nn; j++) {
	                int dd = d[i][k] + d[k][j];
	                if (dd < d[i][j]) {
	                    d[i][j] = dd;
	                }
	            }
	        }
	    }
	    long sumd = 0;
        for (int i=0; i<nn; i++) {
            for (int j=0; j<nn; j++) {
                sumd += d[i][j];
            }
        }
	    return sumd;
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		EgorGraph eg = new EgorGraph();
		// eg.readData(bin);
		 eg.generateData(500);
		for (int i=0; i<eg.n; i++) {
		    long sd = eg.countDists();
		    System.out.print(sd + " ");
		    eg.removeIdx(eg.xidxfixed[i]);		    
		}
		System.out.println();
	}

}
