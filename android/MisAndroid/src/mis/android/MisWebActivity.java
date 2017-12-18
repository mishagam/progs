package mis.android;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;

public class MisWebActivity extends Activity {

    private static final String TAG = TestButtonActivity.class.getSimpleName();
    
    WebView browser;

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle icicle) {
        Log.d(TAG, "onCreate started");
        super.onCreate(icicle);
        this.setContentView(R.layout.webview);
        browser = (WebView)this.findViewById(R.id.WebView01);
        browser.loadUrl("http://www.mishagam.com/nadia");

        Log.d(TAG, "MisWebActivity onCreate ended");
    }
}