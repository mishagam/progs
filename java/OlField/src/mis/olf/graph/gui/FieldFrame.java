package mis.olf.graph.gui;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.IOException;
import java.net.URL;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JToolBar;

import mis.olf.data.FieldModel;

/**
 * Frame for showing graphics of one FSA file. Close in function to
 * FactorialProView.
 * 
 * @author Misha
 * @version 1.0
 */
public class FieldFrame extends JFrame {

	static final long serialVersionUID = 9876543000L;

	/**
	 * FsaData instance containing data for current FSA file
	 */
	FieldModel cmod = null;
	FieldPanel panel = null;

	/**
	 * public constructor.
	 * 
	 * @param fileName
	 *            filename of FSA file we deal with
	 * @throws IOException
	 *             if readFsaData failed
	 */
	FieldFrame(String exprX, String exprY, String exprZ)
			throws IOException {
		cmod = new FieldModel(exprX, exprY, exprZ);
		this.setTitle("JCompGraph " + exprX + " " + exprY + " "
				+ exprZ);
		panel = new FieldPanel(cmod, this);
		// Put the drawing area in a scroll pane.
		JScrollPane scroller = new JScrollPane(panel);
		panel.setScroller(scroller);
		ButtonsTable butt = new ButtonsTable(panel);
		getContentPane().add(butt, BorderLayout.WEST);
		getContentPane().add(scroller, BorderLayout.CENTER);
		this.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		JToolBar toolBar = createToolBar();
		getContentPane().add(toolBar, BorderLayout.NORTH);

		this.addWindowListener(new WindowListener() {
			public void windowActivated(WindowEvent e) {
				OfMainFrame.getInstance().onCompWindowOpen(FieldFrame.this);
			}

			public void windowClosed(WindowEvent e) {
				OfMainFrame.getInstance().onCompWindowClose(FieldFrame.this);
			}

			public void windowClosing(WindowEvent e) {
				// TODO Auto-generated method stub
			}

			public void windowDeactivated(WindowEvent e) {
			}

			public void windowDeiconified(WindowEvent e) {
				// TODO Auto-generated method stub
			}

			public void windowIconified(WindowEvent e) {
				// TODO Auto-generated method stub
			}

			public void windowOpened(WindowEvent e) {
			}
		});
	}

	JToolBar createToolBar() {
		JToolBar toolBar = new JToolBar();

		// horizontal scale
		toolBar.add(MyGuiUtils.createToolbarItem(
				"/images/myicons/ScaleHorizontal.GIF",
				"Double Horizontal Scale", toolBar, new ActionListener() {
					public void actionPerformed(ActionEvent ae) {
						panel.doubleScale();
					}
				}));

		// reset scale
		toolBar.add(MyGuiUtils.createToolbarItem(
				"/images/myicons/ScaleReset.GIF", "Reset Scales", toolBar,
				new ActionListener() {
					public void actionPerformed(ActionEvent ae) {
						panel.resetScales();
					}
				}));


		return toolBar;
	}
}
