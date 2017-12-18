// codeforces 635C
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class XorEquation {
	long sum,xor;
	long nPar;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		sum = Long.parseLong(ss[0]);
		xor = Long.parseLong(ss[1]);
	}

	// we need to use max flow algorithm
	void calculate() {
		if (((sum-xor) % 2) != 0) {
			nPar = 0;
			return;
		}
		long b = (sum - xor) / 2;
		if ((b & xor)!=0) {
			nPar = 0;
		} else {
			// nPar = 2 ** number bits in xor
			int nb = Long.bitCount(xor);
			nPar = 1;
			for (int i=0; i<nb; i++) {
				nPar = nPar*2;
			}	
			if (b==0) {
				nPar -= 2;
			}
		}
	}
	
	void writeRes() throws IOException {
		System.out.println(nPar);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		XorEquation p = new XorEquation();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
