package mis.games.rendzgame;

import mis.games.framework.DebugMove;
import mis.games.utils.CommaList;

public class RendzuDebugMove extends DebugMove {
    final int x,y;
    
    public RendzuDebugMove(CommaList cl) {
        super(cl);
        x = cl.getInt();
        y = cl.getInt();
    }
    
    public RendzuDebugMove(int x, int y, int side) {
        super(side);
        this.x = x;
        this.y = y;        
    }
    
    public String toString() {
        descr = x + "_" + y;
        return super.toString();        
    }
    
    public CommaList toList() {
        CommaList cl = super.toList();
        cl.add(x);
        cl.add(y);
        return cl;
    }

    public final int getX() {
        return x;
    }

    public final int getY() {
        return y;
    }

    public final String getStrX() {
        return String.format("%2d", x);
    }

    public final String getStrY() {
        return String.format("%2d", y);
    }

    public void setStrX() {
        // do nothing
    }

    public void setStrY() {
        // do nothing
    }

}
