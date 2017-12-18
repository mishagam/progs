// Topcoder 277 div 2 prob 500
import java.util.*;

public class ClientsList {
	class FLName implements Comparable<FLName> {

		String f;
		String l;
		
		public FLName(String s) {
			String []ss = s.split(" ");
			if (s.contains(",")) {
				f = ss[1];
				int ln = ss[0].length();
				l = ss[0].substring(0, ln-1);
			} else {
				f = ss[0];
				l = ss[1];
			}
		}
		
		@Override
		public int compareTo(FLName o) {
			int ret = l.compareTo(o.l);
			if (ret == 0) {
				ret = f.compareTo(o.f);
			}
			return ret;
		}

		@Override
		public String toString() {
			return f + " " + l;
		}
	}
	public String[] dataCleanup(String[] names) {
		int n = names.length;
		FLName []nm = new FLName[n];
		for (int i=0; i<n; i++) {
			nm[i] = new FLName(names[i]);
		}
		Arrays.sort(nm);
		for (int i=0; i<n; i++) {
			names[i] = nm[i].toString();
		}
		
		return names;		
	}
//$STARTREMOVE$
		static String justrun = null;
	public final static void main(String[] args)
	{
		try {
			validateExample("1", new ClientsList().dataCleanup(new String[] {"Joe Smith", "Brown, Sam", "Miller, Judi"}), new String[] { "Sam Brown",  "Judi Miller",  "Joe Smith" }, "dataCleanup(new String[] {\"Joe Smith\", \"Brown, Sam\", \"Miller, Judi\"})");
			validateExample("2", new ClientsList().dataCleanup(new String[] {"Campbell, Phil", "John Campbell", "Young, Warren"}), new String[] { "John Campbell",  "Phil Campbell",  "Warren Young" }, "dataCleanup(new String[] {\"Campbell, Phil\", \"John Campbell\", \"Young, Warren\"})");
			validateExample("3", new ClientsList().dataCleanup(new String[] {"Kelly, Anthony", "Kelly Anthony", "Thompson, Jack"}), new String[] { "Kelly Anthony",  "Anthony Kelly",  "Jack Thompson" }, "dataCleanup(new String[] {\"Kelly, Anthony\", \"Kelly Anthony\", \"Thompson, Jack\"})");
			validateExample("4", new ClientsList().dataCleanup(new String[] {"Trevor Alvarez", "Jackson, Walter", "Mandi Stuart",
 "Martin, Michael", "Peters, Tammy", "Richard Belmont",
 "Carl Thomas", "Ashton, Roger", "Jamie Martin"}), new String[] { "Trevor Alvarez",  "Roger Ashton",  "Richard Belmont",  "Walter Jackson",  "Jamie Martin",  "Michael Martin",  "Tammy Peters",  "Mandi Stuart",  "Carl Thomas" }, "dataCleanup(new String[] {\"Trevor Alvarez\", \"Jackson, Walter\", \"Mandi Stuart\", \"Martin, Michael\", \"Pete...)");
			validateExample("5", new ClientsList().dataCleanup(new String[] {"Banks, Cody", "Cody Banks", "Tod Wilson"}), new String[] { "Cody Banks",  "Cody Banks",  "Tod Wilson" }, "dataCleanup(new String[] {\"Banks, Cody\", \"Cody Banks\", \"Tod Wilson\"})");
			validateExample("6", new ClientsList().dataCleanup(new String[] {"Mill, Steve", "Miller, Jane"}), new String[] { "Steve Mill",  "Jane Miller" }, "dataCleanup(new String[] {\"Mill, Steve\", \"Miller, Jane\"})");
		} catch (Exception e) {
			System.out.println(e);
			e.printStackTrace(System.out);
		}
	}

	private static void validateExample(String exampleNum, String[] returned, String[] expected, String methodInvocation) {
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