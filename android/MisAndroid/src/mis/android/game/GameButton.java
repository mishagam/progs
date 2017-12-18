package mis.android.game;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;

import javax.microedition.khronos.opengles.GL10;
import javax.microedition.khronos.opengles.GL11;

import mis.android.game.sysdep.Box;
import mis.android.game.sysdep.MisDrawable;
import mis.android.game.sysdep.MisGlUtils;
import mis.android.game.sysdep.TexFigure;
import mis.android.game.sysdep.TexSquare;

import android.content.Context;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;

/**
 * Class for display of texture image of button - such as selection 
 * of brick or log, turning image and so on.  
 */
public class GameButton extends MisFigure {
    View.OnClickListener listener = null;
    
    public GameButton(Context context, String image) {
        super();
        TexSquare md = new TexSquare();
        md.setSize(25, 25, 0);
        md.setMyContext(context);
        md.setTextureFileName(image);
        md.fillData(context);
        this.images.add(md);
    }
    
    public void setOnClickListener(View.OnClickListener list) {
        listener = list;
    }
    
    public void onClick() {
        if (listener != null) {
            listener.onClick(null);
        }
    }
    
    public void setListener(OnClickListener listener) {
        this.listener = listener;
    }
    
    public void setPos(float x, float y) {
        TexSquare ts = (TexSquare)this.getDraw();
        ts.setPos(x, y, 0);
    }
    
    public void draw(GL11 gl) {
        this.getDraw().draw(gl);
    }
    
    public boolean contains(float x, float y) {
        TexSquare ts = (TexSquare)this.getDraw();
        return ts.contains(x, y);        
    }

}
