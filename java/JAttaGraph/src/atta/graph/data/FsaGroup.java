package atta.graph.data;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JFrame;

import atta.graph.gui.MyGuiUtils;

public class FsaGroup extends FileGroup {
    
    /** Use peaks Power Expression in calculation average data */
    public static final int USE_POWER_EXPRESSION = 0;
    
    /** Use peaks Relative Height in calculation average data */
    public static final int USE_RELATIVE_HEIGHT = 1;    
    
    String title = "";    
    /** number of peaks */
    int np = 0;  // numb
    double threshold = 0.0;  
    double []data = new double[0];
    String []names = new String[0];
    JFrame myFrame = null;
    
    CommonValues comv = CommonValues.getInstance();
    
    public FsaGroup(JFrame parFrame) {
    	myFrame = parFrame;
    }
  
    public void writeGroup(File file) {
        PrintWriter writer = null;
        NumberFormat format = NumberFormat.getInstance();
        format.setMaximumFractionDigits(2);        
        try {
            writer = new PrintWriter(new BufferedWriter(new FileWriter(file)));
            writer.println(title);
            writer.println(np + "\t" + threshold);
            for (int i = 0; i < np; i++) {
                double p = data[i];
                if (p >= 0) {
                    writer.println(format.format(p) + "\t" + names[i]);
                } else {
                    writer.println("ND\t" + names[i]);
                }
            }
        } catch (Exception e) {
            MyGuiUtils.MyError(myFrame, "write group failed: " + e);            
        } finally {
            writer.close();
        }
    }
    
    public String []getLines() {
        List<String> lines = new ArrayList<String>();
        lines.add(title);
        for (int i=0; i<np; i++) {
            lines.add(names[i] + "\t" + data[i]);
        }
        return (String[])lines.toArray(new String[0]);        
    }
    
    /**
     * calculate 
     *
     */
    public void calculateAverageData(int whatUse) {
        int na = 0;
        boolean []colors = new boolean[] {true, false, false, false};
        this.title = "group";
        boolean oldShowUnnamedPeaks = comv.showUnnamedPeaks;   
        comv.showUnnamedPeaks = false;
        try {
            for (na = 0; na < files.length; na++) {
                FsaData fsa = new FsaData();
                if (fdata != null) {
                    fsa.minPeakSize = fdata.minPeakSize;
                    fsa.maxPeakSize = fdata.maxPeakSize;
                    fsa.threshold = fdata.threshold;
                } else {
                    fsa.minPeakSize = fdata.minPeakSize;
                    fsa.maxPeakSize = fdata.maxPeakSize;
                    fsa.threshold = fdata.threshold;
                }
                
                title += "\t" + files[na].getName();
                fsa.readFsaData(files[na].getPath());
                fsa.preparePeaks(colors, true);
                if (na == 0) {
                    // first file                    
                    names = fsa.getPeaksNames();
                    np = names.length;
                    data = fsa.getPeakValues();
                } else {
                    double []dt = fsa.getPeakValues();
                    for (int i=0; i<np; i++) {
                        data[i] += dt[i];                        
                    }
                }
            }
            // counting average values
            for (int i=0; i<np; i++) {
                data[i] *= (1.0 / np);
            }
        } catch (Exception e) {
            MyUtils.MyMessage("Counting average data failed " + e.getMessage());
        } finally {
            comv.showUnnamedPeaks = oldShowUnnamedPeaks;
        }
    }
}
