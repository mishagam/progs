package mis.games.rendzu;

public class RPoint {
    public short x; /// x coordinate, column 0 - 18
    public short y; /// y coordinate, row 0 - 18
    public RPoint(short xx, short yy) {
        x=xx; 
        y=yy;
    }
    public RPoint(int xx, int yy) {
        x=(short)xx; 
        y=(short)yy;
    }
    public RPoint(short xy) {
        y = (short)(xy >> 8);
        x = (short)(xy & 0xFF);
    }
    public short pack() {
        return (short)((y<<8) + x);
    }
}
