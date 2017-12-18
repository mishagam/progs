// problem 520 B done
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class TwoButtons {

	final int MAX = 30000;
	int n,m;
	int []mem;
	long minBut;
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
	}
	void printRes() {
		System.out.println(minBut);
	}
	
	Queue<Integer> wq;
	
	void trya(int a, int steps) {
		if (a>=1 && a<MAX && mem[a]<0) {
			mem[a] = steps+1;
			// System.out.println("mem[" + a + "] = " + (steps+1));
			wq.add(a);
		}
	}
	
	void calculate() {
		mem = new int[MAX];
		wq = new LinkedList<Integer>();
		Arrays.fill(mem,  -1);
		mem[n] = 0;
		wq.add(n);
		while (!wq.isEmpty()) {
			int a = wq.remove();
			int steps = mem[a];
			if (a==m) {
				minBut = steps;
				break;
			}
			trya(a+a, steps);
			trya(a-1, steps);		
		}
	}
	

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		TwoButtons l = new TwoButtons();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}

}