package mis.babylon.opengl.sysdep;

import java.io.IOException;

import org.lwjgl.opengl.GL11;

import mis.android.utils.Context;
import mis.android.utils.Log;
import mis.babylon.game.MisGame;
import mis.babylon.opengl.sysdep.tex.Texture;
import mis.babylon.opengl.sysdep.tex.TextureLoader;

public class MisGlUtils {
    
    // public static final int SCALE = 1<<16;
    public static final String TAG = "MisGlUtils";
    
    /** some diagnostics */
    public static void someDiagnostics(GL11 gl) {         
         int []parms = new int[1];
         // gl.glGetIntegerv(GL11.GL_MAX_TEXTURE_UNITS, parms, 0);
         // Log.i(TAG, "Max Textures = " + parms[0]);
         parms[0] = gl.glGetInteger(MisGL11.GL_ALPHA_BITS);
         Log.i(TAG, "Alpha Bits = " + parms[0]);
         parms[0] = gl.glGetInteger(MisGL11.GL_RED_BITS);
         Log.i(TAG, "Red Bits = " + parms[0]);
         parms[0] = gl.glGetInteger(MisGL11.GL_GREEN_BITS);
         Log.i(TAG, "Green Bits = " + parms[0]);
         parms[0] = gl.glGetInteger(MisGL11.GL_BLUE_BITS);
         Log.i(TAG, "Blue Bits = " + parms[0]);
        //         parms[0] = gl.glGetInteger(GL11.GL_MAX_ELEMENTS_INDICES);
        //         Log.i(TAG, "MAX_ELEMENTS_INDICES = " + parms[0]);
        //         parms[0] = gl.glGetInteger(GL11.GL_MAX_ELEMENTS_VERTICES);
        //         Log.i(TAG, "MAX_ELEMENTS_VERTICES = " + parms[0]);
         String extensions = gl.glGetString(GL11.GL_EXTENSIONS);
         Log.i(TAG, "Extensions: " + extensions); 
         if( extensions.contains( "vertex_buffer_object" ) ){
             Log.i(TAG, "VOB supported"); 
         } else {
             Log.i(TAG, "VOB Not Supported"); 
         }
         if (gl instanceof GL11){
             Log.i(TAG, "GL11 supported"); 
         } else {
             Log.i(TAG, "GL11 Not Supported"); 
         }
    }

    public static int loadTexture(GL11 gl, String textureFileName, Context context) {
        if (MisGame.ANDROID) {
            return loadTextureAndroid(gl, textureFileName, context);
        } else {
            return loadTextureOpenGl(gl, textureFileName);
        }
    }
    
    
    private static int loadTextureOpenGl(GL11 gl, String textureFileName) {
        int textureId = 0;        
        TextureLoader tl = new TextureLoader();
        try {
            Texture t = tl.getTexture(textureFileName);
        } catch (IOException ioe) {
            Log.e(TAG, "Caoont load texture " + textureFileName + " , exception " + ioe);
        }
        
        return textureId;
    }    
    
    private static int loadTextureAndroid(GL11 gl, String textureFileName, Context context) {
        int textureId = 0;
        /*
        gl.glActiveTexture(GL11.GL_TEXTURE0);
        int[] textures = new int[1];
        gl.glGenTextures(1, textures, 0);
        textureId = textures[0];
        gl.glBindTexture(GL11.GL_TEXTURE_2D, textureId);        
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

        GLUtils.texImage2D(GL11.GL_TEXTURE_2D, 0, bitmap, 0);
        bitmap.recycle();  */ 
        return textureId;
    }    
    
    public static void initTextures(MisGL11 gl) {
        gl.glDisable(GL11.GL_DITHER);
        gl.glHint(GL11.GL_PERSPECTIVE_CORRECTION_HINT, GL11.GL_FASTEST);
        gl.glClearColor(1,1,1,1);
        gl.glEnable(GL11.GL_CULL_FACE);
        gl.glShadeModel(GL11.GL_SMOOTH);
        gl.glEnable(GL11.GL_DEPTH_TEST);
        gl.glEnable(GL11.GL_TEXTURE_2D);
        gl.glTexParameterf(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_MIN_FILTER, GL11.GL_NEAREST);
        gl.glTexParameterf(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_MAG_FILTER, GL11.GL_LINEAR);
        gl.glTexParameterf(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_WRAP_S, GL11.GL_CLAMP);
        gl.glTexParameterf(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_WRAP_T, GL11.GL_CLAMP);
        gl.glTexEnvf(GL11.GL_TEXTURE_ENV, GL11.GL_TEXTURE_ENV_MODE, GL11.GL_REPLACE);
        
        // we need these settings below to blend transparent GIF images
        gl.glEnable (GL11.GL_BLEND); 
        gl.glBlendFunc (GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
    }


}
