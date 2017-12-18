
// CodeForces Round #145 B train many attempts done

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class LuckyNumber2 {

	int a4, a7, a47, a74;
	String lucky = "-1";

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String[] ss = s.split(" ");
		a4 = Integer.parseInt(ss[0]);
		a7 = Integer.parseInt(ss[1]);
		a47 = Integer.parseInt(ss[2]);
		a74 = Integer.parseInt(ss[3]);
	}

	void printRes() {
		System.out.println(lucky);
	}
	
	// create seq like 44447474747777, more 47
	String calc47() {
		StringBuilder sb = new StringBuilder();
		for (int i=0; i<a4-a47; i++) {
			sb.append("4");
		}
		for (int i=0; i<a47; i++) {
			sb.append("47");
		}
		for (int i=0; i<a7-a47; i++) {
			sb.append("7");
		}
		return sb.toString();
	}

	private void calculate() {
		if (a47 > a4 || a47 > a7 || a74 > a4 || a74 > a7) {
			return;
		}
		if (Math.abs(a47 - a74) > 1) {
			return;
		}
		if (a4==a7 && a7==a47 && a47==a74) {
			return;
		}

		if (a74 == a47 && a4>1 && a4>a47) {
			// 4447477774
			a4--;
			lucky = calc47() + "4";	
		} else if (a74==a47) {
			a7--;
			lucky = "7" + calc47();	
		} else if (a47 > a74) {
			lucky = calc47();
		} else {
			a4--;
			a7--;
			lucky = "7" + calc47() + "4";
		}
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		LuckyNumber2 l = new LuckyNumber2();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
