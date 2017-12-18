// TopCoder 277 DIV 2 250
import java.util.*;
public class StringCompare {
	public int simpleDifference(String a, String b) {
		int cnt=0;
		for (int i=0; i<a.length() && i<b.length(); i++) {
			if (a.charAt(i) == b.charAt(i)) {
				cnt++;
			}
		}
		return cnt;
	}
//$STARTREMOVE$
		static String justrun = null;
	public final static void main(String[] args)
	{
		try {
			validateExample("1", new StringCompare().simpleDifference("TICK", "TOCK"), 3, "simpleDifference(\"TICK\", \"TOCK\")");
			validateExample("2", new StringCompare().simpleDifference("CAT", "DOG"), 0, "simpleDifference(\"CAT\", \"DOG\")");
			validateExample("3", new StringCompare().simpleDifference("APPLE", "APPLES"), 5, "simpleDifference(\"APPLE\", \"APPLES\")");
			validateExample("4", new StringCompare().simpleDifference("FANTASTIC", "ANTASTIC"), 0, "simpleDifference(\"FANTASTIC\", \"ANTASTIC\")");
			validateExample("5", new StringCompare().simpleDifference("ANTIDISESTABLISHMENTARIANISM", "FLOCCIPAUCINIHILIPIFICATION"), 1, "simpleDifference(\"ANTIDISESTABLISHMENTARIANISM\", \"FLOCCIPAUCINIHILIPIFICATION\")");
		} catch (Exception e) {
			System.out.println(e);
			e.printStackTrace(System.out);
		}
	}

	private static void validateExample(String exampleNum, int returned, int expected, String methodInvocation) {
		if(justrun!=null && !eq(justrun,exampleNum)) return;
		print(exampleNum);
		print("  ");
		print((eq(returned,expected)) ? "SUCCESS" : "FAIL");
		print(" ");	
		print(methodInvocation);
		print("\tGot:[");
		print(returned);
		print("]\tExpected:[");
		print(expected);
		print("]\n");
	}

	public static void print(char a) {System.out.print(a);}
	public static void print(int a) {System.out.print(a);}
	public static void print(long a) {System.out.print(a);}
	public static void print(boolean a) {System.out.print(a);}
	public static void print(double a) {System.out.print(a);}
	public static void print(String a) {System.out.print(a);}
	public static void print(int[] a) {
		if (a==null) {System.out.print("null"); return;} 
		for (int i=0; i<a.length; i++) System.out.print(a[i]+(i<a.length-1?",":"")); 
	}

	public static void print(int[][] a) {
		if (a==null) {System.out.print("null"); return;} 
		for (int i=0; i<a.length; i++) { print(a[i]); print("\n"); }
	}

	public static void print(String[] a) {
		if (a==null) {System.out.print("null"); return;} 
		for (int i=0; i<a.length; i++) System.out.print(a[i]+(i<a.length-1?",":"")); 
	}

	public static boolean eq(boolean a, boolean b) {return a==b;}
	public static boolean eq(long a, long b) {return a==b;}
	public static boolean eq(int a, int b) {return a==b;}
	public static boolean eq(char a, char b) {return a==b;}
	public static boolean eq(double a, double b) {return Math.abs(a-b) < 1E-8;}
	public static boolean eq(String a, String b) {return a==b || (a!=null && b!=null && a.equals(b));}
	public static boolean eq(int[] a, int[] b) { return Arrays.equals(a,b); }
	public static boolean eq(String[] a, String[] b) { return Arrays.equals(a,b); }

//$ENDREMOVE$
}