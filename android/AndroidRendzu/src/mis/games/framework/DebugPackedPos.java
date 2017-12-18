package mis.games.framework;

import java.util.ArrayList;
import java.util.List;
import mis.games.rendzgame.RendzuDebugMove;

import mis.games.server.OneRGame;
import mis.games.utils.CommaList;


public abstract class DebugPackedPos {
    public String strKey;
    public int side;
    public List<DebugMove> moves = new ArrayList<DebugMove>();
    public double score;
    public CommaList otherContent;
    double level;
    
    public DebugPackedPos(CommaList list) {
        strKey = list.getStr();
        side = list.getInt();
        score = list.getDouble();
        level = list.getDouble();
        unpackMoves(list.getList());        
    }
    
    public DebugPackedPos(Position p) {
        this.side = p.getSide();
    }
    
    private void unpackMoves(CommaList clMoves) {
        while (clMoves.hasNext()) {
            CommaList cl = clMoves.getList();        
            RendzuDebugMove m = new RendzuDebugMove(cl);
            moves.add(m);
        }
    }
    
    public CommaList toList() {
        CommaList cl = new CommaList();
        cl.add(strKey);
        cl.add(side);
        cl.add(String.format("%.2f",score));
        cl.add(String.format("%.2f",level));
        CommaList clMoves = new CommaList();
        for (DebugMove m : moves) {
            clMoves.add(m.toList());          
        }
        cl.add(clMoves);
        return cl;
    }
    
    public final String getStrKey() {
        return strKey;
    }

    public final void setStrKey(String strKey) {
        this.strKey = strKey;
    }

    public final int getSide() {
        return side;
    }

    public final void setSide(int side) {
        this.side = side;
    }

    public final List<DebugMove> getMoves() {
        return moves;
    }

    public final void setMoves(List<DebugMove> moves) {
        this.moves = moves;
    }

    public final double getScore() {
        return score;
    }

    public final void setScore(double score) {
        this.score = score;
    }
    
    public final double getLevel() {
        return level;
    }

    public final void setLevel(double level) {
        this.level = level;
    }

    public String getCrosNil() {
        char []cc = {'0', '.', 'X'};
        return "" + cc[side+1];
    }

    public void setCrosNil() {
        // do nothing
    }
}
