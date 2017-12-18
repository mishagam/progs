package mis.android.game;

import java.util.ArrayList;
import java.util.List;

import javax.microedition.khronos.opengles.GL11;

import mis.android.game.sysdep.ColBox;
import mis.android.game.sysdep.MisDrawable;
import mis.android.game.sysdep.TexBack;
import mis.android.game.sysdep.TexBox;

public class MisFigure {
    List<MisDrawable> images = new ArrayList<MisDrawable>();
    int imageCur = 0;
    
    /**
     * generate figure based on type. 
     * later that figure can call virtual method readXml to read XML configuration 
     * from XML element.
     * 
     * @param type
     * @return
     */
    public static MisFigure generateFigure(String type) {
        if (type == null || type.equals("")) {
            throw new IllegalStateException("Illegal empty type");
        }
        MisFigure mf = null;
        if (type.equals("cbox")) {
            // colored box
            mf = new MovableFigure();
            MisDrawable md = new ColBox();
            mf.images.add(md);
        } else if (type.equals("tbox")) {
            // texture box
            mf = new MovableFigure();
            MisDrawable md = new TexBox();
            mf.images.add(md);
        } else if (type.equals("tback")) {
            // texture box
            mf = new MisFigure();
            MisDrawable md = new TexBack();
            mf.images.add(md);
        } else if (type.equals("foundation")) {
            // foundation - for now rectangle
            mf = new RectFoundation();
            MisDrawable md = new ColBox();
            mf.images.add(md);
        } else if (type.equals("storage")) {
            // storage area - for now rectangle
            mf = new Storage();
            MisDrawable md = new ColBox();
            mf.images.add(md);
        }
        return mf;            
    }
    
    public void draw(GL11 gl) {
        gl.glPushMatrix();
        gl.glLoadIdentity();
        MisDrawable md = images.get(imageCur);
        md.draw(gl);
        gl.glPopMatrix();
    }
    
    public MisDrawable getDraw() {
        return images.get(imageCur);
    }
}
