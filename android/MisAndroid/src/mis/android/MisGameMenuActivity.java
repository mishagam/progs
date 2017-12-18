package mis.android;

import mis.android.game.MisGameActivity;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class MisGameMenuActivity extends Activity {
    private static final String TAG = "MisGameMenuActivity";

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle icicle) {
        Log.d(TAG, "onCreate started");
        super.onCreate(icicle);
        setContentView(R.layout.main);   
        
        Button btn = (Button)findViewById(R.id.scroll_test);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Test Scrolll called");
                Context context = MisGameMenuActivity.this;
                Intent intent = new Intent(context, TestScrollActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (Button)findViewById(R.id.test_rendzu_canvas);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "onClick test_table called");
                Context context = MisGameMenuActivity.this;
                Intent intent = new Intent(context, RendzuCanvasActivity.class);
                context.startActivity(intent);
            }
        });

        btn = (Button)findViewById(R.id.test_graphics);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "test_graphics onClick called");
                Context context = MisGameMenuActivity.this;
                Intent intent = new Intent(context, MisOpenGlActivity.class);
                context.startActivity(intent);
            }
        });

        btn = (Button)findViewById(R.id.test_graphics_simple);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "test_graphics onClick called");
                Context context = MisGameMenuActivity.this;
                Intent intent = new Intent(context, SimpleFastGlActivity.class);
                // Intent intent = new Intent(context, MisOpenGlActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (Button)findViewById(R.id.get_image);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Get Image called");
                Context context = MisGameMenuActivity.this;
                Intent intent = new Intent(context, GetImageActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (Button)findViewById(R.id.speed_test);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "TestSpeedActivity called");
                Context context = MisGameMenuActivity.this;
                Intent intent = new Intent(context, TestSpeedActivity.class);
                context.startActivity(intent);
            }
        });
    }
}