package mis.epub;

import java.util.Properties;

/**
 * singleton class with convert options.
 * One of main use is to make 1 program work with linux and windows.
 * 
 * @author mikhail
 * @version 0.9
 */
class ConvertOptions {
	public static ConvertOptions instance = null;
	public static ConvertOptions getInstance() {
		if (instance == null) {
			instance = new ConvertOptions();
		}
		return instance;
	}
	private ConvertOptions() {
		if (isLinux()) {
			sigilApp = "/opt/sigil/sigil";
			tempFolder = "/home/misha/temp/";			
		} else {
			sigilApp = "C:/Program Files/Sigil/Sigil.exe";
			tempFolder = "c:/Temp/";
		}
	}
	
    String sigilApp = null;
    String filesPath = "";
    String tempFolder = null;
    
    public boolean isLinux() {
    	String sOs = System.getProperty("os.name");
    	boolean linux = "Linux".equalsIgnoreCase(sOs);
    	return linux;
    }
    
    void save(Properties props) {
        props.put("files_path", filesPath);
        props.put("sigil_app", sigilApp);
        props.put("temp_folder", tempFolder);
    }
    
    void load(Properties props) {
        if (props.containsKey("files_path")) {
            filesPath = props.getProperty("files_path");
        }
        if (props.containsKey("sigil_app")) {
            sigilApp = props.getProperty("sigil_app");
        }
        if (props.containsKey("temp_folder")) {
        	tempFolder = props.getProperty("temp_folder");
        }
    }
}
