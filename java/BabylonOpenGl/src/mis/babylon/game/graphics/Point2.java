package mis.babylon.game.graphics;

public class Point2 {
	// coordinates in fixed format (for android, float for lw opengl)
	float x;
	float y;
	
	public Point2() {
	    x = y = 0;
	}
	
	public Point2(float xx, float yy) {
	    x=xx; y=yy;
	}
	
	void set(Point2 b) {
		x = b.x; y = b.y; 
	}
    
    public void translate(float dx, float dy) {
        x += dx;
        y += dy;
    }
    
    public String toString() {
        float scale = Box.SCALE;
        float fx = x / scale; 
        float fy = y / scale; 
        return (fx + " " + fy);
    }
}
