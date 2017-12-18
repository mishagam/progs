package mis.games.rendzgame;

import java.util.ArrayList;
import java.util.List;

/**
 * little bit more efficient implementation of moves queue.
 * we assume that moves have score already calculated.
 */
public class MyMovesQueue {
    public static final int MAX_MOVES = 6;
    /** max moves in queue */
    int maxMoves = MAX_MOVES;
    /** we hold this queue sorted with highest score first */
    RendzuMove []queue = new RendzuMove[maxMoves]; 
    int nMoves = 0;
    
    public MyMovesQueue() {
        // do nothing for now
    }
    
    public final int getMaxMoves() {
        return maxMoves;
    }

    public final void setMaxMoves(int maxMoves) {
        if (maxMoves > this.maxMoves) {
            queue = new RendzuMove[maxMoves]; 
        }
        this.maxMoves = maxMoves;
    }
    
    public void addMove(RendzuMove m) {
        int i;
        // initially placing m in queue
        if (nMoves == maxMoves) {
            if (m.getScore() < queue[nMoves-1].getScore()) {
                return;
            } else {
                queue[nMoves -1] = m;
            }
        } else {
            queue[nMoves++] = m;
        }
        // placing m in correct place
        for (i=nMoves-2; i>=0; i--) {
            if (queue[i].getScore() < m.getScore()) {
                queue[i+1] = queue[i];
                queue[i] = m;
            }
        }
    }
    
    public List<RendzuMove> movesList() {
        List<RendzuMove> lm = new ArrayList<RendzuMove>();
        double maxm = maxScore();
        for (int i=0; i<nMoves; i++) {
            RendzuMove m = queue[i];
            if (m.getScore() > maxm / 2) {
                lm.add(m);
            }
        }
        return lm;
    }
    
    public double maxScore() {
        if (nMoves == 0) {
            return 0;
        } else {
            return queue[0].getScore();
        }
    }
    
    public double minScore() {
        if (nMoves < maxMoves) {
            return -100;
        } else {
            return queue[nMoves-1].getScore();
        }
    }


}
