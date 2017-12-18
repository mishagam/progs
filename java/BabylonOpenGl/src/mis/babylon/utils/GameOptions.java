package mis.babylon.utils;

/**
 * singleton game options class.
 * 
 * @author TCSDEVELOPER
 * @version 1.0
 */
public class GameOptions {
    public String gameSelection = "";
    
    private static GameOptions instance = null;
    
    private GameOptions() {        
    }    
    public static synchronized GameOptions getInstance() {
        if (instance == null) {
            instance = new GameOptions();
        }
        return instance;
    }

}
