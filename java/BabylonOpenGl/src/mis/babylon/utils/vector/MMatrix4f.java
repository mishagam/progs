package mis.babylon.utils.vector;

import java.nio.FloatBuffer;

import org.lwjgl.util.vector.Vector3f;
import org.lwjgl.util.vector.Matrix4f;


/**
 * equivalent of Matrix4f for android.
 * 
 * @author TCSDEVELOPER
 * @version 1.0
 */
public class MMatrix4f  {
    Matrix4f m;
    
    public MMatrix4f() {
        this.m = new Matrix4f();
    }
    
    MMatrix4f(Matrix4f m) {
        this.m = m;
    }
    
    public void load(FloatBuffer buf) {
        m.load(buf);
    }
    
    public void store(FloatBuffer buf) {
        m.store(buf);
    }
    
    public void load(MMatrix4f b) {
        m.load(b.m);
    }
    
    public static  void load(MMatrix4f a, MMatrix4f b) {
        Matrix4f.load(a.m, b.m);
    }
    
    public static  void translate(MVector3f v, MMatrix4f a, MMatrix4f b) {
        Vector3f vv = new Vector3f(v.x, v.y, v.z);
        Matrix4f m4 = Matrix4f.translate(vv, a.m, b.m);
    }
    
    public void rotate(float a, MVector3f v, MMatrix4f b) {
        Vector3f vv = new Vector3f(v.x, v.y, v.z);
        m.rotate(a, vv, b.m);
    }
    
    public void setIdentity() {
        m.setIdentity();
    }
    
    public static MMatrix4f invert(MMatrix4f min, MMatrix4f mout) {
        Matrix4f m4 = Matrix4f.invert(min.m, mout.m);
        if (m4 == null) {
            return null;
        } else {
            return new MMatrix4f(m4);
        }
    }
    
    
}
