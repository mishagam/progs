/*
 * Copyright (C) 2007 The Android Open Source Project
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

import javax.microedition.khronos.opengles.GL10;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.opengl.GLUtils;
import android.util.Log;

/**
 * A vertex shaded cube.
 * with texture for testing that texture draw works.
 */
public class TCube
{  
    private static final String TAG = "Tcube";
    public String resName = "onebrick";
    private IntBuffer   mVertexBuffer;
    private IntBuffer   mTextureBuffer;
    private ShortBuffer  mIndexBuffer;
    Context myContext;
    int textureId;
    
    public TCube(Context context)
    {
        this.myContext = context;
        prepareCubeBuffers();
    }
    
    private void prepareCubeBuffers() {
        int one = 0x010000;
        int two = 0x002C000;
        int hlv = 0x0018000;
        int vertices[] = {
                -two, -hlv, 0,
                two, -hlv, 0,
                two,  hlv, 0,
                -two,  hlv, 0,
        };

        int textures[] = {
                0,     0,    
                one,   0,   
                one,  one,
                0,    one,
        };

        short indices[] = {
                0, 3, 2,    
                0, 2, 1,
        };

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

        ByteBuffer ibb = ByteBuffer.allocateDirect(indices.length*2);
        ibb.order(ByteOrder.nativeOrder());
        mIndexBuffer = ibb.asShortBuffer();
        mIndexBuffer.put(indices);
        mIndexBuffer.position(0);
    }
    
    public void initTexture(GL10 gl) {
        gl.glEnable(GL10.GL_TEXTURE_2D);
        gl.glActiveTexture(GL10.GL_TEXTURE0);
        int[] textures = new int[1];
        gl.glGenTextures(1, textures, 0);
        this.textureId = textures[0];
        gl.glBindTexture(GL10.GL_TEXTURE_2D, textureId);
        
        Resources res = myContext.getResources();
        int texImageId = res.getIdentifier(resName, "drawable", myContext.getPackageName());
        Log.d("TexFigure", "TT Image Id = " + texImageId);
        
        // this line is apparently required for Nexus One
        gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

        InputStream is = myContext.getResources().openRawResource(texImageId);
        Bitmap bitmap = null;
        try {
            bitmap = BitmapFactory.decodeStream(is);
        } catch (Exception e) {
            Log.e(TAG, e.getMessage() + e.getStackTrace());
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

    public void draw(GL10 gl)
    {
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glDisableClientState(GL10.GL_COLOR_ARRAY);
        gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
        gl.glBindTexture(GL10.GL_TEXTURE_2D, textureId);
        gl.glFrontFace(GL10.GL_CW);
        gl.glVertexPointer(3, GL10.GL_FIXED, 0, mVertexBuffer);
        gl.glTexCoordPointer(2, GL10.GL_FIXED, 0, mTextureBuffer);
        gl.glDrawElements(GL10.GL_TRIANGLES, 6, GL10.GL_UNSIGNED_SHORT, mIndexBuffer);
    }

}
