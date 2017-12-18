package mis.android.game;

import android.opengl.GLSurfaceView;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import mis.android.utils.MisContext;
import mis.babylon.game.MisGame;
import mis.babylon.game.graphics.TCube;

import android.opengl.GLU;
import android.util.Log;
import android.view.MotionEvent;

/**
 * dummy class to change less code when porting to android.
 * 
 * @author TCSDEVELOPER
 */
public class BrickSurfaceView extends GLSurfaceView{    
    public static final String TAG = GameSurfaceView.class.getSimpleName();
    MisContext myContext;
    private CubeRenderer rend;

    public BrickSurfaceView(MisContext c) {
        super(c.getContext());
        this.myContext = c;
        rend = new CubeRenderer();
        setRenderer(rend);
        setRenderMode(GLSurfaceView.RENDERMODE_WHEN_DIRTY);        
    }

    @Override public boolean onTouchEvent(MotionEvent e) {
        float x = e.getX();
        float y = rend.hh - e.getY();
        Log.i(TAG, "onTouchEvent event, x,y = " + x + " " + y);
        switch (e.getAction()) {
        case MotionEvent.ACTION_DOWN:
            // requestRender();
            break;
        case MotionEvent.ACTION_MOVE:
            float coef = 1.65f;
            rend.xx = (x - rend.X0) * coef / rend.ZZ;
            rend.yy = (y - rend.Y0) * coef / rend.ZZ;
            Log.i(TAG, "onTouchEvent event, x,y = " + x + " " + y + " xx,yy = " + rend.xx + " " + rend.yy);
            requestRender();
            break;
        }
        return true;
    }

    /**
     * Render a cube.
     */
    private class CubeRenderer implements GLSurfaceView.Renderer {
        boolean projChanged = true;
        public float xx, yy, zz;
        int []viewPort = new int[4];
        public int ww, hh;
        private TCube tCube;
        public float ZZ = 40f;
        public float X0 = 240;
        public float Y0 = 350;
        
        
        // TopPanel topPanel = null;
        public CubeRenderer() {
            tCube = new TCube(myContext);
        }

        public void onDrawFrame(GL10 gl10) {
            Log.d(TAG, "onDrawFrame called");
            GL11 gl = (GL11)gl10;
            gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);

            if (projChanged) {
                setUpProjection(gl);
                projChanged = false;
            }

            gl.glMatrixMode(GL10.GL_MODELVIEW);
            gl.glTranslatef(xx, yy, 0);
            gl.glLoadIdentity();
            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
            gl.glDisableClientState(GL10.GL_COLOR_ARRAY);
            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
            
            gl.glTranslatef(xx, yy, zz);
            tCube.draw(gl);
        }        

        public void onSurfaceChanged(GL10 gl, int width, int height) {
             gl.glViewport(0, 0, width, height);
             setUpProjection(gl);
             viewPort[2] = width;
             viewPort[3] = height;
             ww = width;
             hh = height;
             Log.i(TAG, "onSurfaceChanged(), width, height = " + width + " " + height);
        }
        
        private void setUpProjection(GL10 gl) {
            gl.glMatrixMode(GL10.GL_PROJECTION);
            gl.glLoadIdentity();
            // gl.glFrustumf(-ratio, ratio, -1, 1, 1, 10);
            float angle = 45.0f;
            float ratio = (float)((1.0 * 320) / 480.0);
            float minZ = 2f;
            float maxZ = 100f;
            GLU.gluPerspective(gl, angle, ratio, minZ, maxZ);
            gl.glTranslatef(0, 0, -ZZ);
        }

        public void onSurfaceCreated(GL10 gl, EGLConfig config) {
             gl.glDisable(GL10.GL_DITHER);
             gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT,  GL10.GL_FASTEST);
             gl.glClearColor(1,1,1,1);
             gl.glEnable(GL10.GL_CULL_FACE);
             gl.glShadeModel(GL10.GL_SMOOTH);
             gl.glEnable(GL10.GL_DEPTH_TEST);
             tCube.initTexture(gl);
        }

    }
}

