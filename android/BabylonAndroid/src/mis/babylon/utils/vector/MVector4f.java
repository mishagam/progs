package mis.babylon.utils.vector;

public class MVector4f {
    public float x,y,z,w;
    
    public MVector4f(float xa, float ya, float za, float wa) {
        x = xa;
        y = ya;
        z = za;
        w = wa;
    }
    
    public MVector4f() {
        x = y = z = w = 0.0f;
    }
    
    public void set(float xa, float ya, float za, float wa) {
        x = xa;
        y = ya;
        z = za;
        w = wa;
    }
}
