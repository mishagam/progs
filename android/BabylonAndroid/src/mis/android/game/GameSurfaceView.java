package mis.android.game;

import java.io.IOException;

import android.opengl.GLSurfaceView;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import mis.android.utils.MisContext;
import mis.android.utils.MisEGLConfig;
import mis.babylon.game.MisGame;
import mis.babylon.game.graphics.TCube;
import mis.babylon.opengl.sysdep.MisGL11;

import android.opengl.GLU;
import android.util.Log;
import android.view.MotionEvent;

/**
 * dummy class to change less code when porting to android.
 * 
 * @author TCSDEVELOPER
 */
public class GameSurfaceView extends GLSurfaceView{    
    public static final String TAG = GameSurfaceView.class.getSimpleName();
    MisContext myContext;
    MisGame game;
    private GameRenderer gameRenderer;

    public GameSurfaceView(MisContext c) {
        super(c.getContext());
        this.myContext = c;
        game = new MisGame(c, this);
        game.showMenu = false;
        gameRenderer = new GameRenderer();
        setRenderer(gameRenderer);
        setRenderMode(GLSurfaceView.RENDERMODE_WHEN_DIRTY);        
    }

    @Override public boolean onTouchEvent(MotionEvent e) {
        float x = e.getX();
        float y = gameRenderer.hh - e.getY();
        Log.i(TAG, "onTouchEvent event, x,y = " + x + " " + y);
        switch (e.getAction()) {
        case MotionEvent.ACTION_DOWN:
            game.onMouseDown(x, y);
            break;
        case MotionEvent.ACTION_MOVE:
            game.onMove(x, y);
            break;
        case MotionEvent.ACTION_UP:
            game.onMouseUp(x, y);
            break;
        }
        return true;
    }

    /**
     * Render a cube.
     */
    private class GameRenderer implements GLSurfaceView.Renderer {
        boolean projChanged = true;
        int []viewPort = new int[4];
        public int ww, hh;
        
        // TopPanel topPanel = null;
        public GameRenderer() {
        }

        public void onDrawFrame(GL10 gl10) {
            Log.d(TAG, "onDrawFrame called");
            MisGL11 gl = new MisGL11((GL11)gl10);

            if (projChanged) {
                setUpProjection(gl);
                projChanged = false;
            }

            game.onDrawFrame(gl);
        }        

        public void onSurfaceChanged(GL10 gl10, int width, int height) {
            MisGL11 gl = new MisGL11((GL11)gl10);
             game.onSurfaceChanged(gl, width, height);
             ww = width;
             hh = height;
             Log.i(TAG, "onSurfaceChanged(), width, height = " + width + " " + height);
        }
        
        private void setUpProjection(MisGL11 gl) {
            game.rotateView(gl);
        }

        public void onSurfaceCreated(GL10 gl10, EGLConfig config) {
            MisGL11 gl = new MisGL11((GL11)gl10);
            MisEGLConfig co = new MisEGLConfig(config);
            game.onSurfaceCreated(gl, co);
        }

    }
}

