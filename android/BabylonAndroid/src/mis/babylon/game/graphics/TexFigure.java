package mis.babylon.game.graphics;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import java.nio.ShortBuffer;
import java.util.ArrayList;
import java.util.List;

import org.w3c.dom.Element;

import mis.android.utils.MisContext;
import mis.babylon.game.MisFigure;
import mis.babylon.game.MisGame;
import mis.babylon.opengl.sysdep.MisGL11;
import mis.babylon.opengl.sysdep.MisGlUtils;
import mis.babylon.opengl.sysdep.tex.Texture;

/**
 * Figure drawing texture. draws texture as list of triangles.
 * Holds texture points in addition to points from MisFigure 
 * @author Misha
 */
public class TexFigure extends MisDrawable {
	List<Point2> texPoints = new ArrayList<Point2>();
    FloatBuffer   mVertexBuffer;
    FloatBuffer   mTextureBuffer;
    ShortBuffer  mIndexBuffer;
    FloatBuffer mColorBuffer;
    public String textureFileName;
    private final String TAG = "TexFigure";
    private int nTri = 0;
    Texture t = null;
    public static String RES_PREFIX = "drawable/"; 
	
	public TexFigure(MisFigure mf) {
	    super(mf);
	    useTextures = true;
	}

    public String getTextureFileName() {
        return textureFileName;
    }

    public void setTextureFileName(String textureFileName) {
        this.textureFileName = textureFileName;
    }
	
    void initTexture(MisGL11 gl) {
        this.t = MisGlUtils.loadTexture(gl, textureFileName, MisGame.myContext);
    }

	public void draw(MisGL11 gl) {
        gl.glEnable(MisGL11.GL_TEXTURE_2D);
	    if (t == null) {
	        initTexture(gl);
	    }
	    if (mTextureBuffer == null) {
	        fillBuffers();
	    }
	    
	    Point pos = fig.getPos();
	    gl.glTranslatef(pos.x, pos.y, pos.z);
        gl.glEnableClientState(MisGL11.GL_VERTEX_ARRAY);
        gl.glDisableClientState(MisGL11.GL_COLOR_ARRAY);
        gl.glEnableClientState(MisGL11.GL_TEXTURE_COORD_ARRAY);
        // gl.glBindTexture(GL11.GL_TEXTURE_2D, textureId);
        t.bind(gl);
        gl.glFrontFace(MisGL11.GL_CW);
        gl.glVertexPointer(3, MisGL11.GL_FLOAT, 0, mVertexBuffer);
        gl.glTexCoordPointer(2, MisGL11.GL_FLOAT, 0, mTextureBuffer);
        // gl.glColorPointer(4, GL11.GL_FLOAT, 0, mColorBuffer);
        gl.glDrawElements(MisGL11.GL_TRIANGLES, nTri*3, MisGL11.GL_UNSIGNED_SHORT, mIndexBuffer);
	}

    @Override
    public void fillBuffers() {
        int np = pnts.size();
        nTri = tris.size();
        float []vertices = new float[np*3];
        float []textures = new float[np*2];
        float []colors = new float[np*4];
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
        
        // green color for now
        for (int i=0; i< np; i++) {
            colors[4*i + 0] = 0.0f;
            colors[4*i + 1] = 1.0f;
            colors[4*i + 2] = 0.0f;
            colors[4*i + 3] = 1.0f;
        }
        
        // filling buffers
        ByteBuffer vbb = ByteBuffer.allocateDirect(vertices.length*4);
        vbb.order(ByteOrder.nativeOrder());
        mVertexBuffer = vbb.asFloatBuffer();
        mVertexBuffer.put(vertices);
        mVertexBuffer.position(0);

        ByteBuffer tbb = ByteBuffer.allocateDirect(textures.length*4);
        tbb.order(ByteOrder.nativeOrder());
        mTextureBuffer = tbb.asFloatBuffer();
        mTextureBuffer.put(textures);
        mTextureBuffer.position(0);

        ByteBuffer cbb = ByteBuffer.allocateDirect(colors.length*4);
        cbb.order(ByteOrder.nativeOrder());
        mColorBuffer = cbb.asFloatBuffer();
        mColorBuffer.put(colors);
        mColorBuffer.position(0);

        ByteBuffer ibb = ByteBuffer.allocateDirect(indices.length*2);
        ibb.order(ByteOrder.nativeOrder());
        mIndexBuffer = ibb.asShortBuffer();
        mIndexBuffer.put(indices);
        mIndexBuffer.position(0);
    }

    @Override
    public void readXml(Element el) {
        super.readXml(el);
        // read texture filename
        this.textureFileName = el.getAttribute("texfilename");
        if (textureFileName == null || textureFileName.equals("")) {
            throw new IllegalStateException("We require textfilename for TexFigure XML elements");
        }
    }
    
    /**
     * copy textureFileName
     */
    public void copy(Box b) {
        super.copy(b);
        TexFigure tf = (TexFigure)b;
        this.textureFileName = tf.textureFileName;
    }
}
