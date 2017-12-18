package mis.android.game.sysdep;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;
import java.util.ArrayList;
import java.util.List;

import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import mis.android.Cube;

import org.w3c.dom.Element;

/**
 * drwawable with colors for points.
 * @author TCSDEVELOPER
 *
 */
public class ColFigure extends MisDrawable {
    /**
     * can be read from file or generated in case of ColBox, for example
     */
    List<Integer> cols = new ArrayList<Integer>();
    IntBuffer   mVertexBuffer;
    ByteBuffer   mColorBuffer;
    ShortBuffer  mIndexBuffer;
    boolean validBuffers = false;
    private int nTri = 0;

    public ColFigure() {
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
    public void draw(GL11 gl) {
        if (mColorBuffer == null || !validBuffers) {
            fillBuffers();
        }
        gl.glDisable(GL10.GL_TEXTURE_2D);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glEnableClientState(GL10.GL_COLOR_ARRAY);
        gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
        gl.glTranslatex(pos.x, pos.y, pos.z);
        gl.glFrontFace(GL10.GL_CW);
        gl.glVertexPointer(3, GL10.GL_FIXED, 0, mVertexBuffer);
        gl.glColorPointer(4, GL10.GL_UNSIGNED_BYTE, 0, mColorBuffer);
        gl.glDrawElements(GL10.GL_TRIANGLES, nTri*3, GL10.GL_UNSIGNED_SHORT, mIndexBuffer);
    }

    /**
     * fill arrays from pnts, colors, tris lists
     */
    @Override
    public void fillBuffers() {
        int one = 0x10000;
        int np = this.pnts.size();
        int nt = this.tris.size();
        nTri = nt;
        
        int []vertices = new int[np*3];
        byte []colors = new byte[np*4];
        short []indices = new short[nt*3];
        
        // fill arrays
        for (int i=0; i<np; i++) {
            vertices[3*i  ] = pnts.get(i).x;
            vertices[3*i+1] = pnts.get(i).y;
            vertices[3*i+2] = pnts.get(i).z;
            colors[4*i + 0] = (byte)((cols.get(i) >> 16) & 0x00FF);
            colors[4*i + 1] = (byte)((cols.get(i) >> 8) & 0x00FF);
            colors[4*i + 2] = (byte)((cols.get(i) >> 0) & 0x00FF);
            colors[4*i + 3] = (byte)0xFF;
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
        mVertexBuffer = vbb.asIntBuffer();

        ByteBuffer cbb = ByteBuffer.allocateDirect(np*4*4);
        cbb.order(ByteOrder.nativeOrder());
        mColorBuffer = cbb;

        cbb = ByteBuffer.allocateDirect(nt*3*2);
        cbb.order(ByteOrder.nativeOrder());
        mIndexBuffer = cbb.asShortBuffer();        
    }

}
