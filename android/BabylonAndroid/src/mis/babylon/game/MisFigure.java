package mis.babylon.game;

import java.util.ArrayList;
import java.util.List;

import org.w3c.dom.Element;

import mis.babylon.game.graphics.ColBox;
import mis.babylon.game.graphics.MisDrawable;
import mis.babylon.game.graphics.MisLogT;
import mis.babylon.game.graphics.Point;
import mis.babylon.game.graphics.RoofDraw;
import mis.babylon.game.graphics.TexBack;
import mis.babylon.game.graphics.TexBox;
import mis.babylon.game.graphics.TexTree;
import mis.babylon.opengl.sysdep.MisGL11;

public class MisFigure {
    List<MisDrawable> images = new ArrayList<MisDrawable>();
    int imageCur = 0;
    boolean show = true;
    String type;
    public String name;
    Point pos;
    
    public MisFigure() {
        pos = new Point(0,0,0);
    }
    
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
            MisDrawable md = new ColBox(mf);
            mf.images.add(md);
        } else if (type.equals("tbox")) {
            // texture box
            mf = new MovableFigure();
            MisDrawable md = new TexBox(mf);
            mf.images.add(md);
        } else if (type.equals("tback")) {
            // texture box
            mf = new MisFigure();
            MisDrawable md = new TexBack(mf);
            mf.images.add(md);
        } else if (type.equals("tree")) {
            // texture box
            mf = new MisFigure();
            MisDrawable md = new TexTree(mf);
            mf.images.add(md);
        } else if (type.startsWith("brick")) {
            // texture box
            mf = new Brick();
            MisDrawable md = new TexBox(mf);
            mf.images.add(md);
        } else if (type.startsWith("log")) {
            // texture box
            LogFigure logf = new LogFigure();
            mf = logf;
            logf.sconf = type.substring(3);            
            MisDrawable md = new MisLogT(mf);
            mf.images.add(md);
        } else if (type.startsWith("stand")) {
            // texture box
            mf = new FlatFigure();
            MisDrawable md = new TexBox(mf);
            mf.images.add(md);
        } else if (type.equals("foundation")) {
            // foundation - for now rectangle
            mf = new RectFoundation();
            MisDrawable md = new ColBox(mf);
            mf.images.add(md);
        } else if (type.equals("storage")) {
            // storage area - for now rectangle
            mf = new Storage();
            MisDrawable md = new ColBox(mf);
            mf.images.add(md);
        } else if (type.equals("garbage")) {
            // garbage bin - for now rectangle
            mf = new GarbageBin();
            MisDrawable md = new ColBox(mf);
            mf.images.add(md);
        } else if (type.equals("roof")) {
            // storage area - for now rectangle
            mf = new Roof();
            MisDrawable md = new RoofDraw(mf);
            mf.images.add(md);
        }
        mf.type = type;
        return mf;            
    }
    
    public Point getPos() {
        return pos;
    }
    
    public void draw(MisGL11 gl) {
        if (!show) {
            return;
        }
        gl.glPushMatrix();
        gl.glLoadIdentity();
        MisDrawable md = images.get(imageCur);
        md.draw(gl);
        gl.glPopMatrix();
    }
    
    public MisDrawable getDraw() {
        return images.get(imageCur);
    }
    
    public void setCurrentImage(int idx) {
        if (idx < 0 || idx >= images.size()) {
            throw new IllegalArgumentException("Illegal images index = " + idx + " images.size() = " + images.size());
        }
        imageCur = idx;
    }
    
    /**
     * initialize figure. By default do nothing.
     */
    public void initXml(Element el) {
    }
}
