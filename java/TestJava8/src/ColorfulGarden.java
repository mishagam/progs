// not done at all 

import java.util.HashMap;
import java.util.Map;

public class ColorfulGarden {
	
	String source;
	Map<String, Boolean> canMap = new HashMap<>();
	
	String canObtain(String sou, String tar) {
		source = sou;
		return  (dfs(tar) ? "Possible" : "Impossible");
	}
	
	boolean dfs(String t) {
		if (t.length()==source.length()) {
			return (t.equals(source));
		} else if (canMap.containsKey(t)) {
			return canMap.get(t);
		}
		boolean cana=false;
		boolean canb=false;
		if (t.endsWith("A")) {
			cana = dfs(t.substring(0, t.length()-1));
		}
		if (t.startsWith("B")) {
			String tt = t.substring(1);
			tt = new StringBuilder(tt).reverse().toString();
			canb = dfs(tt);
		}
		boolean can = cana || canb;
		canMap.put(t, can);
		return can;
	}

	public static void main(String[] args) {
		ColorfulGarden ab = new ColorfulGarden();
		String a = "AAABBAABB";
		String b = "BAABAAABAABAABBBAAAAAABBAABBBBBBBABB";
		String ret = ab.canObtain(a, b);
		System.out.printf("CanObtain( %s , %s ) = %s\n", a, b, ret);
	}
}