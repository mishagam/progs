// CodeForces Round #600 A

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExtractNumbers {
	String []sall;
	List<String> lnum = new ArrayList<>();
	List<String> lo = new ArrayList<>();
	String snum,so;
	Pattern pnum;
	
	private void readData(BufferedReader bin) throws IOException {
		// read x
		String s = bin.readLine();
		s = s.replace(";", ",") + ",|";
		sall = s.split(",");
		pnum = Pattern.compile("[1-9]\\d*");
	}
	
	void printRes() {
		System.out.println(snum);
		System.out.println(so);
	}
	
	boolean isNumber(String s) {
		if (s.equals("0")) {
			return true;
		}
		Matcher m = pnum.matcher(s);
		return m.matches();		
	}
	
	String listToStr(List<String> ls) {
		boolean first = true;
		if (ls.size()==0) {
			return "-";
		}
		StringBuilder sb = new StringBuilder();
		for (String s : ls) {
			if (!first) {
				sb.append(",");
			}
			sb.append(s);
			first = false;
		}
		return sb.toString();
	}

	private void calculate() {
		for (String s : sall) {
			if (s.equals("|")) {
				continue;
			}
			if (isNumber(s)) {
				lnum.add(s);
			} else {
				lo.add(s);
			}
		}
		snum = listToStr(lnum);
		so = listToStr(lo);
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		ExtractNumbers l = new ExtractNumbers();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
