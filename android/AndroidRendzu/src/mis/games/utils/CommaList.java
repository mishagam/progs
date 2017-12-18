package mis.games.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

/**
 * holding, writing reading objects in Lisp like lists.
 * @author Misha
 *
 */
public class CommaList {
    List<Object> list = new ArrayList<Object>();
    int idx = 0;
    
    public CommaList() {
    }
    
    public CommaList(String s) {
        listFromString(s);
    }
    CommaList(List<Object> lo) {
        list = lo;
        idx = 0;
    }
    
    public Object getObject() {
        return list.get(idx++);
    }
    
    public String getStr() {
        return (String)getObject();
    }
    
    public int getInt() {
        return Integer.parseInt(getStr());
    }
    
    public double getDouble() {
        return Double.parseDouble(getStr());
    }
    
    public CommaList getList() {
        return new CommaList((List<Object>)getObject());
    }
    
    public void add(Object o) {
        list.add(o);
    }
    
    public void listFromString(String s) {
        list.clear();
        List<String> tokens = splitToTokens(s);
        if (!tokens.get(0).equals("(")) {
            throw new IllegalArgumentException("lists should start with '(' but was: " + s);
        }
        listFromTokens(list, tokens, 1);
        idx = 0;
    }
    
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("(");
        boolean first = true;
        for (Object o : list) {
            if (!first) {
                sb.append(" ");      
            } else {
                first = false;
            }
            sb.append(o.toString());
        }
        sb.append(")");
        return sb.toString();
    }
    
    private List<String> splitToTokens(String s) {
        String tokenSep = "() ";
        StringTokenizer st = new StringTokenizer(s, tokenSep, true);
        List<String> tokens = new ArrayList<String>();
        while (st.hasMoreTokens()) {
            tokens.add(st.nextToken());
        }
        return tokens;
    }
    
    private int listFromTokens(List<Object> list, List<String> tokens, int idx) { 
        String tok;
        while (idx < tokens.size()) {
            tok = tokens.get(idx++);
            if (tok.equals(" ")) {
                continue;                
            } else if (tok.equals(")")) {
                break;            
            } else if (tok.equals("(")) {
                List<Object> lo = new ArrayList<Object>();
                idx = listFromTokens(lo, tokens, idx);
                list.add(lo);
            } else {
                list.add(tok);
            }            
        }
        return idx;        
    }
    
    public void reset() {
        idx = 0;
    }
    
    public boolean hasNext() {
        return idx < list.size();
    }
    
}
