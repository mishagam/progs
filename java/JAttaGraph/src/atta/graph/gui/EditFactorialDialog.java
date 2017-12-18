package atta.graph.gui;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextField;

import atta.graph.data.CommonValues;
import atta.graph.data.Factorial;
import atta.graph.data.MyUtils;
import atta.graph.data.Peak;
import atta.graph.data.PeakTriad;

public class EditFactorialDialog extends JPanel {

	static final long serialVersionUID = 9876543007L;

    private static EditFactorialDialog dialog = null;    
    private static JDialog factDialog = null;
    Factorial fact = null;
    CommonValues comv = CommonValues.getInstance();
    
    static synchronized void startFactorialDialog(JFrame mainFrame, Factorial fact) {
        if (factDialog != null) {
            if (factDialog.isVisible()) {
                return;
            }
        } else {
        	factDialog = new JDialog(mainFrame, "Edit Factorial");
            dialog = new EditFactorialDialog();            
        }
        dialog.fact = fact;
        dialog.init();
        //Create and set up the content pane.
        dialog.setOpaque(true); //content panes must be opaque
        factDialog.getContentPane().add(dialog,
                                 BorderLayout.CENTER);
        dialog.fact = fact;

        //Display the window.
        factDialog.pack();
        factDialog.setVisible(true);
    }
    
    JTextField fpEdit = null;
    JTextField lpEdit = null;
    JTextField maxFLErrorEdit = null;
    JCheckBox flCompensateBox = null;
    JCheckBox checkLinearityBox = null;
    JComboBox linCombo1 = null;
    JComboBox linCombo2 = null;
    JComboBox linCombo3 = null;
    JTextField maxLinErrorEdit = null;
    JRadioButton usePeButton = null;
    JRadioButton useRhButton = null;
    JTextField basePeakEdit = null;
    
    void addPeakNamesItems(JComboBox cb) {
    	for (int i=0; i<fact.size(); i++) {
    		Peak p = fact.getPeak(i);
    		cb.addItem(p.name);    		
    	}  		
    }
    
    void init() {
    	if (fact == null) {
    		throw new IllegalStateException("We need valid factorial");
    	}
    	this.setLayout(new BorderLayout());
    	JPanel topPart = new JPanel();
    	topPart.setLayout(new GridLayout(0,2));
    	
    	topPart.add(new JLabel("First Peak"));
        fpEdit = new JTextField(fact.firstPeak);
        //addPeakNamesItems(fpEdit);
        topPart.add(fpEdit);
        
        topPart.add(new JLabel("Last Peak"));
        lpEdit = new JTextField(fact.lastPeak);
        topPart.add(lpEdit);
        
        topPart.add(new JLabel("Max First / Last Ratio Error"));
        maxFLErrorEdit = new JTextField("" + (fact.maxFLRatioError));
        topPart.add(maxFLErrorEdit);     
        
        topPart.add(new JLabel("Compensate for First / Last Ratio"));
        flCompensateBox = new JCheckBox("", fact.useFLCompensation);
        topPart.add(flCompensateBox);  
        
        topPart.add(new JLabel("Check for 3 Peaks Linearity"));
        checkLinearityBox = new JCheckBox("", fact.useLinearityCheck);
        topPart.add(checkLinearityBox);         
    	
        topPart.add(new JLabel("First Linear Peak"));
        linCombo1 = new JComboBox();
        addPeakNamesItems(linCombo1);
        linCombo1.setSelectedItem(fact.linearPeak1);
        topPart.add(linCombo1);
    	
        topPart.add(new JLabel("Second Linear Peak"));
        linCombo2 = new JComboBox();
        addPeakNamesItems(linCombo2);
        linCombo2.setSelectedItem(fact.linearPeak2);
        topPart.add(linCombo2);
    	
        topPart.add(new JLabel("Third Linear Peak"));
        linCombo3 = new JComboBox();
        addPeakNamesItems(linCombo3);
        linCombo3.setSelectedItem(fact.linearPeak3);
        topPart.add(linCombo3);
        
        topPart.add(new JLabel("Maximum Linearity Error"));
        maxLinErrorEdit = new JTextField("" + fact.maxLinearityError);
        topPart.add(maxLinErrorEdit);     

        topPart.add(new JLabel("Use Specific TF Activity"));
        usePeButton = new JRadioButton("");
        usePeButton.setSelected(fact.usePowerExpression);
        topPart.add(usePeButton);
        
        topPart.add(new JLabel("Use Relative Height"));
        useRhButton = new JRadioButton("");
        useRhButton.setSelected(!fact.usePowerExpression);
        topPart.add(useRhButton);
        
        ButtonGroup bg = new ButtonGroup();
        bg.add(usePeButton);
        bg.add(useRhButton);
    	
        topPart.add(new JLabel("Base Peak"));
        basePeakEdit = new JTextField(fact.basePeak);
        topPart.add(basePeakEdit);
        
        // bottom portion with buttons
        JPanel bottomPart = new JPanel();
        // add Show Attagrph button
        JButton button = new JButton("OK");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onOk();
            }
        });
        bottomPart.add(button);
        
        // add close button
        button = new JButton("Close");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onClose();
            }
        });
        bottomPart.add(button);
        
        // add reset button
        button = new JButton("Reset to Default");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onReset();
            }
        });
        bottomPart.add(button);
        
        // adding bottomPart to control
        this.add(topPart, BorderLayout.CENTER);
        this.add(bottomPart, BorderLayout.SOUTH);
    }
    
    void onOk() {
    	// copy controls values to factorial
    	String fp = fpEdit.getText().trim();
    	String lp = lpEdit.getText().trim();
    	String bp = basePeakEdit.getText().trim();
    	PeakTriad pt = new PeakTriad();
    	int bretF = pt.init(fp, fact);
    	int bretL = pt.init(lp, fact);
    	int bretB = pt.init(bp, fact);
    	if (fp.length() > 0 && bretF == 0) {
    		MyUtils.MyMessage("Illegal first peak: " + fp);
    		return;
    	}
    	if (lp.length() > 0 && bretL == 0) {
    		MyUtils.MyMessage("Illegal last peak: " + lp);
    		return;
    	}
    	if (bp.length() > 0 && bretB == 0) {
    		MyUtils.MyMessage("Illegal base peak: " + bp);
    		return;
    	}
    	fact.firstPeak = fp;
    	fact.lastPeak = lp;
    	fact.basePeak = bp;
    	fact.maxFLRatioError = Double.parseDouble(maxFLErrorEdit.getText());
    	fact.useFLCompensation = flCompensateBox.isSelected();
    	fact.useLinearityCheck = checkLinearityBox.isSelected();
    	fact.linearPeak1 = (String)linCombo1.getSelectedItem();
    	fact.linearPeak2 = (String)linCombo2.getSelectedItem();
    	fact.linearPeak3 = (String)linCombo3.getSelectedItem();
    	fact.maxLinearityError = Double.parseDouble(maxLinErrorEdit.getText());
    	fact.usePowerExpression = usePeButton.isSelected();
    	try {
    		fact.writeFactorial(comv.factorialFileName);
    	} catch (Exception e) {
    		MyUtils.MyMessage("Saving factorial failed: " + e.getMessage());
    	}
    	
    	onClose();    	
    }
    
    void onClose() {
    	factDialog.dispose();
    	dialog = null;
    	factDialog = null;
    }
    
    void onReset() {
    	fact.init();
    	try {
    		fact.writeFactorial(comv.factorialFileName);
    	} catch (Exception e) {
    		MyUtils.MyMessage("Saving factorial failed: " + e.getMessage());
    	}
    	onClose();
    }

}
