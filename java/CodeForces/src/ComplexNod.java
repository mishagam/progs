// codeforces 652 b 
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ComplexNod {
	
	String a,b;  // men
	boolean same;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		String s = bin.readLine();
		String []ss = s.split(" ");
		a = ss[0];
		b = ss[1];
		bin.close();
	}	
	
	// we need to use max flow algorithm
	void calculate() {
		same = a.equals(b);
	}
	
	void writeRes() throws IOException {
		if (same) {
			System.out.println(a);
		} else {
			System.out.println("1");
		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ComplexNod p = new ComplexNod();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
