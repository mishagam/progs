// CodeForces Round #879 C train done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ShortProgram {
	
	static class Command {
		char cmd;
		int x;
		
		public Command(char ca, int xa) {
			cmd = ca;
			x = xa;
		}
		
		int apply(int a) {
			int b;
			if (cmd=='&') {
				b = a & x;
			} else if (cmd=='|') {
				b = a | x;
			} else if (cmd=='^') {
				b = a ^ x;
			} else {
				throw new IllegalStateException("Illegal cmd: " + cmd);
			}
			return b;
		}
	}
	
	static class Program {
		List<Command> comms = new ArrayList<>();
		
		int apply(int a) {
			for (Command c : comms) {
				a = c.apply(a);
			}
			return a;			
		}
		
		void addCommand(char ca, int xa) {
			Command c = new Command(ca, xa);
			comms.add(c);			
		}
	}

	int n,k;
	Program inProg;
	Program outProg;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(s);
		
		inProg = new Program();
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			char ca = ss[0].charAt(0);
			int xa = Integer.parseInt(ss[1]);
			inProg.addCommand(ca, xa);
		}
	}

	void printRes() {
		System.out.println(outProg.comms.size());
		for (Command c : outProg.comms) {
			System.out.println(c.cmd + " " + c.x);
		}
	}	

	private void calculate() {
		int z = inProg.apply(0);
		int o = inProg.apply(1023);
		int xand=0,xor=0,xxor=0;
		for (int i=0; i<10; i++) {
			int r = 1<<i;
			int bz = z & r;
			int bo = o & r;
			if (bz==0 && bo==0) {
				// leave all 0
			} else if (bz==0 && bo!=0) {
				// bit stays the same, and<- 1, or, xor <- 0
				xand = xand | r;
			} else if (bz!=0 && bo==0) {
				// xor works, and<-1 or<-0 xor<-1
				xand = xand | r;
				xxor |= r;
			} else {
				// always 1, and<-1, xxor<-0, xor <-1
				xand |= r;
				xor |= r;
			}
		}
		outProg = new Program();
		outProg.addCommand('&', xand);
		outProg.addCommand('|', xor);
		outProg.addCommand('^', xxor);		
		// testing
		int zz = outProg.apply(0);
		int oo = outProg.apply(1023);
		// System.out.println("z o = " + z + " " + o + " ,zz oo = " + zz + " " + oo);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		ShortProgram l = new ShortProgram();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
