package atta.graph.data;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class PeakSet {
    String name = "";

    List<Peak> v = new ArrayList<Peak>();

    public void clear() {
        v.clear();
    }

    public void add(Peak p) {
        v.add(p);
    }

    public int size() {
        return v.size();
    }

    public boolean readNamedPeaks(String fileName) {
        BufferedReader reader = null;
        try {
        	File file = new File(fileName);
        	if (!file.exists()) {
        		return false;
        	}
            reader = new BufferedReader(new FileReader(file));
            // skip factorial name
            v.clear();
            String line = null;
            while ((line = reader.readLine()) != null) {
                String[] ss = line.split(" +");
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
                v.add(p);
            }

            return true;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    // do nothing
                }
            }
        }
        return false;
    }

    public void addAll(PeakSet b) {
        v.addAll(b.v);
    }

    void joinWithNamedPeaks(PeakSet named, double span, boolean showUnnamedPeaks) {
        int ip = 0; // index in v;
        int inp = 0; // index in named.v
        List<Peak> vout = new ArrayList<Peak>();
        Peak sentinel = new Peak();
        sentinel.size = 1000000.0;
        v.add(sentinel);
        named.add(sentinel);
        int namedSize = named.v.size();

        // TODO - to finish with last small peaks
        while (ip < (v.size() - 1) || inp < namedSize - 1) {
            Peak p = v.get(ip);
            Peak pn = named.v.get(inp);
            if (p.size < pn.size - span) {
                if (showUnnamedPeaks) {
                    vout.add(p);
                }
                ip++;
            } else if (pn.size < p.size - span) {
            	Peak pp = pn.copy();
                pp.height = 0; // empty peak
                //pn.num = 0;
                pp.powerExpr = 0;
                pp.relHeight = 0;
                pp.pos = 0;
                pp.num = pn.num;
                vout.add(pp);
                inp++;
            } else {
                p.name = pn.name;
                p.powerExpr = pn.powerExpr;
                p.num = pn.num;
                vout.add(p);
                ip++;
                inp++;
            }
        }
        named.v.remove(sentinel);
        v = vout;
    }

    /** calculating size from pos */
    double interpolateSize(int pos) {
        double size = 0;
        int mx = v.size() - 1;
        double a = (getPeak(mx).size - getPeak(0).size)
                / (getPeak(mx).pos - getPeak(0).pos);
        if (pos < getPeak(0).pos) {
            size = (getPeak(0).size * pos) / getPeak(0).pos;
        } else if (pos > getPeak(mx).pos) {
            size = getPeak(mx).size + a * (pos - getPeak(mx).pos);
        } else {
            // searching for interval where pos is
            for (int i = 0; i < mx; i++) {
                if (getPeak(i).pos <= pos && pos <= getPeak(i + 1).pos) {
                    // linear interpolation
                    a = (getPeak(i + 1).size - getPeak(i).size);
                    a /= (getPeak(i + 1).pos - getPeak(i).pos);
                    size = getPeak(i).size + a * (pos - getPeak(i).pos);
                    break;
                }
            }
        }

        return size;
    }

    public Peak getPeak(int ip) {
        if (ip < 0 || ip >= v.size()) {
            throw new IndexOutOfBoundsException("bad index " + ip);
        }

        return v.get(ip);
    }

    /**
     * Calculates relative heights of named peaks
     */
    void countRelativeHeights(double minSize, double maxSize) {
        double sum = 0;
        // calculating sum
        for (int i = 0; i < v.size(); i++) {
            Peak p = getPeak(i);
            if (p.name != "" && minSize < p.size && p.size < maxSize) {
                sum += p.height;
            }
        }
        // calculating relative heights (in percents)
        for (int i = 0; i < v.size(); i++) {
            Peak p = getPeak(i);
            if (p.name != "" && minSize < p.size && p.size < maxSize) {
                p.relHeight = (100.0 * p.height) / sum;
            }
        }
    }

    /**
     * returns names of named peaks
     */
    String[] getPeaksNames(double minSize, double maxSize) {
        List<String> names = new ArrayList<String>();
        for (int i=0; i<v.size(); i++) {
            Peak p = v.get(i);
            if (!p.name.equals("") && minSize < p.size && p.size < maxSize) {
                names.add(p.name);
            }
        }

        return (String[])names.toArray(new String[0]);
    }

	int iFromName(String name) {
		int idx = -1;
		for (int i = 0; i < size(); i++) {
			if (name.equals(getPeak(i).name)) {
				idx = i;
				break;
			}
		}
		return idx;
	}
	
	/** Calculates relative heights and PE of .
	* Replacing realtive heights with heights percentages (for named peaks only).
	*/
	void calculatePowerExpression() {
	    for (int i=0; i<v.size(); i++) {
	        Peak p = getPeak(i);
	        if (p.powerExpr > 0.000001) {
	            p.powerExpr = p.relHeight / p.powerExpr;
			} else {
				p.powerExpr = 0.0;
			}
	    }
	}


	/**
	 * Calculates relative heights and PE of .
	 * Replacing realtive heights with heights percentages (for named peaks only).
	 */ 
	int calculateRelativeHeightsPE() {
	    double []sumH = new double[4];
	    double []sumPE = new double[4];
		for (int col=0; col<4; col++) {
			sumH[col]= 0;
			sumPE[col]= 0;
		}
	    //double sumPE = 0;
	    // calculating sum
	    for (int i=0; i<(int)v.size(); i++) {
	        Peak p = getPeak(i);
	        if (p.name != "") {
	            sumH[p.color] += p.relHeight;
	            sumPE[p.color] += p.powerExpr;
	        }
	    }
	    // calculating relative heights (in percents)
	    for (int i=0; i<(int)v.size(); i++) {
	        Peak p = getPeak(i);
	        if (p.name != "") {
	            p.relHeight = (100.0 * p.height) / sumH[p.color];
	            p.powerExpr = (100.0 * p.powerExpr) / sumPE[p.color];
	        }
	    }
		return 1;
	}


}
