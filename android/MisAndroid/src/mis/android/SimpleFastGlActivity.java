/*
 * Copyright (C) 2008 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package mis.android;

import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL;
import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import com.example.android.apis.graphics.spritetext.MatrixTrackingGL;

import mis.android.game.TopPanel;
import mis.android.game.sysdep.MisGlUtils;
import mis.android.utils.MisProject;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.PixelFormat;
import android.opengl.GLSurfaceView;
import android.opengl.GLU;
import android.opengl.GLUtils;
import android.os.Bundle;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;


/**
 * Wrapper activity demonstrating the use of {@link GLSurfaceView}, a view
 * that uses OpenGL drawing into a dedicated surface.
 *
 * Shows:
 * + How to redraw in response to user input.
 */
public class SimpleFastGlActivity extends Activity {
    
    public static final String TAG = "SimpleFastGlActivity";
    public static boolean USE_TEXTURES = true;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Create our Preview view and set it as the content of our
        // Activity
        mGLSurfaceView = new SimpleSurfaceView(this);
        mGLSurfaceView.setGLWrapper(new GLSurfaceView.GLWrapper() {
            public GL wrap(GL gl) {
                return new MatrixTrackingGL(gl);
            }});
        setContentView(mGLSurfaceView);
        mGLSurfaceView.requestFocus();
        mGLSurfaceView.setFocusableInTouchMode(true);
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
class SimpleSurfaceView extends GLSurfaceView {
    
    Context myContext;

    public SimpleSurfaceView(Context context) {
        super(context);
        
        // can optionally add alpha bits 
        // link: http://developer.android.com/reference/android/opengl/GLSurfaceView.html 
        // getHolder().setFormat(PixelFormat.TRANSLUCENT);
        
        this.myContext = context;
        mRenderer = new CubeRenderer();
        setRenderer(mRenderer);
        setRenderMode(GLSurfaceView.RENDERMODE_WHEN_DIRTY);        
    }

    @Override public boolean onTrackballEvent(MotionEvent e) {
        float x = e.getX();
        float y = e.getY();
        Log.i(SimpleFastGlActivity.TAG, "onTrackballEvent event, x,y = " + x + " " + y);
        requestRender();
        return true;
    }

    @Override public boolean onTouchEvent(MotionEvent e) {
        float x = e.getX();
        float y = mRenderer.hh - e.getY();
        // Log.i(MisOpenGlActivity.TAG, "onTouchEvent event, x,y = " + x + " " + y);
        switch (e.getAction()) {
        case MotionEvent.ACTION_DOWN:
            // requestRender();
            break;
        case MotionEvent.ACTION_MOVE:
            mRenderer.xx = (x - mRenderer.ww/2)/20;
            mRenderer.zz = (y - mRenderer.hh/2)/5;
            mRenderer.yy = 0;
            Log.i(SimpleFastGlActivity.TAG, "onTouchEvent event, zz = " + mRenderer.zz);
            requestRender();
            break;
        }
        return true;
    }

    /**
     * Render a cube.
     */
    private class CubeRenderer implements GLSurfaceView.Renderer {
        final int NCUBES = 15;
        int mTextureID;
        boolean projChanged = true;
        float xx, yy, zz;
        int []viewPort = new int[4];
        public int ww, hh;
        long lastTime = 0;
        private Cube mCube = null;
        private TCube []tCube = new TCube[NCUBES];
        
        
        // TopPanel topPanel = null;
        public CubeRenderer() {
            mCube = new Cube(0x01000);
            tCube[0] = new TCube(myContext);
            for (int i=1; i<NCUBES; i++) {
                tCube[i] = new TCube(myContext);
                tCube[i].resName = "brick" + (i % 10);
            }
        }

        public void onDrawFrame(GL10 gl10) {
            long tm = System.currentTimeMillis();
            long dt = tm - lastTime;
            lastTime = tm;
            Log.d(SimpleFastGlActivity.TAG, " dt = " + dt + " FPS = " + (1000.0 / dt));
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
            if (SimpleFastGlActivity.USE_TEXTURES) {
                gl.glDisableClientState(GL10.GL_COLOR_ARRAY);
                gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
            } else {
                gl.glEnableClientState(GL10.GL_COLOR_ARRAY);
                gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
            }
            
            gl.glTranslatef(-20.0f + 2*xx, 9f, zz);
            int NI = 5;
            int NJ = NCUBES;
            for (int i=0; i<NI; i++) {
                for (int j=0; j<NCUBES; j++) {
                    if (SimpleFastGlActivity.USE_TEXTURES) {
                        tCube[j].draw(gl);
                        gl.glTranslatef(2.5f, 0, 0);
                    } else {
                        mCube.draw(gl);
                    }
                    gl.glTranslatef(1f, 0, 0);
                }
                gl.glTranslatef(-3.3f*NJ, -3.3f, 0);
            }
        }        

        public void onSurfaceChanged(GL10 gl, int width, int height) {
             gl.glViewport(0, 0, width, height);
             setUpProjection(gl);
             viewPort[2] = width;
             viewPort[3] = height;
             ww = width;
             hh = height;
             Log.i("CubeRenderer", "onSurfaceChanged(), width, height = " + width + " " + height);
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
            gl.glTranslatef(0, 0, -40f);
        }

        public void onSurfaceCreated(GL10 gl, EGLConfig config) {
             gl.glDisable(GL10.GL_DITHER);
             gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT,  GL10.GL_FASTEST);
             gl.glClearColor(1,1,1,1);
             gl.glEnable(GL10.GL_CULL_FACE);
             gl.glShadeModel(GL10.GL_SMOOTH);
             gl.glEnable(GL10.GL_DEPTH_TEST);
             for (int i=0; i<NCUBES; i++) {
                 tCube[i].initTexture(gl);
             }
        }

    }
    private CubeRenderer mRenderer;
}


