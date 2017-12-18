package mis.babylon.game;

import mis.babylon.game.graphics.Point;

/**
 * brick to build houses
 * 
 * @author Misha
 *
 */
public class Brick extends MovableFigure {
    /**
     * initialize support point
     */
    public void init(World w) {
        float step = w.getStep();
        float sx = getDraw().getSize().x;
        float sy = getDraw().getSize().y;
        int nx = Math.round(sx / step);
        float x0 = step/2;
        float y0 = step/2;
        float z0 = 0;
        float z1 = getDraw().getSize().z;
        supBottom.clear();
        supTop.clear();
        for (int ix = 0; ix < nx; ix++) {
            float x = x0 + ix*step;
            float y = y0;
            Point p = new Point(x,y,z0);
            this.supBottom.add(p);
            p = new Point(x,y,z1);
            this.supTop.add(p);
        }    
        super.init(w);
    }

}
