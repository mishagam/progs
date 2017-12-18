package mis.babylon.game.graphics;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;
import java.util.ArrayList;
import java.util.List;

import mis.babylon.utils.Util;
import mis.babylon.game.MisFigure;
import mis.babylon.opengl.sysdep.MisGL11;

import org.w3c.dom.Element;

/**
 * Drawable with colors for points.
 * @author TCSDEVELOPER
 *
 */
public class ColFigure extends MisDrawable {
    /**
     * can be read from file or generated in case of ColBox, for example
     */
    List<Integer> cols = new ArrayList<Integer>();
    FloatBuffer   mVertexBuffer;
    FloatBuffer   mColorBuffer;
    ShortBuffer  mIndexBuffer;
    boolean validBuffers = false;
    private int nTri = 0;

    public ColFigure(MisFigure mf) {
        super(mf);
        useTextures = false;
    }
    /**
     * some color utility
     * @param cols
     * @param cola
     */
    static void parseColor(String cols, byte[]cola) {
        int coli = Integer.parseInt(cols, 16);
        cola[0] = (byte)((coli >>16) & 0xFF);
        cola[1] = (byte)((coli >> 8) & 0xFF);
        cola[2] = (byte)((coli >> 0) & 0xFF);
    }
    
    static String colorToString(byte[]cola) {
        int red = (int)(cola[0] & 0x00FF);
        int green = (int)(cola[1] & 0x00FF);
        int blue = (int)(cola[2] & 0x00FF);
        int alpha = 15;
        String scol = String.format("%02x%02x%02x%02x", alpha, red, green, blue);
        return scol;
    }

    /**
     * draw color figure on GL surface
     */
    @Override
    public void draw(MisGL11 gl) {
        if (mColorBuffer == null || !validBuffers) {
            fillBuffers();
        }
        gl.glDisable(MisGL11.GL_TEXTURE_2D);
        gl.glEnableClientState(MisGL11.GL_VERTEX_ARRAY);
        gl.glEnableClientState(MisGL11.GL_COLOR_ARRAY);
        gl.glDisableClientState(MisGL11.GL_TEXTURE_COORD_ARRAY);
        Point pos = fig.getPos();
        gl.glTranslatef(pos.x, pos.y, pos.z);
        gl.glFrontFace(MisGL11.GL_CW);
        gl.glVertexPointer(3, MisGL11.GL_FLOAT, 0, mVertexBuffer);
        gl.glColorPointer(4, MisGL11.GL_FLOAT, 0, mColorBuffer);
        gl.glDrawElements(MisGL11.GL_TRIANGLES, nTri*3, MisGL11.GL_UNSIGNED_SHORT, mIndexBuffer);
    }

    /**
     * fill arrays from pnts, colors, tris lists
     */
    @Override
    public void fillBuffers() {
        int np = this.pnts.size();
        int nt = this.tris.size();
        nTri = nt;
        
        float []vertices = new float[np*3];
        float []colors = new float[np*4];
        short []indices = new short[nt*3];
        
        // fill arrays
        for (int i=0; i<np; i++) {
            vertices[3*i  ] = pnts.get(i).x;
            vertices[3*i+1] = pnts.get(i).y;
            vertices[3*i+2] = pnts.get(i).z;
            float []cola = Util.colorIntToFloat(cols.get(i));
            for (int k=0; k<3; k++) {
                colors[4*i + k] = cola[k];
            }
            colors[4*i + 3] = 1.0f;
        }
        for (int i=0; i<nt; i++) {
            indices[3*i+0] = tris.get(i).a;
            indices[3*i+1] = tris.get(i).b;
            indices[3*i+2] = tris.get(i).c;
        }
        
        // filling buffers
        if (mColorBuffer == null) {
            allocateBuffers();
        }
        mVertexBuffer.put(vertices);
        mVertexBuffer.position(0);

        mColorBuffer.put(colors);
        mColorBuffer.position(0);

        mIndexBuffer.put(indices);
        mIndexBuffer.position(0);
        validBuffers = true;
    }
    
    /**
     * clean buffers
     */
    public void clean() {
        mColorBuffer.clear();
        mVertexBuffer.clear();
        mIndexBuffer.clear();    
        validBuffers = false;
    }
    
    private void allocateBuffers() {
        int np = this.pnts.size();
        int nt = this.tris.size();
        
        // filling buffers
        ByteBuffer vbb = ByteBuffer.allocateDirect(np*3*4);
        vbb.order(ByteOrder.nativeOrder());
        mVertexBuffer = vbb.asFloatBuffer();

        ByteBuffer cbb = ByteBuffer.allocateDirect(np*4*4);
        cbb.order(ByteOrder.nativeOrder());
        mColorBuffer = cbb.asFloatBuffer();

        ByteBuffer ibb = ByteBuffer.allocateDirect(nt*3*2);
        ibb.order(ByteOrder.nativeOrder());
        mIndexBuffer = ibb.asShortBuffer();        
    }

}
