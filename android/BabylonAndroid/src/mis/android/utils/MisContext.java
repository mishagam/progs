package mis.android.utils;

import android.content.Context;

/**
 * dummy class to use instead of android context.
 * 
 * @author TCSDEVELOPER
 */
public class MisContext {
    Context context;
    
    public MisContext(Context c) {
        context = c;
    }
    
    public Context getContext() {
        return context;
    }   
}
