package mis.epub;

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

import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.UIManager;
import javax.swing.filechooser.FileFilter;

public class ConvertFrame extends JFrame {
    public static final String PROGRAM_NAME = "ConvertFrame";
    public static final String PROPS_FILENAME = "convert_epub.properties";
    private static ConvertFrame instance = null;
    private static String propsFullFilename = "";
    ConvertOptions opts = ConvertOptions.getInstance();

	public ConvertFrame(String title) {
        super(title);

        // add menu
        addMenu();

        // set name and version
        JPanel panel = new JPanel(new BorderLayout());
        panel.setPreferredSize(new Dimension(300, 190));
        this.getContentPane().add(panel, BorderLayout.CENTER);
        panel.setAlignmentX(CENTER_ALIGNMENT);
        this.add(panel);
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
                return name.endsWith(".FB2") || name.endsWith(".TXT");
            }

            public String getDescription() {
                return "FB2 or TXT Files";
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
            if (fileName.endsWith(".fb2")) {
                ConvFb2ToHtml conv = new ConvFb2ToHtml();
                conv.fb2FileName = fileName;
                conv.convert();
                String cmd = opts.sigilApp + " " + conv.outFileName;
                Runtime.getRuntime().exec(cmd);
            } else if (fileName.endsWith(".txt")) {
                ConvTxtToHtml conv = new ConvTxtToHtml();
                conv.txtFileName = fileName;
                conv.convert();
                String cmd = '"' + opts.sigilApp + "\" \"" + conv.outFileName + '"';
                Runtime.getRuntime().exec(cmd);
            }
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
        final ConvertFrame frame = new ConvertFrame(PROGRAM_NAME);
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
        propsFullFilename = home + "/" + ConvertFrame.PROPS_FILENAME;
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
