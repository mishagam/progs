// http://codeforces.ru/contest/231/problem/D
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;


public class MagicCube {
	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		
		// Vasia
		String s = bin.readLine();
		String []ss = s.split(" ");
		int x = Integer.parseInt(ss[0]);
		int y = Integer.parseInt(ss[1]);
		int z = Integer.parseInt(ss[2]);
		
		// Yashik
		s = bin.readLine();
		ss = s.split(" ");
		int x1 = Integer.parseInt(ss[0]);
		int y1 = Integer.parseInt(ss[1]);
		int z1 = Integer.parseInt(ss[2]);
		// a1 ...
		int []a = new int[7];
		ss = (bin.readLine()).split(" ");
		for (int i=0; i<6; i++) {
			a[i+1] = Integer.parseInt(ss[i]);
		}
		
		int sum = 0;
		if (x<0) {
			sum += a[5];
		} else if (x > x1) {
			sum += a[6];
		}
		if (y<0) {
			sum += a[1];
		} else if (y > y1) {
			sum += a[2];
		}
		if (z<0) {
			sum += a[3];
		} else if (z > z1) {
			sum += a[4];
		}
	
		System.out.println(sum);
	}

}
