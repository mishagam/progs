package mis.games.rendzu.android;

import java.util.Properties;

import mis.games.utils.GameVariant;
import mis.games.utils.RendzuOptions;
import mis.games.utils.RendzuStatistics;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class GameMenuActivity extends Activity {
	public static final String TAG = GameMenuActivity.class.getSimpleName();
    public static RendzuOptions opts = null;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		Log.d(TAG, "onCreate started");
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main_menu);
        optsFromBundle(savedInstanceState);
		
        Button btn = (Button)findViewById(R.id.play_game_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Test Scrolll called");
                Context context = GameMenuActivity.this;
                Intent intent = new Intent(context, AndroidRendzuActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (Button)findViewById(R.id.options_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "onClick options clicked");
                Context context = GameMenuActivity.this;
                Intent intent = new Intent(context, GameOptionsActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (Button)findViewById(R.id.menu_stats_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "onClick Stats clicked");
                Context context = GameMenuActivity.this;
                Intent intent = new Intent(context, GameStatisticsActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (Button)findViewById(R.id.about_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "onClick about clicked");
                Context context = GameMenuActivity.this;
                Intent intent = new Intent(context, AboutActivity.class);
                context.startActivity(intent);
            }
        });
        
        btn = (Button)findViewById(R.id.exit_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "onClick finish");
                GameMenuActivity.this.finish();
            }
        });
	}

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        optsToBundle(outState);
        super.onSaveInstanceState(outState);
    }
    
    public void optsFromBundle(Bundle b) {
        Log.i(TAG, "optsFromBundle called");
        if (opts == null) {
            opts = RendzuOptions.getInstance();
        }
        if (b == null) {
            // we use opts default values
            return;
        }
        opts.compFirst = b.getBoolean("compFirst", true);
        opts.computerDelayMillis = b.getInt("computerDelayMillis", 500);
        opts.timePerMove = b.getInt("timePerMove", 5000);
        opts.userName = System.getProperty("user.name");
        opts.connectToServer = b.getBoolean("connectToServer", true);
        opts.gameServerUrl = b.getString("gameServerUrl");
        if (true || opts.gameServerUrl == null || opts.gameServerUrl.length() == 0) {
            opts.gameServerUrl = RendzuOptions.SHUTTLE_SERVER_URL;
        }
        String sVar = b.getString("gameVar");
        if (sVar == null) {
            sVar = "HARD";
        }
        opts.gameVar = GameVariant.valueOf(sVar);
        opts.remoteGameId = b.getString("remoteGameId");
        
        // restoring statistics
        RendzuStatistics stats = RendzuStatistics.getInstance();        
        statsFromBundle(stats, b);
    }
    
    public void optsToBundle(Bundle b) {
        Log.i(TAG, "optsToBundle() called");
        if (b == null) {
            throw new IllegalArgumentException("Illegal null bundle");
        }
        b.putBoolean("compFirst", opts.compFirst);
        b.putInt("computerDelayMillis", opts.computerDelayMillis);
        b.putInt("timePerMove", opts.timePerMove);
        b.putBoolean("connectToServer", opts.connectToServer);
        b.putString("gameServerUrl", opts.gameServerUrl);
        b.putString("gameVar", opts.gameVar.name());
        b.putString("remoteGameId", opts.remoteGameId);
        
        // saving statistics
        RendzuStatistics stats = RendzuStatistics.getInstance();        
        statsToBundle(stats, b);
    }
    
    public void statsToBundle(RendzuStatistics rs, Bundle b) {
        b.putInt("totalEasy",  rs.totalEasy);
        b.putInt("manWonEasy", rs.manWonEasy);
        b.putInt("totalHard",  rs.totalHard);
        b.putInt("manWonHard", rs.manWonHard);
    }
    
    public void statsFromBundle(RendzuStatistics rs, Bundle b) {
        rs.totalEasy = b.getInt("totalEasy");
        rs.manWonEasy = b.getInt("ManWonEasy");
        rs.totalHard = b.getInt("totalHard");
        rs.manWonHard = b.getInt("ManWonHard");
    }
}
