package mis.couploscil;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

public class OscilOptions {
    
    // model types constants
    private static final String PROPS_FILENAME = "CouplOscilModel.properties";
    
    private static OscilOptions instance = null;
    
    private int nBodies = 2;
    private double mass0;
    private double mass1;
    private double flex0;
    private double flex1;
    private double flex2;
    
    private OscilOptions() {
        resetOptions();
    }
    
    public static synchronized OscilOptions getOptions() {
        if (instance == null) {
            instance = new OscilOptions();
            instance.resetOptions();
        }
        
        return instance;
    }
    
    /**
     * setting to default values
     */
    public void resetOptions() {
        mass0 = 1;
        mass1 = 1;
        flex0 = 1;
        flex1 = 1;
        flex2 = 1;
    }
    
    private void optionsToProps(Properties props) {
        props.setProperty("mass0", "" + this.mass0);        
        props.setProperty("mass1", "" + this.mass1);        
        props.setProperty("flex0", "" + this.flex0);        
        props.setProperty("flex1", "" + this.flex1);        
        props.setProperty("flex2", "" + this.flex2);        
    }
    
    private void propsToOptions(Properties props) {
        try {
            this.mass0 = Double.parseDouble(props.getProperty("mass0"));        
            this.mass1 = Double.parseDouble(props.getProperty("mass1"));        
            this.flex0 = Double.parseDouble(props.getProperty("flex0"));        
            this.flex1 = Double.parseDouble(props.getProperty("flex1"));        
            this.flex2 = Double.parseDouble(props.getProperty("flex2"));        
        } catch (NumberFormatException nfe) {
            System.err.println("Parsing options properties failed:" + nfe);
        } catch (NullPointerException npe) {
            System.err.println("One of properties skipped");
        }
    }

    
    public void saveOptions() {
        Properties props = new Properties();
        String home = System.getProperty("user.home");
        String fileName = home + "/" + PROPS_FILENAME;
        optionsToProps(props);
        try {
            OutputStream stream = new BufferedOutputStream(
                    new FileOutputStream(fileName));
            props.store(stream, "Aero Model common values");
            stream.close();
        } catch (Exception e) {
            e.printStackTrace(System.err);
        }
    }
    
    public void loadOptions() {
        Properties props = new Properties();
        String home = System.getProperty("user.home");
        String fileName = home + "/" + PROPS_FILENAME;
        try {
            File propFile = new File(fileName);
            if (propFile.exists()) {
                InputStream stream = new BufferedInputStream(
                        new FileInputStream(propFile));
                props.load(stream);
                propsToOptions(props);
                stream.close();
            } else {
                resetOptions();
            }
        } catch (Exception e) {
             e.printStackTrace(System.err);
        }
    }

	public double getMass0() {
		return mass0;
	}

	public void setMass0(double mass0) {
		this.mass0 = mass0;
	}

	public double getMass1() {
		return mass1;
	}

	public void setMass1(double mass1) {
		this.mass1 = mass1;
	}

	public double getFlex0() {
		return flex0;
	}

	public void setFlex0(double flex0) {
		this.flex0 = flex0;
	}

	public double getFlex1() {
		return flex1;
	}

	public void setFlex1(double flex1) {
		this.flex1 = flex1;
	}

	public double getFlex2() {
		return flex2;
	}

	public void setFlex2(double flex2) {
		this.flex2 = flex2;
	}

	public int getnBodies() {
		return nBodies;
	}

}
