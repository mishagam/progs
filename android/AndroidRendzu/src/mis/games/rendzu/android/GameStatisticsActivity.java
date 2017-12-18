package mis.games.rendzu.android;

import mis.games.rendzu.client.RendzuClient;
import mis.games.utils.GameVariant;
import mis.games.utils.MisLog;
import mis.games.utils.RendzuOptions;
import mis.games.utils.RendzuStatistics;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.WebView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.AdapterView;

public class GameStatisticsActivity extends Activity {
	public static final String TAG = GameStatisticsActivity.class.getSimpleName();
	RadioGroup firstGroup = null;
    RadioGroup difficultyGroup = null;
    RadioGroup timeGroup = null;
	RendzuOptions opts = null;	
	RendzuClient client = null;
	RendzuStatistics stats = null;
	WebView browser;

	   
    final String HTML_FORM = "<html> <body> <table> <thead>"
        + "<tr> <th>Level<th> <th> Total </th> <th> Man<br>Won </th> <th> Comp<br>Won </th> <th> Win<br>Percent </th> </tr>"
        + "</thead> <tbody>"
        + "<tr> <td>Easy<td> <td> %d </td> <td> %d </td> <td> %d </td> <td> %5.1f </td> </tr>"
        + "<tr> <td>Hard<td> <td> %d </td> <td> %d </td> <td> %d </td> <td> %5.1f </td> </tr>"
        + "</tbody></table></body></html>";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
        Log.d(TAG, "onCreate started");
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.stats_layout);
        browser = (WebView)this.findViewById(R.id.StatisticsView);
        stats = RendzuStatistics.getInstance();
        String summary = getStatsHtml();
        browser.loadData(summary, "text/html", "utf-8");
        
        Button btn = (Button)findViewById(R.id.stats_reset_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Reset stats called");
                Context context = GameStatisticsActivity.this;
                resetStat();
            }
        });
        
        btn = (Button)findViewById(R.id.stats_ok_btn);
        btn.setOnClickListener(new View.OnClickListener () {
            public void onClick(View view) {
                Log.d(TAG, "Stats OK clicked");
                Context context = GameStatisticsActivity.this;
                Intent intent = new Intent(context, GameMenuActivity.class);
                context.startActivity(intent);
            }
        });
        Log.d(TAG, "GameStatisticsActivity onCreate ended");
    }
    
    private String getStatsHtml() {
        double percHard = (stats.totalHard == 0 ? 0.0 : (100.0 * stats.manWonHard) / stats.totalHard);
        double percEasy = (stats.totalEasy == 0 ? 0.0 : (100.0 * stats.manWonEasy) / stats.totalEasy);
        return  String.format(HTML_FORM, 
                stats.totalEasy, stats.manWonEasy, stats.totalEasy - stats.manWonEasy, percEasy,
                stats.totalHard, stats.manWonHard, stats.totalHard - stats.manWonHard, percHard);
    }
    
    private void resetStat() {
        stats.reset();
        String summary = getStatsHtml();
        browser.loadData(summary, "text/html", "utf-8");
    }
}
