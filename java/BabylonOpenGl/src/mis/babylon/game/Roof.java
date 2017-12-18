package mis.babylon.game;

import mis.babylon.game.graphics.Point;

public class Roof extends MovableFigure {
    /**
     * initialize support point
     */
    public void init(World w) {
        float step = w.getStep();
        float sx = getDraw().getSize().x;
        float sy = getDraw().getSize().y;
        int nx = Math.round(sx / step);
        int dy = Math.round(sy / step);
        float x0 = step/2;
        float y0 = step/2;
        float z0 = 0;
        supBottom.clear();
        supTop.clear();
        for (float y=y0; y<=y0+dy; y+=dy ) {
            for (int ix = 0; ix < nx; ix++) {
                float x = x0 + ix*step;
                Point p = new Point(x,y,z0);
                this.supBottom.add(p);
            }   
        }
        super.init(w);
    }

}
