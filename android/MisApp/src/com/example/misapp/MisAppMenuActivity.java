package com.example.misapp;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 * 
 * @see SystemUiHider
 */
public class MisAppMenuActivity extends Activity {
	public static final String TAG = MisAppMenuActivity.class.getSimpleName();

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.activity_mis_app_menu);
		
        Button btn = (Button)findViewById(R.id.button_calc);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Test Scrolll called");
                Context context = MisAppMenuActivity.this;
                Intent intent = new Intent(context, MisCalcActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (Button)findViewById(R.id.button_test);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "onClick options clicked");
                Context context = MisAppMenuActivity.this;
                Intent intent = new Intent(context, TestControlActivity.class);
                context.startActivity(intent);
            }
        });

	}
}
