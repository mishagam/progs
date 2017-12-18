package mis.games.rendzgame;

/**
 * class for holding game parameters with minimal dependencies.
 */
public class RendzuParameters {

    /** Values of different sequences */
    public static double []qqq = new double[]{2,10,100,1000,10000,100000};
    public static final double qqqStep = 8;
    public static final int MAX_GAME_MOVES = 400;
    public static final double MAX_RENDZU_LEVEL = 5.0;
    /** preference of my sequences in comparison with enemies in move (before move)*/
    public static final double ME_PREF_M = 1.7;
    /** preference of my sequences in comparison with enemies in pos (after move) */
    public static final double ME_PREF_P = 1.0;
    /**  0, 1, 2, 3, 4, 5 */
    public static final  short MAX_SEQ = 6;
    /**
     * kinds values
     */
    public static final byte LAST_MOVE = 0x01;
    public static final byte LAST_MAN_MOVE = 0x02;
    
    /** static initialization of qqq - so it depends from 1 parameter */ 
    public static void initParameters() {
        qqq[0] = 1;
        for (int i=1; i<qqq.length; i++) {
            qqq[i] = qqqStep * qqq[i-1];
        }
        qqq[0] = 2;
    }

}
