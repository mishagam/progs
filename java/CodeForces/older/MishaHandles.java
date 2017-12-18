import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class MishaHandles {
	int q;
	int nn;
	Map<String,String> newOld = new HashMap<String, String>();
	Set<String> newNames = new HashSet<String>();
	
	void  readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		q = Integer.parseInt(ss[0]);
		for (int i=0; i<q; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			String oldN = ss[0];
			String newN = ss[1];
			newOld.put(newN, oldN);
			if (newNames.contains(oldN)) {
				newNames.remove(oldN);
			}
			newNames.add(newN);
		}
		
	}
	String firstName(String nn) {
		while (newOld.containsKey(nn)) {
			nn = newOld.get(nn);
		}
		return nn;
	}
	
	void printRes() {
		System.out.println(newNames.size());
		for (String s : newNames) {
			System.out.println(firstName(s) + " " + s);
		}
	}
	
	void calculate() {
		// do nothing
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		MishaHandles l = new MishaHandles();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}

}
