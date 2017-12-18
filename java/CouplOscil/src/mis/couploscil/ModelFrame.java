package mis.couploscil;

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

public class ModelFrame extends JFrame {

    // constants
	static final long serialVersionUID = 9876777003L;
	public static final String PROGRAM_NAME = "Java Rendzu";
	public static final String VERSION = "1.1.12";
    
    // fields
	ModelPanel modelPanel;
    public static ModelFrame instance = null;
    private OscilOptions opts;
    // bottom panel labels
    public JLabel currentStateLabel = null;
    JMenuItem editWingMenuItem = null;

	public ModelFrame(String title) {
		super(title);
        instance = this;
		opts = OscilOptions.getOptions();
		opts.loadOptions();

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
        modelPanel = new ModelPanel();
		modelPanel.setOpts(opts);
		panel.add(modelPanel, BorderLayout.CENTER);
	}

    private void onNewGame() {
        modelPanel.initGame();
    }

    void onOptions() {
        OscilOptionsDialog.startModelOptionsDialog(this);
    }

	private void onQuit() {
	    opts.saveOptions();
		System.exit(0);
	}

	private void onEditWing() {
		boolean sel = editWingMenuItem.isSelected();
		modelPanel.setEditMode(!modelPanel.isEditMode());
	    editWingMenuItem.setSelected(!modelPanel.isEditMode());
	}

	private void addMenu() {
		JMenuBar menuBar = new JMenuBar();

        // new game
        JMenuItem menuItem;
        menuItem = new JMenuItem("NewGame", KeyEvent.VK_N);
        menuItem.setToolTipText("Start new Modeling");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onNewGame();
            }
        });
        menuBar.add(menuItem);

        // Options dialog
        menuItem = new JMenuItem("Options", KeyEvent.VK_O);
        menuItem.setToolTipText("Change Model Options");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onOptions();
            }
        });
        menuBar.add(menuItem);

        // increase angle
        menuItem = new JMenuItem("+ Angle", KeyEvent.VK_N);
        menuItem.setToolTipText("Increase atack angle");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                modelPanel.increaseAngle();
            }
        });
        menuBar.add(menuItem);

        // increase angle
        menuItem = new JMenuItem("- Angle", KeyEvent.VK_N);
        menuItem.setToolTipText("Decrease atack angle");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                modelPanel.decreaseAngle();
            }
        });
        menuBar.add(menuItem);

        // switch to editing mode
        menuItem = new JMenuItem("EditWing", KeyEvent.VK_N);
        menuItem.setToolTipText("Decrease atack angle");
        menuItem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onEditWing();
            }
        });
        editWingMenuItem = menuItem;
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
		final ModelFrame frame = new ModelFrame(PROGRAM_NAME);
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

    public ModelPanel getRendzuPanel() {
        return modelPanel;
    }

    public OscilOptions getOpts() {
        return opts;
    }

    public void setOpts(OscilOptions opts) {
        this.opts = opts;
    }

    public static synchronized ModelFrame getInstance() {
        return instance;
    }
}
