package atta.graph.data;

import java.io.PrintWriter;
import java.io.StringWriter;

import javax.swing.JOptionPane;

import atta.graph.gui.MainFrame;

public class MyUtils {
    public static void MyMessage(String s) {
        JOptionPane.showMessageDialog(MainFrame.getInstance(), s);
    }
    
    public static void printDoubleValue(PrintWriter pw, double val) {
		if (val > 0.1) {
			pw.printf("%8.3f", val);
		} else if (val > 0.001) {
			pw.printf("%8.5f", val);
		} else {
			pw.printf("%10.8f", val);
		}
    }
    
    
    public static String convertDoubleValue(double val) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
		printDoubleValue(pw, val);
        return sw.toString();
    }
    

    public static String shortNumber(double a) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        if (a >= 0.99999) {
            pw.printf("%2.0f", a);
        } else if (a > 0.099999) {
        	pw.printf("%3.1f", a);
        } else if (a > 0.0099999) {
        	pw.printf("%4.2f", a);
        } else if (a > 0.00099999) {
        	pw.printf("%5.3f", a);
        } else if (a > 0.000099999) {
        	pw.printf("%6.4f", a);
        } else if (Math.abs(a) < 0.0000001) {
        	pw.printf("0.0");
        } else {
        	pw.printf("%f", a);
        }
        return sw.toString();
    }

}
