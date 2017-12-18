package mis.games.rendzgame;

import java.util.ArrayList;

import mis.games.framework.DebugMove;
import mis.games.framework.DebugPackedPos;
import mis.games.framework.Position;
import mis.games.server.OneRGame;
import mis.games.utils.CommaList;

public class RendzuDebugPackedPos extends DebugPackedPos {
    static int nextIdIdx = 0;
    
    byte [][]pos = new byte[19][19];
    int [][]nseq = new int[2][6];

    public RendzuDebugPackedPos(CommaList list) {
        super(list);
        unpackOther(list);
    }
    
    public RendzuDebugPackedPos(Position p) {
        super(p);
        this.strKey = nextPosId();
        this.moves = new ArrayList<DebugMove>();     
        this.side = p.getSide();
    }
        
    private synchronized static String nextPosId() {
        return "RP" + nextIdIdx++;
    }
    
    public void unpackOther(CommaList cl) {
        posLisToBytes(cl.getList());
        seqListToInt(cl.getList());
    }
    
    public void packOther(CommaList cl) {
        cl.add(posByteToList());
        cl.add(seqIntToList());
    }
    
    public CommaList toList() {
        CommaList cl = super.toList();
        packOther(cl);
        return cl;
    }

    public final byte[][] getPos() {
        return pos;
    }
    public void setPos(byte [][]p) {
        int sy = p.length;
        int sx = p[0].length;
        for (int i=0; i<sy; i++) {
            for (int j=0; j<sx; j++) {
                pos[i][j] = p[i][j];
            }
        }
    }
    
    public void setNSeq(int [][]seq) {
        for (int i=0; i<2; i++) {
            for (int j=0; j<6; j++) {
                nseq[i][j] = seq[i][j];
            }
        }
    }
    
    public int[][] getNseq() {
        return nseq;
    }
    
    private CommaList seqIntToList() {
        CommaList cl = new CommaList();
        for (int i=0; i<2; i++) {
            CommaList clRow = new CommaList();
            for (int j=0; j<6; j++) {
                clRow.add(nseq[i][j]);
            }
            cl.add(clRow);
        }
        return cl;
    }
    
    private CommaList posByteToList() {
        CommaList cl = new CommaList();
        StringBuilder sb = new StringBuilder();
        for (int i=0; i<pos.length; i++) {
            sb.setLength(0);
            for (int j=0; j<pos[i].length; j++) {
                char c = posByteToChar(pos[i][j]);
                sb.append(c);
            }
            cl.add(sb.toString());
        }
        return cl;
    }
    
    private void posLisToBytes(CommaList cl) {
        for (int i=0; i<pos.length; i++) {
            String s = cl.getStr();
            for (int j=0; j<pos[i].length; j++) {
                byte b = posCharToByte(s.charAt(j));
                pos[i][j] = b;
            }
        }
    }
    
    private void seqListToInt(CommaList cl) {
        for (int i=0; i<2; i++) {
            CommaList clRow = cl.getList();
            for (int j=0; j<6; j++) {
                nseq[i][j] = clRow.getInt();
            }
        }
    }
    
    public static char posByteToChar(byte b) {
        char c = (b == 1 ? 'X' : (b == -1 ? '0' : '.'));
        return c;        
    }
    
    public static byte posCharToByte(char c) {
        int i = (c == 'X' ? 1 : (c == '.' ? 0 : -1));
        return (byte)i;        
    }
    
    
}
