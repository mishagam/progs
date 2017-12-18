package mis.games.rendzgame;

import java.util.ArrayList;
import java.util.List;

import mis.games.framework.DebugPackedPos;
import mis.games.framework.Move;
import mis.games.framework.Position;
import mis.games.rendzu.RPoint;
import static mis.games.rendzgame.RendzuParameters.ME_PREF_P;
import static mis.games.rendzgame.RendzuParameters.qqq;

public class RendzuPosition implements Position {
    // constants
    public static final int MAX_MOVES = 60;
    public static final int GAME_SIZE = 19;
    private static final boolean USE_PMAP = false; 
 
    /** value of cell outside field */
    public static final  short OUTSIDE = 2;  

    int side = 0;
    long count = 0;  // count of moves
    public short sx = GAME_SIZE;  /// size x, number of columns
    public short sy = GAME_SIZE;  /// size y, number of rows
    /** fld reflect current postion */
    private boolean fldCurrent = false;
    private boolean seqCurrent = false;
    /** 
     * number of sequences of length 5 with 
     * different numbers of -1 (>=0) [0][*]
     * or 1 [1][*]
     */
    int [][]nseq = new int[2][6];
    SequenceSet [][]cellSeq = null;
    double storedScore = 0; 
    
    public final double getStoredScore() {
        return storedScore;
    }
    public final void setStoredScore(double storedScore) {
        this.storedScore = storedScore;
    }
    
    /**
     * in case we have map for this position. 
     */
    byte [][]fld;    
    RendzuPosition basePos;    
    List<Short> moves = new ArrayList<Short>();
    /**
     * packet map - can be used for searching for the same positions.
     * [0] - map with value -1
     * [1] - map with value 1
     */
    // int [][]pmap = (USE_PMAP ? new int[2][GAME_SIZE] : null);
    int []stx;
    int []sty;
    
    
    public RendzuPosition(int side) {
        stx = new int[]{ 1, 1, 0,-1,-1,-1, 0, 1};
        sty = new int[]{ 0, 1, 1, 1, 0,-1,-1,-1};
        this.fld = new byte[sy][sx];
        this.side = side;
    }
    public final int getSide() {
        return side;
    }

    public final void setSide(int side) {
        this.side = side;
    }
    
    private void addPackedMove(RendzuMove m) {
        short pmove = m.pack();
        for (int i=moves.size(); i>=0; i--) {
            if (i == 0 || pmove > moves.get(i-1)) {
                moves.add(i, pmove);
                break;
            } else if (pmove == moves.get(i-1)) {
                throw new IllegalStateException("Trying to add existing move");
            } 
        }        
    }
    
    private void removePackedMove(RendzuMove m) {
        short pmove = m.pack();
        int i=0;
        if (!moves.contains(pmove)) {
            throw new IllegalStateException("Trying to remove non existing move");
        }
        moves.remove(new Short(pmove));

    }

    @Override
    public int apply(Move move) {
        RendzuMove m = (RendzuMove)move;
        if (m.validate(this) == 0) {
            return 0;
        }

        addPackedMove(m);
        if (USE_PMAP) {
            // write later when make use of packed maps
        }
        count++;
        side = m.getSide();
        if (!seqCurrent) {
            countSeqNumbers();
        }
        // update nseq and add move to fld
        updateCellSets(m, true);
        updateSeqMove(m, true);
        return 1;
    }

    @Override
    public int reverse(Move move) {
        RendzuMove m = (RendzuMove)move;
        if (fld[m.y][m.x] != m.getSide()) {
            return 0;
        }
        removePackedMove(m);
        if (USE_PMAP) {
            // write later when make use of packed maps
        }
        count++;
        if (!seqCurrent) {
            countSeqNumbers();
        }
        // update nseq and add move to fld
        updateSeqMove(m, false);
        updateCellSets(m, false);
        side = -side;
        return 1;
    }
    
    int value(RPoint p) {
        if (p.x < 0 || p.x >= GAME_SIZE || p.y < 0 || p.y >= GAME_SIZE) {
            return OUTSIDE;
        }
        return fld[p.y][p.x];
    }
    
    /**
     * update sequence numbers and add move to fld.
     * @param m
     */
    private void updateSeqMove(RendzuMove m, boolean add) {
        RPoint p = new RPoint(m.x, m.y);
        if (add && value(p) != 0) {
            throw new IllegalStateException("Illegal move (cannot add - nonempty field): " + m);
        } else if (!add && value(p) == 0) {
            throw new IllegalStateException("Illegal move (nothing to remove): " + m);
        }
        int mySide = (side == 1 ? 1 : 0);
        int otherSide = (1 - mySide);
        if (!add) {
            fld[m.y][m.x] = 0;
        }
        int diff = (add ? 1 : -1);
        // value should be null for now
        for (short k = 0; k<4; k++) {
            int sme = 0;   // sum of our fields
            int sother = 0;    // sum of enemy fields
            int sout = 0;  // sum of out fields
            RPoint p0 = new RPoint(p.x - 4*stx[k], p.y - 4*sty[k]);
            RPoint p1 = new RPoint(p0.x, p0.y);
            short j0 = -4;
            // making sure we are in field
            for (short j = j0; j<=j0+4; j++) {
                int v = value(p1);
                if     (v ==   OUTSIDE) sout++;
                else if(v ==  side) sme++;
                else if(v == -side) sother++;
                p1.x += stx[k];
                p1.y += sty[k];
            }
            for (short jj = 0; jj<=4; jj++) {
                if (sout == 0) {
                    if (sother==0) {
                        nseq[mySide][sme] -= diff;
                        nseq[mySide][sme+1] += diff;
                        if (nseq[mySide][sme] < 0 || nseq[mySide][sme+1] < 0) {
                            throw new IllegalStateException("Illegal negative number of sequences");
                        }
                    } 
                    if (sme==0) {
                        // there was other element.
                        nseq[otherSide][sother] -= diff;
                        if (nseq[otherSide][sother] < 0) {
                            throw new IllegalStateException("Illegal negative number of sequences");
                        }
                    }
                }
                // recounting sum, first substracting p0
                int v = value(p0);
                if     (v ==   OUTSIDE) sout--;
                else if(v ==  side) sme--;
                else if(v == -side) sother--;
                p0.x += stx[k];
                p0.y += sty[k];

                // now adding p1
                v = value(p1);
                if     (v ==   OUTSIDE) sout++;
                else if(v ==  side) sme++;
                else if(v == -side) sother++;
                p1.x += stx[k];
                p1.y += sty[k];
            } // next jj
        } // next k
        if (add) {
            fld[m.y][m.x] = (byte)m.getSide();
        }
    }

    @Override
    public void copy(Position pos) {
        RendzuPosition b = (RendzuPosition)pos;        
        if (b.basePos != null) {
            this.basePos = b.basePos;           
        } else {
            this.basePos = null;
            for (int i=0; i<b.sy; i++) {
                for (int j=0; j<b.sx; j++) {
                    fld[i][j] = b.fld[i][j];
                }
            }
        }
        // copy moves
        moves.clear();
        moves.addAll(b.moves);
        // copy packed map
        if (USE_PMAP) {
            for (int k = 0; k < 2; k++) {
                for (int i = 0; i < GAME_SIZE; i++) {
                    // pmap[k][i] = b.pmap[k][i];
                }
            }
        }
        // copy misc info
        side = b.side;
    }

    @Override
    public boolean isFinished() {
        if (!seqCurrent) {
            countSeqNumbers();
        }
        return (nseq[0][5] > 0 || nseq[1][5] > 0);
    }

    @Override
    public int lastMoveSide() {
        return side;
    }

    @Override
    public double score(Move m) {
        if (!seqCurrent) {
            countSeqNumbers();
        }
        RendzuMove rm = (RendzuMove)m;
        double []sq = new double[2];
        for (int k=0; k<2; k++) {
            for (int j=0; j<=5; j++) {
                sq[k] += RendzuParameters.qqq[j] * nseq[k][j];
            }
        }
        double sco = 0;
        int mySide, enSide;
        if (side == 1) {
            mySide = 1;
        } else {
            mySide = 0;
        }
        enSide = 1-mySide;
        sco = sq[mySide] - sq[enSide] / RendzuParameters.ME_PREF_P;
        if (nseq[enSide][4] > 0) {
            sco -= RendzuParameters.qqq[5] * 0.8;
        } else if (nseq[mySide][4] >= 2) {
            sco += RendzuParameters.qqq[5] * 0.8;
        } else if (nseq[enSide][3] >= 2) {
            sco -= RendzuParameters.qqq[5] * 0.3;
        } else if (nseq[enSide][3] >= 3) {
            sco -= RendzuParameters.qqq[5] * 0.6;
        } 
        if (rm != null) {
            if (cellSeq[rm.y][rm.x].seq[mySide][3] >= 4) {
                sco += RendzuParameters.qqq[5] * 0.5;
            } else if ((cellSeq[rm.y][rm.x].seq[mySide][3] >= 2) && (cellSeq[rm.y][rm.x].seq[mySide][4] >= 1)) {
                sco += RendzuParameters.qqq[5] * 0.6;
            } else if (cellSeq[rm.y][rm.x].seq[mySide][3] >= 2) {
                sco += RendzuParameters.qqq[4] * 1.1;
        }
        }
        storedScore = sco;
        return sco;
    }
    
    /**
     * we have map as basePos + 
     */
    public void prepareMap() {
        if (fldCurrent) {
            // we already have current map
            return;
        }
        if (fld == null) {
            fld = new byte[GAME_SIZE][GAME_SIZE];
        }
        if (basePos != null) {
            for (int i=0; i<sy; i++) {
                for (int j=0; j<sx; j++) {
                    fld[i][j] = basePos.fld[i][j];
                }
            }
        }
        RendzuMove m = new RendzuMove(0,0,0);
        for (short sh : moves) {
            m.unpack(sh);
            fld[m.y][m.x] = (byte)m.getSide();            
        }
        fldCurrent = true;
    }

    /**
     * calculate sequence numbers for given side
     * @param seq
     * @param side
     */
    void calcSeqNums(int []seq, int side) {
        for (short d=0; d<=5; d++) {
            seq[d] = 0;
        }
        for (short i=0; i<sy; i++) {
            for (short j=0; j<sx; j++) {
                for (short k=0; k<4; k++) {
                    short ii = i;
                    short jj = j;
                    short cnt = 0;
                    short l;
                    for (l=0; l<5; l++) {
                        if (ii<0 || ii>=sy) break;
                        if (jj<0 || jj>=sx) break;
                        byte b = (byte)(fld[ii][jj]);
                        if (b == side) {
                            cnt++;
                        } else if (b == -side) {
                            break;
                        }
                        ii += sty[k];
                        jj += stx[k];
                    }
                    if (l == 5) {
                        seq[cnt] ++;
                    }
                }
            }
        }
    }
    
    /**
     * count sequence numbers and position score.
     */
    void countSeqNumbers() {
        calcSeqNums(nseq[0], -1);
        calcSeqNums(nseq[1],  1);
        seqCurrent = true;
    }
    
    public void calcCellsSeqSets() {
        if (cellSeq == null) {
            cellSeq = new SequenceSet[sy][sx];
            for (int i=0; i<sy; i++) {
                for (int j=0; j<sx; j++) {
                    cellSeq[i][j] = new SequenceSet();
                }
            }
        } else {
            for (int i=0; i<sy; i++) {
                for (int j=0; j<sx; j++) {
                    cellSeq[i][j].clear();
                }
            }
        }
        int mIdx = (side == 1 ? 1 : 0);
        int oIdx = (1 - mIdx); 
        for (short i=0; i<sy; i++) {
            for (short j=0; j<sx; j++) {
                for (short k=0; k<4; k++) {
                    short ii = i;
                    short jj = j;
                    int mCnt = 0;
                    int oCnt = 0;
                    short l;
                    for (l=0; l<5; l++) {
                        if (ii<0 || ii>=sy) break;
                        if (jj<0 || jj>=sx) break;
                        byte b = (byte)(fld[ii][jj]);
                        if (b == side) {
                            mCnt++;
                        } else if (b == -side) {
                            oCnt++;
                        }
                        ii += sty[k];
                        jj += stx[k];
                    }
                    if (l < 5) {
                        continue;
                    }
                    ii = i; jj= j;
                    
                    // adding cntm to all cells
                    for (l=0; l<5; l++) {
                        SequenceSet ss = cellSeq[ii][jj];
                        if (oCnt == 0) {
                            ss.seq[mIdx][mCnt] += 1;
                        }
                        if (mCnt == 0) {
                            ss.seq[oIdx][oCnt] += 1;
                        }
                        ii += sty[k];
                        jj += stx[k];
                    }
                }
            }
        }
        // calculate weights first time
        for (short i=0; i<sy; i++) {
            for (short j=0; j<sx; j++) {
                cellSeq[i][j].updateWeight();            
            }
        }
    }
    
    /**
     * updating cells sets after adding move
     * @param m
     * @param add
     */
    public void updateCellSets(RendzuMove m, boolean add) {
        if (cellSeq == null) {
            calcCellsSeqSets();
        }
        RPoint p = new RPoint(m.x, m.y);
        if (add && value(p) != 0) {
            throw new IllegalStateException("Illegal move (cannot add - nonempty field): " + m);
        } 
        int mside = m.getSide();
        int mySide = (mside == 1 ? 1 : 0);
        int otherSide = (1 - mySide);
        int diff = (add ? 1 : -1);
        // value should be null for now
        for (short k = 0; k<4; k++) {
            int sme = 0;   // sum of our fields
            int sother = 0;    // sum of enemy fields
            int sout = 0;  // sum of out fields
            RPoint p0 = new RPoint(p.x - 4*stx[k], p.y - 4*sty[k]);
            RPoint p1 = new RPoint(p0.x, p0.y);
            short j0 = -4;
            // making sure we are in field
            for (short j = j0; j<=j0+4; j++) {
                int v = value(p1);
                if     (v ==   OUTSIDE) sout++;
                else if(v ==  mside) sme++;
                else if(v == -mside) sother++;
                p1.x += stx[k];
                p1.y += sty[k];
            }
            for (short jj = 0; jj<=4; jj++) {
                if (sout == 0) {
                    for (int i=0; i<5; i++) {
                        int xx = p0.x + i * stx[k];
                        int yy = p0.y + i * sty[k];
                        if (sother==0) {
                            cellSeq[yy][xx].seq[mySide][sme] -= diff;
                            cellSeq[yy][xx].seq[mySide][sme+1] += diff;
                            if (cellSeq[yy][xx].seq[mySide][sme] < 0 || cellSeq[yy][xx].seq[mySide][sme+1] < 0) {
                                throw new IllegalStateException("Illegal negative number of set sequences");
                            }
                        }
                        if (sme==0) {
                            cellSeq[yy][xx].seq[otherSide][sother] -= diff;
                            if (cellSeq[yy][xx].seq[otherSide][sother] < 0 || cellSeq[yy][xx].seq[otherSide][sother+1] < 0) {
                                throw new IllegalStateException("Illegal negative number of set sequences");
                            }
                        }
                        
                    }
                }
                // recounting sum, first substracting p0
                int v = value(p0);
                if     (v ==   OUTSIDE) sout--;
                else if(v ==  mside) sme--;
                else if(v == -mside) sother--;
                p0.x += stx[k];
                p0.y += sty[k];

                // now adding p1
                v = value(p1);
                if     (v ==   OUTSIDE) sout++;
                else if(v ==  side) sme++;
                else if(v == -side) sother++;
                p1.x += stx[k];
                p1.y += sty[k];
            } // next jj
            
            // updating cellseq weights
            p0 = new RPoint(p.x - 4*stx[k], p.y - 4*sty[k]);
            p1 = new RPoint(p0.x, p0.y);
            for (short i = 0; i<9; i++) {
                if (value(p1) != OUTSIDE) {
                    cellSeq[p1.y][p1.x].updateWeight();
                }
                p1.x += stx[k];
                p1.y += sty[k];
            } // next i
        } // next k
    }

    /**
     * draw character map for printing on screen.
     */
    @Override
    public String toDesk() {
        prepareMap();
        StringBuilder sb = new StringBuilder();
        sb.append("\r\n");
        for (int j=0; j<GAME_SIZE; j++) {
            sb.append(String.format("%2d", j));
        }
        sb.append("\r\n");
        for (int i=0; i<GAME_SIZE; i++) {
            sb.append((char)('A' + (GAME_SIZE-1-i)) + ": ");
            for (int j=0; j<GAME_SIZE; j++) {
                int v = fld[i][j];
                String s= (v == 1 ? "X" : (v == -1 ? "0" : "."));
                sb.append(s).append(" ");
            }
            sb.append("\r\n");
        }
        return sb.toString();
    }

    @Override
    public String toString() {
        return "Rendzu Position side, moves = [" + side + " " + moves.size() + "]";
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        RendzuPosition p = new RendzuPosition(this.side);
        p.copy(this);
        return p;        
    }

    @Override
    public Object getKey() {
        RendzuPackedPosition rpp = new RendzuPackedPosition(this);
        return rpp;
    }

    /**
     * we spend less level of forced moves.
     */
    public double getLevelDelta() {
        double delta = 1.0;
        for (int d=0; d<2; d++) {
            if (nseq[d][3] >= 2 && delta > 0.5) {
                delta = 0.3;                
            } 
            if (nseq[d][4] >= 1) {
                delta = 0.15;
            }
        }
        return delta;
    }     

    /** 
     * evaluating quality of move with given side 
     */
    double moveQ(RPoint p, short side) {
        if (value(p) != 0) {
            throw new IllegalStateException("Estimation of occupied cell");
        }
        double q = cellSeq[p.y][p.x].weight(side);
        
        return q;
    }
    /**
     * generate possible moves for given position.
     */
    List<RendzuMove> generateMoves() {
        if (cellSeq == null) {
            calcCellsSeqSets();
        }
        MyMovesQueue mq = new MyMovesQueue();
        double minQ = mq.minScore();
        double maxQ = mq.minScore();
        short moveSide = (short)-side;
        for (short i=0; i<sy; i++) {
            for (short j=0; j<sx; j++) {
                if ((byte)fld[i][j] == 0) {
                    RPoint p = new RPoint(j,i);
                    double q = cellSeq[i][j].weight(moveSide);
                    if (q>minQ && q > maxQ / 2) {
                        RendzuMove m = new RendzuMove(p.x, p.y, moveSide);
                        m.setScore(q);
                        mq.addMove(m);
                        minQ = mq.minScore();
                        maxQ = mq.maxScore();
                    }
                }
            }
        }
        return mq.movesList();
    }

    @Override
    public DebugPackedPos getDebugKey() {
        RendzuDebugPackedPos p = new RendzuDebugPackedPos(this);
        p.setPos(fld);
        p.setNSeq(nseq);
        return p;
    }

}
