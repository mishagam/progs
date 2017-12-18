package mis.games.rendzgame;

import static mis.games.rendzgame.RendzuPosition.MAX_MOVES;

/**
 * immutable class for holding score for positions.
 */
public class RendzuPackedPosition {
    private short []moves;
    private int side = 0;
    private double score = 0;
    private int hash = 0;
    
    public RendzuPackedPosition(RendzuPosition p) {
        moves = new short[p.moves.size()];
        for (int i=0; i<moves.length; i++) {
            moves[i] = p.moves.get(i);
        }
        side = p.side;
        score = p.getStoredScore();
    }

    public final double getScore() {
        return score;
    }

    public final void setScore(double score) {
        this.score = score;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof RendzuPackedPosition)) {
            return false;
        }
        RendzuPackedPosition anotherPosition = (RendzuPackedPosition)obj;
        if (side != anotherPosition.side || moves.length != anotherPosition.moves.length) {
            return false;
        }
        for (int i=0; i<moves.length; i++) {
            if (moves[i] != anotherPosition.moves[i]) {
                return false;
            }
        }
        return true;
    }

    @Override
    public int hashCode() {
        if (hash == 0) {
            int h = side;
            for (int i = 0; i < moves.length; i++) {
                h = 31*h + moves[i];
            }
            hash = h;
        }
        return hash;
    }
    
}
