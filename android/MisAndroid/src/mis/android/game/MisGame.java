package mis.android.game;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import org.lwjgl.util.vector.Vector3f;

import android.content.Context;
import android.opengl.GLU;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import mis.android.game.sysdep.Box;
import mis.android.game.sysdep.ColPoint;
import mis.android.game.sysdep.Point;
import mis.android.utils.MisProject;

/**
 * Device and OS independent part of MisGameActivity
 * extracted more of less device and OS independent part of Android Game activity, 
 * and planning to port this code to LwJgl
 * 
 * @author Misha
 */
public class MisGame {
    public static final boolean ANDROID = true;
    World w = new World();
    ColPoint cp = null;
    TopPanel topPanel = null;
    //boolean needRenderBack = true;
    int ww;
    int hh;
    Context myContext;
    public float mAngleX = 0.0f;
    public float mAngleZ = 0f;;
    float ratio = 1.0f;
    MisProject misProj = new MisProject();
    boolean projChanged = true;
    boolean drawCpOnly = false;
    MovableFigure selectedFigure = null;
    Vector3f selectedPos = new Vector3f();
    Vector3f selectedShift = new Vector3f();
    public static final float DEFAULT_Z = 80f;
    GameSurfaceView view = null;
    float distWorld = 450f;
    
    public MisGame(Context context, GameSurfaceView view) {
        myContext = context;
        w = new World();
        w.readWorld(myContext, "world");
        this.view = view;
    }
    
    public void onMove(float x, float y) {
        float z = DEFAULT_Z;
        Vector3f mod = new Vector3f();
        convertPosZ(x, y, z, mod);
        cp.setPos(mod.x, mod.y, mod.z);
        Log.d(MisGameActivity.TAG, " converted win xyz [" + x + " " + y + " " + z + "] to [" + 
                cp.getPos().toString());
        if (selectedFigure != null) {                
            setSelectedPos(x, y);
        }
        requestRender();
    }
    
    public void onMouseDown(float x, float y) {
        if (y > hh - topPanel.VSIZE) {
            topPanel.onClick(x, y);
            return;
        }
        float z0 = 0.8f;
        float z1 = 0.95f;
        Vector3f a = new Vector3f();
        Vector3f b = new Vector3f();
        convertPos(x, y, z0, a);
        convertPos(x, y, z1, b);            
        MisFigure mf = w.findFigure(a, b);
        if (mf != null && selectedFigure == null) {
            Log.d(MisGameActivity.TAG, "onClick. Found figure, name: " + mf.getDraw().name);
            selectedFigure = (MovableFigure)mf;
            Point p = selectedFigure.getDraw().getPos();
            p.z += 40 * Box.SCALE;
            p.toVector(selectedPos);  
            selectedShift.x = a.x - selectedPos.x;
            selectedShift.y = a.y - selectedPos.y;
            selectedShift.z = 0;
            requestRender();
        } else {
            Log.d(MisGameActivity.TAG, "onClick. No Figures found");
            // releasing selected figure
        }
    }
    
    public void onMouseUp(float x, float y) {
        if (selectedFigure != null) {
            Point p = selectedFigure.getDraw().getPos();
            p.z -= 40 * Box.SCALE;
            selectedFigure = null;
            requestRender();
        }
    }

    public void onDrawFrame(GL10 gl10) {
        GL11 gl = (GL11)gl10;
        if (drawCpOnly) {
            gl.glMatrixMode(GL10.GL_MODELVIEW);
            gl.glLoadIdentity();
            cp.draw(gl);
            drawCpOnly = false;
            Log.d(MisGameActivity.TAG, "Drawing CP at " + cp.getPos());
            return;
        }
        gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
        topPanel.draw(gl);
        
        // now working with world projection matrix
        rotateView(gl);
        gl.glMatrixMode(GL10.GL_MODELVIEW);
        gl.glLoadIdentity();
        w.draw(gl);
        cp.draw(gl);
    }
    
    public void setSelectedPos(float x, float y) {
        // move selected figure using pos and shift
        Box bx = (Box)selectedFigure.getDraw();
        Log.d(MisGameActivity.TAG, "Moving selected Box, pos = " + bx.getPos());
        int iz = bx.getPos().z;
        float z = (iz * 1.0f) / Box.SCALE;
        Vector3f a = new Vector3f();
        convertPosZ(x, y, z, a);
        Vector3f v = new Vector3f();
        v.x = a.x - selectedShift.x;
        v.y = a.y - selectedShift.y;
        v.z = a.z - selectedShift.z;
        bx.getPos().flomVector(v);
        Log.d(MisGameActivity.TAG, "Moving Box, after move pos = " + bx.getPos());
    }
    
    public void rotateView(GL10 gl) {
        Log.d(MisGameActivity.TAG, "rotateView Started, mAngleX, mAngleZ = " +  mAngleX + " , " +  mAngleZ);
        gl.glMatrixMode(GL10.GL_PROJECTION);
        gl.glLoadIdentity();
        float angle = 45f;
        float minZ = 100f;
        float maxZ = 1400f;
        
        GLU.gluPerspective(gl, angle, ratio, minZ, maxZ);
        gl.glTranslatef(0f, 0f, -distWorld);
        gl.glRotatef(mAngleX, 1, 0, 0);
        gl.glRotatef(mAngleZ, 0, 0, 1);
        
        // set up misProj
        if (projChanged) {
            misProj.lock();
            misProj.setAngles(mAngleX, 0, mAngleZ);
            misProj.setTranslate(0, 0, -distWorld);
            misProj.setPerspectiveParameters(angle, ratio, minZ, maxZ);
            misProj.setProjectMatrix();
            misProj.unlock();
        projChanged = false;
        }
        Log.d(MisGameActivity.TAG, "rotateView ended");
    }


    public void onSurfaceCreated(GL10 gl, EGLConfig config) {
         gl.glDisable(GL10.GL_DITHER);
         gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_FASTEST);
         gl.glClearColor(1,1,1,1);
         gl.glEnable(GL10.GL_CULL_FACE);
         gl.glShadeModel(GL10.GL_SMOOTH);
         gl.glEnable(GL10.GL_DEPTH_TEST);
         initTextures(gl);
         initTopPanel();
    }

    
    void initTopPanel() {            
        topPanel = new TopPanel(myContext);
        topPanel.addButton("left", new OnClickListener() {
            public void onClick(View v) {
                onLeftRightButton(-5);                    
            }
        });
        topPanel.addButton("right", new OnClickListener() {
            public void onClick(View v) {
                onLeftRightButton(+5);                    
            }
        });
        topPanel.addButton("up", new OnClickListener() {
            public void onClick(View v) {
                onUpDownButton(-5);                    
            }
        });
        topPanel.addButton("down", new OnClickListener() {
            public void onClick(View v) {
                onUpDownButton(+5);                    
            }
        });
        topPanel.addButton("nearer", new OnClickListener() {
            public void onClick(View v) {
                onDistanceChange(-10);                    
            }
        });
        topPanel.addButton("further", new OnClickListener() {
            public void onClick(View v) {
                onDistanceChange(+10);                    
            }
        });
        topPanel.addButton("onebrick", new OnClickListener() {
            public void onClick(View v) {
                Log.i("MisGame", "Brick Selected");                  
            }
        });
        topPanel.addButton("log", new OnClickListener() {
            public void onClick(View v) {
                Log.i("MisGame", "Log Selected");                  
            }
        });
        
        // adding point
        cp = new ColPoint();
        cp.setPos(30f, 30f, 100f);
        cp.fillData(myContext);        
    }
    
    public void onLeftRightButton(int dax) {
        mAngleZ += dax;  
        projChanged = true;
        requestRender();
    }
    
    public void onDistanceChange(int dd) {
        distWorld += dd; 
        projChanged = true;
        requestRender();
    }
    
    public void onUpDownButton(int dax) {
        mAngleX += dax; 
        projChanged = true;
        requestRender();
    }        
    
    void initTextures(GL10 gl) {
        gl.glEnable(GL10.GL_TEXTURE_2D);
        gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);
        gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);
        gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_CLAMP_TO_EDGE);
        gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_CLAMP_TO_EDGE);
        gl.glTexEnvf(GL10.GL_TEXTURE_ENV, GL10.GL_TEXTURE_ENV_MODE, GL10.GL_REPLACE);
        //gl.glEnable (GL11.GL_BLEND); 
        //gl.glBlendFunc (GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
    }
    
    void requestRender() {
        view.requestRender();
    }
    
    private void convertPos(float x, float y, float z, Vector3f mod) {
        Vector3f win_pos = new Vector3f(x, y, z);
        misProj.lock();
        misProj.misUnProject(win_pos, mod);
        misProj.unlock();
    }
    
    void convertPosZ(float x, float y, float targetZ, Vector3f mod) {
        float z0 = 0.8f;
        float z1 = 0.95f;
        Vector3f a = new Vector3f();
        Vector3f b = new Vector3f();
        convertPos(x, y, z0, a);
        convertPos(x, y, z1, b);            

        float zz = targetZ;
        float xx = a.x + ((zz-a.z)*(b.x - a.x)/(b.z-a.z));
        float yy = a.y + ((zz-a.z)*(b.y - a.y)/(b.z-a.z));
        mod.set(xx, yy, zz);
    }

    public void onSurfaceChanged(GL10 gl, int width, int height) {
         gl.glViewport(0, 0, width, height);
         gl.glLoadIdentity();
         ww = width;
         hh = height;
         ratio = (float) width / height;
         topPanel.setSize(width, height);
         misProj.setWH(ww, hh);
         rotateView(gl);
    }
    
}
