package com.example.misha.asmisatest;

/**
 * Created by misha on 9/14/17.
 */
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;


public class TrySendEmail {
    private final static String TAG = TrySendEmail.class.getSimpleName();

    public void trySend(Context co) {
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("message/rfc822");
        intent.putExtra(Intent.EXTRA_EMAIL, "emailaddress@emailaddress.com");
        intent.putExtra(Intent.EXTRA_SUBJECT, "Subject");
        intent.putExtra(Intent.EXTRA_TEXT, "I'm email body.");

        Activity act = (Activity)co;
        act.startActivity(Intent.createChooser(intent, "Send Email"));
    }

}
