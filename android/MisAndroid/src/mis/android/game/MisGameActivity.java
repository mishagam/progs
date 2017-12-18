package mis.android.game;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import org.lwjgl.util.vector.Vector3f;

import mis.android.MisOpenGlActivity;
import mis.android.game.sysdep.Box;
import mis.android.game.sysdep.ColPoint;
import mis.android.game.sysdep.Point;
import mis.android.utils.MisProject;
import android.app.Activity;
import android.content.Context;
import android.opengl.GLSurfaceView;
import android.opengl.GLU;
import android.os.Bundle;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnClickListener;

/**
 * device dependent Android game program.
 * Redirects most actions to more device independent MisGame
 * 
 * @author Misha
 */
public class MisGameActivity extends Activity {
    
    public static final String TAG = "MisGame";
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Create our Preview view and set it as the content of our
        // Activity
        Log.i(TAG, "Mis Game activity onCreate() started");
        mGLSurfaceView = new GameSurfaceView(this);
        setContentView(mGLSurfaceView);
        mGLSurfaceView.requestFocus();
        mGLSurfaceView.setFocusableInTouchMode(true);
        Log.i(TAG, "Mis Game activity onCreate() ended");
    }

    @Override
    protected void onResume() {
        // Ideally a game should implement onResume() and onPause()
        // to take appropriate action when the activity looses focus
        super.onResume();
        mGLSurfaceView.onResume();
    }

    @Override
    protected void onPause() {
        // Ideally a game should implement onResume() and onPause()
        // to take appropriate action when the activity looses focus
        super.onPause();
        mGLSurfaceView.onPause();
    }

    private GLSurfaceView mGLSurfaceView;
}


/**
 * Implement a simple rotation control.
 *
 */
class GameSurfaceView extends GLSurfaceView {
    MisGame mg = null;
    private GameRenderer mRenderer;
    int hh;

    public GameSurfaceView(Context context) {
        super(context);
        
        // can optionally add alpha bits 
        // link: http://developer.android.com/reference/android/opengl/GLSurfaceView.html 
        // getHolder().setFormat(PixelFormat.TRANSLUCENT);
        mg = new MisGame(context, this);       
        mRenderer = new GameRenderer();
        setRenderer(mRenderer);
        setRenderMode(GLSurfaceView.RENDERMODE_WHEN_DIRTY);        
    }

    @Override public boolean onTrackballEvent(MotionEvent e) {
        // never happens in emulator
        Log.i(MisOpenGlActivity.TAG, "onTrackballEvent event, x,y = " + e.getX() + " " + e.getY());
        return true;
    }

    @Override public boolean onTouchEvent(MotionEvent e) {
        float x = e.getX();
        float y = hh - e.getY();
        
        switch (e.getAction()) {
        
        case MotionEvent.ACTION_MOVE:
            Log.d(MisGameActivity.TAG, "ACTION_MOVE, x,y = " + x + " " + y);
            mg.onMove(x, y);
            break;
            
        case MotionEvent.ACTION_UP:
            Log.d(MisGameActivity.TAG, "ActionUp event happened, x,y = "  + x + " " + y);  
            mg.onMouseUp(x, y);
            break;
            
        case MotionEvent.ACTION_DOWN:
            Log.d(MisGameActivity.TAG, "ACTION_DOWN, x,y = " + x + " " + y);    
            mg.onMouseDown(x, y);
            break;
        }
        return true;
    }

    /**
     * Render a cube.
     */
    private class GameRenderer implements GLSurfaceView.Renderer {
        
        public GameRenderer() {
        }

        public void onDrawFrame(GL10 gl) {
            mg.onDrawFrame(gl);
        }

        public void onSurfaceCreated(GL10 gl, EGLConfig config) {
             mg.onSurfaceCreated(gl, config);
        }

        public void onSurfaceChanged(GL10 gl, int width, int height) {
            hh = height;
             mg.onSurfaceChanged(gl, width, height);
        }        
    }
}

