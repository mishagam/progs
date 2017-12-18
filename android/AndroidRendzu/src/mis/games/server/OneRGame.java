/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package mis.games.server;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import mis.games.rendzu.RGame;
import mis.games.rendzu.RMove;

/**
 *
 * @author Misha
 */
public class OneRGame {

    public static final int MAN_SIDE = -1;

    int SIZE = 19;
    int sx, sy;
    String id;
    int side;
    byte [][]fld;
    byte [][]fldTypes = new byte[SIZE][SIZE];
    List<RMove> moves;
    String startTime;
    public boolean compFirst = false;

    public OneRGame(String id, int side) {
        this.id = id;
        fld = new byte[SIZE][SIZE];
        moves = new ArrayList<RMove>();
        sy = SIZE;
        sx = SIZE;
        this.side = side;
        SimpleDateFormat sdf = new SimpleDateFormat("MMM_dd_hh:mm:ss");
        startTime = sdf.format(new Date());
    }

    public String getPosString() {
        return posBytesToString(fld);
    }
    
    public static String posBytesToString(byte[][]b) {
        char []cc = {'0', '.', 'X'};
        StringBuilder sb = new StringBuilder();
        int sy = b.length;
        int sx = b[0].length;
        for (int i=0; i<sy; i++) {
            for (int j=0; j<sx; j++) {
                char c = cc[b[i][j] + 1];
                sb.append(c);
            }
            sb.append("_");
        }
        return sb.toString();
    }

    public List<String> getPosListStrings() {
        List<String> posl = new ArrayList<String>();
        for (int i=0; i<sy; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j=0; j<sx; j++) {
                char c = moveChar(fld[i][j]);
                sb.append(c).append(' ');
            }
            posl.add(sb.toString());
        }
        return posl;
    }

    public String getMovesString() {
        char []cc = {'0', '.', 'X'};
        StringBuilder sb = new StringBuilder();
        for (RMove m : moves) {
            sb.append("_");
        }
        return sb.toString();
    }

    public RMove getLastMove() {
        RMove move = null;
        if (moves.size() >= 1) {
            move = moves.get(moves.size() - 1);
        }
        return move;
    }

    public RMove getPrevMove() {
        RMove move = null;
        if (moves.size() >= 2) {
            move = moves.get(moves.size() - 2);
        }
        return move;
    }

    public void parsePosition(String sPos) {
        posStringToBytes(sPos, fld);
    }
    
    public static void posStringToBytes(String sPos, byte[][]b) {
        String []lines = sPos.split("_");
        int sy = b.length;
        int sx = b[0].length;
        for (int i=0; i<sy; i++) {
            for (int j=0; j<sx; j++) {
                char c = lines[i].charAt(j);
                int v;
                if (c == '.') {
                    v = 0;
                } else if (c == 'X') {
                    v = 1;
                } else if (c == '0') {
                    v = -1;
                } else {
                    throw new IllegalArgumentException("Illegal position");
                }
                b[i][j] = (byte)v;
            }
        }
    }

    public void apply(RMove m) {
        if (fld[m.y][m.x] != 0) {
            throw new IllegalStateException("illegal move - tried use nonempty field x,y = "
                    + m.x + " " + m.y);
        }
        if ((this.side * m.side) > 0) {
            throw new IllegalStateException("illegal move - illegal side " + m.side);
        }
        fld[m.y][m.x] = (byte)m.side;
        if (moves.isEmpty()) {
            // first move, determine who first
            if (m.side == MAN_SIDE) {
                compFirst = false;
            } else {
                compFirst = true;
            }
        }
        moves.add(m);
        side = m.side;
    }

    public void reverse(RMove m) {
        if (moves.isEmpty()) {
            throw new IllegalStateException("No moves to reverse");
        } 
        if (m == null) {
            m = moves.get(moves.size() -1);
        } else {
            if (fld[m.y][m.x] != m.side) {
                throw new IllegalStateException("illegal reverse move - incorrect field value");
            }
            if (this.side != m.side) {
                throw new IllegalStateException("illegal move - illegal side " + m.side);
            }
        }
        fld[m.y][m.x] = 0;
        moves.remove(m);
        side = -m.side;
    }

    public char moveChar(int side) {
        if (compFirst) {
            side = -side;
        }
        char c = moveSideToChar(side);
        return c;
    }
    
    public static char moveSideToChar(int side) {
        char []cc = new char[]{'0', '.', 'X'};
        char c = cc[side + 1];
        return c;
    }
    
    public long getHash() {
        return getHash(fld);
    }

    public static long getHash(byte [][]f) {
        long hash = 9631;
        for (int i=0; i<f.length; i++) {
            for (int j=0; j<f[0].length; j++) {
                hash = hash * 31 + f[i][j];
            }
        }
        return hash;
    }

    public void printGameReport(PrintWriter out) {
        out.print("pos=");
        out.println(this.getPosString());
        out.print("moves=");
        out.println(this.getMovesString());
        out.println("hash=" + getHash());
        out.println("side=" + this.side);
        out.println("game_id=" + this.id);
    }

    public void updateGame(String sPos, String sMoves, String sSide) {
        // XXX
    }

    public int getSide() {
        return side;
    }

    public void setSide(int side) {
        this.side = side;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }
    
    public int getNumberMoves() {
        return moves.size();
    }

    public int getSx() {
        return sx;
    }

    public void setSx(int sx) {
        this.sx = sx;
    }

    public int getSy() {
        return sy;
    }

    public void setSy(int sy) {
        this.sy = sy;
    }

    public List<RMove> getMoves() {
        return moves;
    }

    public void setMoves(List<RMove> moves) {
        this.moves = moves;
    }

    public byte[][] getFld() {
        return fld;
    }

    public void setFld(byte[][] fld) {
        for (int i=0; i<SIZE; i++) {
            for (int j=0; j<SIZE; j++) {
                this.fld[i][j] = fld[i][j];
            }
        }
    }

    public byte[][] getFldTypes() {
        return fldTypes;
    }

    public void setFldTypes(byte[][] fldTypes) {
        this.fldTypes = fldTypes;
    }
}
