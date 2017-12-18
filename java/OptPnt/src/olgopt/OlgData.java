package olgopt;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * reading X and Y columns of olga data
 * @author Misha
 */
public class OlgData {
	double [][]xa;
	double [][]ya;
	int nl = 0;
	int NX = 5;
	int NY = 7;
	
	/**
	 * randomly extract nla lines for bootstrapping
	 * @param b
	 * @param nla
	 */
	void randomExtract(OlgData b, int nla) {
		Random rnd = new Random();
		int ii;
		NX = b.NX;
		NY = b.NY;
		nl = nla;
		xa = new double[nl][NX];
		ya = new double[nl][NY];
		boolean []used = new boolean[b.nl];
		for (int i=0; i<nl; i++) {
			ii = rnd.nextInt(b.nl);
			while (used[ii]) {
				ii = rnd.nextInt(b.nl);
			}
			used[ii] = true;
		}
		// we try to keep order
		ii=0;
		for (int i=0; i<nl; i++) {
			while (!used[ii]) {
				ii++;
			}
			for (int j=0; j<NX; j++) {
				xa[i][j] = b.xa[ii][j];
			}
			for (int j=0; j<NY; j++) {
				ya[i][j] = b.ya[ii][j];
			}
		}
	}
	
	void readData(String fileName) throws IOException {		
		BufferedReader bin = new BufferedReader(new FileReader(fileName));
		List<String> lines = new ArrayList<>();
		String l;
		bin.readLine();
		while ((l = bin.readLine()) != null) {
			lines.add(l);
		}
		bin.close();
		nl = lines.size();
		xa = new double[nl][NX];
		ya = new double[nl][NY];
		for (int i=0; i<nl; i++) {
			String []ss = lines.get(i).split("\t");
			for (int j=0; j<NX; j++) {
				xa[i][j] = Double.parseDouble(ss[j]);
			}
			for (int j=0; j<NY; j++) {
				ya[i][j] = Double.parseDouble(ss[NX+j]);
			}
		}
	}
}
