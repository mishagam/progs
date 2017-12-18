package com.example.misha.asmisatest;

import java.util.Locale;

import android.content.Context;
import android.speech.tts.TextToSpeech;
import android.util.Log;

public class MisaTts implements TextToSpeech.OnInitListener{
    private final static String TAG = "MisTTS";
    private TextToSpeech tts = null;
    private final Context myContext;

    public MisaTts(Context ca) {
        myContext = ca;
    }

    public void speak(String korText) {
        if (tts==null) {
            tts = new TextToSpeech(myContext, this);
        }
        speakOut(korText); // doesn't work so well
    }

    @Override
    public void onInit(int status) {

        if (status == TextToSpeech.SUCCESS) {

            int result = tts.setLanguage(Locale.KOREAN);

            if (result == TextToSpeech.LANG_MISSING_DATA
                    || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                Log.e("TTS", "This Language is not supported");
            } else {
                Log.d(TAG, "setLanguage passed");
                // speakOut();
            }

        } else {
            Log.e(TAG, "Initilization Failed!");
        }

    }
    private void speakOut(String text) {
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null);
        Log.d(TAG, "speak(" + text + ") passed");
    }

    public void onDestroy() {
        // Don't forget to shutdown tts!
        if (tts != null) {
            tts.stop();
            tts.shutdown();
        }
    }


}
