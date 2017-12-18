// TopCoder SRM 227 div 2 prob 1000

import java.util.*;
public class TreePlanting {
	long [][]cmem = new long[70][70];
	
	long c(int n, int k) {
		if (n<0 || k<0 || k>n) return 0;
		if (cmem[n][k] > 0) return cmem[n][k];
		if (k==0 || k==n) return 1;
		long lret = c(n-1, k-1) + c(n-1, k);
		cmem[n][k] = lret;
		return lret;
	}
	
	long cc(int n, int parts) {
		if (parts==0 && n==0) return 1;
		return c(n-1, n-parts);		
	}
	
	public long countArrangements(int total, int fancy) {
		int pl = total - fancy;
		int f = fancy;
		long cnt = 2*cc(pl,f);
		cnt += cc(pl, f-1);
		cnt += cc(pl, f+1);
		return cnt;		
	}
//$STARTREMOVE$
		static String justrun = null;
	public final static void main(String[] args)
	{
		try {
			validateExample("01", new TreePlanting().countArrangements(1,1), 1, "countArrangements(1,1)");
			validateExample("1", new TreePlanting().countArrangements(4, 2), 3, "countArrangements(4, 2)");
			validateExample("2", new TreePlanting().countArrangements(3, 1), 3, "countArrangements(3, 1)");
			validateExample("3", new TreePlanting().countArrangements(4, 3), 0, "countArrangements(4, 3)");
			validateExample("4", new TreePlanting().countArrangements(10, 4), 35, "countArrangements(10, 4)");
		} catch (Exception e) {
			System.out.println(e);
			e.printStackTrace(System.out);
		}
	}

	private static void validateExample(String exampleNum, long returned, long expected, String methodInvocation) {
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