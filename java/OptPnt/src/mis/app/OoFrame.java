package mis.app;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

import javax.swing.JEditorPane;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.UIManager;
import javax.swing.filechooser.FileFilter;

import olgopt.OlOptRun;

public class OoFrame extends JFrame {
	
    public static final String PROGRAM_NAME = "ConvertFrame";
    public static final String PROPS_FILENAME = "convert_epub.properties";
    private static OoFrame instance = null;
    private static String propsFullFilename = "";
    OlgOptOptions opts = OlgOptOptions.getInstance();
    JPanel mainPanel;
    JEditorPane jedit;

	public OoFrame(String title) {
        super(title);

        // add menu

        // set name and version
        mainPanel = new JPanel(new BorderLayout());
        mainPanel.setPreferredSize(new Dimension(300, 190));
        this.getContentPane().add(mainPanel, BorderLayout.CENTER);
        mainPanel.setAlignmentX(CENTER_ALIGNMENT);
        addMenu();
        instance = this;
    }
    private void addMenu() {
        JMenuBar menuBar = new JMenuBar();

        // new game
        JMenuItem menuItem;
        menuItem = new JMenuItem("ConvertFile", KeyEvent.VK_N);
        menuItem.setToolTipText("Select File and convert it");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                selectConvertFile();
            }
        });
        menuBar.add(menuItem);

        // Quit
        menuItem = new JMenuItem("Quit", KeyEvent.VK_X);
        menuItem.setToolTipText("Quit program");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onQuit();
            }
        });
        menuBar.add(menuItem);
        this.setJMenuBar(menuBar);
        
        jedit = new JEditorPane();
        jedit.setText("Initial foolish text, gdfkjs dskj ghfkds hgkdsgh kds dshg fksdg k dsk ksdf dshgdskds\nnext line");
        mainPanel.add(jedit, BorderLayout.CENTER);
    }

    private void selectConvertFile() {
        JFileChooser chooser = new JFileChooser();
        if (opts.filesPath != null) {
            chooser.setCurrentDirectory(new File(opts.filesPath));
        } else {
            opts.filesPath = System.getProperty("user.home");
            System.out.println("user.home = " + opts.filesPath);
        }
        FileFilter fsaFilter = new FileFilter() {
            public boolean accept(File f) {
                if (f.isDirectory()) {
                    return true;
                }
                String name = f.getName().toUpperCase();
                return name.endsWith(".TXT");
            }

            public String getDescription() {
                return "TXT Files";
            }

        };
        chooser.setFileFilter(fsaFilter);
        int returnVal = chooser.showOpenDialog(null);
        if (returnVal != JFileChooser.APPROVE_OPTION) {
            System.out.println("File not opened");
            return;
        }
        opts.filesPath = chooser.getCurrentDirectory().getPath();
        saveProperties();
        String fileName = chooser.getSelectedFile().getPath();
        
        // now convert filename
        try {
        	OlOptRun oo = new OlOptRun();
        	// oo.runOlOpt(fileName);
        	StringBuilder sb = new StringBuilder();
        	oo.runBootstrap(fileName, sb);
        	jedit.setText(sb + "");        	
        } catch (IOException ioe) {
            ioe.printStackTrace(System.err);
        }
    }

    private void onQuit() {
        saveProperties();
        System.exit(0);
    }
    
    private void saveProperties() {
        // saving text
        Properties props = new Properties();
        opts.save(props);
        try {
            OutputStream stream = new BufferedOutputStream(
                    new FileOutputStream(propsFullFilename));
            props.store(stream, "Conversion Options");
            stream.close();
        } catch (Exception e) {
            e.printStackTrace(System.err);
        }
    }
    
    private void loadProperties() {
        Properties props = new Properties();
        try {
            File propFile = new File(propsFullFilename);
            if (propFile.exists()) {
                InputStream stream = new BufferedInputStream(
                        new FileInputStream(propFile));
                props.load(stream);
                opts.load(props);
                stream.close();
            } 
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
        final OoFrame frame = new OoFrame(PROGRAM_NAME);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Display the window.
        frame.pack();
        frame.setLocation(200, 100);
        frame.setVisible(true);
        frame.addWindowListener(new WindowAdapter() {
             public void windowClosing(WindowEvent we) {
                instance.onQuit();
            }
        });
        frame.loadProperties();
    }
    /**
     * @param args
     */
    public static void main(String[] args) throws IOException {
        String logConf = "log.properties";
        Properties logProps = new Properties();
        String home = System.getProperty("user.home");
        propsFullFilename = home + "/" + OoFrame.PROPS_FILENAME;
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
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
