// codeforces 608 A
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SaitamaHotel {
	int n,net;
	int []last;
	int []et;
	int []tm;
	int totalTime;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		net = Integer.parseInt(ss[1]);
		// Monster
		last = new int[net+1];
		et = new int[n+1];
		tm = new int[n+1];
		for (int i=0; i<n; i++) {
			sss = bin.readLine();
			ss = sss.split(" ");
			et[i] = Integer.parseInt(ss[0]);
			tm[i] = Integer.parseInt(ss[1]);
			if (tm[i]>last[et[i]]) {
				last[et[i]] = tm[i];
			}
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(totalTime);
	}
	
	// we need to use max flow algorithm
	void calculate() {
		totalTime = net;
		for (int i=0; i<=net; i++) {
			if (totalTime < i + last[i]) {
				totalTime = i + last[i];
			}
		}
	}
	

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		SaitamaHotel p = new SaitamaHotel();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
