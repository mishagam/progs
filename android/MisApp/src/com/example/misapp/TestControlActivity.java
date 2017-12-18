package com.example.misapp;

import com.example.misapp.util.SystemUiHider;

import android.annotation.TargetApi;
import android.app.Activity;
import android.app.AlertDialog;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 * 
 * @see SystemUiHider
 */
public class TestControlActivity extends Activity {
	public static final String TAG = TestControlActivity.class.getSimpleName();

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.activity_test_control);
        
		
        Button btn = (Button)findViewById(R.id.nicky_button);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Koliasik button pressed");
                showNickyMessage();
            }
        });

	}
    
    void showNickyMessage() {
    	AlertDialog alertDialog;
    	alertDialog = new AlertDialog.Builder(this).create();
    	alertDialog.setTitle("Nicky message");
    	alertDialog.setMessage("Nicky pressed button.now bie!!!");
    	alertDialog.show();
    }
}
