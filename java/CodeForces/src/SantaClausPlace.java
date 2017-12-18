// CodeForces Round #715 B
// graphs, dijkstra algorithm, not solved

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;

public class SantaClausPlace {

	int n,m,k;
    int r,d;
    char sch;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		k = Integer.parseInt(ss[2]);
	}

	void printRes() {
		System.out.printf("%d %d %c\n", (r+1),(d+1),sch);
	}	

	private void calculate() {
		sch = ((k%2)==1 ? 'L' : 'R');
		k = (k-1)/2;
		r = k/m;
		d = k % m;		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		SantaClausPlace l = new SantaClausPlace();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
