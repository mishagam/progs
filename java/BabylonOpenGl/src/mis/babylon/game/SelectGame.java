package mis.babylon.game;

import java.util.ArrayList;
import java.util.List;

import mis.android.utils.Context;
import mis.android.utils.Log;
import mis.android.utils.OnClickListener;
import mis.babylon.opengl.sysdep.MisGL11;

/**
 * class for showing list of possible babylon games.
 * 
 * @author Misha
 */
public class SelectGame extends TopPanel {
    List<GameSelectButton> buttons = new ArrayList<GameSelectButton>();
    public static final int BUTTON_SIZE = 25; 
    public static final int BUTTON_MARGIN = 8; 
    int lastY = 0;
    
    public SelectGame(Context context) {
        super(context);
    }
    
    public int getBottom() {
        return 0;
    }
    
    public void addButton(GameSelectButton b) {
        int btnHeight = (int)b.getDraw().getSize().y;
        int x = 10;
        int y = lastY - 5 - btnHeight;
        buttons.add(b);
        b.setPos(x, y);
        lastY -= (btnHeight + 10);
    }
    
    public void addButton(String name, OnClickListener l) {
        if (!MisGame.ANDROID) {
            name = name + ".jpg";
        }
        GameSelectButton b = new GameSelectButton(myContext, name);        
        addButton(b);  
        b.setListener(l);
    }
    
    public void onClick(float x, float y) {
        Log.d("TopPanel", "onClick( " + x + " , " + y + " );");
        y -= getBottom();
        for (int i=0; i<buttons.size(); i++) {
            GameSelectButton b = buttons.get(i);
            if (b.contains(x,y)) {
                b.onClick();
            }
        }        
    }
    
    public void draw(MisGL11 gl) {
        float SCALE = 1f; //  1 << 16;
        float hh = h * SCALE;
        float ww = w * SCALE;
        float one = SCALE;
        float GRAY = 0.8f;
        float []col = new float[]{GRAY, 0, GRAY, one};
        drawPanelBack(gl, hh, ww, col);
        for (int i=0; i<buttons.size(); i++) {
            GameButton b = buttons.get(i);
            gl.glLoadIdentity();
            gl.glPushMatrix();
            gl.glLoadIdentity();
            gl.glTranslatef(0, 0, 0.01f);
            b.draw(gl);
            gl.glPopMatrix();
        }
    }
    
    public void clear() {
        buttons.clear();
        lastY = h - 10;
    }
    
    public void setSize(int w, int h) {
        super.setSize(w, h);
        // recalculate button position
        lastY = h-10;
        for (GameSelectButton b : buttons) {
            int y = (int)(lastY - b.getDraw().getSize().y - 10);
            b.getPos().y = y;
            lastY = y;            
        }
    }

}
