package atta.graph.gui;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.PrintWriter;
import java.io.StringWriter;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;

import atta.graph.data.FsaData;
import atta.graph.data.MyUtils;
import atta.graph.data.Peak;

public class CopyPeaksDialog extends JDialog {
	
	static final long serialVersionUID = 9876543004L;
    
    FsaData fdata = null;
    JLabel peaksArea = null;    
    String allText = null;
        
    private CopyPeaksDialog(AttaGraphFrame frame, String title) {
        super(frame, title);
        fdata = frame.fdata;
        
        String header = "<html><body bgcolor=white>FsaFileName: " + fdata.fsaFileName + "<br>\n" + 
        	"FactorialFileName:\t" + fdata.getFact().factorialName + "\n";
        peaksArea = new JLabel();
        allText = fdata.getTextHtmlData(frame.panel.showColors);
        allText = header + allText + "</body></html>";
        peaksArea.setText(allText);
        JScrollPane scrollPane = new JScrollPane(peaksArea);
        scrollPane.setPreferredSize(new Dimension(490, 520));
        this.getContentPane().add(scrollPane, BorderLayout.CENTER);
        
        JPanel controls = new JPanel(new FlowLayout());
        
        JButton button = new JButton("Copy all data");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                copyAllPressed();
            }
        });
        controls.add(button);
        
        button = new JButton("Copy TF activities");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                copyPePressed();
            }
        });
        controls.add(button);
        
//        button = new JButton("Copy RH");
//        button.addActionListener(new ActionListener() {
//            public void actionPerformed(ActionEvent ae) {
//                copyRhPressed();
//            }
//        });
//        controls.add(button);
        
        JButton closeButton = new JButton("Close");
        closeButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                closePressed();
            }
        });
        controls.add(closeButton);
        
        this.getContentPane().add(controls, BorderLayout.SOUTH);
        this.pack();
    }
    
    void copyAllPressed() {
        System.out.println("Copy All pressed");
        String txt = allText.replaceAll("\t\t", "\t");
        copyToClip(txt);
    }
    
    void copyToClip(String txt) {
        //peaksArea.setText(txt);
        //txt.replaceAll("\t\t", "\t");
        Toolkit kit = this.getToolkit();
        Clipboard clip = kit.getSystemClipboard();
        StringSelection sel = new StringSelection(txt); 
        clip.setContents(sel, sel);
    }
    
    void copyPePressed() {
        String header = "FsaFileName: " + fdata.fsaFileName + "\n" + 
    			"FactorialFileName:\t" + fdata.getFact().factorialName + "\n";
    	StringWriter sw = new StringWriter();
    	PrintWriter pw = new PrintWriter(sw);
    	pw.println("Specific TF Activities");
    	for (int i=0; i<fdata.peaks.size(); i++) {
    		Peak p = fdata.peaks.getPeak(i);
    		pw.print(p.name + "\t");
    		MyUtils.printDoubleValue(pw, p.powerExpr);
    		pw.println();  		
    	}
    	pw.close();
    	String peText = header + sw.toString();
    	copyToClip(peText);    	
    }
    
    void copyRhPressed() {
        String header = "FsaFileName: " + fdata.fsaFileName + "\n" + 
        		"FactorialFileName:\t" + fdata.getFact().factorialName + "\n";
    	StringWriter sw = new StringWriter();
    	PrintWriter pw = new PrintWriter(sw);
    	pw.println("Relative Height");
    	for (int i=0; i<fdata.peaks.size(); i++) {
    		Peak p = fdata.peaks.getPeak(i);
    		pw.print(p.name + "\t");
    		MyUtils.printDoubleValue(pw, p.relHeight);
    		pw.println();  		
    	}
    	pw.close();
    	String peText = header + sw.toString();
    	copyToClip(peText);    	
    }
    
    void closePressed() {
    	this.dispose();
        //this.setVisible(false);        
    }
    
    public static void callCopyPeaksDialog(AttaGraphFrame frame) {
        CopyPeaksDialog dlg = new CopyPeaksDialog(frame, "Copy Peaks");
        dlg.pack();
        dlg.setVisible(true);     
    }
    
}
