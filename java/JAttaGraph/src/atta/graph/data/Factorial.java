/*  $Id: Factorial.java,v 1.7 2008/02/17 06:42:20 Misha Exp $ */
package atta.graph.data;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.ArrayList;

/// class holding peak names with all parameters
/// relevant to work of AttaGraph program.
public class Factorial extends PeakSet {
	public String factorialName = "";
	public String firstPeak;    ///< index of first peak for possible FL compensation
	public String lastPeak;     ///< index of last peak (from 0 ?)
	public double maxFLRatioError; ///< maximum percentage error of F/L ratio
	public boolean useFLCompensation;  ///< compensate peaks heights for First/Last ratio
	public boolean useLinearityCheck;
	public String linearPeak1;
	public String linearPeak2;
	public String linearPeak3;
	public double maxLinearityError;  ///< maximum error of central peak from linear
	public boolean usePowerExpression;
	public String basePeak;
	
	public Factorial() {
		init();
	}
	
	public void init() {
		// initial values for analysis options
		this.factorialName = "no-name-factorial";
		this.firstPeak = "TATA-1";
		this.lastPeak = "TATA-5";
		this.maxFLRatioError = 50.0;
		this.useFLCompensation = true;
		this.useLinearityCheck = false;
		this.linearPeak1 = "TATA-2";
		this.linearPeak2 = "TATA-3";
		this.linearPeak3 = "TATA-4";
		this.maxLinearityError = 0.0;
		this.usePowerExpression = true;
		this.basePeak = "TATA-3";
	}
	
	public Factorial copy() {
		Factorial f = new Factorial();
		f.factorialName = this.factorialName;
		f.firstPeak = this.firstPeak;
		f.lastPeak = this.lastPeak;
		f.maxFLRatioError = this.maxFLRatioError;
		f.useFLCompensation = this.useFLCompensation;
		f.useLinearityCheck = this.useLinearityCheck;
		f.linearPeak1 = this.linearPeak1;
		f.linearPeak2 = this.linearPeak2;
		f.linearPeak3 = this.linearPeak3;
		f.maxLinearityError = this.maxLinearityError;
		f.usePowerExpression = this.usePowerExpression;
		f.basePeak = this.basePeak;
		for (Peak p : v) {
			f.v.add(p.copy());
		}

		return f;
	}
	
	public boolean readFactorial(String fileName) throws IOException {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(fileName));
            // skip factorial name
            v.clear();
            // first read peaks
            String line = null;
            int peakNum = 1;
            while ((line = reader.readLine()) != null) {
            	if (line.contains("=")) {
            		// read property
            		parsePropLine(line);
            	} else {
            		// read peak
            		line = line.trim();
                    String[] ss = line.split("[\t ]+");
                    if (ss.length == 1) {
                        name = ss[0];
                        continue;
                    }
                    double size = Double.parseDouble(ss[0]);
                    double pe = Double.parseDouble(ss[1]);
                    String peakName = ss[2];
                    Peak p = new Peak();
                    p.size = size;
                    p.powerExpr = pe;
                    p.name = peakName;
                    p.num = peakNum++;
                    v.add(p);
            	}
            }

            return true;
        } catch (IOException e) {
            throw e;
        } catch (NumberFormatException nfe) {
        	throw nfe;
        } finally {
            if (reader != null) {
                reader.close();
            }
        }
    }
	
	void parsePropLine(String pl) {
		String []ss = pl.split("=");
		String name = ss[0];
		String val = (ss.length == 1 ? "" : ss[1]);
		if (name.equals("factorialName")) {
			this.factorialName = val;
		} else if (name.equals("firstPeak")) {
			this.firstPeak = val;
		} else if (name.equals("lastPeak")) {
			this.lastPeak = val;
		} else if (name.equals("maxFLRatioError")) {
			this.maxFLRatioError = Double.parseDouble(val);
		} else if (name.equals("useFLCompensation")) {
			this.useFLCompensation = val.startsWith("Y");
		} else if (name.equals("useLinearityCheck")) {
			this.useLinearityCheck = val.startsWith("Y");
		} else if (name.equals("linearPeak1")) {
			this.linearPeak1 = val;
		} else if (name.equals("linearPeak2")) {
			this.linearPeak2 = val;
		} else if (name.equals("linearPeak3")) {
			this.linearPeak3 = val;
		} else if (name.equals("maxLinearityError")) {
			this.maxLinearityError = Double.parseDouble(val);
		} else if (name.equals("usePowerExpression")) {
			this.usePowerExpression = val.startsWith("Y");
		} else if (name.equals("basePeak")) {
			this.basePeak = val;
		} else {
			throw new IllegalArgumentException("Illegal prop line: " + pl);
		}
	}
	
	public boolean writeFactorial(String fileName) throws IOException {
		PrintWriter out = null;
		try {
			out = new PrintWriter(fileName);			
			for (Peak p : v) {
				// packing PE
				out.printf("%9.2f\t", p.size);
				MyUtils.printDoubleValue(out, p.powerExpr);
				out.printf("\t%s\n", p.name);

			}
			List<String> propl = getPropsList();
			for (String s : propl) {
				out.println(s);
			}
			return true;
        } finally {
            if (out != null) {
                out.close();
            }
        }
	}
	
	List<String> getPropsList() {
		List<String> ls = new ArrayList<String>();
		ls.add("factorialName=" + "factorialName");
		ls.add("firstPeak=" + firstPeak);
		ls.add("lastPeak=" + lastPeak);
		ls.add("maxFLRatioError=" + maxFLRatioError);		
		ls.add("useFLCompensation=" + (useFLCompensation ? 'Y' : 'N'));	
		ls.add("useLinearityCheck=" + (useLinearityCheck ? 'Y' : 'N'));	
		ls.add("linearPeak1=" + linearPeak1);		
		ls.add("linearPeak2=" + linearPeak2);		
		ls.add("linearPeak3=" + linearPeak3);		
		ls.add("maxLinearityError=" + maxLinearityError);	
		ls.add("usePowerExpression=" + (usePowerExpression ? 'Y' : 'N'));	
		ls.add("basePeak=" + basePeak);			

		return ls;
	}

	void parseProperties(List<String> ls) {
		for (String s : ls) {
			parsePropLine(s);
		}		
	}
}
