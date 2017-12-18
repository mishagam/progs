package mis.android;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;

import android.app.Activity;
import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;

public class GetImageActivity extends Activity {
    EditText inputUrl;
    OnClickListener getImageBtnOnClick = new OnClickListener() {
        public void onClick(View view) {
            Context context = view.getContext();
            Editable ed = inputUrl.getText();
            String sImageUrl = "http://mishagam.com/olgamitina/P1030931sm.JPG"; // ed.toString()
            Drawable image = ImageOperations(context,sImageUrl,"image.jpg");
            ImageView imgView = new ImageView(context);
            imgView = (ImageView)findViewById(R.id.ImageView01);
            imgView.setImageDrawable(image);
        }
    };

    public void onCreate(Bundle icicle) {
        super.onCreate(icicle);
        setContentView(R.layout.getimage);
        inputUrl = ((EditText)findViewById(R.id.EditText01));
        inputUrl.setSingleLine();
        inputUrl.setTextSize(11);
        Button getImageButton = (Button)findViewById(R.id.Button01);
        getImageButton.setOnClickListener(getImageBtnOnClick);

    }   

    private Drawable ImageOperations(Context ctx, String url, String saveFilename) {
        try {
            InputStream is = (InputStream) this.fetch(url);
            Drawable d = Drawable.createFromStream(is, "src");
            return d;
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return null;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public Object fetch(String address) throws MalformedURLException,IOException {
        URL url = new URL(address);
        Object content = url.getContent();
        return content;
    }
}