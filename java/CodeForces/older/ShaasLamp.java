import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class ShaasLamp {
	int n;
	int m;
	boolean []la;
	long MOD = 1000000007;
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		ss = (bin.readLine()).split(" ");
		la = new boolean[n];
		for (int i=0; i<m; i++) {			
			int a = Integer.parseInt(ss[i]);
			la[a-1] = true;	
		}
	}
	
	int waysOne(int f, int l) {
	    int ln = l-f+1;
	    if (f == 0) {
	        // first
	        return ln;
	    } else if (l == n-1) {
	        // last
	        return ln;
	    } else {
	        // middle
	        return ln*(ln+1)/2 + 1;
	    }
	}
	
	long comb(int la, int lb)
	{
	    return 0;  // TODO
	}
	
	long nways() {
	    long nw = 1;
	    long totln = 0;
	    int f = 0;
	    int l = 0;
	    boolean in = true;
	    
	    for (int i=0; i<=n; i++) {
	        if (i==n || la[i]) {
	            if (i > f) {
	                int wo = waysOne(f, i-1);
	                int ln = --f;
	                
	                nw = (nw * wo) % MOD;
	                
	            }
	            f = i+1;
	        } 
	    }
	    return nw;	    
	}
	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		ShaasLamp c = new ShaasLamp();
		c.readData(bin);
		long nWays = c.nways();
		System.out.println("" + nWays);
	}

}
