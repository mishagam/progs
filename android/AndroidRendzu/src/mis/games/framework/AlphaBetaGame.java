package mis.games.framework;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import mis.games.rendzgame.RendzuPackedPosition;
import mis.games.rendzu.GameException;
import mis.games.utils.MisLog;
import static mis.games.utils.RendzuOptions.LOG_GAME;

/**
 * selection of best move with min max method.
 * 
 * @author Misha
 *
 */
public abstract class AlphaBetaGame<TP extends Position, TM extends Move> extends GenericGame<TP, TM> {
    protected Map<Object, Double> cache = new HashMap<Object, Double>();
    double MAX_LEVEL = 6;
    public double maxLevel = MAX_LEVEL;
    private static Move bestMove = null;
    private static List<Move> possibleMoves = new ArrayList<Move>();
    public static boolean debug = false; 
    String rootPosKey = null;
    static int debugFileIdx = 0;
    public int moveTime = 5000;
    public static final double MOVE_DISCOUNT = 0.99;
    public static final boolean USE_CACHE = true;
    public static final boolean USE_AB = false;
    public static final int MAX_CACHE_SIZE = 4000;
    
    private synchronized void setBestMove(TM  m) {
        bestMove = m;
    }
    
    /**
     * for origSide we are going for max, 
     * 
     * @param p
     * @param mp
     * @param level
     * @param side
     * @param origSide
     * @return
     */
    public double scoreRecAlphaBeta(TP p, TM mp, double level, int origSide,
            double alpha, double beta, DebugMove debugMove) throws CloneNotSupportedException {
        if (LOG_GAME) {
            MisLog.d(space(level) + String.format("entered score(side, pos, alpha, beta) = %2d %s %.1f %.1f",
                    p.getSide(), p.toString(), alpha, beta));
        }
                
        Object key = null;
        if (debug) {
            key = p.getDebugKey();
            ((DebugPackedPos)key).setLevel(level);
            if (mp == null) {
                rootPosKey = ((DebugPackedPos)key).strKey;
            }
            if (debugMove != null) {
                debugMove.derivedPosKey = ((DebugPackedPos)key).strKey;
            }
        } else {
            key = p.getKey();
        }
        if (USE_CACHE && cache.containsKey(key)) {
            if (LOG_GAME) {
                MisLog.d(space(level) + String.format("from cache best = %.1f", cache.get(key)));
        }
            return cache.get(key); 
        }
        double best = -1000000000;        
        if (mp != null && (p.isFinished() || (level < 0 && p.getSide() == origSide))) {
            best = p.score(mp);
        } else {
            List<TM> myMoves = this.generateMoves(p);
            if (myMoves.size() == 0) {
                throw new IllegalStateException("Has no moves in scoreRecAlphaBeta, but not finished");
            }
            if (mp == null) {
                possibleMoves.addAll(myMoves);
            }
            double levelDelta = p.getLevelDelta();
            int midx = 0;
            for (TM m : myMoves) {
                if (best > alpha) {
                    alpha = best;
                }
                p.apply(m);
                DebugMove dm = null;
                if (debug) {
                    dm = m.getDebugMove();
                }                
                double value = scoreRecAlphaBeta(p, m, level-levelDelta, origSide, -beta, -alpha, dm);
                if (debug) {
                    ((DebugPackedPos)key).moves.add(dm);
                }                
                p.reverse(m);
                m.setScore(value);
                if (value > best) {
                    best = value;
                    if (mp == null) {
                        setBestMove(m);
                    }
                    if (LOG_GAME) {
                        MisLog.d(String.format(space(level) + "new bestScore, p, m, sc = %s %s %.1f", 
                                                p.toString(), ""+m, best));
                    }
                    if (USE_AB && best >= beta) {
                        MisLog.d(space(level) + " *** skipped best>=beta, midx, nMoves = " + midx + " " + myMoves.size());
                        break;
                    }
                } 
                midx++;
            }   
            // we invert score before return to enemy
            best = -MOVE_DISCOUNT*best;
        }
        if (USE_CACHE) {
            if(cache.containsKey(key)) {
                if (LOG_GAME) {
                    MisLog.d(space(level) + "cache containg repeated key here, key: " + key);
                }
                double oldBest = cache.get(key);
                if (best < oldBest) {
        cache.put(key, best);
                    MisLog.d(space(level) + "updated cache, key, score = " + key + 
                            " " + String.format("%.1f", best));
                }
            } else {
                cache.put(key, best);
                if (LOG_GAME) {
                    MisLog.d(space(level) + "added cache, key, score = " + key + 
                            " " + String.format("%.1f", best));
                }
            }
        }
        if (debug) {
            ((DebugPackedPos)key).score = best;
            ((DebugPackedPos)key).level = level;
            if (debugMove != null) {
                debugMove.score = best;
            }                  
        }
        if (LOG_GAME) {
            MisLog.d(String.format(space(level) + "exited scoreRecAlphaBeta() side, alpha, beta = %d %.1f %.1f", 
                        origSide, alpha, beta));
        }
        return best;
    }

    public String space(double level) {
        StringBuilder sb = new StringBuilder();
        for (int i=0; i<maxLevel - level; i++) {
            sb.append(" ");
        }
        sb.append(String.format("Lev: %.0f ", level));
        return sb.toString();
    }

    @SuppressWarnings("unchecked")
    public TM bestMove() throws GameException, CloneNotSupportedException {
        if (debug) {
            MisLog.i("bestMove() called, origSide = " + getAiSide());
        }
        double curLevel = 1.5;
        long t0=0, t1 = 0;
        clearCache();
        while ((t1 - t0) < moveTime / 4 && curLevel < maxLevel + 0.001
                && cache.size() < MAX_CACHE_SIZE) {
            t0 = System.currentTimeMillis();
            TP p = (TP)getPosition().clone();
            double alpha = -1000000000;
            double beta = 1000000000;
            int side = getAiSide();
            clearCache();
            scoreRecAlphaBeta(p, null, curLevel, side, alpha, beta, null);
            t1 = System.currentTimeMillis();
            if (debug) {
                MisLog.d("Time spend on best Move: " + (t1 - t0) + " millis");
                MisLog.d("curLevel = " + curLevel + ", bestMove = " + bestMove);
            }
            curLevel += 1; 
        }
        if (debug) {
            writeCache();
        }
        return (TM)bestMove;
    }
    
    /**
     * return random move from possibleMoves with score withing delta
     * from bestMove score.
     * 
     * @param delta - delta to select possible scores.
     * @return selected random move
     */
    public Move getRandomMove(double delta) {
        List<Move> selected = new ArrayList<Move>();
        double adelta = (Math.abs(bestMove.getScore())) * delta;
        for (Move m : possibleMoves) {
            if (m.getScore() >= bestMove.getScore() - adelta) {
                selected.add(m);                
            }
        }
        int nsel = selected.size();
        int isel = (new Random()).nextInt(nsel);
        return selected.get(isel);
    }

    private void writeCache() {
        PrintWriter pw = null;
        try {
            // writing cache to file
            String fileName = getCacheLogFilename();
            pw = new PrintWriter(fileName);
            pw.println("Root: " + rootPosKey);
            for (Object o : cache.keySet()) {
                DebugPackedPos p = (DebugPackedPos)o;
                pw.println(p.toList().toString());
            }
            MisLog.i("Cache written to file: " + fileName);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (pw != null) {
                pw.close();                    
            }
        }   
    }
    
    private String getCacheLogFilename() throws IOException {
        // we rename old file to new place 
        String fileNameStart = "AlphaBetaAnalysisCache";
        String debugExt = ".log";
        String fileName = fileNameStart + (debugFileIdx++) + debugExt;
        String fileName0 = fileNameStart + 0 + debugExt;
        File f = new File(fileName);
        while (f.exists()) {
            fileName = fileNameStart + (debugFileIdx++) + debugExt;
            f = new File(fileName);
        }   
        if (!fileName.equals(fileName0)) {
            File f0 = new File(fileName0);
            f0.renameTo(new File(fileName));
        }
        return fileName0;
    }

    @SuppressWarnings("unchecked")
    public TM bestMove(TP p) throws GameException {
        throw new UnsupportedOperationException();
    }
    
    public void clearCache() {
        cache.clear();
        bestMove = null;
        possibleMoves.clear();
    }
}
