package mis.olf.graph.gui;

import java.awt.Insets;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JToolBar;

import mis.olf.data.CommonValues;

public class MyGuiUtils {
    
    static Insets insets = new Insets(0,0,0,0);

    public static JButton createToolbarItem(String iconName, String tip, JToolBar toolBar,
            ActionListener listener) {
        // add open batch button
        JButton button = new JButton();
        URL imageURL = OfMainFrame.class.getResource(iconName);
        ImageIcon icon = new ImageIcon(imageURL, "");
        button.setMargin(insets);

        button.setIcon(icon);
        button.setEnabled(true);
        button.setToolTipText(tip);
        button.addActionListener(listener);
        toolBar.add(button);
        
        return button;
    }
}
