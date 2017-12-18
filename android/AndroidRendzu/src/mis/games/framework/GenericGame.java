package mis.games.framework;

import java.util.List;

import mis.games.rendzu.GameException;

public abstract class GenericGame<TP extends Position, TM extends Move> {
    TP current = null;
    int manSide = -1;
    /** we have 2 sides */
    public static final int MAX_SIDE = 2;
    
    public TP getPosition() {
        return current;
    }
    
    public void setPosition(TP pos) {
        current = pos;
    }
     
    public int getManSide() {
        return manSide;
    }
    
    public int getAiSide() {
        return -manSide;
    }
    
    public abstract TM bestMove(TP p) throws GameException;
    
    /**
     * best move for current position.
     * 
     * @return best move
     */
    public abstract TM bestMove() throws GameException, CloneNotSupportedException;

    /**
     * generate list of possible moves. 
     * Cannot have useful generic implementation, so abstract
     */
    public abstract List<TM> generateMoves(TP pos);
    
    public int addMove(TM move) {
        return current.apply(move);
    }
}
