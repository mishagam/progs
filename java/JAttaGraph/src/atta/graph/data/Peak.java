package atta.graph.data;

import java.util.Formatter;

public class Peak {
    /** order number of peak in PeakSet */
    public int num;
    /** size of peak nucleotid */
    public double size;
    /** height of peak - highest of peak values */
    public int height;
    /** peak area */
    public int area;
    /** Peak position */
    public int pos;
    /** peak name */
    public String name;
    /** Relative height of this peak as percentage of summ of all named peaks */
    public double relHeight;
    /** power of expression */
    public double powerExpr;
    /** color of peak (blue, green, black or red) */
    public int color;
    
    public void clear() {
        size = 0.0;
        num = area = pos = height = 0;
        name = "";
        relHeight = 0;
        powerExpr = 0.0;
    }
    
    public Peak() {
        clear();
    }
    
	public Peak copy() {
		Peak p = new Peak();
		p.area = area;
		p.color = color;
		p.height = height;
		p.name = name;
		p.num = num;
		p.pos = pos;
		p.powerExpr = powerExpr;
		p.relHeight = relHeight;
		p.size = size;
		
		return p;		
	}

	/**
     * String size PE name to peak
     * @param s string to parse
     */
    int fromNamedString(String s) {
    	String []ss = s.split("\t");
    	if (ss.length < 3) {
    		return 0;
    	}
    	size = Double.parseDouble(ss[0]);
    	powerExpr = Double.parseDouble(ss[1]);
    	name = ss[2];  
    	return 1;
    }
    
    String toNamedString() {
    	StringBuilder sb = new StringBuilder();
    	Formatter form = new Formatter(sb);
    	form.format("%.1f\t%.5f\t%s", size, powerExpr, name);
    	return sb.toString();
    }
    
    int fromString(String s) {
    	String []ss = s.split("\t");
    	if (ss.length < 8) {
    		return 0;
    	}
    	color = Integer.parseInt(ss[0]);
    	num = Integer.parseInt(ss[1]);
    	size = Double.parseDouble(ss[2]);
    	height = Integer.parseInt(ss[3]);
    	area = Integer.parseInt(ss[4]);
    	pos = Integer.parseInt(ss[5]);
    	relHeight = Double.parseDouble(ss[6]);
    	powerExpr = Double.parseDouble(ss[7]);
    	name = (ss.length > 8 ? ss[8] : "");
    	return 1;
    }
    
    @Override
    public String toString() {
    	StringBuilder sb = new StringBuilder();
    	Formatter form = new Formatter(sb);
    	form.format("%d\t%d\t%.3f\t%d\t%d\t%d\t%.3f\t%.3f\t%s",
                this.color, this.num, this.size, this.height, this.area, 
    			this.pos, this.relHeight, this.powerExpr, this.name);
    	return sb.toString();
    }
}
