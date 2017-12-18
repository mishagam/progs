// codeforces 234 C done but CodeForces hamiat, "Ошибка времени исполнения на тесте 1"
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Pogoda {
	int n;
	int []t;
	int []nn;
	int []np;
	
	public Pogoda() throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		n = Integer.parseInt(bin.readLine());
		t = new int[n];
		String s = bin.readLine();
		String []ss = s.split(" ");
		for (int i=0; i<n; i++) {
			t[i] = Integer.parseInt(ss[i]);
		}		
		nn = new int[n];
		np = new int[n];
		bin.close();
	}
	
	void countNeg() {
		int cnt = 0;
		for (int i=0; i<n; i++) {
			if (t[i] >= 0) cnt++;
			nn[i] = cnt;			
		}
	}
	
	void countPos() {
		int cnt = 0;
		for (int i=n-1; i>=0; i--) {
			if (t[i] <= 0) cnt++;
			nn[i] = cnt;			
		}
	}
	
	int findOpt() {
		int oo = Integer.MAX_VALUE;
		for (int i=0; i<n-1; i++) {
			int o = nn[i] + np[i+1];
			if (o < oo) {
				oo = o;
			}					
		}
		return oo;
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		Pogoda p = new Pogoda();
		p.countNeg();
		p.countPos();
		int oo = p.findOpt();
		System.out.println(oo);
	}
}
