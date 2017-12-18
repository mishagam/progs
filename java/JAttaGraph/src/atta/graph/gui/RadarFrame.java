package atta.graph.gui;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JToolBar;

import atta.graph.data.FsaData;

public class RadarFrame extends JFrame {
	
	static final long serialVersionUID = 9876543015L;	

    /**
     * FsaData instance containing data for currnet FSA file
     */
    FsaData fdata = null;

    RadarPanel panel = null;
    
    public RadarFrame(FsaData fda) {
    	fdata = fda;
    	this.setTitle("Radar View " + fdata.fsaFileName);
        panel = new RadarPanel(fdata);    
        JScrollPane scroller = new JScrollPane(panel);
        JToolBar toolBar = createToolBar();
        this.getContentPane().add(toolBar, BorderLayout.NORTH);
        this.getContentPane().add(scroller, BorderLayout.CENTER);
        this.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
    }

    JToolBar createToolBar() {
        JToolBar toolBar = new JToolBar();

        // show copy peaks
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/myicons/UsePowerExpression.GIF",
                "Use`Power expression or relative height", 
                toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                    	pressSelectPE();
                    }
                }));

        // show copy peaks
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/myicons/LogScale.GIF",
                "Use Log scale", toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                    	pressSelectScale();
                    }
                }));
        return toolBar;
    }
    
    public void pressSelectPE() {
    	panel.usePE = !panel.usePE;
    	panel.invalidate();
    	panel.update(panel.getGraphics());
    }
    
    public void pressSelectScale() {
    	panel.logScale = !panel.logScale;
    	panel.invalidate();
    	panel.update(panel.getGraphics());
    }

	

}
