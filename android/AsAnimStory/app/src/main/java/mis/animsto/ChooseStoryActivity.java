package mis.animsto;

import mis.animsto.story.AnimStory;
import mis.pentamino.PentaSolveActivity;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.TableLayout;
import android.widget.TableRow;

import java.util.ArrayList;
import java.util.List;

public class ChooseStoryActivity extends Activity {

    public static final String TAG = "ChooseStoryActivity";
    
    AnimStoryConf conf = AnimStoryConf.getInstance();
    SharedPreferences prefs;
    public String storiesFolder = "";
    public boolean ADD_PENTAMINO = true;
    
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		Log.i(TAG, "onCreate() started as, savedState: " + savedInstanceState);
		final Context context = ChooseStoryActivity.this;
		if (savedInstanceState != null) {
			conf.confFromBundle(savedInstanceState);
		} else {
			conf.initDefaultConf(this);
		}

		prefs = this.getSharedPreferences(AnimStoryConf.PREFS_NAME, MODE_PRIVATE);
		conf.confFromPrefs(prefs);
		if (!conf.getCurrentStory().equals(AnimStoryConf.DEFAULT_STORY_NAME)) {
			// we have saved story name
            Intent intent = new Intent(context, AnimEditActivity.class);
            context.startActivity(intent);
            return;
		}
		setContentView(R.layout.activity_choose_story_tab);

		final TableLayout tl = (TableLayout)this.findViewById(R.id.select_story_table);
		Button btn = (Button)findViewById(R.id.new_story);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "New story click");                
                conf.setCurrentStory(AnimStoryConf.DEFAULT_STORY_NAME);
                Intent intent = new Intent(context, AnimEditActivity.class);
                context.startActivity(intent);
            }
        });	
        
        // adding list of existing stories
        String []files = getStoriesList();
        for (String fn : files) {
        	final TableRow tr = new TableRow(this);
        	tr.setPadding(2, 2, 2, 2);
        	
        	// start story button
        	btn = new Button(this);  
        	btn.setText(fn);
        	final String storyName = fn;
            btn.setOnClickListener(new View.OnClickListener () {
                public void onClick(View view) {
                    Log.d(TAG, "Opening story " + storyName);                
                    conf.setCurrentStory(storyName);
                    Intent intent = new Intent(context, AnimEditActivity.class);
                    context.startActivity(intent);
                }
            });	
            tr.addView(btn);
            
            // delete button
        	btn = new Button(this);  
        	btn.setText("Delete");
            btn.setOnClickListener(new View.OnClickListener () {
                public void onClick(View view) {
                    Log.d(TAG, "Deleting story " + storyName);                
                    if (deleteStory(storyName)) {
                        tl.removeView(tr);
                    }
                }
            });	
            tr.addView(btn);
            
            // adding row to table
            tl.addView(tr);        	
        }
        // add Pentamino
        if (ADD_PENTAMINO) {
        	// adding view with pentamino play
        	final TableRow tr = new TableRow(this);
        	tr.setPadding(2, 2, 2, 2);
        	
        	// start story button
        	btn = new Button(this);  
        	btn.setText("Pentamino game");
            btn.setOnClickListener(new View.OnClickListener () {
                public void onClick(View view) {
                    Log.d(TAG, "Starting Pentamino");                
                    Intent intent = new Intent(context, PentaSolveActivity.class);
                    context.startActivity(intent);
                }
            });	
            tr.addView(btn);
            // adding row to table
            tl.addView(tr);              	
        }        
    }
	
	private String[] getStoriesList() {
		// working with list of saved stories
		String[] rawFiles = this.fileList();
		Log.d(TAG, "getStoriesList(). We have " + rawFiles.length + " raw files");
        List<String> fl = new ArrayList<>();
		for (String fnm : rawFiles) {
			Log.d(TAG, "File " + fnm);
            if (fnm.endsWith(AnimStory.STORY_EXT)) {
                fl.add(fnm);
            }
		}
		return fl.toArray(new String[0]);
	}
	
	private boolean deleteStory(String name) {
		boolean bret = this.deleteFile(name);
		Log.d(TAG, "Deleting story " + name + " returned " + bret);
		return bret;
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.activity_choose_story, menu);
		return true;
	}

}
