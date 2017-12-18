package mis.babylon.game;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import java.nio.ShortBuffer;
import java.util.ArrayList;
import java.util.List;

import mis.android.utils.MisContext;
import mis.android.utils.Log;
import mis.android.utils.OnClickListener;
import mis.babylon.opengl.sysdep.MisGL11;
import mis.babylon.opengl.sysdep.MisGlUtils;

public class TopPanel {
    MisContext myContext;
    public int w, h;
    List<GameButton> buttons = new ArrayList<GameButton>();
    // public static final int BUTTON_SIZE = 50; 
    // public static final int BUTTON_MARGIN = 10; 
    public int vSize=0;
    int lastX = 0;
    int lastY = 5;
    private final int BUTTON_PADDING = 10;
    public static final int DEFAULT_WID_ANDROID = 480; 
    public static final int DEFAULT_WID_JAVA = 800; 
    public static final int DEFAULT_HEIGHT_ANDROID = 724; 
    public static final int DEFAULT_HEIGHT_JAVA = 600; 
    
    public TopPanel(MisContext context) {
        myContext = context;  
        clear();
    }
    public void clear() {
        buttons.clear();
        lastX = 0;
        vSize = 80;
        if (MisGlUtils.ANDROID) {
            w = DEFAULT_WID_ANDROID;            
            h = DEFAULT_HEIGHT_ANDROID;    
            lastY = 78;
        } else {
            w = DEFAULT_WID_JAVA;
            h = DEFAULT_HEIGHT_JAVA;     
            lastY = 45;
        }
    }
    
    public int getBottom() {
        return h - vSize;
    }
    
    private void addLevel(int buttonSize) {
        int dy = buttonSize + BUTTON_PADDING;
        lastY -= dy;
        lastX = 0;
        vSize += dy;        
    }
    
    public void addButton(GameButton b) {
        int x = 10 + lastX;
        int sbx = (int)(b.getDraw().getSize().x + BUTTON_PADDING);
        if (x + sbx > w) {
            addLevel((int)b.getDraw().getSize().y);
            x = 10 + lastX;
        }
        int y = lastY;
        buttons.add(b);
        b.setPos(x, y);
        lastX += sbx;
    }
    
    public void addGsButton(String name, OnClickListener l) {
        if (!MisGlUtils.ANDROID) {
            name = name + ".gif";
        }
        GameButton b = new GameButton(myContext, name);        
        addButton(b);  
        b.setListener(l);
    }

    public void addButton(String name, int sx, int sy, OnClickListener l) {
        if (!MisGlUtils.ANDROID) {
            name = name + ".gif";
        }
        GameButton b = new GameButton(myContext, name, sx, sy);        
        addButton(b);  
        b.setListener(l);
    }
    
    public GameButton addButton2(String name, String image2, OnClickListener l) {
        if (!MisGlUtils.ANDROID) {
            name = name + ".gif";
        }
        GameButton b = new GameButton(myContext, name);  
        b.addImage(image2 + ".gif");
        addButton(b);  
        b.setListener(l);
        return b;
    }
    
    public void setSize(int w, int h) {
        this.w = w;
        this.h = h; 
    }
    
    protected void drawPanelBack(MisGL11 gl, float hh, float ww, float[]col) {
        FloatBuffer  mVertexBuffer;
        FloatBuffer   mColorBuffer;
        ShortBuffer  mIndexBuffer;
        
        gl.glMatrixMode(MisGL11.GL_PROJECTION);
        gl.glLoadIdentity();
        gl.glOrthof(0.0f, w, 0.0f, h, -1.0f, 1.0f);
        // GL11.glOrtho(0.0, w, 0.0, h, -1.0, 1.0);

        float vertices[] = {
                0,   0,  0,
                0,  hh,  0,
                ww, hh,  0,
                ww,  0,  0,
        };

        float colors[] = {
                col[0], col[1], col[2], col[3],
                col[0], col[1], col[2], col[3],
                col[0], col[1], col[2], col[3],
                col[0], col[1], col[2], col[3]
        };        

        short indices[] = {
                0,1,2,
                0, 2, 3
        };

        ByteBuffer vbb = ByteBuffer.allocateDirect(vertices.length*4);
        vbb.order(ByteOrder.nativeOrder());
        mVertexBuffer = vbb.asFloatBuffer();
        mVertexBuffer.put(vertices);
        mVertexBuffer.position(0);

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

        gl.glDisable(MisGL11.GL_TEXTURE_2D);
        gl.glEnableClientState(MisGL11.GL_VERTEX_ARRAY);
        gl.glEnableClientState(MisGL11.GL_COLOR_ARRAY);
        gl.glDisableClientState(MisGL11.GL_TEXTURE_COORD_ARRAY);
 
        gl.glMatrixMode(MisGL11.GL_MODELVIEW);
        gl.glPushMatrix();
        gl.glLoadIdentity();    
        float y0 = h - hh;
        gl.glTranslatef(0, y0, 0);
        gl.glFrontFace(MisGL11.GL_CW);
        gl.glVertexPointer(3, MisGL11.GL_FLOAT, 0, mVertexBuffer);
        gl.glColorPointer(4, MisGL11.GL_FLOAT,  0, mColorBuffer);
        gl.glDrawElements(MisGL11.GL_TRIANGLES, 6, MisGL11.GL_UNSIGNED_SHORT, mIndexBuffer);
        gl.glPopMatrix();
        // draw buttons
        gl.glEnable(MisGL11.GL_TEXTURE_2D);
        gl.glEnableClientState(MisGL11.GL_VERTEX_ARRAY);
        gl.glDisableClientState(MisGL11.GL_COLOR_ARRAY);
        gl.glEnableClientState(MisGL11.GL_TEXTURE_COORD_ARRAY);        
    }
    
    public void draw(MisGL11 gl) {
        float SCALE = 1f; //  1 << 16;
        float hh = vSize * SCALE;
        float ww = w * SCALE;
        float one = SCALE;
        float GRAY = 0.8f;
        float []col = new float[]{GRAY, GRAY, 0, one};
        drawPanelBack(gl, hh, ww, col);
        float y0 = h - vSize;
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
