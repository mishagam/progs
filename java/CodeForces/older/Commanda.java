// http://codeforces.ru/contest/231/problem/0
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Commanda {

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		String s = bin.readLine();
		String []ss = s.split(" ");
		int n = Integer.parseInt(ss[0]);
		int cnt = 0;
		for (int i=0; i<n; i++) {
			ss = (bin.readLine()).split(" ");
			int kcnt = 0;
			for (int k=0; k<3; k++) {
				boolean b = (ss[k].equals("1"));
				if (b) {
					kcnt++;
				}
			}
			if (kcnt>=2) {
				cnt++;
			}
		}
		System.out.println(cnt);
	}

}
