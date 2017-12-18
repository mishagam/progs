// codeforces 488 c
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BiemMonster {
	int hpy,atky,defy;
	int hpm, atkm, defm;
	int h,a,d;
	int minBitK = 0;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		// y
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		hpy = Integer.parseInt(ss[0]);
		atky = Integer.parseInt(ss[1]);
		defy = Integer.parseInt(ss[2]);
		// Monster
		sss = bin.readLine();
		ss = sss.split(" ");
		hpm = Integer.parseInt(ss[0]);
		atkm = Integer.parseInt(ss[1]);
		defm = Integer.parseInt(ss[2]);
		// prices
		sss = bin.readLine();
		ss = sss.split(" ");
		h = Integer.parseInt(ss[0]);
		a = Integer.parseInt(ss[1]);
		d = Integer.parseInt(ss[2]);
	}
	
	boolean won(int hy, int ay, int dy) { 
		if (ay <= defm) {
			return false;
		} else if (atkm < dy) {
			return true;
		}
		int ty = hpm / (ay - defm);
		int tm = hy / (atkm - dy);
		return (ty > tm);		
	}
	
	// we need to use max flow algorithm
	void calculate() {
		// TODO
	}
	
	void writeRes() throws IOException {
		System.out.println(minBitK);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		BiemMonster p = new BiemMonster();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
