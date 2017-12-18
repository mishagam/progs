package atta.graph.data;

import java.io.IOException;

import javax.swing.JFrame;

public class CalibrateGroup extends FsaGroup {
	Factorial fact;
	public Factorial calFact; 
	CommonValues comv = CommonValues.getInstance();  
	
	public CalibrateGroup(JFrame parFrame, Factorial fa) {
		super(parFrame);
		fact = fa;
		calFact = fact.copy();
	}
	
	public boolean calibratePeaks() {
		boolean []colors = new boolean[]{true, false, false, false};
        boolean oldShowUnnamedPeaks = comv.showUnnamedPeaks;   
        comv.showUnnamedPeaks = false;
        int numPeaks = fact.size();
        double []data = new double[numPeaks];
        try {
            for (int na = 0; na < files.length; na++) {
                FsaData fsa = new FsaData();
                if (fdata != null) {
                    fsa.minPeakSize = fdata.minPeakSize;
                    fsa.maxPeakSize = fdata.maxPeakSize;
                    fsa.threshold = fdata.threshold;
                } else {
                	fsa.minPeakSize = comv.defaultMinSize;
                	fsa.maxPeakSize = comv.defaultMaxSize;
                	fsa.threshold = comv.defaultThreshold;
                }
            	fsa.setFact(fact);
                fsa.readFsaData(files[na].getPath());
                fsa.preparePeaks(colors, true);
                if (numPeaks != fsa.peaks.size()) {
                	MyUtils.MyMessage("Number of peaks in fact = " + numPeaks +
                			"\nnot equal number of peaks in Fsa File = " + fsa.peaks.size());
                	return false;
                }
              	for (int i=0; i<numPeaks; i++) {
               		data[i] += fsa.peaks.getPeak(i).size;
               	}
            }
            // counting average values
            for (int i=0; i<numPeaks; i++) {
                data[i] *= (1.0 / files.length);
                calFact.getPeak(i).size = data[i];
            }
        } catch (Exception e) {
            MyUtils.MyMessage("Counting average data failed " + e.getMessage());
        } finally {
            comv.showUnnamedPeaks = oldShowUnnamedPeaks;
        }
		
		return true;		
	}
	
	public void writeFactorial(String fileName) throws IOException {
		calFact.writeFactorial(fileName);		
	}
	
	public Factorial getCalibratedFact() {
		return calFact;
	}
}
