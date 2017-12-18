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
import android.view.View.MeasureSpec;
import android.widget.Button;
import android.widget.HorizontalScrollView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;
import android.widget.TableRow.LayoutParams;

public class TestScrollActivity extends Activity {
    Button btn;
    private static final String TAG = TestScrollActivity.class
            .getSimpleName();

    public static final int MIS_ID_START = 10000;

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle icicle) {
        Log.d(TAG, "TestScrollActivity onCreate started");
        super.onCreate(icicle);
        setContentView(R.layout.scroll_test);
        HorizontalScrollView scrollH = (HorizontalScrollView) findViewById(R.id.HorizontalScrollView02);
        LinearLayout ll = (LinearLayout)findViewById(R.id.scroll_layout);
        ScrollTestView view = new ScrollTestView(this, scrollH);
        STView tv = new STView(this, scrollH);
        tv.setText("aloasjdakldj_salf_jsadlfdsoiah_foaserfkdshfn_lkhs djshf.dslid df.g hadfgiladf hglsd g");
        tv.setWidth(LayoutParams.WRAP_CONTENT);
        ll.addView(tv);
    }
}

class STView extends TextView implements View.OnClickListener {
    public static final String TAG = STView.class.getSimpleName();
    int sx = 900;
    int sy = 200;
    int lastX = 0;
    HorizontalScrollView scrollH;


    public STView(Context context, HorizontalScrollView scrollH) {
        super(context);
        this.setOnClickListener(this);
        this.scrollH = scrollH;
    }
    
    @Override
    public void onClick(View v) {
        Log.i(TAG, "STView.onClick() called,lastX = " + lastX);
        scrollH.scrollTo(lastX, 0);
        lastX += 100;
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        Log.i("STView", "onMeasure() called, wid, hei = " + widthMeasureSpec + " " + heightMeasureSpec);
        setMeasuredDimension(sx, sy);
     }
    
    @Override
    protected int getSuggestedMinimumHeight() {
        return sy;
    }

    @Override
    protected int getSuggestedMinimumWidth() {
        return sx;
    }

}


class ScrollTestView extends View implements View.OnClickListener {

    public static final String TAG = ScrollTestView.class.getSimpleName();

    int sx = 900;
    int sy = 300;
    HorizontalScrollView scrollH;
    int lastX = 0;

    public ScrollTestView(Context context,HorizontalScrollView scrollH) {
        super(context);
        Log.i(TAG, "ScrollTestView constructor called");
        this.scrollH=scrollH;
        scrollH.setVerticalFadingEdgeEnabled(false);
        scrollH.setHorizontalFadingEdgeEnabled(false);
        this.setId(555555);
        this.setOnClickListener(this);
    }
    
    @Override
    public void onClick(View v) {
        Log.i(TAG, "ScrollTestView.onClick() called,lastX = " + lastX);
        this.scrollTo(lastX, 0);
        this.invalidate();
        this.requestLayout();
        lastX += 100;
    }

    @Override
    protected void onDraw(Canvas c) {
        Paint p = new Paint(Color.WHITE);
        c.drawPaint(p);
        p = new Paint(Color.BLACK);
        c.drawLine(2, 100, sx-2, 100, p);
        for (int i=0; i<=10; i++) {
            c.drawText("X" + i, sx*i/10 - 10, 90, p);
            c.drawLine(sx*i/10, 90, sx*i/10, 110, p);
        }        
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        Log.i(TAG, "onMeasure() called, wid, hei = " + widthMeasureSpec + " " + heightMeasureSpec);
        setMeasuredDimension(sx, sy);
     }
    
    @Override
    protected int getSuggestedMinimumHeight() {
        return sy;
    }

    @Override
    protected int getSuggestedMinimumWidth() {
        return sx;
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        float x = event.getX();
        float y = event.getY();
        
        int scH = scrollH.getScrollX();
        
        Log.i("RendzuCanvasView", "onTouchEvent(), action, x, y scH= "
                + x + " " + y + " " + scH);
        return super.onTouchEvent(event);
    }
    
}