package mis.animsto;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.TextView;

import mis.animsto.story.AnimStory;

/** activity to show current story as pretty formatted LOGO list */
public class ShowStoryActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_show_story);
        AnimStory story = StoryEditView.GetCurrentStoryView().story;
        String storyText = story.prettyPrint();
        TextView tview = (TextView)this.findViewById(R.id.word_weights_txt);
        tview.setText(storyText);
    }
}
