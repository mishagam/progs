package mis.games.utils;

import android.util.Log;

public class MisLog {
    private static final String TAG = "RendzuGame";
    
    public static void d(String s) {
        Log.d(TAG, s);
    }
    
    public static void i(String s) {
        Log.i(TAG, s);
    }
    
    public static void e(String s) {
        Log.e(TAG, s);
    }

}
