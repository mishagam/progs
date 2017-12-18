package mis.android.game;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.IntBuffer;
import java.util.ArrayList;
import java.util.List;

import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;


import android.content.Context;
import android.opengl.GLU;
import android.util.Log;
import android.view.View.OnClickListener;

public class TopPanel {
    Context myContext;
    int w, h;
    List<GameButton> buttons = new ArrayList<GameButton>();
    public static final int BUTTON_SIZE = 25; 
    public static final int BUTTON_MARGIN = 8; 
    public static final int VSIZE = 40;
    
    public TopPanel(Context context) {
        myContext = context;  
    }
    
    public int getBottom() {
        return h - VSIZE;
    }
    
    public void addButton(GameButton b) {
        int nBtn = buttons.size();
        int x = 20 + nBtn * (BUTTON_SIZE + BUTTON_MARGIN);
        int y = 5;
        buttons.add(b);
        b.setPos(x, y);
    }
    
    public void addButton(String name, OnClickListener l) {
        GameButton b = new GameButton(myContext, name);        
        addButton(b);  
        b.setListener(l);
    }
    
    public void setSize(int w, int h) {
        this.w = w;
        this.h = h;        
    }
    
    public void draw(GL11 gl) {
        int SCALE = 1 << 16;
        int VSIZE = 40;
        int hh = VSIZE * SCALE;
        int ww = w * SCALE;
        int one = SCALE;
        int GRAY = 0x0E000;
        gl.glMatrixMode(GL10.GL_PROJECTION);
        gl.glLoadIdentity();
        gl.glOrthof(0.0f, w, 0.0f, h, -1.0f, 1.0f);

        IntBuffer   mVertexBuffer;
        IntBuffer   mColorBuffer;
        ByteBuffer  mIndexBuffer;
        
        int vertices[] = {
                0,   0,  0,
                0,  hh,  0,
                ww, hh,  0,
                ww,  0,  0,
        };

        int colors[] = {
                GRAY, GRAY,  0,  one,
                GRAY, GRAY,  0,  one,
                GRAY, GRAY,  0,  one,
                GRAY, GRAY,  0,  one,
        };        

        byte indices[] = {
                0,1,2,
                0, 2, 3
        };

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

        mIndexBuffer = ByteBuffer.allocateDirect(indices.length);
        mIndexBuffer.put(indices);
        mIndexBuffer.position(0);

        gl.glDisable(GL10.GL_TEXTURE_2D);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glEnableClientState(GL10.GL_COLOR_ARRAY);
        gl.glDisableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
 
        gl.glMatrixMode(GL10.GL_MODELVIEW);
        gl.glPushMatrix();
        gl.glLoadIdentity();    
        int y0 = h - VSIZE;
        gl.glTranslatef(0, y0, 0);
        gl.glFrontFace(GL10.GL_CW);
        gl.glVertexPointer(3, GL10.GL_FIXED, 0, mVertexBuffer);
        gl.glColorPointer(4, GL10.GL_FIXED, 0, mColorBuffer);
        gl.glDrawElements(GL10.GL_TRIANGLES, 6, GL10.GL_UNSIGNED_BYTE, mIndexBuffer);
        gl.glPopMatrix();
        // draw buttons
        gl.glEnable(GL10.GL_TEXTURE_2D);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glDisableClientState(GL10.GL_COLOR_ARRAY);
        gl.glEnableClientState(GL10.GL_TEXTURE_COORD_ARRAY);
        for (int i=0; i<buttons.size(); i++) {
            GameButton b = buttons.get(i);
            gl.glLoadIdentity();
            gl.glPushMatrix();
            gl.glLoadIdentity();
            gl.glTranslatef(0, y0, 0.01f);
            b.draw(gl);
            gl.glPopMatrix();
        }
    }
    
    public void onClick(float x, float y) {
        Log.d("TopPanel", "onClick( " + x + " , " + y + " );");
        y -= getBottom();
        for (int i=0; i<buttons.size(); i++) {
            GameButton b = buttons.get(i);
            if (b.contains(x,y)) {
                b.onClick();
            }
        }        
    }

}
