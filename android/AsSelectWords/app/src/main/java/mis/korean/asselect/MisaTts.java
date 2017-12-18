package mis.korean.asselect;

import java.util.Locale;

import android.content.Context;
import android.speech.tts.TextToSpeech;
import android.util.Log;

public class MisaTts implements TextToSpeech.OnInitListener{
	private final static String TAG = "MisTTS";
	private TextToSpeech tts = null;
	private final Context myContext;
	private String text = "";
	boolean canSpeak = true;
	
	public MisaTts(Context ca) {
		myContext = ca;
		tts = new TextToSpeech(myContext, this);
	}
	
	public void speak(String korText) {
		this.text = korText;
		speakOut();
	}
	
    @Override
    public void onInit(int status) { 
        if (status == TextToSpeech.SUCCESS) { 
            int result = tts.setLanguage(Locale.KOREAN); 
            if (result == TextToSpeech.LANG_MISSING_DATA
                    || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                Log.e("TTS", "This Language is not supported");
                canSpeak = false;
            } else {
                Log.d(TAG, "setLanguage passed");
                canSpeak = true;
                // speakOut();
            }
 
        } else {
            Log.e(TAG, "Initilization Failed!");
        }
 
    }
    private void speakOut() {    	
    	if (canSpeak) {
    		tts.speak(this.text, TextToSpeech.QUEUE_ADD, null);
    	}
    }
	
	public void onDestroy() {
        // Don't forget to shutdown tts!
        if (tts != null) {
            tts.stop();
            tts.shutdown();
        }
    }
}
