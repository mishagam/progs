package mis.games.rendzu;

import mis.games.server.OneRGame;

/**
 *
 * @author Misha
 */
public class RMove {
        public int side;
        public int x;
        public int y;

        public RMove() {
            side = x = y = 0;
        }
        
        public RMove(int x, int y, int side) {
            this.x=x;
            this.y=y;
            this.side=side;
        }

        public RMove(String s) {
            char cs = s.charAt(0);
            char cy = s.charAt(1);
            char cx = s.charAt(2);
        side = (cs == 'M' ? OneRGame.MAN_SIDE : -OneRGame.MAN_SIDE);
            y = cy - 'A';
            x = cx - 'a';
        }

    @Override
        public String toString() {
            char cy = (char)('A' + y);
            char cx = (char)('a' + x);
        char cs = (side == OneRGame.MAN_SIDE ? 'M' : 'C');
        return "" + cs + cy + cx;
    }

    public String getReportString() {
        char cs = OneRGame.moveSideToChar(side);
        char cy = (char) ('A' + (18-y));
        String sx = "" + x;
        return "" + cs + "_" + cy + sx;
        }

    @Override
    public boolean equals(Object obj) {
        if (obj == null || !(obj instanceof RMove)) {
            return false;
        }
        RMove b = (RMove)obj;
        return (b.x==x && b.y==y && b.side==side);
    }

    @Override
    public int hashCode() {
        return (x << 10 | y << 5 | (side & 7));
    }
}
