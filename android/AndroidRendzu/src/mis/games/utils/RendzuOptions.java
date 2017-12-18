package mis.games.utils;


public class RendzuOptions {
    // constants
    public static final String PROPS_FILENAME = "/RendzuGame.properties";
    public static final String LOG_FILENAME = "/RendzuGame.log";
    public static final String MISHAGAM_SERVER_URL = "http://www.mishagam.com/RendzuServer/GameServlet";
    public static final String DEBUG_SERVER_URL = "http://localhost:8080/RendzuServer/GameServlet.do";
    public static final String SHUTTLE_SERVER_URL = "http://192.168.1.4:8080/RendzuServer/GameServlet.do";
    public static final int DEFAULT_SIZE = 19;
    public static final int DEFAULT_MAN_SIDE = -1;    
    public static final int OBSERVE_DELAY = 500;    
    public static final boolean LOG_POSITONS = false;
    public static final boolean LOG_GAME = false;
    
    // options
    public boolean compFirst = true;
    public int computerDelayMillis = 100;
    public String userName = "MishaDefault";
    public boolean connectToServer = false;
    public String gameServerUrl = SHUTTLE_SERVER_URL;
    public GameVariant gameVar = GameVariant.HARD;
    public String remoteGameId = null;
    public int timePerMove = 5000;
    
    private static RendzuOptions instance = null;
    
    private RendzuOptions() {
        
    }
    
    public static synchronized RendzuOptions getInstance() {
        if (instance == null) {
            instance = new RendzuOptions();
        }
        return instance;
    }
    
}
