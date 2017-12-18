package mis.android.game.sysdep;

public class Point2 {
	// coordinates in fixed format (for android, float for lw opengl)
	int x;
	int y;
	
	public Point2() {
	    x = y = 0;
	}
	
	public Point2(int xx, int yy) {
	    x=xx; y=yy;
	}
	
	void set(Point2 b) {
		x = b.x; y = b.y; 
	}

}
