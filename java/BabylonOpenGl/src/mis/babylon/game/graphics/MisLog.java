package mis.babylon.game.graphics;

import java.util.ArrayList;
import java.util.List;

import mis.android.utils.Context;
import mis.babylon.game.MisFigure;

public class MisLog extends ColFigure {
    
    public MisLog(MisFigure mf) {
        super(mf);
    }
    
    /**
     * generate point and colors and triangle
     */
    public void fillData(Context context) {
        // fill some fixed values
        super.fillData(context);
        LogBuilder lb = new LogBuilder(this);
        lb.buildLog();
    }
}
