package atta.graph.gui;

import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.io.File;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import atta.graph.data.CommonValues;
import atta.graph.data.PeakSet;

public class PreferencesFilesPage extends JPanel {

	static final long serialVersionUID = 9876543008L;

    JTextField namedPeaksFilenameText = null;
    JComboBox selectFactorial = null;
    JButton browseFactorialBtn = null;
    JButton browseRedPeaksBtn = null;
    JTextField numberNamedPeaksText = null;
    JTextField numberRedPeaksText = null;
    int numRedPeaks = 0;
    int numFactPeaks = 0;
    
    CommonValues comv = CommonValues.getInstance();   
    public static String []factNames = new String[]{"Factorial_30A", "Factorial_30B", 
    	"Factorial_30C", "Factorial_30D", "Factorial_30E", "Factorial_30F"};    
    
    public PreferencesFilesPage() {
    }
    
    public void start() {
        setLayout(new GridLayout(7,1));
        Dimension numberSize = new Dimension(26, 22);        
        
        JPanel panel = new JPanel(new FlowLayout(FlowLayout.LEFT));        
        add(new JLabel("Select Factorial"));
        selectFactorial = new JComboBox(factNames);
        selectFactorial.setSelectedItem(comv.factorialVersion);
        selectFactorial.addItemListener(new ItemListener() {
			public void itemStateChanged(ItemEvent e) {
				onFactorialSelect();
			}
        });
        panel.add(selectFactorial);
        this.add(panel);
        
        panel = new JPanel(new FlowLayout(FlowLayout.LEFT));        
        panel.add(new JLabel("Number of factorial peaks"));
        numberNamedPeaksText = new JTextField("   ");
        numberNamedPeaksText.setPreferredSize(numberSize);
        panel.add(numberNamedPeaksText);
        this.add(panel);
        
        panel = new JPanel(new FlowLayout(FlowLayout.LEFT));        
        panel.add(new JLabel("Number of Red peaks"));
        numberRedPeaksText = new JTextField("   ");
        numberRedPeaksText.setPreferredSize(numberSize);
        panel.add(numberRedPeaksText);
        this.add(panel);
        
        // initialize factorials
        init();
        numberNamedPeaksText.setText("" + numFactPeaks);
        numberRedPeaksText.setText("" + numRedPeaks);
    }
    
    public void init() {
    	readRedPeaks();
    	doSelectedFactorial();    	
    }
     
    void readRedPeaks() {
        String fileName = comv.redPeaksFileName;

        //redPeaksFilenameText.setText(fileName);
        PeakSet peaks = new PeakSet();
        boolean bret = peaks.readNamedPeaks(fileName);
        int num = 0;
        if (!bret) {
        	String redUrl = MyGuiUtils.ATTA_URL + "RedPeakNames.txt";
        	MyGuiUtils.copyWebFile(redUrl, new File(fileName), false);
        	bret = peaks.readNamedPeaks(fileName);
        }
        if (!bret) {        	
            JOptionPane.showMessageDialog(null, "Opening Red Peaks File failed");
        } else {
            num = peaks.size();
        }
        numRedPeaks = num;
    }
    
    void onFactorialSelect() {
    	//
    	comv.factorialVersion = (String)selectFactorial.getSelectedItem();
    	doSelectedFactorial();
        numberNamedPeaksText.setText("" + numFactPeaks);
    }
    
    void doSelectedFactorial() {
    	numFactPeaks = MyGuiUtils.copyFactorialToLocalFile();
    	
    }
    
    public void onOk() {
        comv.redPeaks.readNamedPeaks(comv.redPeaksFileName);
        MainFrame.getInstance().saveProperties();
    }
    
    public void onReset() {
        onOk();
    }
}
