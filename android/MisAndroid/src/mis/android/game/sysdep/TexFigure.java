package mis.android.game.sysdep;

import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;
import java.util.ArrayList;
import java.util.List;

import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import org.w3c.dom.Element;

import mis.android.Cube;
import mis.android.R;
import mis.android.TCube;
import mis.android.game.MisGame;
import mis.android.game.MisGameActivity;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.opengl.GLUtils;
import android.text.TextUtils;
import android.util.Log;

/**
 * figure drawing texture. draws texture as list of triangles.
 * Holds texture points in addition to points from MisFigure 
 * @author misha
 *
 */
public class TexFigure extends MisDrawable {

    public Context getMyContext() {
        return myContext;
    }

    public void setMyContext(Context myContext) {
        this.myContext = myContext;
    }

    public String getTextureFileName() {
        return textureFileName;
    }

    public void setTextureFileName(String textureFileName) {
        this.textureFileName = textureFileName;
    }

    private int textureId = 0;
	List<Point2> texPoints = new ArrayList<Point2>();
	private Context myContext = null;
    IntBuffer   mVertexBuffer;
    IntBuffer   mTextureBuffer;
    ShortBuffer  mIndexBuffer;
    String textureFileName;
    private final String TAG = "TexFigure";
    private int nTri = 0;
    TextUtils.StringSplitter dotSplitter = new TextUtils.SimpleStringSplitter('.');
	
	public TexFigure() {
	    useTextures = true;
	}

    void initTexture(GL10 gl) {
        gl.glActiveTexture(GL10.GL_TEXTURE0);
        int[] textures = new int[1];
        gl.glGenTextures(1, textures, 0);
        this.textureId = textures[0];
        gl.glBindTexture(GL10.GL_TEXTURE_2D, textureId);
        
        Bitmap bitmap = null;
        InputStream is = null;
        try {
            Resources res = myContext.getResources();
            if (MisGame.ANDROID) {
                // Once per string to split
                dotSplitter.setString(textureFileName);
                textureFileName = dotSplitter.iterator().next();
            }
            int texImageId = res.getIdentifier(textureFileName, "drawable", myContext.getPackageName());
            Log.d("TexFigure", "TT Image Id = " + texImageId);
            is = myContext.getResources().openRawResource(texImageId);
            bitmap = BitmapFactory.decodeStream(is);
        } catch (Exception e) {
            Log.e(TAG, "Cannot opoen texture with name " + textureFileName + 
                    " Exception: " + e.getStackTrace());
            this.textureId = 0;
        } finally {
            try {
                if (is != null) {
                    is.close();
                }
            } catch(IOException e) {
                // Ignore.
            }
        }

        GLUtils.texImage2D(GL10.GL_TEXTURE_2D, 0, bitmap, 0);
        bitmap.recycle();    
    }

	public void draw(GL11 gl) {
        gl.glEnable(GL10.GL_TEXTURE_2D);
	    if (textureId == 0) {
	        initTexture(gl);
	    }
	    if (mTextureBuffer == null) {
	        fillBuffers();
	    }
	    
        gl.glTexParameterf(GL10.GL_TEXTURE_2D, GL10.GL_TEXTURE_MIN_FILTER, GL10.GL_NEAREST);

	    gl.glTranslatex(pos.x, pos.y, pos.z);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        // gl.glDisableClientState(GL10.GL_COLOR_ARRAY);
        gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
        gl.glBindTexture(GL10.GL_TEXTURE_2D, textureId);
        gl.glFrontFace(GL10.GL_CW);
        gl.glVertexPointer(3, GL10.GL_FIXED, 0, mVertexBuffer);
        gl.glTexCoordPointer(2, GL10.GL_FIXED, 0, mTextureBuffer);
        gl.glDrawElements(GL10.GL_TRIANGLES, nTri*3, GL10.GL_UNSIGNED_SHORT, mIndexBuffer);
	}

    @Override
    public void fillBuffers() {
        int np = pnts.size();
        nTri = tris.size();
        int []vertices = new int[np*3];
        int []textures = new int[np*2];
        short []indices = new short[nTri*3];
       
        for (int i=0; i<np; i++) {
            Point p = pnts.get(i);
            vertices[3*i + 0] = p.x;
            vertices[3*i + 1] = p.y;
            vertices[3*i + 2] = p.z;
            Point2 pt = texPoints.get(i);
            textures[2*i + 0] = pt.x;
            textures[2*i + 1] = pt.y;            
        }        
        
        for (int i=0; i< nTri; i++) {
            Triangle t = tris.get(i);
            indices[3*i + 0] = t.a;
            indices[3*i + 1] = t.b;
            indices[3*i + 2] = t.c;
        }
        
        // filling buffers
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

    @Override
    public void readXml(Element el) {
        // TODO Auto-generated method stub
        super.readXml(el);
        // read texture filename
        this.textureFileName = el.getAttribute("texfilename");
        if (textureFileName == null || textureFileName.equals("")) {
            throw new IllegalStateException("We require textfilename for TexFigure XML elements");
        }
    }

    @Override
    public void fillData(Context context) {
        // TODO Auto-generated method stub
        super.fillData(context);
        this.myContext = context;
    }    
}
