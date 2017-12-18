package mis.babylon.game.graphics;

import mis.babylon.game.MisFigure;
import mis.babylon.utils.vector.MVector3f;

import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

/**
 * here goes geometric logic about boxes of figures.
 * 
 * @author TCSDEVELOPER
 */
public class Box {

	Point sz;
	MisFigure fig = null;
	
	/** we don't need scale for openGl */
	public static final float SCALE = 1; // (1 << 16);
	
	public Box(MisFigure mf) {
	    this.fig = mf;
        sz = new Point(0,0,0);
	}
    public Point getSize() {
        return sz;
    }

    public void readXmlPoint(Node pNode, Point p) {
        Element elP = (Element)(pNode);
        String ss = elP.getAttribute("x");
        float f = Float.parseFloat(ss);
        p.x = (int)f*SCALE;
        ss = elP.getAttribute("y");
        f = Float.parseFloat(ss);
        p.y = (int)f*SCALE;
        ss = elP.getAttribute("z");
        f = Float.parseFloat(ss);
        p.z = (int)f*SCALE;
    }
    
    
    /**
     * reading pos and size from XML element.
     * 
     * @param node - XmlNode from which we read configuration
     */
    public void readXml(Element el) {
        // read pos
        NodeList nPosL = el.getElementsByTagName("pos");
        if (nPosL.getLength() > 0) {
            // have pos element
            readXmlPoint(nPosL.item(0), fig.getPos());
        }
        // read size
        NodeList nSizeL = el.getElementsByTagName("size");
        if (nSizeL.getLength() > 0) {
            // have pos element
            readXmlPoint(nSizeL.item(0), sz);
        }
    }
	
	boolean intersect(Box b) {
        Point pos = fig.getPos();
        Point bpos = b.fig.getPos();
		if (pos.x > bpos.x + b.sz.x || pos.x + sz.x < bpos.x) {
			return false;
		}
		if (pos.y > bpos.y + b.sz.y || pos.y + sz.y < bpos.y) {
			return false;
		}
		if (pos.z > bpos.z + b.sz.z || pos.z + sz.z < bpos.z) {
			return false;
		}
		return true;
	}
    
    /**
     * rough approximation of intersection with ray from a to b;
     * @param a
     * @param b
     * @return
     */
    public boolean intersect(MVector3f a, MVector3f b) {
        Point pos = fig.getPos();
        float z0 = pos.z + sz.z;
        float z1 = pos.z;
        float x0 = pos.x + sz.x;
        float x1 = pos.x;
        float y0 = pos.y + sz.y;
        float y1 = pos.y;
        float zm = (z0 + z1) / 2;
        boolean bret = intersectZ(a,b,z0);
        bret |= intersectZ(a,b,z1);
        bret |= intersectZ(a,b,zm);
        bret |= intersectX(a,b,x0);
        bret |= intersectX(a,b,x1);
        bret |= intersectY(a,b,y0);
        bret |= intersectY(a,b,y1);
        
        return bret;
    }
    
    /**
     * rough approximation of intersection with ray from a to b;
     * @param a
     * @param b
     * @return
     */
    public boolean intersectZ(MVector3f a, MVector3f b, float z) {
        Point pos = fig.getPos();
        float xm = a.x + ((z-a.z)*(b.x - a.x)/(b.z-a.z));
        float ym = a.y + ((z-a.z)*(b.y - a.y)/(b.z-a.z));
        //int ixm = (int)(xm*Box.SCALE);
        //int iym = (int)(ym*Box.SCALE);
        // Log.d("Box", "intersect, xm, ym = " + xm + " " + ym);
        if (    pos.x < xm && xm <= pos.x + sz.x &&
                pos.y < ym && ym <= pos.y + sz.y) {
            return true;
        } 
        return false;       
    }
    
    /**
     * rough approximation of intersection with ray from a to b;
     * @param a
     * @param b
     * @return
     */
    public boolean intersectX(MVector3f a, MVector3f b, float x) {
        if (Math.abs(a.x - b.x) < 0.5) {
            return false;
        }
        Point pos = fig.getPos();
        float ym = a.y + ((x-a.x)*(b.y - a.y)/(b.x-a.x));
        float zm = a.z + ((x-a.x)*(b.z - a.z)/(b.x-a.x));

        if (    pos.y < ym && ym <= pos.y + sz.y &&
                pos.z < zm && zm <= pos.z + sz.z) {
            return true;
        } 
        return false;       
    }
    
    /**
     * rough approximation of intersection with ray from a to b;
     * @param a
     * @param b
     * @return
     */
    public boolean intersectY(MVector3f a, MVector3f b, float y) {
        if (Math.abs(a.y - b.y) < 0.5) {
            return false;
        }
        Point pos = fig.getPos();
        float xm = a.x + ((y-a.y)*(b.x - a.x)/(b.y-a.y));
        float zm = a.z + ((y-a.y)*(b.z - a.z)/(b.y-a.y));

        if (    pos.x < xm && xm <= pos.x + sz.x &&
                pos.z < zm && zm <= pos.z + sz.z) {
            return true;
        } 
        return false;       
    }
	
	public boolean contains(Point p) {
        Point pos = fig.getPos();
		if (pos.x > p.x || pos.x + sz.x < p.x) {
			return false;
		}
		if (pos.y > p.y || pos.y + sz.y < p.y) {
			return false;
		}
		if (pos.z > p.z || pos.z + sz.z < p.z) {
			return false;
		}
		return true;
	}
	
	public boolean contains(float x, float y) {
        Point pos = fig.getPos();
	    int fx = (int)(x * SCALE);
	    int fy = (int)(y * SCALE);
        if (fx < pos.x || pos.x + sz.x < fx) {
            return false;
        }
        if (fy < pos.y || pos.y + sz.y < fy) {
            return false;
        }
        return true;
	}
	
	/**
	 * b is above this, so intersects in x y with ignored z
	 * @param b
	 * @return
	 */
	public boolean intersectXY(Box b) {
        Point pos = fig.getPos();
        Point bpos = b.fig.getPos();
        if (pos.x > bpos.x + b.sz.x || pos.x + sz.x < bpos.x) {
            return false;
        }
        if (pos.y > bpos.y + b.sz.y || pos.y + sz.y < bpos.y) {
            return false;
        }
        return true;
	}
    
    public void setSize(float x, float y, float z) {
        sz.x = x; // (int)(x * SCALE);
        sz.y = y; // (int)(y * SCALE);
        sz.z = z; // (int)(z * SCALE);
    }
    
    /**
     * copy from b.
     * 
     * @param b
     */
    public void copy(Box b) {
        sz.set(b.sz);       
    }
    
    public void setPos(float x, float y, float z) {
        fig.getPos().set(x,y,z);
    }
}
