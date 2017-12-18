package mis.app;

import java.util.Properties;

/**
 * singleton class with convert options.
 * 
 * @author mikhail
 * @version 0.9
 */
class OlgOptOptions {
	public static OlgOptOptions instance = null;
	public static OlgOptOptions getInstance() {
		if (instance == null) {
			instance = new OlgOptOptions();
		}
		return instance;
	}
	private OlgOptOptions() {
	}
	
    String filesPath = "";
    int nx = 5;
    int ny = 5;    
    
    public boolean isLinux() {
    	String sOs = System.getProperty("os.name");
    	boolean linux = "Linux".equalsIgnoreCase(sOs);
    	return linux;
    }
    
    void save(Properties props) {
        props.put("files_path", filesPath);
        props.put("nx", "" + nx);
        props.put("ny", "" + ny);
    }
    
    void load(Properties props) {
         if (props.containsKey("files_path")) {
            filesPath = props.getProperty("files_path");
        }
         if (props.containsKey("nx")) {
             nx = Integer.parseInt(props.getProperty("nx"));
         }
         if (props.containsKey("ny")) {
             ny = Integer.parseInt(props.getProperty("ny"));
         }
    }
}
