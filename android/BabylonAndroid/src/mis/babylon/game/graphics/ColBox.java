package mis.babylon.game.graphics;

import mis.android.utils.MisContext;
import mis.babylon.game.MisFigure;

import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class ColBox extends ColFigure {
    /**
     * colors
     */
    public int colTop, colBottom, colSide;
    
    /**
     * set default values
     */
    public ColBox(MisFigure mf) {
        super(mf);
        // set all colors to yellow, red blue default
        colTop =     0x00FFFF00; // top yellow
        colSide =    0x00FF0000; // side red
        colBottom  = 0x000000FF; // bottom blue
    }
    
    public void readXml(Element el) {
        super.readXml(el);
        // if possible read top, bottom side colors
        NodeList nl = el.getElementsByTagName("color");
        if (nl.getLength() < 1) {
            // no 
            return;
        }
        Element colEl = (Element)nl.item(0);
        String s = colEl.getAttribute("top");
        colTop = Integer.parseInt(s, 16);
        s = colEl.getAttribute("bottom");
        colBottom = Integer.parseInt(s, 16);
        s = colEl.getAttribute("side");
        colSide = Integer.parseInt(s, 16); 
    }
    
    /**
     * generate point and colors and triangle
     */
    public void fillData(MisContext context) {
        // fill some fixed values
        float scale = 1;
        float szx = sz.x * scale;
        float szy = sz.y * scale;
        float szz = sz.z * scale;
        
        pnts.add(new Point(0, 0, 0));
        pnts.add(new Point(szx, 0, 0));
        pnts.add(new Point(szx, szy, 0));
        pnts.add(new Point(0, szy, 0));
        pnts.add(new Point(0, 0, szz));
        pnts.add(new Point(szx, 0, szz));
        pnts.add(new Point(szx, szy, szz));
        pnts.add(new Point(0, szy, szz));

        // fill colors
        cols.add(colBottom);
        cols.add(colBottom);
        cols.add(colBottom);
        cols.add(colBottom);
        cols.add(colTop);
        cols.add(colTop);
        cols.add(colSide);
        cols.add(colSide);
        
        // fill triangles
        tris.add(new Triangle(4,7,6)); 
        tris.add(new Triangle(4,6,5));
        tris.add(new Triangle(0,1,2));
        tris.add(new Triangle(0,2,3));
        tris.add(new Triangle(0, 4, 5)); 
        tris.add(new Triangle(0, 5, 1));
        tris.add(new Triangle(1, 5, 6)); 
        tris.add(new Triangle(1, 6, 2));
        tris.add(new Triangle(2, 6, 7)); 
        tris.add(new Triangle(2, 7, 3));
        tris.add(new Triangle(3, 7, 4)); 
        tris.add(new Triangle(3, 4, 0));
    }
}
