package mis.android.game;

import mis.babylon.game.GameSelectButton;
import mis.babylon.utils.GameOptions;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;

public class WorldSelectActivity extends Activity {
    
    public static final String TAG = "WorldSelectActivity";
    
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game_select);
        
        final GameOptions opts = GameOptions.getInstance();
        ImageButton btn = (ImageButton)findViewById(R.id.log_cabin_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Log Cabin delected");
                Context context = WorldSelectActivity.this;
                opts.gameSelection = "Log Cabin Game selected";
                GameActivity.worldFileName = "world_log";
                Intent intent = new Intent(context, GameActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (ImageButton)findViewById(R.id.brick_home_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Brick Home selected");
                Context context = WorldSelectActivity.this;
                opts.gameSelection = "Brick Home Game selected";
                GameActivity.worldFileName = "world_brick";
                Intent intent = new Intent(context, GameActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (ImageButton)findViewById(R.id.test_game_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Brick Home selected");
                Context context = WorldSelectActivity.this;
                opts.gameSelection = "Brick Home Game selected";
                Intent intent = new Intent(context, TestGameActivity.class);
                context.startActivity(intent);
            }
        });
    }
}