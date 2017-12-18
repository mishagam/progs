package mis.games.rendzu.android;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;

public class AboutActivity extends Activity {
	
    private static final String TAG = AboutActivity.class.getSimpleName();
    
    WebView browser;

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle icicle) {
        Log.d(TAG, "onCreate started");
        super.onCreate(icicle);
        this.setContentView(R.layout.rendzu_about);
        browser = (WebView)this.findViewById(R.id.AboutBrowserView);
        String summary = "<html><head> About Game </head><body>"
        	+ "<h1>Cros Nil Unlimited Game version 1.1.12</h1>"
        	+ "You can see beautiful game Cros Nil unlimited developed by MG and AK.<br>"
        	+ "You should try to build row of 5 crosses (if you paly first) or nils - 0. "
        	+ "Game is variant of Gomoku or Rendju game on paper-like 19 x 19 field.</body></html>";
        browser.loadData(summary, "text/html", "utf-8");
        Log.d(TAG, "AboutActivity onCreate ended");
    }

}
