package mis.olf.graph.gui;

import java.awt.Color;
import java.awt.GridLayout;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JLabel;

import mis.olf.data.CommonValues;
import mis.olf.data.FieldModel;

public class ButtonsTable extends JComponent {
	final FieldPanel pan;
	final FieldModel cmod;
	public JLabel []diffs;
	public TextField []et;
	CommonValues comv = CommonValues.getInstance();
	
	public ButtonsTable(final FieldPanel pan) {
		int nr = 3;  // X Y Z
		this.setLayout(new GridLayout(nr+4,2,2,2));
		this.pan = pan;
		this.cmod = pan.cmod;
		diffs = new JLabel[nr];
		et = new TextField[nr];
        et[0] = new TextField(comv.exprX);
        et[1] = new TextField(comv.exprY);
        et[2] = new TextField(comv.exprZ);
        this.add(new JLabel("Xn+1"));
        this.add(et[0]);
        this.add(new JLabel("Yn+1"));
        this.add(et[1]);
        this.add(new JLabel("Zn+1"));
        this.add(et[2]);
        
        JButton button = new JButton("Vector");
        button.setEnabled(true);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                pan.drawMode = FieldPanel.MODE_VECTOR;
                pan.revalidate();
                pan.repaint();
            }
        });
        this.add(button);
        
        button = new JButton("Path");
        button.setEnabled(true);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                pan.drawMode = FieldPanel.MODE_PATH;
                pan.revalidate();
                pan.repaint();
            }
        });
        this.add(button);
        
        button = new JButton("Update");
        button.setEnabled(true);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                pan.cmod.updateExpressions(
                		et[0].getText(), et[1].getText(), et[2].getText());
                pan.revalidate();
                pan.repaint();
            }
        });
        this.add(button);
        
        button = new JButton("DrawScales");
        button.setEnabled(true);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                pan.bDrawScales = !pan.bDrawScales;
                pan.revalidate();
                pan.repaint();
            }
        });
        this.add(button);
        
        button = new JButton("X * Y");
        button.setEnabled(true);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                pan.projMode = FieldPanel.PRO_XY;
                pan.revalidate();
                pan.repaint();
            }
        });
        this.add(button);
        
        button = new JButton("X * Z");
        button.setEnabled(true);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                pan.projMode = FieldPanel.PRO_XZ;
                pan.revalidate();
                pan.repaint();
            }
        });
        this.add(button);
        
        button = new JButton("Y * Z");
        button.setEnabled(true);
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                pan.projMode = FieldPanel.PRO_YZ;
                pan.revalidate();
                pan.repaint();
            }
        });
        this.add(button);
	}
}
