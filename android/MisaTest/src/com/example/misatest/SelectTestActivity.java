package com.example.misatest;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class SelectTestActivity extends Activity {
	
	private MisaTts misTts = null;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_select_test);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.select_test, menu);
		misTts = new MisaTts(this);
		String text = "잠깐만요";
		misTts.speak(text);
		return true;
	}

	@Override
	protected void onDestroy() {
		if (misTts != null) {
			misTts.onDestroy();
		}
		super.onDestroy();
	}
	

}
