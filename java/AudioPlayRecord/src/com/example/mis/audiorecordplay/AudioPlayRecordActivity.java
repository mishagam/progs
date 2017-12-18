package com.example.mis.audiorecordplay;

import android.os.Bundle;
import android.app.Activity;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.Button;

public class AudioPlayRecordActivity extends Activity {
	private final String TAG = this.getClass().getSimpleName();
	
	Button recordBtn;
	Button playBtn;
	Button stopBtn;
	APLayRecord aPlayRec = new APLayRecord();

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	    this.setContentView(R.layout.activity_audio_play_record);
	    recordBtn = (Button)this.findViewById(R.id.record_btn);
	    playBtn = (Button)this.findViewById(R.id.play_btn);
	    stopBtn = (Button)this.findViewById(R.id.stop_btn);
	    setRecordPlayListeners();
	}
	
	private void setRecordPlayListeners() {
	    recordBtn.setOnClickListener(new View.OnClickListener() {			
			@Override
			public void onClick(View v) {
				aPlayRec.startRecord();
			}
		});
	    stopBtn.setOnClickListener(new View.OnClickListener() {			
			@Override
			public void onClick(View v) {
				aPlayRec.stopRecord();
			}
		});
	    playBtn.setOnClickListener(new View.OnClickListener() {			
			@Override
			public void onClick(View v) {
				Log.d(TAG, "startPlay() called");
				aPlayRec.startPlay();
			}
		});
		
	}

}
