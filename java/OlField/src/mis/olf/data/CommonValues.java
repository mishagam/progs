package mis.olf.data;

import java.util.Properties;

import mis.olf.graph.gui.MyGuiUtils;


/**
 * Class for holding JComp options
 * 
 * @author Misha
 * @version 0.9
 */
public class CommonValues {
    // default values
    static final int DEFAULT_X_SIZE = 800;
    static final int DEFAULT_Y_SIZE = 600;
    static final String DEFAULT_EXPR = "0";
    static final String VERSION = "0.7.5";
        
    // attributes
    /** x size of graph */
    public int xSize;
    /** y size of graph pane */
    public int ySize;
    /** File name of data A */
    public String exprX;
    /** File name of data B */
    public String exprY;
    /** File name of data B */
    public String exprZ;
    /** Version */
    public String version;
    
    private CommonValues() {
    	init();
    }
    
    /**
     * reset to default values
     */
    public void init() {
        this.xSize = DEFAULT_X_SIZE;
        this.ySize = DEFAULT_Y_SIZE;
        this.exprX = DEFAULT_EXPR;
        this.exprY = DEFAULT_EXPR;
        this.exprZ = DEFAULT_EXPR;
        version = VERSION;
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
            this.exprX = props.getProperty("expression_x");    
            if (exprX == null) {
                exprX = DEFAULT_EXPR;
            }
            this.exprY = props.getProperty("expression_y");    
            if (exprY == null) {
                exprY = DEFAULT_EXPR;
            }
            this.exprZ = props.getProperty("expression_z");    
            if (exprZ == null) {
                exprZ = DEFAULT_EXPR;
            }

            String s = props.getProperty("x_screen_size");
            if (s != null) {
            	this.xSize = Integer.parseInt(s);
            }
            s = props.getProperty("y_screen_size");
            if (s != null) {
            	this.ySize = Integer.parseInt(s);
            }
            s = props.getProperty("version");
            if (s != null) {
            	this.version = s;
            }

        } catch (NumberFormatException nfe) {
            System.err.println("Parsing properties failed:" + nfe);
        } catch (NullPointerException npe) {
            System.err.println("One of properties skipped");
        }
    }
    
    public void comvToProps(Properties props) {
        props.setProperty("expression_x", this.exprX);        
        props.setProperty("expression_y", this.exprY);        
        props.setProperty("expression_z", this.exprZ);        
        props.setProperty("x_screen_size", "" + this.xSize);        
        props.setProperty("y_screen_size", "" + this.ySize);        
        props.setProperty("version", version);        
    }
}
