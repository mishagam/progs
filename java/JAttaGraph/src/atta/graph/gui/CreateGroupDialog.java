package atta.graph.gui;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;

import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFileChooser;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;

import atta.graph.data.CommonValues;
import atta.graph.data.FsaGroup;

public class CreateGroupDialog extends JDialog {

	static final long serialVersionUID = 9876543005L;

    public static final String TITLE = "Create Group Dialog"; 
    
    JTextArea groupData = null;
    JRadioButton usePeButton = null;
    JRadioButton useRhButton = null;
    
    FsaGroup group = null; 
    
    CommonValues comv = CommonValues.getInstance();
    
    public CreateGroupDialog() {
        super(MainFrame.getInstance(), TITLE);
        group = new FsaGroup(null);  // don't have good JFrame instance
        group.setFsaData(MainFrame.getInstance().activeFsaFrame.fdata);
        
        // topPart 
        JPanel topPart = new JPanel(new GridLayout(1,2));
        JPanel leftTop = new JPanel(new GridLayout(4,1));
        leftTop.add(new JLabel("Which numbers to sum for group?"));
        ButtonGroup sumGroup = new ButtonGroup();
        usePeButton = new JRadioButton("Use Power of Expression");
        usePeButton.setSelected(true);
        useRhButton = new JRadioButton("Use Relative Height");
        leftTop.add(usePeButton);
        leftTop.add(useRhButton);
        sumGroup.add(usePeButton);
        sumGroup.add(useRhButton);
        leftTop.add(new JLabel("Group Data"));
        topPart.add(leftTop);
        
        // adding read files button
        JPanel rightTop = new JPanel(new GridLayout(3,1));
        JPanel rightTopCenter = new JPanel();
        JButton button = new JButton("Read Files");
        rightTop.add(new JLabel(" "));
        rightTopCenter.add(button, BorderLayout.CENTER);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                readFiles();
            }
        });
        rightTop.add(rightTopCenter);
        topPart.add(rightTop);   
        // adding topPart to dialog
        this.getContentPane().add(topPart, BorderLayout.NORTH);
        
        // Center - Group Data
        groupData = new JTextArea(24, 40);
        this.getContentPane().add(groupData, BorderLayout.CENTER);
        
        // bottom portion with buttons
        JPanel bottomPart = new JPanel();
        // add write group button
        button = new JButton("Write Group");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                writeGroup();
            }
        });
        bottomPart.add(button);
        // add Show Attagrph button
        button = new JButton("Show AttaGraph");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                showAttaGraph();
            }
        });
        bottomPart.add(button);
        // add close button
        button = new JButton("Close");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                CreateGroupDialog.this.setVisible(false);
            }
        });
        bottomPart.add(button);
        // adding bottomPart to control
        this.getContentPane().add(bottomPart, BorderLayout.SOUTH);
    }
    
    /**
     * calling file chooser and selecting files for group.
     */
    void readFiles() {
        // calling file chooser
        System.out.println("Reading files for group");
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
        group.setFiles(files);
        int what = (usePeButton.isSelected() ? 
                FsaGroup.USE_POWER_EXPRESSION : FsaGroup.USE_RELATIVE_HEIGHT);
        group.calculateAverageData(what);
        // read results to groupData
        StringBuffer sb = new StringBuffer();
        String []lines = group.getLines();
        for (int i = 0; i < lines.length; i++) {
            sb.append(lines[i] + "\n");            
        }
        groupData.setText(sb.toString());
    }
    
    void writeGroup() {
        // calling file chooser
        System.out.println("Writing GRoup group");
        JFileChooser chooser = new JFileChooser();
        chooser.setCurrentDirectory(new File(comv.currentFolder));
        int returnVal = chooser.showSaveDialog(this);
        if (returnVal != JFileChooser.APPROVE_OPTION) {
            System.out.println("No group names selected");
            return;
        }
        String path = chooser.getCurrentDirectory().getPath();
        if (!comv.currentFolder.equals(path)) {
            comv.currentFolder = path;
            MainFrame.getInstance().saveProperties();
        }
        File file = chooser.getSelectedFile();
        group.writeGroup(file);
    }
    
    void showAttaGraph() {
        // TODO
    }
    
    

}
