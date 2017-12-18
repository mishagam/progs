package mis.android;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup.LayoutParams;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RelativeLayout;
import android.widget.TextView;

public class TestSpeedActivity extends Activity {
    
    private static final String TAG = "RelativeLayoutActivity"; 
    RelativeLayout view = null;
    RelativeLayout lastChild = null;
    
    OnClickListener startSpeedListener = new OnClickListener() {
        @Override
        public void onClick(View v) {
            startSpeedTest();            
        }        
    };

    public void onCreate(Bundle icicle) {
        super.onCreate(icicle);     
        Log.i(TAG, "TestSpeedActivity onCreate started");
        LayoutInflater factory = LayoutInflater.from(this);        
        // Set layout
        view = (RelativeLayout)factory.inflate(R.layout.speedtest, null);
        setContentView(view);
        lastChild = view;
        
        Button startTestButton = (Button)findViewById(R.id.button_start_test);
        startTestButton.setOnClickListener(startSpeedListener);
        Log.i(TAG, "TestSpeedActivity onCreate ended");
    }  
    
    void startSpeedTest() {
        Log.i(TAG, "startSpeedTest clicked");
        TextView integerSpedResultsView = (TextView)findViewById(R.id.integer_speed_results);
        TextView longSpedResultsView = (TextView)findViewById(R.id.long_speed_results);
        TextView floatSpedResultsView = (TextView)findViewById(R.id.float_speed_results);
        TextView doubleSpedResultsView = (TextView)findViewById(R.id.double_speed_results);
        TextView stringSpedResultsView = (TextView)findViewById(R.id.string_speed_results);
        EditText repEdit = (EditText)findViewById(R.id.repeat_number);
        int nrep = Integer.parseInt(repEdit.getText().toString());
        
        // integers
        long m0, m1;
        m0 = System.currentTimeMillis();
        integerSpeed(nrep);
        m1 = System.currentTimeMillis();
        integerSpedResultsView.setText((m1 - m0) + " millis");
        Log.i(TAG, "Integer passed");
        
        // integers
        m0 = System.currentTimeMillis();
        longSpeed(nrep);
        m1 = System.currentTimeMillis();
        longSpedResultsView.setText((m1 - m0) + " millis");
        Log.i(TAG, "Long passed");
        
        // integers
        m0 = System.currentTimeMillis();
        floatSpeed(nrep);
        m1 = System.currentTimeMillis();
        floatSpedResultsView.setText((m1 - m0) + " millis");
        Log.i(TAG, "Float passed");
        
        // integers
        m0 = System.currentTimeMillis();
        doubleSpeed(nrep);
        m1 = System.currentTimeMillis();
        doubleSpedResultsView.setText((m1 - m0) + " millis");
        Log.i(TAG, "Double passed");
        
        // integers
        m0 = System.currentTimeMillis();
        stringSpeed(nrep);
        m1 = System.currentTimeMillis();
        stringSpedResultsView.setText((m1 - m0) + " millis");
        Log.i(TAG, "String passed");
        
        Log.i(TAG, "startSpeedTest passed");
    }
    
    int integerSpeed(int nrep) {
        int a=0,sm=0;
        for (int r =0; r<nrep; r++) {
            for (int i=0; i<10000; i++) {
                sm += a*(a + 176);
                a++;
            }
        }
        return sm;
    }
    
    long longSpeed(int nrep) {
        long a=0,sm=0;
        for (int r =0; r<nrep; r++) {
            for (int i=0; i<10000; i++) {
                sm += a*a + 12345678901234L;
                a++;
            }
        }
        return sm;
    }
    
    float floatSpeed(int nrep) {
        float a=0,sm=0;
        for (int r =0; r<nrep; r++) {
            for (int i=0; i<10000; i++) {
                sm += a*a + 0.108;
                a += 1.12;
            }
        }
        return sm;
    }
    
    double doubleSpeed(int nrep) {
        double a=0,sm=0;
        for (int r =0; r<nrep; r++) {
            for (int i=0; i<10000; i++) {
                sm += a*a + 0.0087;
                a += 0.000765;
            }
        }
        return sm;
    }
    
    String stringSpeed(int nrep) {
        String a="a",sm="";
        for (int r =0; r<nrep; r++) {
            sm = "";
            for (int i=0; i<10; i++) {
                sm += a;
            }
        }
        return sm;
    }
    
    
}