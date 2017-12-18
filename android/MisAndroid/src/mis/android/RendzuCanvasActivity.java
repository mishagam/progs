package mis.android;

import android.app.Activity;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.os.Bundle;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.HorizontalScrollView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;
import android.widget.TableRow.LayoutParams;

public class RendzuCanvasActivity extends Activity  {
    Button btn;
    public static final String TAG = RendzuCanvasActivity.class
            .getSimpleName();

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle icicle) {
        Log.d(TAG, "onCreate started");
        super.onCreate(icicle);
        setContentView(R.layout.rendzu_canvas);
        LinearLayout ll = (LinearLayout) findViewById(R.id.rendzu_canvas_layout);
        ll.setVerticalFadingEdgeEnabled(false);
        ScrollView scrollV = (ScrollView) findViewById(R.id.ScrollView01);
        HorizontalScrollView scrollH = (HorizontalScrollView) findViewById(R.id.HorizontalScrollView01);
        RendzuCanvasView view = new RendzuCanvasView(this, scrollV, scrollH);
        ll.addView(view);
    }
}

class RendzuCanvasView extends View implements View.OnClickListener {

    public static final String TAG = RendzuCanvasView.class.getSimpleName();

    int step = 40;
    int stepmin = 18;
    float coefBigSmall = ((float)step) / stepmin;
    int nx = 19;
    int ny = 19;
    int sx = nx*step+5;
    int sy = ny*step+5;
    int sxmin = nx*stepmin+5;
    int symin = ny*stepmin+5;
    ScrollView scrollV;
    HorizontalScrollView scrollH;
    boolean bigScreen = true;
    int lastX, lastY;

    public RendzuCanvasView(Context context,ScrollView scrollV, HorizontalScrollView scrollH) {
        super(context);
        this.scrollV=scrollV;
        this.scrollH=scrollH;
        scrollV.setVerticalFadingEdgeEnabled(false);
        scrollV.setHorizontalFadingEdgeEnabled(false);
        scrollH.setVerticalFadingEdgeEnabled(false);
        scrollH.setHorizontalFadingEdgeEnabled(false);
        this.setOnClickListener(this);
    }
    
    @Override
    public void onClick(View v) {
        Log.i(TAG, "RendzuCanvasView.onClick() called, bigScreen = " + bigScreen);
        bigScreen = !bigScreen;
        this.invalidate();
        this.requestLayout();
        if (bigScreen) {
            int xx = (int)(lastX * coefBigSmall);
            int yy = (int)(lastY * coefBigSmall);
            this.scrollTo(xx, yy);
        } else {
            scrollTo(0,0);
        }
    }

    @Override
    protected void onDraw(Canvas c) {
        Paint p = new Paint(Color.BLACK);
        if (bigScreen) {
            p.setColor(Color.LTGRAY);
        } else {
            p.setColor(Color.YELLOW);
        }
        c.drawPaint(p);
        p.setColor(Color.BLUE);
        int yy = (bigScreen ? sy : symin);
        int xx = (bigScreen ? sx : sxmin);
        c.drawLine(10,10,xx/3,yy/3, p);        
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        Log.i(TAG, "onMeasure() called, wid, hei = " + widthMeasureSpec + " " + heightMeasureSpec);
        if (bigScreen) {
            setMeasuredDimension(sx, sy);
        } else {
            setMeasuredDimension(sxmin, symin);
        }
     }
    
    @Override
    protected int getSuggestedMinimumHeight() {
        return (bigScreen ? sy : symin);
    }

    @Override
    protected int getSuggestedMinimumWidth() {
        return (bigScreen ? sx : sxmin);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        float x = event.getX();
        float y = event.getY();
        int action = event.getAction();
        lastX = (int)x;
        lastY = (int)y;
        
        int scV = scrollV.getScrollY();
        int scH = scrollH.getScrollX();
        
        Log.i("RendzuCanvasView", "onTouchEvent(), action, x, y = " 
                + action + " " + x + " " + y);
        Log.i("RendzuCanvasView", "onTouchEvent(), scV, scH = " 
                + scV + " " + scH);
        return super.onTouchEvent(event);
    }
    
}