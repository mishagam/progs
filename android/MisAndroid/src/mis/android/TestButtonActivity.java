package mis.android;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.util.Date;

public class TestButtonActivity extends Activity implements View.OnClickListener {
    Button  btn;
    private static final String TAG = TestButtonActivity.class.getSimpleName();

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle icicle) {
        Log.d(TAG, "onCreate started");
        super.onCreate(icicle);
        setContentView(R.layout.table);       
        btn=(Button)findViewById(R.id.button);
        btn.setOnClickListener(this);
        updateTime();
        
        // test reading file
        int fileId = R.raw.misdata;
        InputStream is = getResources().openRawResource(fileId);
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        String s = "";
        try {
            String fileName = "out.txt";
            s = reader.readLine();
            reader.close();
            OutputStream os = openFileOutput(fileName, 0);
            OutputStreamWriter writer = new OutputStreamWriter(os);
            writer.write("Hello to File from android\n");
            writer.write("Hello to File from android\n");
            writer.write("Hello to File from android\n");
            writer.write("Hello to File from android\n");
            writer.close();
            File f = getFilesDir  ();
            Log.d(TAG, "dir: " + f.getAbsolutePath());      
            InputStream ifs = openFileInput(fileName);
            reader = new BufferedReader(new InputStreamReader(ifs));
            s = reader.readLine();
            reader.close();
            Log.d(TAG, "Read line " + s);
        } catch (IOException e) {
            Log.e(TAG, "TestButtonActivity read string failed " + e);
        }
        Log.d(TAG, "TestButtonActivity read string " + s);
        
        
        Log.d(TAG, "TestButtonActivity onCreate ended");
    }

    public void onClick(View view) {
        Log.d(TAG, "onClick called");
        updateTime();
    }

    private void updateTime() {
        btn.setText("MisDate " + (new Date().toString()));
    }
}