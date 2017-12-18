package mis.korean.asselect;

import java.util.ArrayList;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import mis.korean.asselect.KorWordsConf.KoreanRussianType;
import mis.korean.words.OneWord;
import mis.korean.words.WordsGame;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.media.AudioManager;
import android.media.SoundPool;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;

public class SelectWordView extends View implements Handler.Callback {	
	private final String TAG = this.getClass().getSimpleName();	

	private WordsGame wgame = null;
	public Timer moveTimer = null;
	public Timer wordsTimer = null;
	ArrayList<WordEllipse> awords = new ArrayList<WordEllipse>();
	WordEllipse qword = null;	
    private SoundPool soundPool;
    Context context;
    KorWordsConf conf;
    Paint paint = new Paint();
    double density;

	public static final int MSG_ADD_WORD = 500;
    public static final int MSG_MOVE = 501;
    public static final int WORDS_DELAY = 600;
    public static final int MOVE_DELAY = 100;
    

	int X0 = 26;
	int Y0 = 10;
	int step = 60;
	int ex,ey;
	int maxAnswers = 12;
	int MIN_YW = 120;
	int Y_STEP = 5;
	double yStep;
    public int ww, hh;
    double ansFirstTime = -1;
    int soundOkId, soundNoId, soundYesId,soundGoodId;
    boolean placeLeft = true;
	Random rnd = new Random();
	final Handler handler = new Handler(this);
	// WordEllipse answerToPlace = null;
	boolean speakKWord = false;  // speak korean word using TTS instead of Ok 
	private MisaTts misTts = null;

	public static final int[] drawColors = new int[] { 
		Color.WHITE, Color.LTGRAY, 
		Color.BLUE,	Color.GREEN, Color.RED,	Color.MAGENTA, Color.YELLOW, 
		Color.CYAN, Color.GRAY, Color.rgb(140,100,8), Color.rgb(33,33,160), Color.rgb(240,88,180), 
		Color.rgb(180,60,220),Color.rgb(20,220,205)};
	boolean newWord = true;
	
	public SelectWordView(Context context) {
		super(context);
		this.context = context;				
		wgame = new WordsGame(context);
		// wgame.readDict(true);   // then we will have false here
		hh = this.getHeight();
		ww = this.getWidth();
		maxAnswers = (hh - MIN_YW) / Y_STEP - 2;
		Log.d(TAG, "ww,hh,maxAnswers = " + ww + " " + hh + " " + maxAnswers);
		conf = KorWordsConf.getInstance();
		conf.setScreenDensity(getResources().getDisplayMetrics().density);
		density = conf.getScreenDensity();
		yStep = Y_STEP * conf.getScreenDensity();
		WordEllipse.setTextSizes(conf.getScreenDensity());
	}
	
	void initSounds() {
		soundPool = new SoundPool(5, AudioManager.STREAM_MUSIC, 0);
		soundNoId = soundPool.load(context, R.raw.no, 1);
		soundYesId = soundPool.load(context, R.raw.yes, 1);
		soundOkId = soundPool.load(context, R.raw.ok, 1);
		soundGoodId = soundPool.load(context, R.raw.goodmis, 1);
	}
	
	void clearTopAWords() {
		for (int i=0; i<awords.size(); i++) {
			WordEllipse we = awords.get(i);
			int yw = we.y;
			if (yw < MIN_YW || we.isClose(qword)) {
				awords.remove(i);
				return;
			}
		}
	}
	
	@Override
	protected void onSizeChanged(int w, int h, int oldw, int oldh) {
		ww = w;
		hh = h;
		maxAnswers = (int)((hh - MIN_YW) / yStep - 2);
		Log.d(TAG, "onSizeChanged(), ww,hh,maxAnswers = " + ww + " " + hh + " " + maxAnswers);
		awords.clear();
		if (!wgame.emptyDictionary()) {
			newQuestionWord();
		}
		super.onSizeChanged(w, h, oldw, oldh);
	}
	
	boolean attemptPlaceAnswer(WordEllipse we, boolean needPlace) {
		boolean bret;
		float x0 = we.wlen/2 + WordEllipse.RADIUS;
		float x1 = ww - we.wlen/2 - WordEllipse.RADIUS;
		if (placeLeft) {
			x1 = (x0+x1)/2;
		} else {
			x0 = (x0+x1)/2;
		}
		placeLeft = !placeLeft;
		
		if (needPlace) {
			we.x = (int)(we.wlen/2 + WordEllipse.RADIUS + 5);
		} else {
			we.x = (int)(x0 + (x1-x0)*rnd.nextDouble());
		}
		bret = true;
		for (WordEllipse w : awords) {
			if (w.isClose(we)) {
				bret = false;
				break;
			}
		}
		return bret;		
	}

	void addAnswerWord() {
		// Log.d(TAG, "addAnswerWord() called");
		OneWord ow = wgame.getNextRussianWord();
		Log.d(TAG, " correct: " + wgame.isCorrectAns() + " word: " + ow.getKorean() + " ansTime: " + ansFirstTime);
		int yy = hh - WordEllipse.RADIUS - 20;
		WordEllipse	answerToPlace = new WordEllipse(ow, true, 0,yy,paint, density);
		
		// now placing answer along the bottom line
		final int nAttempt = 5;
		for (int i=0; i<nAttempt; i++) {
			boolean ok = attemptPlaceAnswer(answerToPlace, (i == nAttempt-1));
			if (ok) {
				if (ansFirstTime < 0 && wgame.isCorrectAns()) {
					ansFirstTime = System.currentTimeMillis();
					Log.d(TAG, "Word " + ow.getKorean() + " Set ansFirstTime to " + ansFirstTime);
				}
				awords.add(answerToPlace);
				wgame.getDict().wordShown();
				this.invalidate();
				break;				
			} else {
				Log.d(TAG, "Cannot place word: " + ow.getKorean() + " i= " + i);
			}
		}
	}
	
	void newQuestionWord() {
		Log.d(TAG, "newQuestionWord() called");
		OneWord qow = wgame.getNextKoreanWord();
		Log.d(TAG, "word " + qow.getWord(false) + " added");
		int xx = ww/2;
		int yy = 10 + WordEllipse.RADIUS;
		WordEllipse qwe = new WordEllipse(qow, false, xx, yy, paint, density);
		qword = qwe;		
		newWord = false;
		awords.clear();
		ansFirstTime = -1; // System.currentTimeMillis();
		addAnswerWord();  // to move little bit faster
		if (speakKWord) {
			String kword = qwe.ow.getKorean();
			misTts.speak(kword);
		}
	}
	
	void timedMoveRun() {
		// Log.d(TAG, "timedMoveRun() called");
		for (WordEllipse we : awords) {
			we.y -= yStep;			
		}
		this.invalidate();
	}
	
	void timedWordsRun() {
		// Log.d(TAG, "timedWordsRun() called");
		if (newWord) {
			newQuestionWord();
		} else {
			clearTopAWords();
			// Log.d(TAG, "awords.size() = " + awords.size());
			if (awords.size() < maxAnswers && 
					(System.currentTimeMillis() - ansFirstTime) > 1000) {
				addAnswerWord();				
			}			
		}
	}
	
	void clear(Canvas c) {
		c.drawColor(Color.LTGRAY);
	}
	
	@Override
	protected void onDraw(Canvas c) {
		// TODO Auto-generated method stub
		super.onDraw(c);
		clear(c);
		if (qword != null) {
			qword.draw(c, paint);
		}
		for (WordEllipse we : awords) {
			we.draw(c, paint);
		}
	}
	
	public void stopTimers() {
		if (wordsTimer != null) {
			moveTimer.cancel();
			wordsTimer.cancel();
			moveTimer = null;
			wordsTimer = null;
		}
		if (soundPool != null) {
			soundPool.release();
			soundPool = null;
		}
	}
	
	public void startTimers() {
		if (wgame.emptyDictionary()) {
			Log.e(TAG, "startTimers(), empty dictionary, cannot start");
			return;
		}
		moveTimer = new Timer();
		wordsTimer = new Timer();
		Log.d(TAG, "Timers created");
		TimerTask ttw = new TimerTask() {			
			@Override
			public void run() {
				Message msg = new Message();
				msg.what = MSG_ADD_WORD;
				handler.sendMessage(msg);
				// Log.d(TAG, "MSG_ADD_WORD message send");
			}
		};
		wordsTimer.schedule(ttw, WORDS_DELAY,WORDS_DELAY);
		TimerTask ttm = new TimerTask() {			
			@Override
			public void run() {
				Message msg = new Message();
				msg.what = MSG_MOVE;
				handler.sendMessage(msg);
				// Log.d(TAG, "move message send");
			}
		};
		wordsTimer.schedule(ttm, MOVE_DELAY,MOVE_DELAY);
		initSounds();
		if (misTts==null) {
			misTts = ((SelectWordActivity)context).getMisTts();
		}
		speakKWord = misTts.canSpeak && conf.isPlayKoreanWords() && 
				conf.getKoreanToRussian() == KoreanRussianType.KOREAN_TO_RUSSIAN;
	}
	
	void checkMouseDown(int ex, int ey) {
		Log.d(TAG, "checkMouseDown(), ex,ey = " + ex + " " + ey);
		for (WordEllipse we : awords) {
			if (we.isInside(ex, ey)) {
				double dTime = System.currentTimeMillis() - ansFirstTime;
				Log.d(TAG, "checkMouseDown(), aword = " + 
						qword.ow.getWord(false));
				int iok = wgame.checkAnswer(we.ow, dTime);
				if (iok == 2) {
					// correct translation, play Ok sound
					if (!speakKWord) {
						int sid = (rnd.nextInt(2)==0 ? soundOkId : soundYesId);
						soundPool.play(sid, 0.8f, 0.8f, 1, 0, 1f);
					}
					// replace question word
					newQuestionWord();
				} else if (iok == 1) {
					soundPool.play(soundGoodId, 0.8f, 0.8f, 1, 0, 1f);
				} else {
					soundPool.play(soundNoId, 0.8f, 0.8f, 1, 0, 1f);
				}
				break;
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
			checkMouseDown(ex, ey);
    		this.invalidate();	
			break;
		case MotionEvent.ACTION_MOVE:
			break;
		case MotionEvent.ACTION_UP:
			break;
		}
		return true;
	}

	public WordsGame getWgame() {
		return wgame;
	}

	@Override
	public boolean handleMessage(Message msg) {
		// Log.d(TAG, "handleMessage() called, msg: " + msg.what);
		if (msg.what == MSG_ADD_WORD) {
			timedWordsRun();
		} else if (msg.what == MSG_MOVE) {
			timedMoveRun();
		}
		return false;
	}
}

