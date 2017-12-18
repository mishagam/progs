package mis.games.utils;

import java.util.Properties;

public class RendzuStatistics {
    public int totalEasy = 0;
    public int totalHard = 0;
    public int manWonEasy = 0;
    public int manWonHard = 0;
    
    RendzuOptions opts;
    private static RendzuStatistics instance = null;
    
    private RendzuStatistics() {
        opts = RendzuOptions.getInstance();
    }
    
    public static synchronized RendzuStatistics getInstance() {
        if (instance == null) {
            instance = new RendzuStatistics();
        }
        return instance;
    }
    
    public void reset() {
        totalEasy = totalHard = manWonEasy = manWonHard = 0;
    }
    
    public void reportGame(boolean manWon) {
        if (opts.gameVar == GameVariant.EASY) {
            totalEasy++;
            if (manWon) {
                manWonEasy++;
            }
        } else if (opts.gameVar == GameVariant.HARD) {
            totalHard++;
            if (manWon) {
                manWonHard++;
            }
        }
    }
}
