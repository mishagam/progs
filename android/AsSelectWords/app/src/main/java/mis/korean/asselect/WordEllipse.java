package mis.korean.asselect;

import mis.korean.words.OneWord;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;

/**
 * words to draw on screen in ellipse.
 * Contain question (korean) words or answer (russian) words
 * + ellipse size and position
 * @author misha
 *
 */
public class WordEllipse {
	private final String TAG = this.getClass().getSimpleName();	
	// device indepoendent sizes
	//public static final int DIP_CHAR_SIZE_KOR = 22;
	//public static final int DIP_CHAR_SIZE_RUS = 11;
	public static final double DIP_CHAR_SIZE = 28;	
	public static final double DIP_RADIUS = DIP_CHAR_SIZE * 0.8;
	// sizes for correct devices
	public static int RADIUS = 0;
	public static int CHAR_SIZE = 0;	
	
	public static final int QUES_COLOR = Color.YELLOW;
	public static final int ANSWER_COLOR = Color.GREEN;
	private static KorWordsConf conf = null;
	
	String word;
	OneWord ow;
	int x;  // middle point 
	int y;
	int r = RADIUS;
	float wlen;
	boolean isAnswer;
	
	public WordEllipse(OneWord ow, boolean answer, int x, int y, Paint p, double density) {
		if (conf == null) {
			conf = KorWordsConf.getInstance();
		}
		word = ow.getWord(answer);
		this.isAnswer = answer;
		this.ow = ow;
		wlen = actualTextSize(p, density) - 6;
		this.x = x;
		this.y = y;
		//Log.d(TAG, "WordEllipse constructor called, w,x,y,isAnswer = " +
		//   ow.getWord(answer) + " " + x + " " + y + " " + isAnswer);
	}
	
	float actualTextSize(Paint p, double density) {
		setTextSizes(density);
		p.setTextSize(CHAR_SIZE);
		float size = p.measureText(word);
		return size;
	}
	
	public static void setTextSizes(double density) {
		RADIUS = (int)(DIP_RADIUS*density);
		CHAR_SIZE = (int)(DIP_CHAR_SIZE*density);
	}
	
	public boolean isKorean() {
		boolean kor = conf.isFromKorean() ^ (!isAnswer);
		return kor;
	}
	
	void draw(Canvas c, Paint p) {
		// draw circles
		int backCol = (isAnswer ? ANSWER_COLOR : QUES_COLOR);
		p.setColor(backCol);
		float xcl = x - wlen/2;
		c.drawCircle(xcl, y, r, p);
		float xcr = x + wlen/2;
		c.drawCircle(xcr, y, r, p);
		c.drawRect(xcl, y-r, xcr, y+r, p);
		p.setColor(Color.BLACK);
		p.setTextSize(CHAR_SIZE);
		c.drawText(word, xcl-3, y+10, p);			
	}
	
	boolean isInside(int ex, int ey) {
		if (ey<y-r || ey>y+r) {
			return false;
		} else if (ex < (x-wlen/2-r) || ex > (x + wlen/2+r)) {
			return false;
		} else if (Math.abs(ex-x) < wlen/2) {
			// rect part
			return true;
		}
			// half arc parts
		double dx = Math.abs(ex-x) - wlen/2;
		double dy = ey-y;
		double dd = dx*dx + dy*dy;
		
		return dd < r*r;		
	}
	
	public boolean isClose(WordEllipse b) {
		boolean bret;
		if ((y<(b.y - 2*r - 10)) || (y>(b.y + 2*r + 6))) {
			bret = false;
		} else {
			float abLen = (wlen + b.wlen)/2 + 2*r + 6;
			if (x < b.x - abLen || x > b.x + abLen) {
				bret = false;
			} else {
				bret = true;
			}
		}
		return bret;	
	}

}
