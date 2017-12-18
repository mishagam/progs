package mis.android.game.sysdep;

import org.lwjgl.util.vector.Vector3f;

public class Point {
	// coordinates in fixed format (for android, float for lw opengl)
	public int x;
	public int y;
	public int z;
    
    public Point(int xx, int yy, int zz) {
        x=xx; y=yy; z=zz;
    }
    
    public Point(float fx, float fy, float fz) {
        x = (int)(fx * Box.SCALE); 
        y = (int)(fy * Box.SCALE); 
        z = (int)(fz * Box.SCALE);
    }
    
    public void translate(int dx, int dy, int dz) {
        x += dx;
        y += dy;
        z += dz;
    }
    
    public void translate(float dx, float dy, float dz) {
        x += (int)(dx * Box.SCALE); 
        y += (int)(dy * Box.SCALE); 
        z += (int)(dz * Box.SCALE); 
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
    
    public void toVector(Vector3f v) {
        float scale = Box.SCALE;
        v.x = x / scale; 
        v.y = y / scale;
        v.z = z / scale;
    }
    
    public void flomVector(Vector3f v) {
        float scale = Box.SCALE;
        x = (int)(v.x * scale); 
        y = (int)(v.y * scale); 
        z = (int)(v.z * scale); 
    }

}
