package mis.games.rendzu.simplegame;

import mis.games.rendzgame.RendzuParameters;
import mis.games.rendzu.RGame;
import mis.games.rendzu.RMove;
import mis.games.rendzu.RPoint;
import mis.games.server.OneRGame;

public class Rendzu implements RGame {

    public static final long M_OK = 1;
    public static final long M_FAIL = -1;
    public static final short MINSZ = 5;
    public static final short MAXSZ = 20; // / maximum value of sx or sy
    public static final short MAX_MOVES = MAXSZ * MAXSZ;
    public static final short OUTSIDE = 2; // / value of cel outside filed
    public static final short MAXSEQ = 6; // / 0, 1, 2, 3, 4, 5
    public static final long ILLEGAL_MOVE = -999999;
    public static final byte REQUIRED_MOVE = 0x03;

    public static final int[] stepx = new int[] { 1, 1, 0, 1 };
    public static final int[] stepy = new int[] { 0, 1, 1, -1 };

    /** Values of different sequences */
    public static final long[] qqq = new long[] { 2, 10, 100, 1000, 10000,
            100000 };

    public static final double ME_PREF = 1.5; // /< preference of my
    // sequences in
    // comparison with
    // enemies

    public short sx; // / size x, number of columns
    public short sy; // / size y, number of rows
    public byte[][] ffld = new byte[MAXSZ][MAXSZ]; // / playing field
    public byte[][] fldTypes = new byte[MAXSZ][MAXSZ]; // / playing field
    short manSide; // / color of user player, 1 for cross or -1 for null
    short[] stx;
    short[] sty;
    long[] wq; // weigths of sequences of different length
    short[] moves; // list of moves to allow returning moves
    short nMoves;
    public static boolean computerFirst = true;
    public static Rendzu currentGame = null;
    private String gameId = null;
    private RMove lastMove = null;

    /**
     * constructor with default sizes 19, 19
     */
    public Rendzu() {
        init((short) 19, (short) 19, computerFirst);
    }

    /**
     * contructor with supplied sides
     * 
     * @param szx
     * @param szy
     * @param mans
     */
    public Rendzu(short szx, short szy, boolean compFirst) {
        init(szx, szy, compFirst);
        currentGame = this;
    }

    /**
     * initialization method. allows reset fild without creating new instances
     * 
     * @param szx
     * @param szy
     * @param mans
     */
    void init(short szx, short szy, boolean compFirst) {
        if (szx < MINSZ)
            szx = MINSZ;
        if (szx > MAXSZ)
            szx = MAXSZ;
        if (szy < MINSZ)
            szy = MINSZ;
        if (szy > MAXSZ)
            szy = MAXSZ;
        sx = szx;
        sy = szy;

        short[] stepxx = new short[] { 1, 1, 0, -1, -1, -1, 0, 1 };
        short[] stepyy = new short[] { 0, 1, 1, 1, 0, -1, -1, -1 };
        short[] smoves = new short[MAX_MOVES];
        stx = stepxx;
        sty = stepyy;
        moves = smoves;
        nMoves = 0;
        wq = qqq;
        manSide = -1;

        reset(compFirst);
    }

    /**
     * THis method returns next computer move and writes it to field. for now
     * simplest possible - first available point
     * 
     * @return - point with next computer move
     */
    public RMove nextMove() {
        double maxQ = -100000;
        RPoint po = new RPoint(111, 111);

        for (short i = 0; i < sy; i++) {
            for (short j = 0; j < sx; j++) {
                if (ffld[i][j] == 0) {
                    RPoint p = new RPoint(j, i);
                    double q = moveQ(p, (short) -manSide);
                    if (q > maxQ) {
                        po = p;
                        maxQ = q;
                    }
                }
            }
        }

        // addMoveType(po, (byte) (-manSide), RendzuParameters.LAST_MOVE); // computer
        lastMove = new RMove(po.x, po.y, -manSide);
        return lastMove;
    }

    /**
     * evaluating quality of move with given side
     */
    double moveQ(RPoint p, short side) {
        if (value(p) != 0)
            return ILLEGAL_MOVE;
        double q = 0;
        for (short k = 0; k < 4; k++) {
            short sme = 0; // sum of our fields
            short se = 0; // sum of enemy fields
            short sout = 0; // sum of out fields
            RPoint p0 = new RPoint(p.x - 4 * stx[k], p.y - 4 * sty[k]);
            RPoint p1 = new RPoint(p0.x, p0.y);
            short j0 = -4;
            // making sure we are in field
            for (short j = j0; j <= j0 + 4; j++) {
                short v = value(p1);
                if (v == OUTSIDE)
                    sout++;
                else if (v == side)
                    sme++;
                else if (v == -side)
                    se++;
                p1.x += stx[k];
                p1.y += sty[k];
            }
            for (short jj = 0; jj <= 4; jj++) {
                if (sout == 0) {
                    if (se == 0) {
                        q += wq[sme] / ME_PREF;
                    } else if (sme == 0) {
                        q += wq[se];
                    }
                }
                // recounting sum, first substracting p0
                short v = value(p0);
                if (v == OUTSIDE)
                    sout--;
                else if (v == side)
                    sme--;
                else if (v == -side)
                    se--;
                p0.x += stx[k];
                p0.y += sty[k];

                // now adding p1
                v = value(p1);
                if (v == OUTSIDE)
                    sout++;
                else if (v == side)
                    sme++;
                else if (v == -side)
                    se++;
                p1.x += stx[k];
                p1.y += sty[k];
            } // next jj
        } // next k

        return q;
    }

    public int addMove(RPoint p, int side) {
        clearFieldKinds();
        return addMoveType(p, side, RendzuParameters.LAST_MAN_MOVE); // my move
    }

    void getSeqNums(long[] seq, short side) {
        for (short d = 0; d <= 5; d++) {
            seq[d] = 0;
        }
        for (short i = 0; i < sy; i++) {
            for (short j = 0; j < sx; j++) {
                for (short k = 0; k < 4; k++) {
                    short ii = i;
                    short jj = j;
                    short cnt = 0;
                    for (; cnt <= 5; cnt++) {
                        if (ii < 0 || ii >= sy)
                            break;
                        if (jj < 0 || jj >= sx)
                            break;
                        if (ffld[ii][jj] != side)
                            break;
                        ii += sty[k];
                        jj += stx[k];
                    }
                    seq[cnt]++;
                }
            }
        }
    }

    public boolean sideWon(short side) {
        long[] seq = new long[10];
        getSeqNums(seq, side);

        return (seq[5] > 0);
    }

    public void reset(boolean compFirst) {
        for (short i = 0; i < sy; i++) {
            for (short j = 0; j < sx; j++) {
                ffld[i][j] = 0;
                fldTypes[i][j] = 0;
            }
        }
        nMoves = 0;
        if (compFirst) {
            // computer cross, makes first move in the center
            RPoint center = new RPoint(sx / 2, sy / 2);
            addMove(center, (short) 1);
            // this->nextMove();
        }
    }

    public int addMoveType(RPoint p, int side, byte type) {
        if (value(p) != 0) {
            return 0;
        }
        if (nMoves < 0 || nMoves > MAX_MOVES - 1) {
            throw new IllegalStateException("Illegal number of moves = "
                    + nMoves);
        }
        ffld[p.y][p.x] = (byte) side;
        fldTypes[p.y][p.x] = (byte) type;
        moves[nMoves++] = p.pack();
        return 1;
    }

    public int undoMove() {
        if (nMoves <= 0 || nMoves > MAX_MOVES) {
            throw new IllegalStateException("Illegal number of moves = "
                    + nMoves);
        }
        short mv = moves[nMoves - 1];
        int y = mv >> 8;
        int x = mv & 0xFF;
        if (x >= sx || y >= sy) {
            throw new IllegalStateException("Illegal move in undo");
        }
        if (ffld[y][x] == 0) {
            return 0;
        }
        ffld[y][x] = 0;
        nMoves--;
        return 1;
    }

    boolean inside(RPoint p) {
        return (p.x >= 0 && p.x < sx && p.y >= 0 && p.y < sy);
    }

    short value(RPoint p) {
        if (!inside(p))
            return OUTSIDE;
        return ffld[p.y][p.x];
    }

    public boolean manWon() {
        return sideWon(manSide);
    }

    public boolean compWon() {
        return sideWon((short) -manSide);
    }

    void clearFieldKinds() {
        for (short i = 0; i < sy; i++) {
            for (short j = 0; j < sx; j++) {
                fldTypes[i][j] &= 0;
            }
        }
    }

    @Override
    public int getSx() {
        return sx;
    }

    @Override
    public int getSy() {
        return sy;
    }

    @Override
    public int getSide() {
        return -manSide;
    }

    @Override
    public void initGame(byte[][] fld, int side) {
        for (int i = 0; i < sy; i++) {
            for (int j = 0; j < sx; j++) {
                if (fld != null) {
                    this.ffld[i][j] = fld[i][j];
                }
                this.fldTypes[i][j] = 0;
            }
        }
    }

    @Override
    public byte[][] getFld() {
        return ffld;
    }

    @Override
    public byte[][] getFldTypes() {
        return fldTypes;
    }

    @Override
    public int getManSide() {
        return manSide;
    }

    @Override
    public int getAiSide() {
        return -manSide;
    }

    public String getId() {
        return gameId;
    }

    public void setId(String gameId) {
        this.gameId = gameId;
    }

    @Override
    public int addMove(RMove move) {
        return addMove(new RPoint(move.x, move.y), move.side);
    }

    @Override
    public long getHash() {        
        return OneRGame.getHash(getFld());
    }

    @Override
    public int getNumberMoves() {
        return nMoves;
    }

    @Override
    public String getMovesReport() {
        return "Moves report not implemented yet for Simple Rendzu()";
    }
    
    public RMove getRandomRMove(double delta) {
        return lastMove;
    }

}
