package mis.android.game;

import mis.android.game.sysdep.Point;

import org.w3c.dom.Element;

/**
 * Class serving as foundation for house.
 * Containing grid of support points. 
 * Is drawn as color rectangle.
 * 
 * @author Misha
 */
public class RectFoundation extends MovableFigure {  
    
    protected float step = World.DEFAULT_STEP;
    /**
     * initialize support point
     */
    public void init(Element el) {
        canGrab = false;
        String sStep = el.getAttribute("supportstep");
        if (sStep.length() > 0) {
            step = Float.parseFloat(sStep);
        }
        float sx = getDraw().getSize().x;
        float sy = getDraw().getSize().y;
        int nx = Math.round(sx / step);
        int ny = Math.round(sy / step);
        float x0 = step/2;
        float y0 = step/2;
        float z0 = getDraw().getSize().z;
        for (int iy = 0; iy < ny; iy++) {
            for (int ix = 0; ix < nx; ix++) {
                float x = x0 + ix*step;
                float y = y0 + iy*step;
                Point p = new Point(x,y,z0);
                this.supTop.add(p);
            }
        }        
    }
}
