// CodeForces Round #669 C done
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Winner {

	Map<String, Integer> nmScore = new HashMap<>();
	int n;
	String []names;
	int []scores;
	String winnerName;
	Set<String> winners = new HashSet<>();

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		// read names and scores
		names = new String[n];
		scores = new int[n];
		for (int i=0; i<n; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			names[i] = ss[0];
			scores[i] =  Integer.parseInt(ss[1]);
		}
	}
	void printRes() {
		System.out.println(winnerName);
	}	

	private void calculate() {
		int maxScore = -100000000;
		// calculate final scores
		for (int i=0; i<n; i++) {
			int sc = scores[i];
			if (nmScore.containsKey(names[i])) {
				sc += nmScore.get(names[i]);				
			} 
			nmScore.put(names[i],sc);
		}
		// get winners
		for (String k : nmScore.keySet()) {
			int sc = nmScore.get(k);
			if (sc > maxScore) {
				winners.clear();
				winners.add(k);
				maxScore = sc;
			} else if (sc==maxScore) {
				winners.add(k);
			}
		}
		// find first winner, first clear their scores
		for (String k : winners) {
			nmScore.put(k, 0);
		}
		for (int i=0; i<n; i++) {
			if (!winners.contains(names[i])) {
				continue;
			}
			int sc = scores[i];
			sc += nmScore.get(names[i]);				
			nmScore.put(names[i],sc);
			if (sc >= maxScore) {
				winnerName = names[i];
				break;
			}
		}		
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		Winner l = new Winner();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}