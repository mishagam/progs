package mis.babylon.utils.vector;

public class MVector3f {
    public float x,y,z;
    
    public MVector3f(float xa, float ya, float za) {
        x = xa;
        y = ya;
        z = za;
    }
    
    public MVector3f() {
        x = y = z = 0.0f;
    }
    
    public void set(float xa, float ya, float za) {
        x = xa;
        y = ya;
        z = za;
    }
}
