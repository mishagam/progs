package mis.graph.gui;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.UIManager;

import mis.mandel.MandelModel;

public class MandelMainFrame extends JFrame {

	static final long serialVersionUID = 9878883035L;

    static MandelMainFrame mainFrame;
    public static final String PROGRAM_NAME = "JCompGraph";    
    final int MAIN_FRAME_SX = 600;
    final int MAIN_FRAME_SY = 500;
    JMenuItem compareMenuItem = null;
    JLabel versionFactLabel = null;    
    private static final boolean USE_MAINFRAME_TOOLBAR = false;
    private MandelPanel mPanel=null;

    private static final String PROPS_FILENAME = "CompGraph.properties";
    

    public static MandelMainFrame getInstance() {
        return mainFrame;
    }

    public Dimension getMinimumSize() {
        return new Dimension(MAIN_FRAME_SX, MAIN_FRAME_SY);
    }

    public Dimension getPreferredSize() {
        return new Dimension(MAIN_FRAME_SX, MAIN_FRAME_SY);
    }  

    private void addMenu() {
        JMenuBar menuBar = new JMenuBar();

        // Select File A
        JMenuItem menuItem = new JMenuItem("IncScale", KeyEvent.VK_A);
        menuItem.setToolTipText("Select A file for compare");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mPanel.changeScale(2.0);
            }
        });
        menuBar.add(menuItem);

        // Select File A
        menuItem = new JMenuItem("DecScale", KeyEvent.VK_A);
        menuItem.setToolTipText("Select A file for compare");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                mPanel.changeScale(0.5);
            }
        });
        menuBar.add(menuItem);

        // Select File B
        menuItem = new JMenuItem("ResetScale", KeyEvent.VK_B);
        menuItem.setToolTipText("Select B file for compare");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
            	mPanel.resetScales();
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

    private void addToolbar() {
    	if (!USE_MAINFRAME_TOOLBAR) {
    		return;
    	}
    }

    public MandelMainFrame(String title) {
        super(title);
        mainFrame = this;

        // add menu
        addMenu();

        // add toolbar
        addToolbar();

        // set name and version
        versionFactLabel = new JLabel();

        JPanel panel = new JPanel(new BorderLayout());
        mainFrame.getContentPane().add(panel, BorderLayout.CENTER);   
        panel.setAlignmentX(CENTER_ALIGNMENT);
        //panel.se
        MandelModel mmod = new MandelModel();
        mPanel = new MandelPanel(mmod, this);
        panel.add(mPanel, BorderLayout.CENTER);        
        // added partly using WindowsBuilder 
        JPanel lblHelloPan = new JPanel(new BorderLayout());
        JLabel lHello = new JLabel("Hello From MIIIsshhha");
        JLabel lA = new JLabel("Aa ");
        JLabel lB = new JLabel(" bB");
        lblHelloPan.add(lHello, BorderLayout.CENTER);
        lblHelloPan.add(lA, BorderLayout.WEST);
        lblHelloPan.add(lB, BorderLayout.EAST);
        panel.add(lblHelloPan, BorderLayout.SOUTH);

    }

    void exitProgram() {
        System.out.println("Exit Program");
        System.exit(0);
    }
    /**
     * Create the GUI and show it. For thread safety, this method should be
     * invoked from the event-dispatching thread.
     */
    static void createMainFrame() {
        // Create and set up the window.
        MandelMainFrame frame = new MandelMainFrame(PROGRAM_NAME);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Display the window.
        frame.pack();
        frame.setVisible(true);
    }

    /**
     * @param args
     */
    public static void main(String[] args) {
        try {
        	Object ointerval = Toolkit.getDefaultToolkit().getDesktopProperty("awt.multiClickInterval");
        	System.out.println("Multiclick interval " + ointerval);
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
