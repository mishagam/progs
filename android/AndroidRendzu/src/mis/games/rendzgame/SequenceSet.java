package mis.games.rendzgame;

import static mis.games.framework.GenericGame.MAX_SIDE;
import static mis.games.rendzgame.RendzuParameters.qqq;

/**
 * sequence numbers for on cell.
 * 
 * @author Misha
 */
public class SequenceSet {
    /**
     * numbers for side, direction, quantity
     */
    byte [][]seq = new byte[MAX_SIDE][RendzuParameters.MAX_SEQ];
    double []ww = new double[2];
    
    double weight(int side) {
        int iside = (side == 1 ? 1 : 0);
        int eside = 1-iside;
        return ww[iside] + ww[eside] / RendzuParameters.ME_PREF_M;
    }
    
    public void updateWeight() {
        for (int k=0; k<2; k++) {
            ww[k] = 0;
        for (int ln=0; ln<RendzuParameters.MAX_SEQ; ln++) {
                ww[k] += seq[k][ln] * qqq[ln];
            }
        }
    }
    
    void clear() {
        for (int s=0; s<MAX_SIDE; s++) {
            for (int ln=0; ln<RendzuParameters.MAX_SEQ; ln++) {
                seq[s][ln] = 0;
            }
        }
    }
}
