package mis.babylon.game.graphics;

import mis.android.utils.Context;
import mis.android.utils.Log;
import mis.babylon.game.MisFigure;

/**
 * Drawing Logs using texture. Main point calculation in LogBuilderT
 * 
 * @author Misha
 */
public class MisLogT extends TexFigure {
    private static final String TAG = "MisLogT";
    
    public MisLogT(MisFigure mf) {
        super(mf);
    }
    
    /**
     * generate point and colors and triangle
     */
    public void fillData(Context context) {
        // fill some fixed values
        super.fillData(context);
        LogBuilderT lb = new LogBuilderT(this);
        lb.buildLog();
    }
    
    public void printState() {
        Log.d(TAG, "printState");
        for (int i=0; i<pnts.size(); i++) {
            Log.d(TAG, "pnt, tpnt = " + pnts.get(i).toString() + " ; " + texPoints.get(i).toString());
        }        
    }
}
