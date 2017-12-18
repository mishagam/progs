package mis.olf.graph.gui;

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
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.JToolBar;
import javax.swing.UIManager;

import mis.olf.data.CommonValues;


public class OfMainFrame extends JFrame {

	static final long serialVersionUID = 9878883006L;

    static OfMainFrame mainFrame;

    FieldFrame activeFsaFrame = null;
    List<FieldFrame> fsaFrames = new ArrayList<FieldFrame>();
    CommonValues comv = CommonValues.getInstance();    
    public static final String PROGRAM_NAME = "JCompGraph";    
    final int MAIN_FRAME_SX = 600;
    final int MAIN_FRAME_SY = 500;
    JMenuItem compareMenuItem = null;
    JLabel versionFactLabel = null;    
    private static final boolean USE_MAINFRAME_TOOLBAR = false;

    private static final String PROPS_FILENAME = "OlgaFields.properties";
    

    public static OfMainFrame getInstance() {
        return mainFrame;
    }

    public Dimension getMinimumSize() {
        return new Dimension(MAIN_FRAME_SX, MAIN_FRAME_SY);
    }

    public Dimension getPreferredSize() {
        return new Dimension(MAIN_FRAME_SX, MAIN_FRAME_SY);
    }  
    
    private void setVersionFactName() {
    	StringBuilder sb = new StringBuilder();
        sb.append("<html><body bgcolor=white><table cellpadding=2><tr><td height=100><h2>Draw Fields</h2></td></tr>");
 		sb.append("<tr><td  height=100 align=center valign=bottom><font color=green size=+1>You are using version:</font></td></tr>");
		sb.append("<tr><td  height=100 align=center valign=top><font color=rgb(160,30,160) size=+2><b>");
		sb.append(comv.version + "</b></font></td></tr>\n");
		sb.append("<tr><td><b> ExprX: " + comv.exprX + "</b></td></tr>\n");
		sb.append("<tr><td><b> ExprY: " + comv.exprY + "</b></td></tr>\n");
		sb.append("<tr><td><b> ExprZ: " + comv.exprZ + "</b></td></tr>\n");
		sb.append("</table></body></html>");
		if (versionFactLabel != null) {
			versionFactLabel.setText(sb.toString());
		}
    }

    private void addMenu() {
        JMenuBar menuBar = new JMenuBar();

        // Start comparison
        JMenuItem menuItem = new JMenuItem("DrawGRaph", KeyEvent.VK_A);
        menuItem.setToolTipText("Compare Files and show graphs");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mainFrame.startCompare();
            }
        });
        menuBar.add(menuItem);

        // exit saving configuration
        menuItem = new JMenuItem("Exit", KeyEvent.VK_F4);
        menuItem.setToolTipText("Exit program saving configuration");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mainFrame.exitProgram();
            }
        });
        menuBar.add(menuItem);
        this.setJMenuBar(menuBar);
    }

    void quit() {
        System.exit(0);
    }
    
    void startCompare() {
    	try {
    		FieldFrame cFrame = 
    				new FieldFrame(comv.exprX, comv.exprY, comv.exprZ);
            cFrame.pack();
            cFrame.setVisible(true);
    	} catch (IOException ioe) {
    		ioe.printStackTrace();
    	}    	
    }
    
    public void onCompWindowClose(FieldFrame compFrame) {
    	fsaFrames.remove(compFrame);
    }
    
    public void onCompWindowOpen(FieldFrame compFrame) {
    	activeFsaFrame = compFrame;
    	if (!fsaFrames.contains(compFrame)) {
        	fsaFrames.add(compFrame);
    	}
    }

    private void addToolbar() {
    	if (!USE_MAINFRAME_TOOLBAR) {
    		return;
    	}
    }

    public OfMainFrame(String title) {
        super(title);
        mainFrame = this;

        // add menu
        addMenu();

        // add toolbar
        addToolbar();
        
        // reading configuration
        comv = CommonValues.getInstance();
        readProperties();
        
        // set name and version
        versionFactLabel = new JLabel();
        setVersionFactName();
        JPanel panel = new JPanel(new BorderLayout());
        mainFrame.getContentPane().add(panel, BorderLayout.CENTER);   
        panel.setAlignmentX(CENTER_ALIGNMENT);
        //panel.se
        panel.add(versionFactLabel, BorderLayout.CENTER);        

    }

    void exitProgram() {
    	saveProperties();
        System.out.println("Exit Program");
        System.exit(0);
    }

    /**
     * reading common values and other properties from 'JAttaGraph.properties'
     * file.
     */
    public void readProperties() {
        Properties props = new Properties();
        String home = System.getProperty("user.home");
        String fileName = home + "/" + PROPS_FILENAME;
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
//       (new PreferencesFilesPage()).init();
    }

    public void saveProperties() {
    	// changing label 
        setVersionFactName();
    	// saving text
        Properties props = new Properties();
        String home = System.getProperty("user.home");
        String fileName = home + "/" + PROPS_FILENAME;
        comv.comvToProps(props);
        try {
            OutputStream stream = new BufferedOutputStream(
                    new FileOutputStream(fileName));
            props.store(stream, "JCompGraph common values");
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
        OfMainFrame frame = new OfMainFrame(PROGRAM_NAME);
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
