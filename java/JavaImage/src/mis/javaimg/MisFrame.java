package mis.javaimg;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.IOException;

import javax.swing.BorderFactory;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
import javax.swing.UIManager;
import javax.swing.border.Border;

public class MisFrame extends JFrame {

    // constants
	static final long serialVersionUID = 9876777017L;
	public static final String PROGRAM_NAME = "Java Color Model";
	public static final String VERSION = "1.0.0";
    
    // fields
	MisPanel modelPanel;
    public static MisFrame instance = null;
    private MisOptions opts;
    // bottom panel labels
    public JLabel currentStateLabel = null;
    JMenuItem editWingMenuItem = null;

	public MisFrame(String title) {
		super(title);
        instance = this;
		opts = MisOptions.getOptions();

		// add menu
		addMenu();

        // set name and version
        JPanel panel = new JPanel(new BorderLayout());
        this.getContentPane().add(panel, BorderLayout.CENTER);
        panel.setAlignmentX(CENTER_ALIGNMENT);
        
        // add bottom label with players, current side
        JPanel botPanel = new JPanel(new BorderLayout());
        currentStateLabel = new JLabel(" Starting");
        currentStateLabel.setHorizontalAlignment(SwingConstants.CENTER);
        currentStateLabel.setVerticalAlignment(SwingConstants.CENTER);
        currentStateLabel.setPreferredSize(new Dimension(300, 20));
        botPanel.add(currentStateLabel, BorderLayout.CENTER);
        Border b = BorderFactory.createEmptyBorder(1, 20, 1, 20);
        botPanel.setBorder(b);
        panel.add(botPanel, BorderLayout.SOUTH);

        // adding rendzu panel
        modelPanel = new MisPanel();
		panel.add(modelPanel, BorderLayout.CENTER);
	}

    private void onNewGame() {
        modelPanel.initGame();
    }

	private void onQuit() {
	    // opts.saveOptions();
		System.exit(0);
	}

	private void addMenu() {
		JMenuBar menuBar = new JMenuBar();

        // new game
        JMenuItem menuItem;
        menuItem = new JMenuItem("ResetScale", KeyEvent.VK_N);
        menuItem.setToolTipText("Reset scale and position");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onNewGame();
            }
        });
        menuBar.add(menuItem);

        // increase angle
        menuItem = new JMenuItem("+ Scale", KeyEvent.VK_N);
        menuItem.setToolTipText("Increase scale");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                modelPanel.increaseScale();
            }
        });
        menuBar.add(menuItem);

        // increase angle
        menuItem = new JMenuItem("- Scale", KeyEvent.VK_N);
        menuItem.setToolTipText("Decrease scale");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                modelPanel.decreaseScale();
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

	/**
	 * Create the GUI and show it. For thread safety, this method should be
	 * invoked from the event-dispatching thread.
	 */
	static void createMainFrame() {
		// Create and set up the window.
		final MisFrame frame = new MisFrame(PROGRAM_NAME);
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
	}
	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
        // String home = System.getProperty("user.home");
		try {
			// windows look and feel
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

    public MisPanel getPanel() {
        return modelPanel;
    }

    public static synchronized MisFrame getInstance() {
        return instance;
    }

}
