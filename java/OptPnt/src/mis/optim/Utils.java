package mis.optim;

public class Utils {
	
	public static void printArr(double []x) {
		for (int i=0; i<x.length; i++) {
			System.out.printf(" %7.5f", x[i]);
		}
		System.out.println();
	}

	public static String printToString(double []x) {
		StringBuilder sb = new StringBuilder();
		for (int i=0; i<x.length; i++) {
			sb.append(String.format(" %7.5f", x[i]));
		}
		return sb.toString();
	}
}
