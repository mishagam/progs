// CodeForces Round #612C done

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class Skobki {
	String pos;
	int nzamen;
	char []stack;
	int n, top;
	
	private void readData(BufferedReader bin) throws IOException {
		pos = bin.readLine();
		n = pos.length();
		top = 0;
		stack = new char[n];
	}
	
	void printRes() {
		System.out.println(nzamen<0 ? "Impossible" : "" + nzamen);
	}
	
	boolean sootv(char a, char b) {
		if (a==')' && b=='(') {
			return true;
		} else if (a==']' && b=='[') {
			return true;
		} else if (a=='}' && b=='{') {
			return true;
		} else if (a=='>' && b=='<') {
			return true;
		} 
		return false;
	}
	
	private void calculate() {
		for (int i=0; i<n; i++) {
			char c = pos.charAt(i);
			if (c=='[' || c=='<' || c=='{' || c=='(') {
				stack[top++] = c;
			} else if (top==0) {
				nzamen = -1;
				break;
			} else {
				if (!sootv(c, stack[top-1])) {
					nzamen++;
				}
				top--;				
			}			
		}
		if (top!=0) {
			nzamen = -1;
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		Skobki l = new Skobki();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
