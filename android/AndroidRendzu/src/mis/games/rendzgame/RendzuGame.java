package mis.games.rendzgame;

import java.util.List;
import java.util.Map;

import mis.games.framework.AlphaBetaGame;
import mis.games.rendzu.GameException;
import mis.games.rendzu.RGame;
import mis.games.rendzu.RMove;
import mis.games.server.OneRGame;
import mis.games.utils.MisLog;
import static mis.games.rendzgame.RendzuParameters.MAX_GAME_MOVES;

public class RendzuGame extends AlphaBetaGame<RendzuPosition, RendzuMove> 
        implements RGame {
    
    public RendzuMove []moves = new RendzuMove[MAX_GAME_MOVES];
    public int nMoves;
    String gameId = "";
    
    public RendzuGame(byte [][]pos) {
        RendzuPosition p = new RendzuPosition(0);
        p.fld = pos;
        this.maxLevel = RendzuParameters.MAX_RENDZU_LEVEL;
        this.setPosition(p);
        MisLog.i("RendzuGame created");
    }

    /**
     * generate possible moves for given position.
     */
    @Override
    public List<RendzuMove> generateMoves(RendzuPosition pos) {
        List<RendzuMove> lret = pos.generateMoves();
        return lret;
    }
    
    Map<Object, Double> getCache() {
        return cache;
    }

    @Override
    public int getSx() {
        return getPosition().sx;
    }

    @Override
    public int getSy() {
        // TODO Auto-generated method stub
        return getPosition().sy;
    }

    @Override
    public int getSide() {
        return getPosition().getSide();
    }

    @Override
    public void initGame(byte[][] fld, int side) {
        if (fld == null) {
            fld = new byte[getPosition().sy][getPosition().sx];
        } 
        getPosition().fld = fld;
        getPosition().setSide(side);
        nMoves = 0;
    }

    @Override
    public int addMove(RMove m) {
        RendzuMove move = new RendzuMove(m.x, m.y, m.side);
        int ret = getPosition().apply(move);
        if (ret > 0) {
            moves[nMoves++] = move;
        }
        if (AlphaBetaGame.debug) {
            MisLog.i("Added man move: " + m.x + " " + m.y + " , ret = " + ret);
        }
        return ret;
    }

    @Override
    public int undoMove() {
        if (nMoves == 0) {
            return 0;
        }
        RendzuMove lastMove = moves[nMoves-1];
        nMoves--;
        return getPosition().reverse(lastMove);
    }

    @Override
    public RMove nextMove() throws GameException {
        RendzuParameters.initParameters();
        RendzuMove move = null;
        try {
            move = bestMove();
        } catch (CloneNotSupportedException e) {
            throw new GameException("Exception in bestMove: " + e.getMessage(), e);
        }
        MisLog.i("Found AI move: " + move.x + " " + move.y);
        return new RMove(move.x, move.y, move.getSide());
    }

    @Override
    public byte[][] getFld() {
        return getPosition().fld;
    }

    @Override
    public byte[][] getFldTypes() {
        byte [][]types = new byte[19][19];
        if (nMoves >= 2) {
            RendzuMove last = moves[nMoves - 1];
            RendzuMove laste = moves[nMoves - 2];
            types[last.y][last.x] = RendzuParameters.LAST_MOVE;
            types[laste.y][laste.x] = RendzuParameters.LAST_MAN_MOVE;
        }
        return types;
    }

    @Override
    public boolean manWon() {
        double score = getPosition().score(null)*getSide();
        boolean bret = getPosition().isFinished() && score < 0;
        if (bret) {
            MisLog.i("Man won");
        }
        return bret;
    }

    @Override
    public boolean compWon() {
        double score = getPosition().score(null)*getSide();
        boolean bret = getPosition().isFinished() && score > 0;
        if (bret) {
            MisLog.i("AI won");
        }
        return bret;
    }
    
    public int getNumberMoves() {
        return nMoves;
    }

    @Override
    public String getId() {
        return gameId;
    }
    
    public void setId(String id) {
        this.gameId = id;
    }

    @Override
    public long getHash() {
        return OneRGame.getHash(getFld());
    }
    public String getMovesReport() {
        StringBuilder sb = new StringBuilder();
        for (int i=0; i<nMoves; i++) {
            RendzuMove m = moves[i];
            RMove rm = new RMove(m.x, m.y, m.getSide());
            sb.append(rm.getReportString());
            if (i % 2 == 1) {
                sb.append("\r\n");
            } else {
                sb.append(" - ");
            }
        }
        sb.append("\r\nPosition:");
        sb.append(getPosition().toDesk());
        return sb.toString();        
    }

    @Override
    public RMove getRandomRMove(double delta) {
        RendzuMove m = (RendzuMove)getRandomMove(delta);
        return new RMove(m.x, m.y, m.getSide());
    }

}
