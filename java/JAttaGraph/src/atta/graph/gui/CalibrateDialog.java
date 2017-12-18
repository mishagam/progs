package atta.graph.gui;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFileChooser;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

import atta.graph.data.CalibrateGroup;
import atta.graph.data.CommonValues;
import atta.graph.data.Factorial;
import atta.graph.data.MyUtils;
import atta.graph.data.Peak;

/**
 * dialog used for calibrating factorial files.
 * It should work as alredy implemented in FactorialPro.
 * You open several FSA files with this fatorial, calibrate by updating 
 * peak sizes with calculated real peak sizes and then you can write 
 * back calibrated factorial with updated peak sizes.
 * 
 * @author Misha
 *
 */
public class CalibrateDialog extends JDialog {

	static final long serialVersionUID = 9876543010L;
	final Factorial fact;
	static final String TITLE = "Calibrate Dialog";
    JTextArea peaksArea = null;   
    final JButton selectButton;
    final JButton calibrateButton;
    final JButton writeButton;
    CommonValues comv = CommonValues.getInstance();
    CalibrateGroup cgroup = null;
	
	public CalibrateDialog(MainFrame frame, Factorial fa) {
		super(frame, TITLE);
		fact = fa;
		cgroup = new CalibrateGroup(frame, fa);
        
        // topPart         
        peaksArea = new JTextArea();
        peaksArea.setText("");
        JScrollPane scrollPane = new JScrollPane(peaksArea);
        scrollPane.setPreferredSize(new Dimension(360, 300));
        this.getContentPane().add(scrollPane, BorderLayout.CENTER);
        
        // adding buttons in the bottom
        JPanel bottomPart = new JPanel();
        // add select FSA files
        selectButton = new JButton("Open Cal. Files");
        selectButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                selectFiles();
            }
        });
        bottomPart.add(selectButton);
        
        // add Calibrate button
        calibrateButton = new JButton("Calibrate");
        calibrateButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                calibrate();
            }
        });
        calibrateButton.setEnabled(false);  // till we read files
        bottomPart.add(calibrateButton);
        
        // add write fact button
        writeButton = new JButton("Save Factorial");
        writeButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                writeFact();
            }
        });
        writeButton.setEnabled(false);  // till we calibrated
        bottomPart.add(writeButton);
        
        // add close button
        JButton button = new JButton("Close");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                CalibrateDialog.this.setVisible(false);
            }
        });
        bottomPart.add(button);
        
        // adding bottomPart to control
        this.getContentPane().add(bottomPart, BorderLayout.SOUTH);
    }
    
    /**
     * calling file chooser and selecting files for group.
     */
    void selectFiles() {
        // calling file chooser
        System.out.println("Reading files for calibration");
        JFileChooser chooser = new JFileChooser();
        chooser.setCurrentDirectory(new File(comv.currentFolder));
        chooser.setMultiSelectionEnabled(true);
        int returnVal = chooser.showOpenDialog(this);
        if (returnVal != JFileChooser.APPROVE_OPTION) {
            System.out.println("No files opened for group");
            return;
        }
        String path = chooser.getCurrentDirectory().getPath();
        if (!comv.currentFolder.equals(path)) {
            comv.currentFolder = path;
            MainFrame.getInstance().saveProperties();
        }
        File []files = chooser.getSelectedFiles();
        cgroup.setFiles(files);
        StringBuilder sb = new StringBuilder();
        for (File fn : files) {
        	sb.append(fn.getPath()).append("\n");
        }
        peaksArea.setText(sb.toString());
        calibrateButton.setEnabled(true);
    }
    
    void calibrate() {
    	if (cgroup.calibratePeaks()) {
            StringBuilder sb = new StringBuilder(peaksArea.getText());
            int np = fact.size();
            Factorial cfact = cgroup.getCalibratedFact();
            for (int i=0; i<np; i++) {
            	Peak p = cfact.getPeak(i);            
            	sb.append(p.name).append("\t");
            	sb.append(fact.getPeak(i).size).append("\t");
            	sb.append(p.size).append("\n");
            }
            peaksArea.setText(sb.toString());
    		writeButton.setEnabled(true);
    	} else {
    		MyUtils.MyMessage("Calibration failed");
    	}
    }
    
    void writeFact() {
        System.out.println("Writing calibrated factorial");  
        String fileName = comv.factorialFileName;
        try {
        	cgroup.writeFactorial(fileName);
        } catch (IOException ioe) {
        	MyUtils.MyMessage("Write Factorial failed: " + ioe.getMessage());
        }
    }

}
