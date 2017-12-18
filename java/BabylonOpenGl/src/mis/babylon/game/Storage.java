package mis.babylon.game;

import org.w3c.dom.Element;

import mis.babylon.game.graphics.Point;

/**
 * class for holding bricks and logs before putting them in house.
 * @author TCSDEVELOPER
 *
 */
public class Storage extends RectFoundation {
    
    public void turnContent() {
        if (children.size() > 0) {
            MovableFigure ch = children.iterator().next();
            ch.turn();
        }
    }
    
    public void initXml(Element el) {
        super.initXml(el);
        canGrab = false;        
    }

}
