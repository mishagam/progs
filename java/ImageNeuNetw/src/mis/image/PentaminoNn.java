package mis.image;
import java.io.IOException;
import java.util.Arrays;

import mis.nn.NeuNet;

/**
 * работа с нейронными сетями различающими пентамино.
 * Работает, но не слишком впечатляет.
 * 
 * @author misha
 */

public class PentaminoNn {
	NeuNet nn = null;
	int w = 5;
	int h = 3;
	int npent = 12;
	int nerr;
	int sumerr;	
	final double EPS = 0.2;
	
	String [][]Pents = {
			{
				"XXXXX", // 1
				"....."
			},
			{
				"XXXX", // 2
				"...X"
			},
			{
				"XXXX", // 3
				"..X."
			},
			{
				"XXX.", // 4
				"..XX"
			},
			{
				"XXX", // 5
				".XX"
			},
			{
				"XXX", // 6
				"X.X"
			},
			{
				"XXX", // 7
				"X..",
				"X.."
			},
			{
				".XX", // 8
				"XX.",
				"X.."
			},
			{
				"..X", // 9
				"XXX",
				"X.."
			},
			{
				".X.", // 10
				"XXX",
				"X.."
			},
			{
				"X..", // 11
				"XXX",
				"X.."
			},
			{
				".X.", // 12
				"XXX",
				".X."
			},
			{}
	};
	
	void init() {
		nn = new NeuNet(w*h, npent, 30, 0);
		sumerr = 12;
	}
	
	double[] getInp(int ip) {
		double []v = new double[h * w];
		int k = 0;
		for (int i=0; i<h; i++) {
			String s = (i >= Pents[ip].length ? "....." : Pents[ip][i]);
			if (s.length() < 5) {
				s = s + "...";
			}
			for (int j=0; j<w; j++) {
				double r = (s.charAt(j)=='X' ? 2.0/3 : -1.0/3);
				// double r = (s.charAt(j)=='X' ? 1 : 0);
				v[k++] = r;
			}
		}
		return v;		
	}
	
	double[] calcCorrect(int ip) {
		double []corr = new double[npent];
		Arrays.fill(corr, 0);
		corr[ip] = 1;
		return corr;		
	}
	
	void stepi(int ip) {
		double []iv = getInp(ip);
		nn.setInputs(iv);
		double []nnv = nn.getOutput();
		double []ch = new double[npent];
		double []corr = calcCorrect(ip);
		for (int i=0; i<npent; i++) {
			ch[i] = corr[i] - nnv[i];
		}
		nn.learn(corr);
		printNC(corr, nnv);
		nerr = countErr(corr, nnv);
	}
	
	int countErr(double []a, double []b) {
		int cnt = 0;
		for (int i=0; i<a.length; i++) {
			if (Math.abs(a[i] - b[i]) > EPS) {
				cnt++;
			}
		}
		return cnt;
	}
	void printRow(double []v) {
		StringBuilder sb = new StringBuilder();		
		for (int i=0; i<npent; i++) {
			sb.append( String.format(" %7.4f", v[i]));
		}
		System.out.println(sb);		
	}
	
	void printNC(double []cor, double []nv) {
		printRow(cor);
		printRow(nv);
	}
			
	
	void step() {
		sumerr = 0;
		for (int i=0; i<12; i++) {
			stepi(i);
			sumerr += nerr;
		}
		System.out.println("sumerr = " + sumerr);
	}
	
	public static void main(String []args) throws IOException {
		PentaminoNn pn = new PentaminoNn();
		pn.init();
		for (int i=0; pn.sumerr > 0 && i<3000; i++) {
			System.out.println("Iteration " + i);
			pn.step();
			// System.in.read();
		}
		pn.nn.printWeigths();
	}
	


}
