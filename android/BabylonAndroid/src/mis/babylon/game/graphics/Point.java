package mis.babylon.game.graphics;

import mis.babylon.utils.vector.MVector3f;

public class Point {
	// coordinates in fixed format (for android, float for lw opengl)
	public float x;
	public float y;
	public float z;
	
	public Point() {
	    x=y=z=0;
	}
	
    public Point(float xx, float yy, float zz) {
        x=xx; y=yy; z=zz;
    }
    public void set(float xx, float yy, float zz) {
        x=xx; y=yy; z=zz;
    }
	public void set(Point b) {
		x = b.x; y = b.y; z = b.z;
	}
	
	public String toString() {
	    float scale = Box.SCALE;
        float fx = x / scale; 
        float fy = y / scale; 
        float fz = z / scale; 
        return (fx + " " + fy + " " + fz);
	}
    
    public void toVector(MVector3f v) {
        float scale = Box.SCALE;
        v.x = x / scale; 
        v.y = y / scale;
        v.z = z / scale;
    }
    
    public void fromVector(MVector3f v) {
        float scale = Box.SCALE;
        x = (int)(v.x * scale); 
        y = (int)(v.y * scale); 
        z = (int)(v.z * scale); 
    }
    
    public void translate(float dx, float dy, float dz) {
        x += dx;
        y += dy;
        z += dz;
    }

}
