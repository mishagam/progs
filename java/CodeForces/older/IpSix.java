import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class IpSix {
	int n;
	int dif0 = 0;
	BufferedReader bin = null;
	
	public IpSix(BufferedReader bin) throws IOException {
		this.bin = bin;
		n = Integer.parseInt(bin.readLine());		
	}

	String fillZero(String s) {
		return "0000".substring(0, (4 - s.length())) + s;
	}
	String repl0(int n) {
		if (n==0) return "0000";
		else return "0000:" + repl0(n - 1);
	  }

	String repl(String s) { 
		if (s.equals("Z")) return repl0(dif0);
		else return fillZero(s);
	  }
	  
	void work () throws IOException{
	    String sou = bin.readLine().replace("::", ":Z:");
	    String []sh = sou.split(":");
	    int m = sh.length;
	    dif0 = 8 - m;
	    StringBuilder sb = new StringBuilder();
	    for (int j=0; j<m; j++) {
	    	if (j>0) {
	    		sb.append(":");
	    	}
	    	sb.append(repl(sh[j]));
	    }
	    System.out.println(sb);
	}
	void doAll() throws IOException {
		for (int i=0; i<n; i++) {
			work();
		}
	}
	public static void main(String []args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		IpSix is = new IpSix(bin);
		is.doAll();		
	}

}
