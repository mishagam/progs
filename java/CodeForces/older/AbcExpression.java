// CodeForces Round #479 A competition

	import java.io.BufferedReader;
	import java.io.FileReader;
	import java.io.IOException;
	import java.io.InputStreamReader;
	import java.util.Arrays;

public class AbcExpression {
	

		int a,b,c;
		int []w;
		int val;
		
		private void readData(BufferedReader bin) throws IOException {
			String s = bin.readLine();
			a = Integer.parseInt(s);
			s = bin.readLine();
			b = Integer.parseInt(s);
			s = bin.readLine();
			c = Integer.parseInt(s);
		}
		
		void printRes() {
			System.out.println(val);
		}
		
		private void calculate() {
			// search max in w;
			int mv = -1, i=0;
			w = new int[20];
			w[i++] = a*b*c;
			w[i++] = (a+b)*c;
			w[i++] = a+b*c;
			w[i++] = a*(b+c);
			w[i++] = a*b+c;
			w[i++] = a+b+c;
			w[i++] = -1;
			for (i=0; w[i]>=0; i++) {
				if (w[i]>mv) {
					mv = w[i];
				}
			}
			val = mv;
		}

		public static void main(String[] args) throws IOException {
			// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
			BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
			AbcExpression l = new AbcExpression();
			l.readData(bin);
			l.calculate();
			l.printRes();
		}
	}
