package mis.android.game.sysdep;

import org.lwjgl.util.vector.Vector3f;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

/**
 * here goes geometric logic about boxes of figures.
 * 
 * @author TCSDEVELOPER
 */
public class Box {

    Point pos;
	Point sz;
	public static final int SCALE = (1 << 16);
	
	public Box() {
        pos = new Point(0,0,0);
        sz = new Point(0,0,0);
	}
    
    public Point getPos() {
        return pos;
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
            readXmlPoint(nPosL.item(0), pos);
        }
        // read size
        NodeList nSizeL = el.getElementsByTagName("size");
        if (nSizeL.getLength() > 0) {
            // have pos element
            readXmlPoint(nSizeL.item(0), sz);
        }
    }
	
	boolean intersect(Box b) {
		if (pos.x > b.pos.x + b.sz.x || pos.x + sz.x < b.pos.x) {
			return false;
		}
		if (pos.y > b.pos.y + b.sz.y || pos.y + sz.y < b.pos.y) {
			return false;
		}
		if (pos.z > b.pos.z + b.sz.z || pos.z + sz.z < b.pos.z) {
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
    public boolean intersect(Vector3f a, Vector3f b) {
        int z0 = pos.z + sz.z;
        int z1 = pos.z;
        int zm = (z0 + z1) / 2;
        return intersectZ(a,b,z0) || intersectZ(a,b,z1) || intersectZ(a,b,zm);   
    }
    
    /**
     * rough approximation of intersection with ray from a to b;
     * @param a
     * @param b
     * @return
     */
    public boolean intersectZ(Vector3f a, Vector3f b, int iz) {
        float z = iz/(float)SCALE;
        float xm = a.x + ((z-a.z)*(b.x - a.x)/(b.z-a.z));
        float ym = a.y + ((z-a.z)*(b.y - a.y)/(b.z-a.z));
        int ixm = (int)(xm*Box.SCALE);
        int iym = (int)(ym*Box.SCALE);
        // Log.d("Box", "intersect, xm, ym = " + xm + " " + ym);
        if (    pos.x < ixm && ixm <= pos.x + sz.x &&
                pos.y < iym && iym <= pos.y + sz.y) {
            return true;
        } 
        return false;       
    }
	
	public boolean contains(Point p) {
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
	public boolean above(Box b) {
        if (pos.x > b.pos.x + b.sz.x || pos.x + sz.x < b.pos.x) {
            return false;
        }
        if (pos.y > b.pos.y + b.sz.y || pos.y + sz.y < b.pos.y) {
            return false;
        }
        return true;
	}
    
    public void setPos(float x, float y, float z) {
        pos.x = (int)(x * SCALE);
        pos.y = (int)(y * SCALE);
        pos.z = (int)(z * SCALE);
    }
    
    public void setSize(float x, float y, float z) {
        sz.x = (int)(x * SCALE);
        sz.y = (int)(y * SCALE);
        sz.z = (int)(z * SCALE);
    }
    
    /**
     * copy from b.
     * 
     * @param b
     */
    public void copy(Box b) {
        pos.set(b.pos);
        sz.set(b.sz);       
    }

}
