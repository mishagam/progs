package mis.android.game;

import mis.android.game.sysdep.Point;

/**
 * class for holding bricks and logs before putting them in house.
 * @author TCSDEVELOPER
 *
 */
public class Storage extends RectFoundation {
    
    public void place(MovableFigure mf) {
        Point pl = this.getDraw().getPos();
        pl.translate(step, step, 0);
        mf.getDraw().getPos().set(pl);
        mf.supports.add(this);
        children.add(mf);
    }
    
    public void turnContent() {
        if (children.size() > 0) {
            MovableFigure ch = children.iterator().next();
            ch.turn();
        }
    }
    
    public void init() {
        super.init();
        canGrab = false;        
    }
}
