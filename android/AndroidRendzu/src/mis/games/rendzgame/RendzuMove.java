package mis.games.rendzgame;

import mis.games.framework.DebugMove;
import mis.games.framework.Move;
import mis.games.framework.Position;

/**
 * rendzu move.
 * @author Misha
 * @version 1.0
 */
public class RendzuMove extends Move implements Comparable<RendzuMove> {

    int x,y;

    public RendzuMove(int xa, int ya,  int side) {
        super (side);
        x=xa;
        y=ya;
    }
    
    /**
     * pack x, y, side in short.
     * @return
     */
    public short pack() {
        int bside = (side > 0 ? 1 : 0);
        short pack = (short)((bside<<12) + (x << 5) + y);     
        return pack;
    }
    
    public static RendzuMove unpack(short sh) {
        int side = 1 & (sh >> 12);
        if (side == 0) {
            side = -1;
        }
        int x = 31 & (sh >> 5);
        int y = 31 & sh;
        return new RendzuMove(x, y, side);
    }
    
    public int validate(Position pos) {
        super.validate(pos);
        RendzuPosition p = (RendzuPosition)pos;
        if (p.side == this.side) { 
            throw new IllegalStateException("Wrong side, p.side == m.side");
        }
        if (p.fld[y][x] != 0) { 
            return 0;
        }
        return 1; 
    }

    @Override
    public String toString() {        
        return "RendzuMove[" + x + " " + y + "]";
    }

    @Override
    public int compareTo(RendzuMove o) {        
        return Double.compare(o.score, this.score);
    }

    @Override
    public boolean equals(Object obj) {
        RendzuMove b = (RendzuMove)obj;
        return (x==b.x) && (y==b.y)&& (side==b.side);
    }

    @Override
    public int hashCode() {
        return (x << 10) ^ (y << 2) ^ (side);
    }

    @Override
    public DebugMove getDebugMove() {
        RendzuDebugMove rdm = new RendzuDebugMove(x, y, side);
        return rdm;
    }
    
}
