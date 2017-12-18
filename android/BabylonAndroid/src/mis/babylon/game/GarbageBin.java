package mis.babylon.game;

import org.w3c.dom.Element;

/**
 * class for holding bricks and logs before putting them in house.
 * @author TCSDEVELOPER
 *
 */
public class GarbageBin extends RectFoundation {
    
    public void initXml(Element el) {
        super.initXml(el);
        canGrab = false;        
    }

}
