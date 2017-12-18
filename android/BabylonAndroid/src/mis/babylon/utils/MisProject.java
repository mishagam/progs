package mis.babylon.utils;

import java.nio.FloatBuffer;

import mis.android.utils.Log;
import mis.babylon.utils.vector.MMatrix4f;
import mis.babylon.utils.vector.MVector3f;

/*
 * utility package for converting model <--> screen
 */
public class MisProject {
    float angleX=0, angleY=0, angleZ =0;
    float distToScene = 700f;
    float angle=45f, ratio=1f, minZ=100f, maxZ=1000f;
    MVector3f trans = new MVector3f();
    FloatBuffer projMatrix = MBufferUtils.createFloatBuffer(16);
    FloatBuffer unProjMatrix = MBufferUtils.createFloatBuffer(16);
    int width;
    int height;
    MVector3f vx = new MVector3f(1,0,0);
    MVector3f vy = new MVector3f(0,1,0);
    MVector3f vz = new MVector3f(0,0,1);
    float []in = new float[4];
    float []out = new float[4];
    private static final String TAG = "MisProject";
    int lockCount = 0;
    
    public MisProject() {
        Project.gluMakeIdentityf(projMatrix);
        Project.gluMakeIdentityf(unProjMatrix);
    }
    
    public synchronized void lock() {
        try {
            while (lockCount > 0) {
                wait();
            }
        } catch (InterruptedException ie) {
            throw new RuntimeException("Interrupted", ie);
        }
        lockCount++;        
    }
    
    public synchronized void unlock() {
        lockCount--;
        if (lockCount == 0) {
            notifyAll();
        }        
    }
    
    
    public void setPerspectiveParameters(float angle, float ratio, float minZ, float maxZ) {
        this.angle = angle;
        this.ratio = ratio;
        this.minZ = minZ;
        this.maxZ = maxZ;        
    }
    
    public void setAngles(float ax, float ay, float az) {
        angleX = ax;
        angleY = ay;
        angleZ = az;
    }
    
    public void setTranslate(float trX, float trY, float trZ) {
        trans.x = trX;
        trans.y = trY;
        trans.z = trZ;
    }
    
    public void setWH(int w, int h) {
        width = w;
        height = h;
    }
 
    /**
     * set matrix using projection -> 
     */
    public void setProjectMatrix() {
        MMatrix4f mat = new MMatrix4f();
        MMatrix4f mret = new MMatrix4f();        
        Project.gluPerspective(angle,ratio, minZ, maxZ, mat);
        // Util.printMatrix("Perspective matrix", mat);
        MMatrix4f.load(mat, mret);
        
        // translate
        MMatrix4f.translate(trans, mat, mret);
        MMatrix4f.load(mret, mat);
        
        // rotate
        vy.y = 1.0f;  
        if (Math.abs(angleX) > 0.001) {
            float a = (float)(angleX * Math.PI/180);
            mat.rotate(a, vx, mret);
            MMatrix4f.load(mret, mat);
        }
        if (Math.abs(angleY) > 0.001) {
            float a = (float)(angleY * Math.PI/180);
            mat.rotate(a, vy, mret);
            MMatrix4f.load(mret, mat);
        }
        if (Math.abs(angleZ) > 0.001) {
            float a = (float)(angleZ * Math.PI/180);
            mat.rotate(a, vz, mret);
            MMatrix4f.load(mret, mat);
        }
        mret.store(projMatrix);        
        projMatrix.position(0);
        
        // calculate inverted project matrix
        Project.gluInvertMatrixf(projMatrix, unProjMatrix);
    }
    
    /**
     * take model position pos and converts it to window position win_pos.
     * algorithm (very simle) from lwjgl Project.java
     * 
     * @param mod
     * @param win_pos
     */
    public void misProject(MVector3f mod,  MVector3f win_pos) {
        in[0] = mod.x;
        in[1] = mod.y;
        in[2] = mod.z;
        in[3] = 1.0f;

        Project.gluMultMatrixVecf(projMatrix, in, out);
        System.arraycopy(out, 0, in, 0, 4);

        if (in[3] == 0.0) {
            return;
        }

        in[3] = (1.0f / in[3]) * 0.5f;

        // Map x, y and z to range 0-1
        in[0] = in[0] * in[3] + 0.5f;
        in[1] = in[1] * in[3] + 0.5f;
        in[2] = in[2] * in[3] + 0.5f;

        // Map x,y to viewport
        win_pos.x = (in[0] * width);
        win_pos.y = (in[1] * width);
        win_pos.z = in[2];
    }
    
    /**
     * take window position win_pos and converts it to model position pos.
     * 
     * @param pos
     * @param win_pos
     */
    public void misUnProject(MVector3f win_pos,  MVector3f mod) {
        in[0] = win_pos.x;
        in[1] = win_pos.y;
        in[2] = win_pos.z;
        in[3] = 1.0f;

        // Map x and y from window coordinates
        in[0] = (in[0] / width);
        in[1] = (in[1] / height);

        // Map to range -1 to 1
        in[0] = in[0] * 2 - 1;
        in[1] = in[1] * 2 - 1;
        in[2] = in[2] * 2 - 1;

        Project.gluMultMatrixVecf(unProjMatrix, in, out);

        if (out[3] == 0.0) {
            Log.e(TAG, "misUnProject() failed");
            return;
        }

        out[3] = 1.0f / out[3];

        mod.x = out[0] * out[3];
        mod.y = out[1] * out[3];
        mod.z = out[2] * out[3];
    }
    

}
