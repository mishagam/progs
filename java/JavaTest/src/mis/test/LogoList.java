package mis.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class LogoList {
	private static final String TAG = "LogoList";
	
	public List list = new ArrayList();	
	
	/**
	 * constructor adding all elements from list
	 * @param l
	 */
	public LogoList(List l) {
		this.list.addAll(l);
	}
	
	/**
	 * constructor generating empty logolist
	 */
	public LogoList() {
		// do nothing
	}
	
	/**
	 * parse logolist from internal queue tok
	 * @return
	 */
	public static LogoList parseList(Queue<String> tok) {
		LogoList lol = null;
		List loll = new ArrayList();	
		
		while (!tok.isEmpty()) {
			String t = (String)tok.remove();
			Log.d(TAG, "Read token: " + t);
			if (t.equals("]")) {
				lol = new LogoList(loll);
				break;
			} else if (t.equals("[")) {
				LogoList l1 = parseList(tok);
				loll.add(l1);
			} else if (t.trim().equals("")) {
				throw new IllegalStateException("Empty token");
			} else {
				loll.add(t);
			}			
		}
		if (lol==null) {
			// list can end with tok end
			lol = new LogoList(loll);
		}
		Log.d(TAG, "parsed Lol: " + lol);
		return lol;		
	}
	
	/**
	 * generate LogoList with string key and value v
	 * @param nm - name of element
	 * @param v - value of element
	 */
	public LogoList(String nm, Object v) {
		list.add(nm);
		list.add(v);
	}
	
	/**
	 * parse LogList from string
	 * @param s
	 */
	public void parseString(String s) {
		Queue<String> tok = new LinkedList<String>();
		tok.clear();
		addStringTokens(s, tok);		
		LogoList lol = parseList(tok);
		LogoList first = (LogoList)lol.get(0);
		this.list = first.list;		
	}
	
	private void addStringTokens(String s, Queue<String> tok) {
		StringTokenizer st = new StringTokenizer(s, "[] ", true);
		while (st.hasMoreTokens()) {
			String t = st.nextToken();
			t = t.trim();
			if (!t.isEmpty()) {
				tok.add(t);			
				Log.d(TAG, "added token: " + t);
			}
		}
	}
	
	/**
	 * Reading LogoList from BufferedReader br
	 * @param br - file opened as BufferedReader
	 * @throws IOException - if we have IO error
	 */
	public void readList(BufferedReader br) throws IOException {
		Queue<String> tok = new LinkedList<String>();
		String line;
		
		tok.clear();
		while ((line = br.readLine()) != null) {
			Log.d(TAG, "readList(), read line: " + line);
			addStringTokens(line, tok);
		}
		
		LogoList lol = parseList(tok);
		LogoList first = (LogoList)lol.get(0);
		this.list = first.list;		
	}
	
	/**
	 * Convert LogoList to string
	 */
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		for (Object o : list) {
			sb.append(o + " ");
		}
		sb.deleteCharAt(sb.length()-1);
		sb.append("]");
		String sret = sb.toString();
		return 	sret;
	}
	
	/**
	 * convert LogoList to Point
	 * @return
	 */
	public Point toPoint() {
		String sa = (String)list.get(0);
		String sb = (String)list.get(1);
		int ia = Integer.parseInt(sa);
		int ib = Integer.parseInt(sb);
		Point p = new Point(ia,ib);
		return p;
	}
	
	/**
	 * add object o to LogoList
	 * @param o
	 */
	public void add(Object o) {
		list.add(o);
	}
	
	/**
	 * extract object from LogoList
	 * Extracts object from underlying list.
	 * @param idx - index of object to extract
	 * @return - extracted object
	 */
	public Object get(int idx) {
		return list.get(idx);
	}
	
	private static void testLogoReadWrite() {
		String sa = "[oo [aa bb] [cc dd]]";
		LogoList ll = new LogoList();
		ll.parseString(sa);
		String sb = "" + ll;
		Log.d(TAG, "testLogoReadWrite, sa, sb = |" + sa+"| |" + sb + "|");
	}
	
	public static void main(String []args) {
		testLogoReadWrite();
	}
}
