package mis.games.rendzu.client;

import static mis.games.utils.RendzuOptions.DEFAULT_SIZE;

import java.util.ArrayList;
import java.util.List;

import mis.games.rendzu.GameException;
import mis.games.rendzu.RGame;
import mis.games.rendzu.RMove;
import mis.games.rendzu.RPoint;
import mis.games.server.OneRGame;

/**
 * game reflecting remote game.
 * 
 * @author Misha
 * @version 1.0
 */
public class RemoteGame implements RGame {
    int side;
    // RendzuClient client;
    int manSide = -1;
    String remoteGameId = null;
    OneRGame ogame = null;
    
    public RemoteGame(OneRGame ogame, int side) {
        // this.client = client;
        this.side = side;
        this.ogame = ogame;
    }

    @Override
    public int getSx() {
        return ogame.getSx();
    }

    @Override
    public int getSy() {
        return ogame.getSy();
    }

    @Override
    public int getSide() {
        return ogame.getSide();
    }

    @Override
    public int getManSide() {
        return manSide;
    }

    @Override
    public int getAiSide() {
        // TODO Auto-generated method stub
        return -manSide;
    }

    @Override
    public void initGame(byte[][] fld, int side) {
        this.side = side;
        ogame.setSide(side);
        ogame.setFld(fld);
        ogame.getMoves().clear();
    }

    @Override
    public int addMove(RMove m) {
        ogame.apply(m);
        this.side = m.side;
        return 1;
    }

    @Override
    public int undoMove() {
        if (ogame.getMoves().size() == 0) {
            return 0;
        }
        ogame.reverse(null);
        this.side = -side;
        return 1;
    }

    @Override
    public RMove nextMove() throws GameException {
        // XXX - don't know what to do yet
        return null;
    }

    @Override
    public byte[][] getFld() {
        return ogame.getFld();
    }

    @Override
    public byte[][] getFldTypes() {
        return ogame.getFldTypes();
    }

    @Override
    public boolean manWon() {
        return false;
    }

    @Override
    public boolean compWon() {
        // XXX - don't know what to do yet
        return false;
    }

    @Override
    public String getId() {
        return remoteGameId;
    }

    @Override
    public void setId(String gameId) {
        this.remoteGameId = gameId;    
    }
    
    public int getNumberMoves() {
        return ogame.getNumberMoves();
    }

    @Override
    public long getHash() {
        return OneRGame.getHash(getFld());
    }

    @Override
    public String getMovesReport() {
        return "Moves report not implemented yet for RemoteGame";
    }

    @Override
    public RMove getRandomRMove(double delta) {
        // TODO Auto-generated method stub
        return null;
    }
}
