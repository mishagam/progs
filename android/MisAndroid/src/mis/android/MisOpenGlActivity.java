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
public class MisOpenGlActivity extends Activity {
    
    public static final String TAG = "MisOpenGLActivity";
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Create our Preview view and set it as the content of our
        // Activity
        mGLSurfaceView = new MisTouchSurfaceView(this);
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
class MisTouchSurfaceView extends GLSurfaceView {
    
    public static final String TAG = "TouchSurfaceView";
    Context myContext;
    private float dist2;  // distance between 2 points
    private float startDist;  // distance at start of movement

    public MisTouchSurfaceView(Context context) {
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
        Log.i(MisOpenGlActivity.TAG, "onTrackballEvent event, x,y = " + x + " " + y);
        //mRenderer.mAngleX += x * TRACKBALL_SCALE_FACTOR;
        //mRenderer.mAngleY += y * TRACKBALL_SCALE_FACTOR;
        requestRender();
        return true;
    }
    
    /**
     * look: http://developer.android.com/reference/android/view/MotionEvent.html
     * @param e
     */
    private void reportMove(MotionEvent ev) {
        final int historySize = ev.getHistorySize();
        final int pointerCount = ev.getPointerCount();
        for (int h = 0; h < historySize; h++) {
            Log.i(TAG, "At time " + ev.getHistoricalEventTime(h));
            for (int p = 0; p < pointerCount; p++) {
                Log.i(TAG, String.format("  pointer %d: (%f,%f)",
                    ev.getPointerId(p), ev.getHistoricalX(p, h), ev.getHistoricalY(p, h)));
            }
        }
        if (pointerCount > 1) {
        	// calculating dist2 as distance between 2 points, for history event 0
        	float dx = ev.getHistoricalX(1, 0) - ev.getHistoricalX(0, 0);
        	float dy = ev.getHistoricalY(1, 0) - ev.getHistoricalY(0, 0);
        	dist2 = (float)Math.sqrt(dx*dx + dy*dy);        	
            if (startDist < 0.001) {
            	startDist = dist2;
            } else {
            	float dratio = dist2 / startDist;
                if (Math.abs(dratio - 1)> 0.05) {
                	mRenderer.ratio *= (1.0 / dratio);            	
                	Log.i(TAG, String.format("new ratio, rendRatio = " + dratio + " " + mRenderer.ratio));
                	requestRender();
                	startDist = dist2;
                }
            	
            }
            Log.i(TAG, String.format("new startDist, dist2 = " + startDist + " " + dist2));
        } else {
        	startDist = 0.0f;
        }
        Log.i(TAG, String.format("At time %d dist = %f", ev.getEventTime(), dist2));
        /*for (int p = 0; p < pointerCount; p++) {
            System.out.printf("  pointer %d: (%f,%f)",
                ev.getPointerId(p), ev.getX(p), ev.getY(p));
        }*/
    }

    @Override public boolean onTouchEvent(MotionEvent e) {
        float x = e.getX();
        float y = e.getY();
        Log.i(MisOpenGlActivity.TAG, "onTouchEvent event, x,y = " + x + " " + y);
        switch (e.getAction()) {
        case MotionEvent.ACTION_DOWN:
            mRenderer.needClick = true;
            mRenderer.rx = x;
            mRenderer.ry = y;
            requestRender();
            startDist = 0.0f;
            dist2 = 0.0f;
            break;
        case MotionEvent.ACTION_UP:
            mRenderer.needClick = true;
            mRenderer.rx = x;
            mRenderer.ry = y;
        	Log.i(TAG, "MotionEvent.ACTION_UP, dist2 = " + dist2);
        	requestRender();
            break;
        case MotionEvent.ACTION_MOVE:
            float dx = x - mPreviousX;
            float dy = y - mPreviousY;
            reportMove(e);
            mRenderer.mAngleX += dx * TOUCH_SCALE_FACTOR;
            mRenderer.mAngleY += dy * TOUCH_SCALE_FACTOR;
            requestRender();
            break;
        }
        mPreviousX = x;
        mPreviousY = y;
        return true;
    }

    /**
     * Render a cube.
     */
    private class CubeRenderer implements GLSurfaceView.Renderer {
        int mTextureID;
        public boolean onClickRequested = false;
        float []modelMatrix = null;
        float []projectMatrix = null;
        int []viewPort = new int[]{0,0,0,0};
        boolean needClick = false;
        float rx, ry;
        public float ratio = 1.0f;
        
        // TopPanel topPanel = null;
        public CubeRenderer() {
            mCube = new Cube(0x01000);
            mCube1 = new TCube(MisTouchSurfaceView.this.myContext);
        }
        
        void printMatrix(String name, float []mat) {
            System.out.println("Matrix: " + name);
            for (int i=0; i<4; i++) {
                for (int j=0; j<4; j++) {
                    System.out.printf("%8f ", mat[4*i+j]);
                }
                System.out.println();
            }
        }
        
        public void onClick(GL11 gl, float x, float y) {
            MatrixTrackingGL mgl = (MatrixTrackingGL)gl;
            float []gmatrix = new float[20];
            float []mmatrix = new float[20];
            mgl.glMatrixMode(GL10.GL_PROJECTION);
            mgl.getMatrix(gmatrix, 0);
            printMatrix("Projection", gmatrix);
            mgl.glMatrixMode(GL10.GL_MODELVIEW);
            mgl.getMatrix(mmatrix, 0);
            //printMatrix("Model", mmatrix);
            float []zz = new float[11];
            for (int i=0; i<0; i++) {
                //GLU.gluUnProject(winX, winY, winZ, model, modelOffset, project, projectOffset, view, viewOffset, obj, objOffset)
                float winZ = 0.1f * i;
                float []obj = new float[3];
                GLU.gluUnProject(x, y, winZ, 
                        modelMatrix, 0, 
                        projectMatrix, 0, 
                        viewPort, 0, 
                        obj, 0);
                zz[i] = obj[3];
            }
        }

        public void onDrawFrame(GL10 gl10) {
            GL11 gl = (GL11)gl10;
            gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
            
            /* draw top panel */            
            //topPanel.draw(gl);
            /*
             * Now we're ready to draw some 3D objects
             */
            setUpProjection(gl);

            gl.glMatrixMode(GL10.GL_MODELVIEW);
            gl.glLoadIdentity();
            // gl.glTranslatef(0, 0, -3.0f);
            //gl.glRotatef(mAngleX, 0, 1, 0);
            //gl.glRotatef(mAngleY, 1, 0, 0);
            
            if (needClick) {
                onClick(gl, rx, ry);
                needClick = false;
            }

            gl.glDisable(GL10.GL_TEXTURE_2D);
            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
            gl.glEnableClientState(GL10.GL_COLOR_ARRAY);
            gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
            
            // mCube.draw(gl);
            
            // draw my own small figure
            gl.glPushMatrix();
            gl.glLoadIdentity();
            gl.glTranslatef(-2.0f, 1f, -3.0f);
            //gl.glRotatef(mAngleX, 0, 1, 0);
            //gl.glRotatef(mAngleY, 1, 0, 0);
            
            // my simple triangle
            //misDrawTriangle(gl);
            gl.glPopMatrix();
            
            // draw texture cube
            gl.glPushMatrix();
            gl.glLoadIdentity();
            gl.glTranslatef(-1f, -3.0f, -mAngleY);
            //gl.glRotatef(mAngleX, 0, 1, 0);
            //gl.glRotatef(mAngleY, 1, 0, 0);
            // mCube1.draw(gl);
            gl.glPopMatrix();
            
            // my simple triangle
            gl.glPushMatrix();
            gl.glLoadIdentity();
            gl.glTranslatef(0.0f, -0.0f, -0.0f);
            //gl.glRotatef(mAngleX, 0, 1, 0);
            //gl.glRotatef(mAngleY, 1, 0, 0);
            // gl.glEnable(GL10.GL_TEXTURE_2D);
            misDrawTexture(gl);
            gl.glPopMatrix();
        }
        
        void misDrawTriangle(GL10 gl) {
            int one = 0x10000;
            int f34 = 0xA000;
            int two = 0x20000;
            int five = 0x50000;
            int ten = 0x100000;
            IntBuffer   mVertexBuffer;
            IntBuffer   mColorBuffer;
            ShortBuffer  mIndexBuffer;
            
            int vertices[] = {
                    0,  0, -one,
                    0, two, -one,
                    five, 0, -one,
                    five, 0, -one,
                    0, two, -one,
                    five, two, -one
            };

            int colors[] = {
                    f34,     f34,   f34,  one,
                    f34,     f34,   f34,  one,
                    one, one,  one,  one,
                    one,   0,    0,  one,
                    0,   one,    0,  one,
                    0,     0,  one,  one,
            };
            
            

            short indices[] = {
                    0,1,2,
                    2,1,5 // 3,4,5
            };

            // Buffers to be passed to gl*Pointer() functions
            // must be direct, i.e., they must be placed on the
            // native heap where the garbage collector cannot
            // move them.
            //
            // Buffers with multi-byte datatypes (e.g., short, int, float)
            // must have their byte order set to native order

            ByteBuffer vbb = ByteBuffer.allocateDirect(vertices.length*4);
            vbb.order(ByteOrder.nativeOrder());
            mVertexBuffer = vbb.asIntBuffer();
            mVertexBuffer.put(vertices);
            mVertexBuffer.position(0);

            ByteBuffer cbb = ByteBuffer.allocateDirect(colors.length*4);
            cbb.order(ByteOrder.nativeOrder());
            mColorBuffer = cbb.asIntBuffer();
            mColorBuffer.put(colors);
            mColorBuffer.position(0);

            ByteBuffer ibb = ByteBuffer.allocateDirect(indices.length*2);
            ibb.order(ByteOrder.nativeOrder());
            mIndexBuffer = ibb.asShortBuffer();
            mIndexBuffer.put(indices);
            mIndexBuffer.position(0);

            // gl.glFrontFace(GL10.GL_CW);
            // gl.glVertexPointer(3, GL10.GL_FIXED, 0, mVertexBuffer);
            gl.glColorPointer(4, GL10.GL_FIXED, 0, mColorBuffer);
//            gl.glDrawElements(GL10.GL_TRIANGLES, 6, GL10.GL_UNSIGNED_SHORT, mIndexBuffer);
        }
        
        void misDrawTexture(GL10 gl10) {
            GL11 gl = (GL11)gl10;
            int one = 0x10000;
            int zone = 0x10;
            int half = 0x8000;
            int third = 0x5000;
            int two = 0x20000;
            int five = 0x50000;
            int ten = 0x100000;
            IntBuffer   mVertexBuffer;
            IntBuffer   mTextureBuffer;
            IntBuffer   mColorBuffer;
            ShortBuffer  mIndexBuffer;
            boolean blendYellow = false;
            
            int vertices[] = {
                    0,  0, zone,
                    0, one, zone,
                    two, 0, zone,
                    two, 0, zone,
                    0, one, zone,
                    two, one, zone
            };

            int textures[] = {
                    0,     0, 
                    0,   one,
                    one,   0,
                    one,   0,
                    0,   one,
                    one, one
            };
            

            int colors[] = {
                    one, one,    0,  half,
                    one, one,    0,  half,
                    one, one,    0,  half,
                    0, one,    0,  third,
                    0, one,    0,  third,
                    0, one,    0,  third,
            };

            short indices[] = {
                    0,1,2,
                    3,4,5
            };

            // Buffers to be passed to gl*Pointer() functions
            // must be direct, i.e., they must be placed on the
            // native heap where the garbage collector cannot
            // move them.
            //
            // Buffers with multi-byte datatypes (e.g., short, int, float)
            // must have their byte order set to native order

            ByteBuffer vbb = ByteBuffer.allocateDirect(vertices.length*4);
            vbb.order(ByteOrder.nativeOrder());
            mVertexBuffer = vbb.asIntBuffer();
            mVertexBuffer.put(vertices);
            mVertexBuffer.position(0);

            ByteBuffer tbb = ByteBuffer.allocateDirect(textures.length*4);
            tbb.order(ByteOrder.nativeOrder());
            mTextureBuffer = tbb.asIntBuffer();
            mTextureBuffer.put(textures);
            mTextureBuffer.position(0);

            ByteBuffer cbb = ByteBuffer.allocateDirect(colors.length*4);
            cbb.order(ByteOrder.nativeOrder());
            mColorBuffer = cbb.asIntBuffer();
            mColorBuffer.put(colors);
            mColorBuffer.position(0);

            ByteBuffer ibb = ByteBuffer.allocateDirect(indices.length*2);
            ibb.order(ByteOrder.nativeOrder());
            mIndexBuffer = ibb.asShortBuffer();
            mIndexBuffer.put(indices);
            mIndexBuffer.position(0);

            gl.glColorPointer(4, GL10.GL_FIXED, 0, mColorBuffer);
            gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);

            gl.glActiveTexture(GL10.GL_TEXTURE0);
            gl.glBindTexture(GL10.GL_TEXTURE_2D, mTextureID);
            
            gl.glEnable(GL10.GL_TEXTURE_2D);
            gl.glFrontFace(GL10.GL_CW);
            gl.glVertexPointer(3, GL10.GL_FIXED, 0, mVertexBuffer);
            gl.glTexCoordPointer(2, GL10.GL_FIXED, 0, mTextureBuffer);
            gl.glDrawElements(GL10.GL_TRIANGLES, 6, GL10.GL_UNSIGNED_SHORT, mIndexBuffer);
            
            // blending with yellow
            if (!blendYellow) {
                return;
            }
            gl.glDisable(GL10.GL_TEXTURE_2D);
            gl.glTranslatef(-5f, -5f, +0.001f);
            gl.glEnable (GL10.GL_BLEND); 
            gl.glEnableClientState(GL10.GL_COLOR_ARRAY);
            gl.glBlendFunc (GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);  
            gl.glVertexPointer(3, GL10.GL_FIXED, 0, mVertexBuffer);
            
            gl.glColorPointer(4, GL10.GL_FIXED, 0, mColorBuffer);
            gl.glDrawElements(GL10.GL_TRIANGLES, 6, GL10.GL_UNSIGNED_SHORT, mIndexBuffer);
        }

        public void onSurfaceChanged(GL10 gl, int width, int height) {
             gl.glViewport(0, 0, width, height);
             setUpProjection(gl);
             viewPort[2] = width;
             viewPort[3] = height;
             Log.i("CubeRenderer", "onSurfaceChanged(), width, height = " + width + " " + height);
        }
        
        private void setUpProjection(GL10 gl) {
            gl.glMatrixMode(GL10.GL_PROJECTION);
            gl.glLoadIdentity();
            // gl.glFrustumf(-ratio, ratio, -1, 1, 1, 10);
            float angle = 45.0f;
            float ratio = (float)((1.0 * 320) / 480.0);
            float minZ = 2f * ratio;
            float maxZ = 100f * ratio;
            GLU.gluPerspective(gl, angle, ratio, minZ, maxZ);
            gl.glTranslatef(0f, 0f, -10.0f * this.ratio);
            // gl.glRotatef(mAngleY, 0, 1, 0);
            // gl.glRotatef(mAngleZ, 0, 0, 1);
            // set up misProj
            misProj.setAngles(0, mAngleY, 0);
            misProj.setTranslate(0, 0, -10f);
            misProj.setPerspectiveParameters(angle, ratio, minZ, maxZ);
            misProj.setProjectMatrix();
        }

        public void onSurfaceCreated(GL10 gl, EGLConfig config) {
            /*
             * By default, OpenGL enables features that improve quality
             * but reduce performance. One might want to tweak that
             * especially on software renderer.
             */
            gl.glDisable(GL10.GL_DITHER);

            /*
             * Some one-time OpenGL initialization can be made here
             * probably based on features of this particular context
             */
             gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT,
                     GL10.GL_FASTEST);

             gl.glClearColor(1,1,1,1);
             gl.glEnable(GL10.GL_CULL_FACE);
             gl.glShadeModel(GL10.GL_SMOOTH);
             gl.glEnable(GL10.GL_DEPTH_TEST);
             initTextures(gl);
             
             MisGlUtils.someDiagnostics(gl);
        }
        
        void initTextures(GL10 gl) {
            gl.glEnable(GL10.GL_TEXTURE_2D);

            int[] textures = new int[1];
            gl.glGenTextures(1, textures, 0);
            mTextureID = textures[0];
            gl.glBindTexture(GL10.GL_TEXTURE_2D, mTextureID);

            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);
            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MAG_FILTER, GL10.GL_LINEAR);
            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_S, GL10.GL_CLAMP_TO_EDGE);
            gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_WRAP_T, GL10.GL_CLAMP_TO_EDGE);
            gl.glTexEnvf(GL10.GL_TEXTURE_ENV, GL10.GL_TEXTURE_ENV_MODE, GL10.GL_REPLACE);

            InputStream is = myContext.getResources()
                    .openRawResource(R.drawable.onebrick);
            Bitmap bitmap;
            try {
                bitmap = BitmapFactory.decodeStream(is);
            } finally {
                try {
                    is.close();
                } catch(IOException e) {
                    // Ignore.
                }
            }

            GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);
            bitmap.recycle();
        
        }

        private Cube mCube;
        private TCube mCube1;
        public float mAngleX = 0.0f;
        public float mAngleY = 10.0f;
        public float mAngleZ = 0.0f;
        MisProject misProj = new MisProject();
    }

    private final float TOUCH_SCALE_FACTOR = 180.0f / 320;
    private final float TRACKBALL_SCALE_FACTOR = 36.0f;
    private CubeRenderer mRenderer;
    private float mPreviousX;
    private float mPreviousY;
}


