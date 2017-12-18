package atta.graph.gui;

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

import sun.misc.BASE64Encoder;

import atta.graph.data.CommonValues;
import atta.graph.data.Factorial;

public class MyGuiUtils {
    
    static Insets insets = new Insets(0,0,0,0);
	
	public static final String ATTA_WWW = (MainFrame.DEMO_VERSION ? "www.mishagam.com/jwsdemo/" : "www.mishagam.com/jws/");
	public static final String ATTA_USERNAME="sergey";
	public static final String ATTA_PASSWORD="romanov";
	public static final String ATTA_URL = "http://" + ATTA_WWW;

    public static JButton createToolbarItem(String iconName, String tip, JToolBar toolBar,
            ActionListener listener) {
        // add open batch button
        JButton button = new JButton();
        URL imageURL = MainFrame.class.getResource(iconName);
        ImageIcon icon = new ImageIcon(imageURL, "");
        button.setMargin(insets);

        button.setIcon(icon);
        button.setEnabled(true);
        button.setToolTipText(tip);
        button.addActionListener(listener);
        toolBar.add(button);
        
        return button;
    }
    
    public static String factVersionToFileName(String factVersion) {
    	String home = System.getProperty("user.home");
    	String fileName = home + MainFrame.JATTA_FOLDER + factVersion + ".txt";
    	
    	return fileName;   	
    }
    
    static boolean copyWebFile(String surl, File file, boolean overwrite) {
    	InputStream is = null;
    	OutputStream os = null;
    	if (file.exists() && !overwrite) {
    		return false;
    	}
    	try {
    		URL url = new URL(surl);
    		String upass = ATTA_USERNAME + ":" + ATTA_PASSWORD;
    		String enc = new BASE64Encoder().encode(upass.getBytes());
    		URLConnection uc = url.openConnection();
    		uc.setUseCaches(false);
    		uc.setRequestProperty("Authorization", "Basic " + enc);
	    	is = uc.getInputStream();	    	
	    	os = new FileOutputStream(file);
	    	byte []buf = new byte[10000];  // probably larger that factorial
	    	int nb;
	    	while ((nb = is.read(buf)) > 0) {
	    		os.write(buf, 0, nb);
	    	}
	    	return true;
    	} catch (IOException ioe) {
    		ioe.printStackTrace();
    		return false;
    	} finally {
    		if (is != null) {
    			try {
    				is.close();
    			} catch (IOException ioe) {    				
    			}
    		}
    		if (os != null) {
    			try {
    				os.close();
    			} catch (IOException ioe) {    				
    			}
    		}
    	}
    }
    
    static int copyFactorialToLocalFile() {
    	CommonValues comv = CommonValues.getInstance();
        comv.factorialFileName = 
        	MyGuiUtils.factVersionToFileName(comv.factorialVersion);
    	
    	String factUrl = ATTA_URL + comv.factorialVersion + ".txt";
    	File factFile = new File(comv.factorialFileName);
    	if (!factFile.exists()) {
        	if (!copyWebFile(factUrl, factFile, false)) {
        		JOptionPane.showMessageDialog(null, "Downloading factorial " + factUrl + " failed");      
        		return 0;
        	}
    	}
        Factorial fact = new Factorial();
        boolean bret = false;
        int num = 0;
        try {
        	bret = fact.readFactorial(comv.factorialFileName);
        	if (!bret) {
        		throw new IOException("open Factorial " + 
        				comv.factorialFileName + " failed");
        	}
        	num = fact.size();
        } catch (IOException ioe) {
        	 JOptionPane.showMessageDialog(null, "Opening Factorial File " + 
        			 comv.factorialFileName + " failed");        	
        }

        return num;
    }
    
    public static void MyError(JFrame frame, String msg) {
    	msg = "Erroor Message";
        // JOptionPane.showMessageDialog(frame, msg, "error", JOptionPane.ERROR_MESSAGE);
        JOptionPane.showMessageDialog(null, msg, "error", JOptionPane.ERROR_MESSAGE);
    }

}
