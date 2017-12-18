package mis.android.game.sysdep;

import java.io.IOException;
import java.io.InputStream;

import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import mis.android.MisOpenGlActivity;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.opengl.GLUtils;
import android.util.Log;

public class MisGlUtils {
    
    public static final int SCALE = 1<<16;
    
    /** some diagnostics */
    public static void someDiagnostics(GL10 gl) {         
         int []parms = new int[1];
         gl.glGetIntegerv(GL10.GL_MAX_TEXTURE_UNITS, parms, 0);
         Log.i(MisOpenGlActivity.TAG, "Max Textures = " + parms[0]);
         gl.glGetIntegerv(GL10.GL_ALPHA_BITS, parms, 0);
         Log.i(MisOpenGlActivity.TAG, "Alpha Bits = " + parms[0]);
         gl.glGetIntegerv(GL10.GL_RED_BITS, parms, 0);
         Log.i(MisOpenGlActivity.TAG, "Red Bits = " + parms[0]);
         gl.glGetIntegerv(GL10.GL_GREEN_BITS, parms, 0);
         Log.i(MisOpenGlActivity.TAG, "Green Bits = " + parms[0]);
         gl.glGetIntegerv(GL10.GL_BLUE_BITS, parms, 0);
         Log.i(MisOpenGlActivity.TAG, "Blue Bits = " + parms[0]);
         gl.glGetIntegerv(GL11.GL_MAX_ELEMENTS_INDICES, parms, 0);
         Log.i(MisOpenGlActivity.TAG, "MAX_ELEMENTS_INDICES = " + parms[0]);
         gl.glGetIntegerv(GL10.GL_MAX_ELEMENTS_VERTICES, parms, 0);
         Log.i(MisOpenGlActivity.TAG, "MAX_ELEMENTS_VERTICES = " + parms[0]);
         String extensions = gl.glGetString(GL10.GL_EXTENSIONS);
         Log.i(MisOpenGlActivity.TAG, "Extensions: " + extensions); 
         if( extensions.contains( "vertex_buffer_object" ) ){
             Log.i(MisOpenGlActivity.TAG, "VOB supported"); 
         } else {
             Log.i(MisOpenGlActivity.TAG, "VOB Not Supported"); 
         }
         if (gl instanceof GL11){
             Log.i(MisOpenGlActivity.TAG, "GL11 supported"); 
         } else {
             Log.i(MisOpenGlActivity.TAG, "GL11 Not Supported"); 
         }
    }

    public static int loadTexture(GL10 gl, String textureFileName, Context context) {
        gl.glActiveTexture(GL10.GL_TEXTURE0);
        int[] textures = new int[1];
        gl.glGenTextures(1, textures, 0);
        int textureId = textures[0];
        gl.glBindTexture(GL10.GL_TEXTURE_2D, textureId);
        
        Resources res = context.getResources();
        int texImageId = res.getIdentifier(textureFileName, "drawable", context.getPackageName());
        if (texImageId == 0) {
            return -1;
        }
        Log.d("TexFigure", "TT Image Id = " + texImageId);
        InputStream is = context.getResources().openRawResource(texImageId);
        Bitmap bitmap;
        try {
            bitmap = BitmapFactory.decodeStream(is);
        } catch (Exception e) {
            Log.e("loadTexture", "Opening image " + textureFileName + " failed, exception: " + e);
            return -1;
        } finally {
            try {
                is.close();
            } catch(IOException e) {
                // Ignore.
            }
        }

        GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);
        bitmap.recycle();   
        return textureId;
    }

}
