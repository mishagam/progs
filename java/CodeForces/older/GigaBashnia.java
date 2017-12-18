// codeforces 488 a
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GigaBashnia {
	long a;
	int step;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		String s = bin.readLine();
		a = Long.parseLong(s);
	}
	
	boolean hasEight(long a) {
		String sa = "" + a;
		boolean bret = (sa.indexOf('8') >= 0);
		return bret;
	}
	
	// we need to use max flow algorithm
	void calculate() {
		a = a+1;
		step = 1;
		while (!hasEight(a)) {
			a++;
			step++;
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(step);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		GigaBashnia p = new GigaBashnia();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
