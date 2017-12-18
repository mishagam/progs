package mis.android.game.sysdep;

import android.content.Context;

public class ColPoint extends ColFigure {
    /**
     * colors
     */
    public int colTop, colSide;
    
    /**
     * set default values
     */
    public ColPoint() {
        // set all colors to yellow, red blue default
        colTop =     0xFFFFFF00; // top white
        colSide =    0x00FF0000; // side red
        sz = new Point(5,5,0);
    }
    
    /**
     * generate point and colors and triangle
     */
    public void fillData(Context context) {
        // fill some fixed values
        int scale = 1<<16;
        int szx = sz.x * scale;
        int szy = sz.y * scale;
        int szz = sz.y * scale;
        
        pnts.add(new Point(0, 0, 0));
        pnts.add(new Point(szx, 0, 0));
        pnts.add(new Point(szx, szy, 0));
        pnts.add(new Point(0, szy, 0));

        // fill colors
        cols.add(colTop);
        cols.add(colTop);
        cols.add(colSide);
        cols.add(colSide);
        
        // fill triangles
        tris.add(new Triangle(0,3,2)); 
        tris.add(new Triangle(0,2,1));
    }
}
