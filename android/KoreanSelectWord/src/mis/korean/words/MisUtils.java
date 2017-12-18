package mis.korean.words;

import java.io.IOException;
import java.io.InputStream;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.util.Log;

public class MisUtils {
    
    public static InputStream streamFromRes(Context c, int resId) throws IOException {
        InputStream is = null;
        
        // removing file extensions for android
        Log.d("MisUtils", "streamFromRes() called, resId = " + resId);
        is = c.getResources().openRawResource(resId);
        return is;
    }

	
	public static void showAlertMessage(String msg, Context c) {
    	AlertDialog.Builder builder = new AlertDialog.Builder(c);
    	builder.setTitle(msg);
    	builder.setCancelable(true);
    	builder.setNegativeButton("Close", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                 dialog.cancel();
            }
        });

    	AlertDialog alert = builder.create();
    	alert.show();
	}

}
