package mis.animsto;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;

/**
 * Configuration for Animation story, singleton
 * @author misha
 *
 */
public class AnimStoryConf {
	private final String TAG = this.getClass().getSimpleName();
	public static final String PREFS_NAME = "mis.animsto.AnimEdit";
	public static final String DEFAULT_STORY_NAME = "new_story";
	
	private String currentStory = "";

	private static AnimStoryConf instance = null;
	
	private AnimStoryConf() {
		// do nothing
	}
	
	public static synchronized AnimStoryConf getInstance() {
		if (instance == null) {
			instance = new AnimStoryConf();
		}
		return instance;
	}

	public void initDefaultConf(Context c) {
		currentStory = "";
	}
	
	public void confFromBundle(Bundle b) {
		currentStory = b.getString("current_story");
		if (currentStory == null) {
			currentStory = ""; 
		}
		Log.d(TAG, "confFromBundle(), loaded values from bundle");
	}
	
	public void confFromPrefs(SharedPreferences b) {
		currentStory = b.getString("current_story", "");
		Log.d(TAG, "confFromPrefs(), loaded values from shared preferences");
	}
	
	public void confToBundle(Bundle b) {
		b.putString("current_story", currentStory);
	}
	
	public void confToPrefs(SharedPreferences sp) {
		SharedPreferences.Editor b = sp.edit();
		b.putString("current_story", currentStory);
		b.commit();
	}


	public String getCurrentStory() {
		return currentStory;
	}

	public void setCurrentStory(String currentStory) {
		this.currentStory = currentStory;
	}

	public void setDefaultCurrentStory() {
		this.currentStory = DEFAULT_STORY_NAME;
	}

}
