package mis.animsto.figures;

import java.io.IOException;
import java.io.InputStream;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.Log;

public class FigImage {

	private final String TAG = this.getClass().getSimpleName();
	final String name;
	final Bitmap bmp;
	public Rect rect = null;
	public Rect drawnRect = new Rect();
	
	public FigImage(String namea, Context ca) {
		name = namea;
		Resources res = ca.getResources();
		int pictId = res.getIdentifier(name, "drawable", ca.getPackageName());
		Log.d(TAG, "For image " + name + " obtained Id: " + pictId);
		InputStream is = ca.getResources().openRawResource(pictId);
        try {
            bmp = BitmapFactory.decodeStream(is);
        } catch (Exception e) {
            Log.e("loadTexture", "Opening image " + name + " failed, exception: " + e);
            throw new RuntimeException("Opening bitmap failed", e);
        } finally {
            try {
                is.close();
            } catch(IOException e) {
                // Ignore.
            }
        }
	}
	
	public void drawImage(Canvas c, Paint p, int x0, int y0, double scale) {
		Rect r;
		if (rect != null) {
			r = rect;
		} else {
			drawnRect.left = (int)(x0 - bmp.getWidth()*scale/2);
			drawnRect.right = (int)(x0 + bmp.getWidth()*scale/2);
			drawnRect.top = (int)(y0 - bmp.getHeight()*scale/2);
			drawnRect.bottom = (int)(y0 + bmp.getHeight()*scale/2);
			r = drawnRect;
		}
		c.drawBitmap(bmp, null, r, p);		
	}

	public Rect getRect() {
		return drawnRect;
	}

	public void setRect(Rect rect) {
		this.rect = rect;
	}

	public String getName() {
		return name;
	}

}
