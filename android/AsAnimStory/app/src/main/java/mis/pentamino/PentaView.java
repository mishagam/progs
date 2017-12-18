package mis.pentamino;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Paint.Style;
import android.graphics.Point;
import android.util.Log;
import android.view.Display;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;

public class PentaView extends View {
	private final String TAG = this.getClass().getSimpleName();
	
	Pentamino penta = null;
	Paint paint = new Paint();
	int X0 = 20;
	int Y0 = 10;
	int step = 0;
	public static final int[] drawColors = new int[] { 
		Color.WHITE, Color.LTGRAY, 
		Color.BLUE,	Color.GREEN, Color.RED,	Color.MAGENTA, Color.YELLOW, 
		Color.CYAN, Color.GRAY, Color.rgb(140,100,8), Color.rgb(33,33,160), Color.rgb(240,88,180), 
		Color.rgb(180,60,220),Color.rgb(20,220,205)};
	
	public PentaView(Context context) {
		super(context);
		penta = new Pentamino();
	}
	
	void drawBox(int i, int j, Canvas c, Paint p) {
		int x = X0 + step*j;
		int y = Y0 + step * i;
		
		int col = drawColors[penta.a[i][j]];
		p.setColor(col);
		p.setStyle(Style.FILL);
		c.drawRect(x, y, x+step, y+step, p);	
		
		p.setColor(Color.DKGRAY);
		p.setStyle(Style.STROKE);
		c.drawRect(x, y, x+step, y+step, p);		
	}
	
	private void countStep(Canvas c) {
		int width = c.getWidth();
		int height = c.getHeight();	
		int stpx = (width-2*X0) / Pentamino.NX;
		int stpy = (height-2*Y0) / Pentamino.NY;
		step = Math.min(stpx, stpy);
		Log.d(TAG, "counted stpx, stpy, step = " 
		    + stpx + " " + stpy + " " + step);		
	}	
	
	@Override
	protected void onDraw(Canvas canvas) {
		if (step == 0) {
			countStep(canvas);
		}
		super.onDraw(canvas);
		for (int i = 0; i< Pentamino.NY; i++) {
			for (int j = 0; j< Pentamino.NX; j++) {
				drawBox(i,j,canvas, paint);
			}
		}
	}
	
	@Override
	public boolean onTouchEvent(MotionEvent e) {
		int action = e.getAction();
		int ex = (int)e.getX(); 
		int ey = (int)e.getY();
		switch (action) {
		case MotionEvent.ACTION_DOWN:
			int i = (ey - Y0) / step;
			int j = (ex - X0) / step;
			if (i>=0 && i< Pentamino.NY && j>=0 && j< Pentamino.NX) {
				penta.a[i][j] = (penta.a[i][j] == 0 ? 1 : 0);
				this.invalidate();
			}
			break;
		case MotionEvent.ACTION_MOVE:
			break;
		case MotionEvent.ACTION_UP:
			break;
		}
		return true;
	}
	
	public void startEdit() {
		penta.removePentas();
		this.invalidate();
	}
	
	public void solve() {
		Log.d(TAG, "Started solving Pentamino");
		penta.solve(this.getContext());
		this.invalidate();
		Log.d(TAG, "Solving Pentamino done");
	}
}
