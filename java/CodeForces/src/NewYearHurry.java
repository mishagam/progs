// CodeForces Round #750 A Solved with Koliasik, done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class NewYearHurry {

	int n,k;
	int maxProb;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		n = Integer.parseInt(ss[0]);
		k = Integer.parseInt(ss[1]);
	}

	void printRes() {
		System.out.println(maxProb);
	}	

	private void calculate() {
		int hasTime =240-k;
		int taskTime = 0;
		int time = 0;
		maxProb = 0;
		for (int i=0; i<n; i++) {
			taskTime = taskTime + 5;
			time = time + taskTime;
			if (time <= hasTime) {
				maxProb= maxProb + 1;
			} else {
				break;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		NewYearHurry l = new NewYearHurry();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
