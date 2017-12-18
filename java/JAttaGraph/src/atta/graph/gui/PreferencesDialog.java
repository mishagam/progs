package atta.graph.gui;

import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;

public class PreferencesDialog extends JPanel {

	static final long serialVersionUID = 9876543007L;

	private static PreferencesDialog dialog = null;

	private static JDialog prefDialog = null;

	private PreferencesGeneralPage preferencesPanel = null;

	private PreferencesFilesPage fileNamesPanel = null;

	static synchronized void startPreferencesDialog(JFrame mainFrame) {
		if (prefDialog != null) {
			if (prefDialog.isVisible()) {
				return;
			}
		} else {
			prefDialog = new JDialog(mainFrame, "Preferences");
			dialog = new PreferencesDialog();
		}
		// Create and set up the content pane.
		dialog.setOpaque(true); // content panes must be opaque
		prefDialog.getContentPane().add(dialog, BorderLayout.CENTER);

		// Display the window.
		prefDialog.pack();
		prefDialog.setVisible(true);
	}

	private PreferencesDialog() {
		super(new GridLayout(1, 1));

		JTabbedPane tabbedPane = new JTabbedPane();

		if (!MainFrame.DEMO_VERSION) {
			fileNamesPanel = new PreferencesFilesPage();
			fileNamesPanel.start();
			tabbedPane.addTab("Select Factorial", fileNamesPanel);
			tabbedPane.setMnemonicAt(0, KeyEvent.VK_1);
		}

		preferencesPanel = new PreferencesGeneralPage();
		tabbedPane.addTab("Preferences", preferencesPanel);
		tabbedPane.setMnemonicAt(1, KeyEvent.VK_2);

		// Add the tabbed pane to this panel.
		add(tabbedPane);

		// adding Ok, Cancel buttons
		JPanel okCancel = new JPanel();
		okCancel.setLayout(new FlowLayout());

		JButton okButton = new JButton("Ok");
		okButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent ae) {
				okPressed();
			}
		});
		okCancel.add(okButton);

		JButton cancelButton = new JButton("Cancel");
		cancelButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent ae) {
				cancelPressed();
			}
		});
		okCancel.add(cancelButton);

		JButton resetButton = new JButton("Reset to Default");
		resetButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent ae) {
				resetPressed();
			}
		});
		okCancel.add(resetButton);

		prefDialog.getContentPane().add(okCancel, BorderLayout.SOUTH);

		// Uncomment the following line to use scrolling tabs.
		// tabbedPane.setTabLayoutPolicy(JTabbedPane.SCROLL_TAB_LAYOUT);
	}

	void okPressed() {
		preferencesPanel.onOk();
		fileNamesPanel.onOk();
		MainFrame.getInstance().saveProperties();
		cancelPressed();
	}

	void resetPressed() {
		preferencesPanel.onReset();
		fileNamesPanel.onReset(); // can do the same as
		MainFrame.getInstance().saveProperties();
		cancelPressed();
	}

void cancelPressed() {
        prefDialog.setVisible(false);  
        prefDialog.dispose();
        prefDialog = null;
    }}
