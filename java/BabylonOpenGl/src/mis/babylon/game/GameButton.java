package mis.babylon.game;

import mis.android.utils.Context;
import mis.android.utils.OnClickListener;
import mis.babylon.game.graphics.TexSquare;
import mis.babylon.opengl.sysdep.MisGL11;

/**
 * Class for display of texture image of button - such as selection 
 * of brick or log, turning image and so on.  
 */
public class GameButton extends MisFigure {
    OnClickListener listener = null;
    Context myContext = null;
    
    public GameButton() {
        super();
    }
    
    public GameButton(Context context, String image) {
        super();
        myContext = context;
        TexSquare md = new TexSquare(this);
        md.setSize(25, 25, 0);
        md.setMyContext(context);
        md.setTextureFileName(image);
        md.fillData(context);
        this.images.add(md);
    }
    
    public GameButton(Context context, String image, int sx, int sy) {
        super();
        myContext = context;
        TexSquare md = new TexSquare(this);
        md.setSize(sx, sy, 0);
        md.setMyContext(context);
        md.setTextureFileName(image);
        md.fillData(context);
        this.images.add(md);
    }
    
    public int addImage(String image) {
        TexSquare md = new TexSquare(this);
        md.setSize(25, 25, 0);
        md.setMyContext(myContext);
        md.setTextureFileName(image);
        md.fillData(myContext);
        int idx = images.size();
        this.images.add(md);
        return idx;
    }
    
    public int addImage(String image, int sx, int sy) {
        TexSquare md = new TexSquare(this);
        md.setSize(sx, sy, 0);
        md.setMyContext(myContext);
        md.setTextureFileName(image);
        md.fillData(myContext);
        int idx = images.size();
        this.images.add(md);
        return idx;
    }
    
    public void setOnClickListener(OnClickListener list) {
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
        this.getPos().set(x, y, 0f);
    }
    
    public void draw(MisGL11 gl) {
        this.getDraw().draw(gl);
    }
    
    public boolean contains(float x, float y) {
        TexSquare ts = (TexSquare)this.getDraw();
        return ts.contains(x, y);        
    }

}
