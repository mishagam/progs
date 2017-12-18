package atta.graph.gui;

import java.awt.GridLayout;

import javax.swing.JCheckBox;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import atta.graph.data.CommonValues;

public class PreferencesGeneralPage extends JPanel {
 
	static final long serialVersionUID = 9876543009L;

    JTextField peaksSpanText;
    JTextField maxInterpeakText;
    JTextField maxPeakHeightText;
    JTextField minPeaksWidText;
    JCheckBox showUnamedPeaksBox;
    JCheckBox substractBaselineBox;
    JTextField defaultThresholdText;
    JTextField redPeaksThresholdText;
    JTextField defaultMinPeakSizeText;
    JTextField defaultMaxPeakSizeText;
    
    CommonValues comv = CommonValues.getInstance();    
    
    public PreferencesGeneralPage() {
        setLayout(new GridLayout(10,2));
        
        add(new JLabel("Estimated Peaks Span"));
        peaksSpanText = new JTextField("" + comv.peaksSpan);
        peaksSpanText.setSize(100, 20);
        add(peaksSpanText);
        
        add(new JLabel("Maximum Interpeak Interval size"));
        maxInterpeakText = new JTextField("" + comv.interPeaksInterval);
        add(maxInterpeakText);
        
        add(new JLabel("Maximum Peak Height"));
        maxPeakHeightText = new JTextField("" + comv.maxPeakHeight);
        add(maxPeakHeightText);
        
        add(new JLabel("Minimum Peak Width"));
        minPeaksWidText = new JTextField("" + comv.minPeakWidth);
        add(minPeaksWidText);
        
        add(new JLabel("Show Unnamed Peaks"));
        showUnamedPeaksBox = new JCheckBox("", comv.showUnnamedPeaks);
        add(showUnamedPeaksBox);
        
        add(new JLabel("Substract Baseline"));
        substractBaselineBox = new JCheckBox("", comv.substractBaseline);
        add(substractBaselineBox);
        
        add(new JLabel("Default Threshold"));
        defaultThresholdText = new JTextField("" + comv.defaultThreshold);
        add(defaultThresholdText);
        
        add(new JLabel("Red Peaks Threshold"));
        redPeaksThresholdText = new JTextField("" + comv.redPeaksThreshold);
        add(redPeaksThresholdText);
        
        add(new JLabel("Default Min Peak Size"));
        defaultMinPeakSizeText = new JTextField("" + comv.defaultMinSize);
        add(defaultMinPeakSizeText);
        
        add(new JLabel("Default Max Peak Size"));
        defaultMaxPeakSizeText = new JTextField("" + comv.defaultMaxSize);
        add(defaultMaxPeakSizeText);
    }
    
    /**
     * copying values from constrols to comv
     *
     */
    public void onOk() {
        comv.peaksSpan = Double.parseDouble(peaksSpanText.getText());
        comv.interPeaksInterval = Integer.parseInt(maxInterpeakText.getText());
        comv.maxPeakHeight = Integer.parseInt(maxPeakHeightText.getText());
        comv.minPeakWidth = Integer.parseInt(minPeaksWidText.getText());
        comv.showUnnamedPeaks = showUnamedPeaksBox.isSelected();
        comv.substractBaseline = substractBaselineBox.isSelected();
        comv.defaultThreshold = Integer.parseInt(defaultThresholdText.getText());
        comv.redPeaksThreshold = Integer.parseInt(redPeaksThresholdText.getText());
        comv.defaultMinSize = Double.parseDouble(defaultMinPeakSizeText.getText());
        comv.defaultMaxSize = Double.parseDouble(defaultMaxPeakSizeText.getText());
    }
    
    /**
     * copying values from constrols to comv
     *
     */
    public void onReset() {
        comv.init();
    }

}
