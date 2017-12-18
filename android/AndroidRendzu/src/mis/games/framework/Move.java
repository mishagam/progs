package mis.games.framework;

public abstract class Move {
    protected double score = 0;
    protected final int side;
    
    protected Move(int side) {
        this.side = side;
    }
    
    public final double getScore() {
        return score;
    }
    public final void setScore(double score) {
        this.score = score;
    }
    public final int getSide() {
        return side;
    }
    public int validate(Position p) {
        if ((side * p.lastMoveSide()) > 0) {
            throw new IllegalStateException("Illegal move side, shown be - pos.side, move, pos sides = " 
                    + side + " " + p.lastMoveSide());
        }
        return 1;
    }
    
    public abstract DebugMove getDebugMove();
}
