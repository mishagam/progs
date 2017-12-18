package mis.animsto;

import java.io.IOException;
import java.util.ArrayList;
import java.util.DuplicateFormatFlagsException;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

import mis.animsto.figures.FigImage;
import mis.animsto.figures.FigureState;
import mis.animsto.figures.Turtle;
import mis.animsto.figures.TurtleCache;
import mis.animsto.story.AnimStory;
import mis.animsto.story.Cadr;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Paint.Style;
import android.graphics.Rect;
import android.os.Handler;
import android.os.Message;
import android.util.DisplayMetrics;
import android.util.Log;
import android.util.TypedValue;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import android.view.View;
import android.view.WindowManager;

public class StoryEditView extends View implements Handler.Callback {

	private final String TAG = "StoryEditView";

	// constants
	int STEP_DELAY = 200; // milliseconds
	final int MSG_PLAY_STEP = 501;
	final int REPLICA_FONT_SIZE = 100;

	Paint paint;
	Paint selPaint = null; // paint for selected figure
	Paint repPaint = null; // paint for replica
	FigImage fi;
	final AnimEditActivity myContext;
	List<Turtle> figures = new ArrayList<Turtle>();
	Turtle curTurtle = null;
	FigImage back = null;
	ScaleGestureDetector mScaleDetector;
	AnimStory story;
	int sx, sy, x0, y0;
	Timer playTimer = null;
	TurtleCache tuCache = TurtleCache.getInstance();
	int stepsPerCadr = 10;
	Timer playStepsTimer = null;
	final Handler handler = new Handler(this);
	int playingStep = 0;
	String curReplica = "NOw empty replica";
	String curSoundFn = null;
	int curPage = 0;
    int playingPage = -1;
	boolean nowScaling = false;
	boolean nowPlaying = false;
	MisAudioRecorder mSound = MisAudioRecorder.getInstance();
	private boolean needInitCadr = false;
	private static StoryEditView instance = null;

	/**
	 * create new story
	 * 
	 * @param context
	 */
	public StoryEditView(String name, AnimEditActivity context) {
		super(context);
		paint = new Paint();
		paint.setColor(Color.BLUE);
		myContext = context;
		boolean needInitStory = true;
		story = new AnimStory(name, context);
		if (!name.equals(AnimStoryConf.DEFAULT_STORY_NAME)) {
			// read story from file
			try {
				if (story.readStory()) {
					needInitCadr = true; // fromCadr(0);
					needInitStory = false;
				}
			} catch (IOException ioe) {
				Log.e(TAG, "read story " + story.getFileName() + " failed");
			}
		}
		if (needInitStory) {
			// initializing empty story
			Turtle fa = new Turtle("man_one_t0", "man_one", context);
			x0 = 300;
			y0 = 100;
			addTurtle(fa);
			x0 = 500;
			Cadr c = toCadr();
			story.putCadr(0, c);
		} 
		// fa = new Turtle("man_one_t", "man_one", context);
		// getFigures().add(fa);
		// fa.setPos(200, 300);

		// Create our ScaleGestureDetector
		mScaleDetector = new ScaleGestureDetector(context, new ScaleListener());
		instance = this;
	}

	public List<Turtle> getFigures() {
		return figures;
	}

	public StoryEditView(AnimStory storyA, AnimEditActivity context) {
		super(context);
		paint = new Paint();
		paint.setColor(Color.BLUE);
		myContext = context;
		this.story = storyA;

		// Create our ScaleGestureDetector
		mScaleDetector = new ScaleGestureDetector(context, new ScaleListener());
	}

	public int addTurtle(Turtle tu) {
		tu.setPos(x0, y0);
		tuCache.cacheTurtle(tu);
		getFigures().add(tu);
		story.addTurtle(tu, getCurrentCadrIndex());
		this.invalidate();
		return 1;
	}

	public int removeTurtle() {
		Turtle tu = curTurtle;
		if (tu != null) {
			toCadr();
			int idx = getCurrentCadrIndex();
			story.removeTurtle(tu, idx);
			fromCadr(idx);
			this.invalidate();
			return 1;
		} else {
			return 0;
		}
	}

	public int setBackgound(String imageName) {
		this.back = new FigImage(imageName, myContext);
		// setting background for all cadres in this page
		// story.setBackground(imageName, curPage);
		Rect rect = new Rect(0, 0, sx, sy);
		Log.i(TAG, "back set rect: 0 0 " + sx + " " + sy);
		back.setRect(rect);
		this.invalidate();
		return 1;
	}

	@Override
	protected void onDraw(Canvas canvas) {
		Log.d(TAG, "onDraw() called, total " + getFigures().size() + " figures");
		super.onDraw(canvas);
		if (needInitCadr) {
			fromCadr(0);
			needInitCadr = false;
		}
		// Log.d(TAG, "onDraw() called");
		if (back != null) {
			back.drawImage(canvas, paint, 0, 0, 1);
		}
		for (Turtle f : getFigures()) {
			if (f.isVisible()) {
				Log.v(TAG, "onDraw(),draw one figure");
				f.drawFigure(canvas, paint);
			} else {
				Log.v(TAG, "onDraw(), invisible figure");
			}
		}
		// draw current figure
		if (curTurtle != null) {
			int xc = curTurtle.getPos().x;
			int yc = curTurtle.getPos().y;
			int r = 50; // XXX

			if (selPaint == null) {
				float newWid = 3;
				selPaint = new Paint(paint);
				selPaint.setColor(Color.MAGENTA);
				selPaint.setStyle(Style.STROKE);
				selPaint.setStrokeWidth(newWid);
			}
			canvas.drawCircle(xc, yc, r, selPaint);
			//Log.d(TAG, "Drawn sel cicle " + xc + " " + yc + " cutTu: " + curTurtle.hashCode());
		}
		// draw replica
		if (repPaint == null) {
			repPaint = new Paint(paint);
			WindowManager wm = (WindowManager)this.getContext().getSystemService(Context.WINDOW_SERVICE);
			DisplayMetrics metrics = new DisplayMetrics();
		    wm.getDefaultDisplay().getMetrics(metrics);
			float sp = REPLICA_FONT_SIZE / metrics.density;
			repPaint.setTextSize(sp);
			repPaint.setStrokeWidth(1);
			repPaint.setColor(Color.DKGRAY);
		}
		canvas.drawText(curReplica, 180, sy - 70, repPaint);
		//Log.d(TAG, "onDraw() done");
	}

	Turtle findFigure(int x, int y) {
		for (Turtle f : getFigures()) {
			if (f.getRect().contains(x, y)) {
				return f;
			}
		}
		return null;
	}

	@Override
	public boolean onTouchEvent(MotionEvent e) {
		mScaleDetector.onTouchEvent(e);
		int action = e.getAction();
		int ex = (int) e.getX();
		int ey = (int) e.getY();
		switch (action) {
		case MotionEvent.ACTION_DOWN:
			curTurtle = findFigure(ex, ey);
			break;
		case MotionEvent.ACTION_MOVE:
			if (curTurtle != null && !nowScaling) {
				curTurtle.setPos(ex, ey);
			}
			break;
		case MotionEvent.ACTION_UP:
			saveCadr();
			break;
		}
		this.invalidate();
		return true;
	}

	@Override
	protected void onSizeChanged(int w, int h, int oldw, int oldh) {
		Log.i(TAG, "onSizeChanged, w,h = " + w + " " + h);
		sx = w;
		sy = h;
		x0 = sx / 2;
		y0 = sy / 2;
		super.onSizeChanged(w, h, oldw, oldh);
	}

	private class ScaleListener extends
			ScaleGestureDetector.SimpleOnScaleGestureListener {
		@Override
		public boolean onScaleBegin(ScaleGestureDetector detector) {
			nowScaling = true;
			return super.onScaleBegin(detector);
		}

		@Override
		public void onScaleEnd(ScaleGestureDetector detector) {
			nowScaling = false;
			super.onScaleEnd(detector);
		}

		@Override
		public boolean onScale(ScaleGestureDetector detector) {
			if (curTurtle != null) {
				double scale = curTurtle.getScale() * detector.getScaleFactor();
				scale = Math.max(0.1f, Math.min(scale, 5.0f));
				curTurtle.setScale(scale);
				invalidate();
			}
			return true;
		}
	}

	public Cadr toCadr() {
		String backNm = (back == null ? "" : back.getName());
		Cadr c = new Cadr(backNm, curReplica, curSoundFn, figures);
		c.setPage(curPage);
		return c;
	}

	public void saveCadr() {
		int idx = story.getCurrentCadr();
		Cadr c = this.toCadr();
		story.putCadr(idx, c);
		//curReplica = "";
		//curSoundFn = null;
	}

	void setBackground(String backImageName) {
		if (!backImageName.equals("")) {
			Resources res = myContext.getResources();
			this.setBackgound(backImageName);
		}
	}
	
	public void fromCadr(int idx) {
		story.setCurrentCadr(idx);
		Cadr c = story.getCadr(idx);
		fromCadr(c);
	}

	public void fromCadr(Cadr c) {
		// replace background
		Log.d(TAG, "fromCadr() called");
		if (back == null ||
				(c.getBackImageName() != null &&
						!back.getName().equals(c.getBackImageName()))) {
			this.setBackground(c.getBackImageName());
		}
		// replace figures
		figures.clear();
		for (FigureState fs : c.getFigures()) {
			Turtle tu = tuCache.obtainTurtle(fs, myContext);
			this.figures.add(tu);
		}
		curReplica = c.getReplica();
		curSoundFn = c.getSoundName();
		curPage = c.getPage();
		myContext.updateMenu();
		invalidate();
	}

    /**
     * if intermediate cadr, gor to next cadr and read it.
     * if last cadr, make additional copy of last andr and move to it.
     */
	public void toNextCadr() {
		int idx = story.getCurrentCadr();
		Log.d(TAG, "toNextCadr() called, idx = " + idx);
        saveCadr();
		if (idx < story.maxCadr() - 1) {
			fromCadr(idx + 1);
		} else {
            dublicateCadr();
            fromCadr(idx + 1);
		}
        invalidate();
	}

    /**
     * to previous cadr if idx>0
     */
	public void toPrevCadr() {
		int idx = story.getCurrentCadr();
		Log.d(TAG, "toPrevCadr() called, idx = " + idx);
		if (idx > 0) {
			saveCadr();
			fromCadr(idx - 1);
		}
		invalidate();
	}

	public void startPlay(boolean playAll) {
		Log.d(TAG, "startPlay() called");
		playingStep = -1;
        if (playAll) {
            // plaing all, start from beginning
			saveCadr();
            story.setCurrentCadr(0);
        } else {
            int idx = getCurrentCadrIndex();
            idx = story.getFirstCadrInPage(idx);
            story.setCurrentCadr(idx);
            playingPage = story.getCadr(idx).getPage();
        }
		playStepsTimer = new Timer();
		TimerTask tts = new TimerTask() {
			@Override
			public void run() {
				Message msg = new Message();
				msg.what = MSG_PLAY_STEP;
				handler.sendMessage(msg);
				// Log.d(TAG, "MSG_ADD_WORD message send");
			}
		};
		playStepsTimer.schedule(tts, STEP_DELAY, STEP_DELAY);
		myContext.setNowPlaying(true);
	}

	private Turtle getTurtleByName(String tuName) {
		for (Turtle tu : figures) {
			if (tu.getName().equals(tuName)) {
				return tu;
			}
		}
		return null;
	}

	private void drawStep() {
		// Log.d(TAG, "drawStep() called");
		Cadr c = story.getCadr();
		Cadr nextc = story.getCadr(story.getCurrentCadr() + 1);
		double propab = (1.0 * playingStep) / stepsPerCadr;
		for (FigureState fs : c.getFigures()) {
			Turtle tu = getTurtleByName(fs.getName());
			if (tu == null || !tu.isVisible()) {
				continue;
			}
			String tuName = tu.getName();
			FigureState fsb = nextc.getFigure(tuName);
			if (fsb == null) {
				tu.setVisible(false);
				continue;
			}
			tu.setMovingState(fs, fsb, propab);
		}
		invalidate();
	}

	private void playStep() {
		// Log.d(TAG, "playStep(), playingStep,nowPlaying = " + playingStep + " " + nowPlaying);
		if (!nowPlaying) {
			return;
		}
		playingStep++;
		if (story.getCurrentCadr() == story.maxCadr() - 1) {
            fromCadr(story.maxCadr() - 1);
            stopPlay();
            // story.setCurrentCadr(story.maxCadr());
            myContext.updateMenu();
        } else if (playingPage>=0 && getCurPage()!=playingPage) {
            // finish playing page
            stopPlay();
            myContext.updateMenu();
            playingPage = -1;
 		} else if (playingStep==0 || playingStep >= stepsPerCadr) {
			if (story.getCurrentCadr() > story.maxCadr() - 1) {
				stopPlay();
			} else {
				if (playingStep > 0) {
					story.setCurrentCadr(story.getCurrentCadr() + 1);
				}
				Cadr c = story.getCadr();
				fromCadr(c);
				if (curSoundFn != null) {
					mSound.setCadrFileName(c.getSoundName());
					mSound.onPlay(true);
					Log.d(TAG, "playing cadr sound " + c.getSoundName());
				} else {
					Log.d(TAG, "Cadr " + story.getCurrentCadr() + " has no sound");
				}
				playingStep = 0;
			}
		} else {
			drawStep();
		}
	}

	public void stopPlay() {
		Log.d(TAG, "stopPlay() called");
		if (playStepsTimer != null) {
			playStepsTimer.cancel();
			playStepsTimer = null;
		}
		myContext.setNowPlaying(false);
	}

	public int getCurrentCadrIndex() {
		return story.getCurrentCadr();
	}

	public Turtle getCurTurtle() {
		return curTurtle;
	}

	public void setCurTurtle(Turtle curTurtle) {
		this.curTurtle = curTurtle;
	}

    public int getCurPage() {
        return curPage;
    }

	@Override
	public boolean handleMessage(Message msg) {
		if (msg.what == MSG_PLAY_STEP) {
			playStep();
		}
		return false;
	}
	
	public String getCurrentSoundName() {
		String fn = curSoundFn;
		if (fn == null) {
			fn = story.getCurrentSoundName();
		}
		return fn;
	}

	public void removeCadr() {
		if (story.maxCadr() == 1) {
			Log.d(TAG, "Cannot remove last cadr");
			return;
		}		
		int cidx = story.getCurrentCadr();
		story.removeCadr();
		if (cidx == story.maxCadr()) {
			cidx--;
		}
		fromCadr(cidx);
	}
	
	public void dublicateCadr() {
		story.dublicateCadr();
	}

	public static StoryEditView GetCurrentStoryView() {
		return instance;
	}

    public int getPlayingPage() {
        return playingPage;
    }

    public void setPlayingPage(int playingPage) {
        this.playingPage = playingPage;
    }

}
