package mis.games.framework;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import mis.games.rendzu.GameException;
import mis.games.rendzu.RGame;

/**
 * selection of best move with min max method.
 * @author Misha
 *
 */
public abstract  class MinMaxGame<TP extends Position, TM extends Move>
            extends GenericGame<TP, TM> {
    
    public int scoreCntr = 0;
    protected Map<Object, Double> cache = new HashMap<Object, Double>();
    double MAX_LEVEL = 11;
    public double maxLevel = MAX_LEVEL;

    public TM bestMove(TP p) throws GameException{
        List<TM> moves = this.generateMoves(p);
        double bestScore = -10000000;
        TM bestMove = null;
        Position o = null;
        try {
            o = (Position)p.clone();
        } catch (CloneNotSupportedException e) {
            throw new GameException("clone failed", e);
        }
        for (TM m : moves) {
            o.copy(p);
            o.apply(m);
            double sc = o.score(m);
            if (sc > bestScore) {
                bestScore = sc;
                bestMove = m;
            }            
        }
        return bestMove;
    }

    public TM bestMoveRec(TP p, int level, int side) throws GameException {        
        if (p.isFinished()) {
            throw new IllegalStateException("game finished but best move called");
        }
        List<TM> moves = this.generateMoves(p);
        if (moves.size() == 0) {
            throw new IllegalStateException("No moves but best move called");
        }
        double bestScore = -10000000;
        TM bestMove = null;        
        for (TM m : moves) {
             try {
                TP o = (TP)p.clone();
                o.apply(m);
                double sc = scoreRec(o, m, level, side, side);
                if (sc > bestScore) {
                    bestScore = sc;
                    bestMove = m;
                }            
            } catch (Exception e) {
                throw new GameException("bestMoveRec, move failed", e);
            }            
        }
        return bestMove;
    }
    
    /**
     * for origSide we are going for max, 
     * @param p
     * @param level
     * @param side
     * @param origSide
     * @return
     */
    public double scoreRec(TP p, TM mp, double level, int side, int origSide) throws CloneNotSupportedException {
        // logger.debug(String.format("scoreRec(level,side) = %f %d entering, p: %s ", level,side, "" + p));
//        System.out.printf("scoreRec(level,side,origSide) = %d %d %d entering, p: %s \n",
//                level,side,origSide, "" + p);
        Object k = p.getKey();
        if (cache.containsKey(k)) {
            return cache.get(k); 
        }
        double bestScore;        
        if (p.isFinished() || (level >= maxLevel && side == origSide)) {
            scoreCntr++;
            bestScore = p.score(mp);
            cache.put(p, bestScore);
        } else {
            List<TM> enemyMoves = this.generateMoves(p);
            if (enemyMoves.size() == 0) {
                throw new IllegalStateException("Has no moves in scoreRec, but not finished");
            }
            bestScore = 1000000000;
            double levelDelta = p.getLevelDelta();
            for (TM m : enemyMoves) {
                //TP pp = (TP)p.clone();
                p.apply(m);
                double sc = -scoreRec(p, m, level+levelDelta, -side, origSide);
                // enemy selects worst move
                if (sc < bestScore) {
                    bestScore = sc;
                    // logger.debug(String.format("new level, side, move, bestScore = %f %d %s %f", level, side, ""+m, bestScore));
                } 
                p.reverse(m);
            }            
        }
        scoreCntr++;
        //logger.debug(String.format("scoreRec(level,side,origSide) = %f %d %d ", level,side,origSide));
        // String swho = (side==-1 ? "X" : "0");
        // MisGameMain.log.print("Pos : " + p + " scored at " + bestScore + " for " + p.lastMoveSide());
        bestScore -= level;  // we prefer shorter sequences
        cache.put(k, bestScore);
        return bestScore;
    }

    public TM bestMove() throws GameException{
        long t0 = System.currentTimeMillis();
        TM bestMove = bestMoveRec(getPosition(), 0, getAiSide());
        long t1 = System.currentTimeMillis();
        System.out.println("Time spend on best Move: " + (t1 - t0) + " millis");
        return bestMove;
    }
    
    public void clearCache() {
        cache.clear();
    }

}
