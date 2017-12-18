// CodeForces Round #822 B Crossword Solving competition.
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class CrosswordSolving {

	int n,m;
	String s,t;
	int []ch;
	int nch;

	private void readData(BufferedReader bin) throws IOException {
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		n = Integer.parseInt(ss[0]);
		m = Integer.parseInt(ss[1]);
		// reading s t
		s = bin.readLine();
		t = bin.readLine();
	}

	void printRes() {
		System.out.println(nch);
		for (int i=0; i<nch; i++) {
			System.out.print(ch[i] + " ");
		}
		System.out.println();
	}
	

	private void calculate() {
		// looking for smallest nch
		int itbest=0;
		nch = 1000000000;
		for (int it=0; it+n<=m; it++) {
			int nnch=0;
			for (int is=0; is<n; is++) {
				if (s.charAt(is) != t.charAt(it+is)) {
					nnch++;
				}
			}
			if (nnch < nch) {
				nch = nnch;
				itbest = it;
			}
		}
		// recording changes
		ch = new int[nch];
		int ich = 0;
		for (int is=0; is<n; is++) {
			if (s.charAt(is) != t.charAt(itbest+is)) {
				ch[ich++] = is+1;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		CrosswordSolving l = new CrosswordSolving();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}}
