package atta.graph.gui;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JToolBar;
import javax.swing.UIManager;
import javax.swing.filechooser.FileFilter;

import atta.graph.data.CommonValues;
import atta.graph.data.Factorial;
import atta.graph.data.FsaData;

public class MainFrame extends JFrame {

	static final long serialVersionUID = 9876543006L;
    /** in demo version we have only one FSA file and only one factorial */
	
    public static final boolean DEMO_VERSION = false;
    public static final boolean BASIC_VERSION = true || DEMO_VERSION;

    static MainFrame mainFrame;

    AttaGraphFrame activeFsaFrame = null;
    List<AttaGraphFrame> fsaFrames = new ArrayList<AttaGraphFrame>();
    CommonValues comv = CommonValues.getInstance();    
    public static final String VERSION = "1.5.0";
    public static final String PROGRAM_NAME = 
    	 (DEMO_VERSION ? "JAttaGraphDemo" : "JAttaGraph");    
    final int MAIN_FRAME_SX = 490 + 220;
    final int MAIN_FRAME_SY = 538;
    JMenuItem factOpenMenuItem = null;
    JMenuItem factEditMenuItem = null;
    JMenuItem factSaveMenuItem = null;
    JMenuItem calibrateMenuItem = null;
    JLabel versionFactLabel = null;    
    private static final boolean USE_MAINFRAME_TOOLBAR = false;
    PreferencesFilesPage prefFilesPage = null;
    

    public static MainFrame getInstance() {
        return mainFrame;
    }

    public Dimension getMinimumSize() {
        return new Dimension(MAIN_FRAME_SX, MAIN_FRAME_SY);
    }

    public Dimension getPreferredSize() {
        return new Dimension(MAIN_FRAME_SX, MAIN_FRAME_SY);
    }  
    
    private String getVersionFactName() {
    	StringBuilder sb = new StringBuilder();
        sb.append("<html><body bgcolor=white><table border=0 cellpadding=0><tr><td><img src=\"http://www.mishagam.com/pictures/radar2.png\">");
        sb.append("</td><td>\n");
        sb.append("<table cellpadding=2><tr><td height=100><img src=\"http://www.mishagam.com/pictures/logo.jpg\"></td></tr>");
 		sb.append("<tr><td  height=100 align=center valign=bottom><font color=green size=+1>You are using:</font></td></tr>");
		sb.append("<tr><td  height=100 align=center valign=top><font color=rgb(160,30,160) size=+2><b>" + comv.factorialVersion + "</b></font></td></tr>\n");
		sb.append("<tr><td  height=100 align=center>ATTAGRAPH Reader");
		sb.append(DEMO_VERSION ? "Demo " : " ");
		sb.append("v. " + VERSION + " @2008</td></tr>"); 
		sb.append("</table>");
		sb.append("</td></tr></table>");
		sb.append("</body></html>");
        return sb.toString();
    }

    private void addMenu() {
        JMenuBar menuBar = new JMenuBar();
        JMenu menu;
        JMenuItem menuItem;
        menu = new JMenu("File");
        menu.setMnemonic(KeyEvent.VK_F);
        menu.getAccessibleContext().setAccessibleDescription("File Menu");
        menuBar.add(menu);

        // Open menu item
        menuItem = new JMenuItem("Open", KeyEvent.VK_O);
        menuItem.setToolTipText("Open FSA File and show graphics");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mainFrame.openFsaFile();
            }
        });
        menu.add(menuItem);

        // Open menu item
        menuItem = new JMenuItem("Save", KeyEvent.VK_S);
        menuItem.setToolTipText("Save Graph as ATG File");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mainFrame.saveAtgFile();
            }
        });
        menuItem.setEnabled(!DEMO_VERSION);
        menu.add(menuItem);

        // Preferences menu item
        menuItem = new JMenuItem("Preferences", KeyEvent.VK_P);
        menuItem.setToolTipText("Open preferences dialog");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mainFrame.preferencesPressed();
            }
        });
        menu.add(menuItem);
        menu.addSeparator();

        // Exit menu item
        menuItem = new JMenuItem("Exit", KeyEvent.VK_X);
        menuItem.setToolTipText("Quit program");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mainFrame.quit();
            }
        });
        menu.add(menuItem);
        menuBar.add(menu);
        
        // factorial part menu. adding to factorail menu
        JMenu factMenu = new JMenu("Calibration");
        if (!BASIC_VERSION && !DEMO_VERSION) {
	        factOpenMenuItem = new JMenuItem("Open Factorial");
	        factOpenMenuItem.setToolTipText("Open factorial file");
	        factOpenMenuItem.setEnabled(false);
	        factOpenMenuItem.addActionListener(new ActionListener() {
	            public void actionPerformed(ActionEvent ae) {
	                mainFrame.openFactorial();
	            }
	        });
	        factMenu.add(factOpenMenuItem);
        }

        factEditMenuItem = new JMenuItem("Edit Factorial");
        factEditMenuItem.setToolTipText("Edit factorial");
        factEditMenuItem.setEnabled(false);
        factEditMenuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mainFrame.editFactorial();
            }
        });
        factMenu.add(factEditMenuItem);
        
        // Calibrate
        calibrateMenuItem = new JMenuItem("Calibrate Factorial");
        calibrateMenuItem.setToolTipText("Select several files and calibrate factorial");
        calibrateMenuItem.setEnabled(false);
        calibrateMenuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
            	calibratePressed();
            }
        });
        factMenu.add(calibrateMenuItem);


        if (!BASIC_VERSION) {
            factSaveMenuItem = new JMenuItem("Save Factorial");
            factSaveMenuItem.setToolTipText("Save factorial with changed settings");
            factSaveMenuItem.setEnabled(false);
            factSaveMenuItem.addActionListener(new ActionListener() {
                public void actionPerformed(ActionEvent ae) {
                    mainFrame.saveFactorial();
                }
            });
            factMenu.add(factSaveMenuItem);
        }
        menuBar.add(factMenu);

        // adding groups menu
        if (!BASIC_VERSION) {
            JMenu groupsMenu = new JMenu("Groups");
            groupsMenu.setMnemonic(KeyEvent.VK_G);
            groupsMenu.getAccessibleContext().setAccessibleDescription(
                    "Groups Menu");

            // create group
            menuItem = new JMenuItem("Create Group");
            menuItem.setToolTipText("Open create group dialog");
            menuItem.addActionListener(new ActionListener() {
                public void actionPerformed(ActionEvent ae) {
                    mainFrame.createGroupPressed();
                }
            });
            groupsMenu.add(menuItem);

            // compare groups
            menuItem = new JMenuItem("Compare groups");
            menuItem.setToolTipText("Open Compare groups dialog");
            menuItem.addActionListener(new ActionListener() {
                public void actionPerformed(ActionEvent ae) {
                    mainFrame.compareGroupsPressed();
                }
            });
            groupsMenu.add(menuItem);
            menuBar.add(groupsMenu);
        }

        // adding batches menu
//        JMenu opMenu = new JMenu("Operations");
//        //batchMenu.setMnemonic(KeyEvent.VK_B);
//        opMenu.getAccessibleContext().setAccessibleDescription(
//                "Operations");
//        menuBar.add(opMenu);
        
        if (!BASIC_VERSION) {
        	// batch menu items
            // open batch        
            menuItem = new JMenuItem("Open Batch");
            menuItem.setToolTipText("Open Batch of FSA files");
            menuItem.addActionListener(new ActionListener() {
                public void actionPerformed(ActionEvent ae) {
                    mainFrame.openBatchPressed();
                }
            });
            //opMenu.add(menuItem);

            // upload batch to web
            menuItem = new JMenuItem("Upload Batch to Web");
            menuItem.setToolTipText("Upload Batch of FSA files to Web part");
            menuItem.addActionListener(new ActionListener() {
                public void actionPerformed(ActionEvent ae) {
                    mainFrame.uploadToWebPressed();
                }
            });
            //opMenu.add(menuItem);
            menu.addSeparator();
        }


        this.setJMenuBar(menuBar);
    }

    void preferencesPressed() {
        PreferencesDialog.startPreferencesDialog(this);
    }

    void quit() {
        System.exit(0);
    }

    void createGroupPressed() {
        CreateGroupDialog dlg = new CreateGroupDialog();
        dlg.pack();
        dlg.setVisible(true);
    }

    void compareGroupsPressed() {
        CompareGroupsDialog dlg = new CompareGroupsDialog();
        dlg.pack();
        dlg.setVisible(true);
    }

    void openBatchPressed() {
        // TODO
    }

    void uploadToWebPressed() {
        // TODO
    }

    void calibratePressed() {
        FsaData fdata = activeFsaFrame.fdata;
        Factorial fact = fdata.getFact();
        CalibrateDialog dlg = new CalibrateDialog(this, fact);
        dlg.pack();
        dlg.setVisible(true);
    }
    
    void openFactorial() {
        System.out.println("Open factorial pressed");
        if (activeFsaFrame == null) {
        	System.out.println("Cannot edit factorial without active FSA view");
        	return;
        }
        FsaData fdata = activeFsaFrame.fdata;
        JFileChooser chooser = new JFileChooser();
        if (comv.currentFolder != null) {
            chooser.setCurrentDirectory(new File(comv.currentFolder));
        } else {
            comv.currentFolder = System.getProperty("user.home");
            System.out.println("user.home = " + comv.currentFolder);
        }
        int returnVal = chooser.showOpenDialog(null);
        if (returnVal != JFileChooser.APPROVE_OPTION) {
            System.out.println("File not opened");
            return;
        }
        comv.currentFolder = chooser.getCurrentDirectory().getPath();
        saveProperties();
        System.out.println("last folder set to = " + comv.currentFolder);
        String fileName = chooser.getSelectedFile().getPath();
        try {
        	Factorial fact = new Factorial();
        	if (fact.readFactorial(fileName)) {
        		fdata.setFact(fact);
        	}
        } catch (IOException ioe) {
            JOptionPane.showMessageDialog(mainFrame, "Opening Factorial File failed "
                    + ioe.getMessage());
        }
    }
    
    public void onFsaWindowClose(AttaGraphFrame fsaFrame) {
    	fsaFrames.remove(fsaFrame);
    	if (fsaFrames.size() > 0) {
    		activeFsaFrame = fsaFrames.get(0);
    	} else {
    		if (!BASIC_VERSION) {
                factOpenMenuItem.setEnabled(false);
                factSaveMenuItem.setEnabled(false);
    		}
            factEditMenuItem.setEnabled(false);
            calibrateMenuItem.setEnabled(false);
    		activeFsaFrame = null;
    	}    	
    }
    
    public void onFsaWindowOpen(AttaGraphFrame fsaFrame) {
    	activeFsaFrame = fsaFrame;
    	if (!fsaFrames.contains(fsaFrame)) {
        	fsaFrames.add(fsaFrame);
        	if (!DEMO_VERSION) {
	        	if (!BASIC_VERSION) {
	                factOpenMenuItem.setEnabled(true);
	                factSaveMenuItem.setEnabled(true);
	        	}
	            factEditMenuItem.setEnabled(true);
	            calibrateMenuItem.setEnabled(true);
        	}
    	}
    }
    
    void editFactorial() {
        if (activeFsaFrame == null) {
        	System.out.println("Cannot edit factorial without active FSA view");
        	return;
        }
        FsaData fdata = activeFsaFrame.fdata;
        Factorial fact = fdata.getFact();
    	EditFactorialDialog.startFactorialDialog(this, fact);
    }
    
    void saveFactorial() {
    	if (DEMO_VERSION) {
    		return;
    	}
        System.out.println("Save factorial pressed");
        if (activeFsaFrame == null) {
        	System.out.println("Cannot save factorial without active FSA view");
        	return;
        }
        FsaData fdata = activeFsaFrame.fdata;
        JFileChooser chooser = new JFileChooser();
        if (comv.currentFolder != null) {
            chooser.setCurrentDirectory(new File(comv.currentFolder));
        } else {
            comv.currentFolder = System.getProperty("user.home");
            System.out.println("user.home = " + comv.currentFolder);
        }
        int returnVal = chooser.showSaveDialog(null);
        if (returnVal != JFileChooser.APPROVE_OPTION) {
            System.out.println("File not opened");
            return;
        }
        if (!comv.currentFolder.equals(chooser.getCurrentDirectory().getPath())) {
	        comv.currentFolder = chooser.getCurrentDirectory().getPath();
	        saveProperties();
	        System.out.println("last folder set to = " + comv.currentFolder);
        }
        String fileName = chooser.getSelectedFile().getPath();
        try {
            Factorial fact = fdata.getFact();
        	fact.writeFactorial(fileName);
        } catch (IOException ioe) {
            JOptionPane.showMessageDialog(mainFrame, "Opening Factorial File failed "
                    + ioe.getMessage());
        }
    }
    
    void saveAtgFile() {
    	if (DEMO_VERSION) {
    		return;
    	}
        System.out.println("Save factorial pressed");
        if (activeFsaFrame == null) {
        	System.out.println("Cannot save ATG without active FSA view");
        	return;
        }
        FsaData fdata = activeFsaFrame.fdata;
        JFileChooser chooser = new JFileChooser();
        FileFilter atgFilter = new FileFilter() {
            public boolean accept(File f) {
                if (f.isDirectory()) {
                    return true;
                }
                String name = f.getName().toUpperCase();
                return name.endsWith(".ATG");
            }

            public String getDescription() {
                return "ATG Files";
            }

        };
        FileFilter csvFilter = new FileFilter() {
            public boolean accept(File f) {
                if (f.isDirectory()) {
                    return true;
                }
                String name = f.getName().toUpperCase();
                return name.endsWith(".CSV");
            }

            public String getDescription() {
                return "CSV Files";
            }

        };
        chooser.addChoosableFileFilter(csvFilter);
        chooser.addChoosableFileFilter(atgFilter);
        if (comv.currentFolder != null) {
            chooser.setCurrentDirectory(new File(comv.currentFolder));
        } else {
            comv.currentFolder = System.getProperty("user.home");
            System.out.println("user.home = " + comv.currentFolder);
        }
        int returnVal = chooser.showSaveDialog(null);
        if (returnVal != JFileChooser.APPROVE_OPTION) {
            System.out.println("File not opened");
            return;
        }
        if (!comv.currentFolder.equals(chooser.getCurrentDirectory().getPath())) {
	        comv.currentFolder = chooser.getCurrentDirectory().getPath();
	        saveProperties();
	        System.out.println("last folder set to = " + comv.currentFolder);
        }
        FileFilter filt = chooser.getFileFilter();
        String fileName = chooser.getSelectedFile().getPath();
        if (filt == atgFilter) {
	        if (!fileName.toLowerCase().endsWith(".atg")) {
	        	fileName = fileName + ".atg";
	        }
        } else if (filt == csvFilter) {
	        if (!fileName.toLowerCase().endsWith(".csv")) {
	        	fileName = fileName + ".csv";
	        }
        }
        try {
        	if (fileName.toLowerCase().endsWith(".atg")) {
        		fdata.writeFsaDataAtg(fileName);
        	} else if (fileName.toLowerCase().endsWith(".csv")) {
        		fdata.writeFsaDataCsv(fileName);
        	}
        } catch (IOException ioe) {
            JOptionPane.showMessageDialog(mainFrame, "Writing ATG File failed "
                    + ioe.getMessage());
        }
    }

    private void addToolbar() {
    	if (!USE_MAINFRAME_TOOLBAR) {
    		return;
    	}
        JToolBar toolBar = new JToolBar();

        // add open file button
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/sunicons/general/Open24.gif", "Preferences Dialog",
                toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        openFsaFile();
                    }
                }));

        // add preferences button
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/sunicons/general/Preferences24.gif",
                "Preferences Dialog", toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        preferencesPressed();
                    }
                }));

        // add create group button
        if (!BASIC_VERSION) {
	        toolBar.add(MyGuiUtils.createToolbarItem(
	                "/images/myicons/SumGroup.GIF", "Create Group Dialog", toolBar,
	                new ActionListener() {
	                    public void actionPerformed(ActionEvent ae) {
	                        createGroupPressed();
	                    }
	                }));
	
	        // add compare groups button
	        toolBar.add(MyGuiUtils.createToolbarItem(
	                "/images/myicons/CompareGroups.GIF", "Compare Groups Dialog",
	                toolBar, new ActionListener() {
	                    public void actionPerformed(ActionEvent ae) {
	                        compareGroupsPressed();
	                    }
	                }));
        }

        // add open batch button
//        toolBar.add(MyGuiUtils.createToolbarItem(
//                "/images/myicons/OpenBatch.GIF", "Open Batch of FSA files",
//                toolBar, new ActionListener() {
//                    public void actionPerformed(ActionEvent ae) {
//                        openBatchPressed();
//                    }
//                }));

        // add upload to web button
//        toolBar.add(MyGuiUtils.createToolbarItem("/images/myicons/WebPart.GIF",
//                "Upload batch of FSA files to Web", toolBar,
//                new ActionListener() {
//                    public void actionPerformed(ActionEvent ae) {
//                        uploadToWebPressed();
//                    }
//                }));

        // add calibrate button
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/myicons/Calibrate.GIF",
                "Calibrate factorial file using several standard FSA files",
                toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        calibratePressed();
                    }
                }));

        // toolBar.setMargin(new Insets(0,0,0,0));
        mainFrame.getContentPane().add(toolBar, BorderLayout.NORTH);
    }

    public MainFrame(String title) {
        super(title);
        mainFrame = this;

        // add menu
        addMenu();

        // add toolbar
        addToolbar();
        
        // set name and version
        String name = getVersionFactName();
        versionFactLabel = new JLabel(name);
        JPanel panel = new JPanel(new BorderLayout());
        mainFrame.getContentPane().add(panel, BorderLayout.CENTER);   
        panel.setAlignmentX(CENTER_ALIGNMENT);
        //panel.se
        panel.add(versionFactLabel, BorderLayout.CENTER);        

        comv = CommonValues.getInstance();
        readProperties();
    }

    void openFsaFile() {
        System.out.println("Open pressed");
        String fileName = "";
       	if (DEMO_VERSION) {
            String home = System.getProperty("user.home");
            fileName = home + DEFAULT_FSA_NAME;
            File file = new File(fileName);
            if (!file.exists()) {
            	String defFsaUrl = MyGuiUtils.ATTA_URL + "Default.fsa";
            	MyGuiUtils.copyWebFile(defFsaUrl, file, false);
            }
       	} else {
	        JFileChooser chooser = new JFileChooser();
	        if (comv.currentFolder != null) {
	            chooser.setCurrentDirectory(new File(comv.currentFolder));
	        } else {
	            comv.currentFolder = System.getProperty("user.home");
	            System.out.println("user.home = " + comv.currentFolder);
	        }
	        // Note: source for ExampleFileFilter can be found in FileChooserDemo,
	        // under the demo/jfc directory in the JDK.
	        FileFilter fsaFilter = new FileFilter() {
	            public boolean accept(File f) {
	                if (f.isDirectory()) {
	                    return true;
	                }
	                String name = f.getName().toUpperCase();
	                return name.endsWith(".FSA") || name.endsWith(".ATG");
	            }
	
	            public String getDescription() {
	                return "FSA or ATG Files";
	            }
	
	        };
	        chooser.setFileFilter(fsaFilter);
	        int returnVal = chooser.showOpenDialog(null);
	        if (returnVal != JFileChooser.APPROVE_OPTION) {
	            System.out.println("File not opened");
	            return;
	        }
	        comv.currentFolder = chooser.getCurrentDirectory().getPath();
	        saveProperties();
	        System.out.println("last folder set to = " + comv.currentFolder);
	        fileName = chooser.getSelectedFile().getPath();
       	}
        try {
            AttaGraphFrame fsaFrame = new AttaGraphFrame(fileName);
            fsaFrame.pack();
            fsaFrame.setVisible(true);
        } catch (IOException ioe) {
            JOptionPane.showMessageDialog(mainFrame, "Opening FSA File failed "
                    + ioe.getMessage());
        }
    }

    void exitProgram() {
    	saveProperties();
        System.out.println("Exit Program");
        System.exit(0);
    }
    
    public static final String JATTA_FOLDER = (DEMO_VERSION ? "/JAttaGraphDemo/" : "/JAttaGraph/");

    private static final String PROPS_FILENAME = JATTA_FOLDER + "JAttaGraphProps.properties";
    //private static final String FACTORIAL_FILENAME = JATTA_FOLDER + "Factorial.txt";
    private static final String RED_PEAKS_FILENAME = JATTA_FOLDER + "RedPeakNames.txt";
    private static final String DEFAULT_FSA_NAME = JATTA_FOLDER + "Default.fsa";

    /**
     * reading common values and other properties from 'JAttaGraph.properties'
     * file.
     */
    public void readProperties() {
    	createAttaFolder();
        Properties props = new Properties();
        String home = System.getProperty("user.home");
        String fileName = home + PROPS_FILENAME;
        try {
        	File propFile = new File(fileName);
        	if (propFile.exists()) {
	            InputStream stream = new BufferedInputStream(
	            		new FileInputStream(propFile));
	            props.load(stream);
	            comv.comvFromProps(props);
	            stream.close();
        	} else {
        		comv.init();
        	}
        } catch (Exception e) {
             e.printStackTrace(System.err);
        }
       comv.redPeaksFileName = home + RED_PEAKS_FILENAME;     
       (new PreferencesFilesPage()).init();
    }
    
    void createAttaFolder() {
        // ensure atta dir
        String home = System.getProperty("user.home");
        String sdir = home + JATTA_FOLDER;
        File fdir = new File(sdir);
        try {
	        if (!fdir.exists()) {
	        	fdir.mkdir();
	        }
        } catch (Exception e) {
        	MyGuiUtils.MyError(this, "Creation of JAttaGraph folder failed: " +
        			e.getMessage());
        }
    }

    public void saveProperties() {
    	// changing label 
        String name = getVersionFactName();
        versionFactLabel.setText(name);
    	// saving text
        Properties props = new Properties();
        String home = System.getProperty("user.home");
        String fileName = home + PROPS_FILENAME;
        comv.comvToProps(props);
        try {
            OutputStream stream = new BufferedOutputStream(
                    new FileOutputStream(fileName));
            props.store(stream, "JAttaGraph common values");
            stream.close();
        } catch (Exception e) {
            e.printStackTrace(System.err);
        }
    }

    /**
     * Create the GUI and show it. For thread safety, this method should be
     * invoked from the event-dispatching thread.
     */
    static void createMainFrame() {
        // Create and set up the window.
        MainFrame frame = new MainFrame(PROGRAM_NAME);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Display the window.
        frame.pack();
        frame.setVisible(true);
    }

    /**
     * @param args
     */
    public static void main(String[] args) {
        // Schedule a job for the event-dispatching thread:
        // creating and showing this application's GUI.
    	//JOptionPane.showMessageDialog(null, "MainFrame.main() started");
        try {
            // windows look and feel
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
            // Java look and feel
            //UIManager.setLookAndFeel(UIManager.getCrossPlatformLookAndFeelClassName());
            // Motif look and feel
            //UIManager.setLookAndFeel("com.sun.java.swing.plaf.motif.MotifLookAndFeel");
        } catch (Exception e) {
            System.out.println("Error setting native LAF: " + e);
        }
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createMainFrame();
            }
        });
    }

}
