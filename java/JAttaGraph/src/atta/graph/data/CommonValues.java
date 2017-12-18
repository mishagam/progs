package atta.graph.data;

import java.util.Properties;

import atta.graph.gui.MyGuiUtils;
import atta.graph.gui.PreferencesFilesPage;

/**
 * class for holding common values for all open FSA files. 
 * This class is Singleton.
 * 
 * @author Misha
 * @version 1.0
 */
public class CommonValues {
    // default values
    static final double DEFAULT_PEAK_SPAN = 1.5;
    static final int DEFAULT_INTERPEAK_INTERVAL = 30;
    static final int DEFAULT_MAX_PEAK_HEIGHT = 6500;
    static final int DEFAULT_MIN_PEAK_WIDTH = 0;
    static final short DEFAULT_THRESHOLD = 75;
    static final short DEFAULT_RED_THRESHOLD = 150;
    static final double DEF_MIN_PEAK_SIZE =  90.00;
    static final double DEF_MAX_PEAK_SIZE = 650.00;    
    static final boolean IS_PROFESSIONAL = false;
    
    // attributes
    /** We use this peak set to get red paks and to find pos->size formula */
    public PeakSet redPeaks = new PeakSet();
    /** File names of named peaks */
    public String factorialFileName = "";
    /** short version name of factorila like 30A */
    public String factorialVersion = "";
    /** File name of red peaks */
    public String redPeaksFileName = "";

    /** max distance between peaks (in size) so they are still assumed one peak */
    public double peaksSpan;
    /** max number ov values below threshold so we still assume it is one peak */
    public int interPeaksInterval;
    /** Minimum width of peak on threshold leve to be accepted as peak. */
    public int minPeakWidth;
    /** should we show unnamed peaks in dialog and export them to Excel. */  
    public boolean showUnnamedPeaks;
    /** we should use peaks data with baseline substracted */
    public boolean substractBaseline; 
    /** maximum height of peak, after which we have to issue warning */
    public int maxPeakHeight;    

    /** defaul threshold before set by user */
    public int defaultThreshold;  
    /**< Threshold for Red Peaks */
    public int redPeaksThreshold;
    /**< defaul minimum peak size before set by user */
    public double defaultMinSize;
    /**< defaul maximum peak size before set by user */
    public double defaultMaxSize;

    /** URL of AttaInput Web Application */
    public String attaInputUrl = "";
    /** AttaInput user name */
    public String attaUsername = "";
    /** AttaInput password */
    public String attaPassword = "";

    /** we try to download factorial from AttaInput web service. */
    public boolean useWebFactorial;   
    /** we use professional version of program. This value is hardcoded, instead of saving it in registry. */
    public boolean isProfessional;  
    /** current folder to look for FSA files */
    public String currentFolder;
    /** current folder to look for factorial and red peaks files */
    public String currentFactorialFolder;
    
    private CommonValues() {
    	init();
    }
    
    /**
     * reset to default values
     */
    public void init() {
        this.peaksSpan = DEFAULT_PEAK_SPAN;
        this.interPeaksInterval = DEFAULT_INTERPEAK_INTERVAL;
        this.showUnnamedPeaks = true;
        this.substractBaseline = true;
        this.maxPeakHeight = DEFAULT_MAX_PEAK_HEIGHT;
        this.defaultThreshold = DEFAULT_THRESHOLD;
        this.defaultMinSize = DEF_MIN_PEAK_SIZE;
        this.defaultMaxSize = DEF_MAX_PEAK_SIZE;
        this.isProfessional = IS_PROFESSIONAL; 
        this.useWebFactorial = false;  // !this.isProfessional; 
        currentFolder = "";
        currentFactorialFolder = "";
        // default factorial names
        this.factorialVersion = PreferencesFilesPage.factNames[0];
        this.factorialFileName = MyGuiUtils.factVersionToFileName(factorialVersion);
        this.redPeaksThreshold = DEFAULT_RED_THRESHOLD;
    }
    
    private static CommonValues instance = null; 
    public static synchronized CommonValues getInstance() {
        if (instance == null) {
            instance = new CommonValues();
        }
        return instance;
    }
    
    public void comvFromProps(Properties props) {
        try {
            this.redPeaksFileName = props.getProperty("red_peaks_file_name");    
            if (redPeaksFileName == null) {
                redPeaksFileName = "";
            }
            this.factorialFileName = props.getProperty("named_peaks_file_name");        
            if (factorialFileName == null) {
                factorialFileName = "";
            }
            this.factorialVersion = props.getProperty("factorial_version");        
            if (factorialVersion == null) {
            	factorialVersion = "";
            }
            this.peaksSpan = Double.parseDouble(props.getProperty("peaks_span"));        
            this.interPeaksInterval = Integer.parseInt(props.getProperty("inter_peaks_interval"));        
            this.minPeakWidth = Integer.parseInt(props.getProperty("min_peak_width"));        
            this.showUnnamedPeaks = Boolean.getBoolean(props.getProperty("show_unnamed_peaks"));        
            this.substractBaseline = Boolean.getBoolean(props.getProperty("substract_baseline"));        
            this.maxPeakHeight = Integer.parseInt(props.getProperty("max_peak_height"));        
            this.defaultThreshold = Integer.parseInt(props.getProperty("default_threshold"));        
            this.defaultMinSize = Double.parseDouble(props.getProperty("default_min_size"));        
            this.defaultMaxSize = Double.parseDouble(props.getProperty("default_max_size"));        
            this.attaInputUrl = props.getProperty("atta_input_url");        
            this.attaUsername = props.getProperty("atta_username");        
            this.attaPassword = props.getProperty("atta_password");        
            this.useWebFactorial = Boolean.getBoolean(props.getProperty("use_web_factorial"));        
            this.isProfessional = Boolean.getBoolean(props.getProperty("is_professional"));        
            this.currentFolder = props.getProperty("current_folder");    
            this.currentFactorialFolder = props.getProperty("current_factorial_folder");    
            this.factorialFileName = props.getProperty("named_peaks_file_name");    
            this.redPeaksFileName = props.getProperty("red_peaks_file_name");    
            this.redPeaksThreshold = Integer.parseInt(props.getProperty("red_peaks_threshold"));    
        } catch (NumberFormatException nfe) {
            System.err.println("Parsing properties failed:" + nfe);
        } catch (NullPointerException npe) {
            System.err.println("One of propertiews skipped");
        }
    }
    
    public void comvToProps(Properties props) {
        props.setProperty("current_folder", this.currentFolder);        
        props.setProperty("red_peaks_file_name", this.redPeaksFileName);        
        props.setProperty("named_peaks_file_name", this.factorialFileName);        
        props.setProperty("factorial_version", this.factorialVersion);        
        props.setProperty("peaks_span", "" + this.peaksSpan);        
        props.setProperty("inter_peaks_interval", "" + this.interPeaksInterval);        
        props.setProperty("min_peak_width", "" + this.minPeakWidth);        
        props.setProperty("show_unnamed_peaks", "" + this.showUnnamedPeaks);        
        props.setProperty("substract_baseline", "" + this.substractBaseline);        
        props.setProperty("max_peak_height", "" + this.maxPeakHeight);        
        props.setProperty("default_threshold", "" + this.defaultThreshold);        
        props.setProperty("default_min_size", "" + this.defaultMinSize);        
        props.setProperty("default_max_size", "" + this.defaultMaxSize);        
        props.setProperty("atta_input_url", this.attaInputUrl);        
        props.setProperty("atta_username", this.attaUsername);        
        props.setProperty("atta_password", this.attaPassword);        
        props.setProperty("use_web_factorial", "" + this.useWebFactorial);        
        props.setProperty("is_professional", "" + this.isProfessional);        
        props.setProperty("current_folder", this.currentFolder);        
        props.setProperty("current_factorial_folder", this.currentFactorialFolder);        
        props.setProperty("named_peaks_file_name", this.factorialFileName);        
        props.setProperty("red_peaks_file_name", this.redPeaksFileName);        
        props.setProperty("red_peaks_threshold", "" + this.redPeaksThreshold);        
    }
}
