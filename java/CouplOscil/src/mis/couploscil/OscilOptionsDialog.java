package mis.couploscil;

import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;

/**
 * dialog for setting values of aero model options
 * 
 * @author Misha
 * @version 1.0
 */
public class OscilOptionsDialog extends JPanel {

    static final long serialVersionUID = 9876543031L;

    private static OscilOptionsDialog dialog = null;
    private static JDialog optsDialog = null;
    
    JTextField mass0Text;
    JTextField mass1Text;
    JTextField flex0Text;
    JTextField flex1Text;
    JTextField flex2Text;

    static synchronized void startModelOptionsDialog(JFrame mainFrame) {
        if (optsDialog != null) {
            if (optsDialog.isVisible()) {
                return;
            }
        } else {
            optsDialog = new JDialog(mainFrame, "ModelOptions");
            dialog = new OscilOptionsDialog();
        }
        // Create and set up the content pane.
        dialog.setOpaque(true); // content panes must be opaque
        optsDialog.getContentPane().add(dialog, BorderLayout.CENTER);

        // Display the window.
        optsDialog.pack();
        optsDialog.setVisible(true);
    }

    private OscilOptionsDialog() {
        setLayout(new GridLayout(10,2));
        OscilOptions opts = OscilOptions.getOptions();
        
        add(new JLabel("Mass 0"));
        mass0Text = new JTextField("" + opts.getMass0());
        mass0Text.setSize(100, 20);
        add(mass0Text);
        
        add(new JLabel("Mass 1"));
        mass1Text = new JTextField("" + opts.getMass1());
        mass1Text.setSize(100, 20);
        add(mass1Text);
        
        add(new JLabel("Flex0"));
        flex0Text = new JTextField("" + opts.getFlex0());
        flex0Text.setSize(100, 20);
        add(flex0Text);
        
        add(new JLabel("Flex1"));
        flex1Text = new JTextField("" + opts.getFlex1());
        flex1Text.setSize(100, 20);
        add(flex1Text);
        
        add(new JLabel("Flex2"));
        flex2Text = new JTextField("" + opts.getFlex2());
        flex2Text.setSize(100, 20);
        add(flex2Text);

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

        add(okCancel);
        this.setBorder(BorderFactory.createEmptyBorder(4,4,4,4));
    }
    
    private void optionsFromDialog() {
        OscilOptions opts = OscilOptions.getOptions();
        opts.setMass0(Double.parseDouble(mass0Text.getText()));
        opts.setMass1(Double.parseDouble(mass1Text.getText()));
        opts.setFlex0(Double.parseDouble(flex0Text.getText()));
        opts.setFlex1(Double.parseDouble(flex1Text.getText()));
        opts.setFlex2(Double.parseDouble(flex2Text.getText()));

        opts.saveOptions();
    }

    void okPressed() {
        optionsFromDialog();        
        cancelPressed();
    }

    void resetPressed() {        
        OscilOptions.getOptions().resetOptions();
        cancelPressed();
    }

    void cancelPressed() {
        optsDialog.setVisible(false);  
        optsDialog.dispose();
        optsDialog = null;
    }

}
