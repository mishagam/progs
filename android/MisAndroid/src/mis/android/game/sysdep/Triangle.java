package mis.android.game.sysdep;

/**
 * triangle for use in GL
 */
public class Triangle {
	public short a,b,c;
    
    public Triangle(short aa, short bb, short cc) {
        a=aa; b=bb; c=cc;
    }
    
    public Triangle(int aa, int bb, int cc) {
        a=(short)aa; 
        b=(short)bb; 
        c=(short)cc;
    }

}
