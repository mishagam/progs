package mis.babylon.game;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import mis.android.utils.MisContext;
import mis.android.utils.Log;
import mis.babylon.game.graphics.ColBox;
import mis.babylon.game.graphics.MisDrawable;
import mis.babylon.game.graphics.MisLog;
import mis.babylon.game.graphics.Point;
import mis.babylon.game.graphics.TexFigure;
import mis.babylon.opengl.sysdep.MisGL11;
import mis.babylon.opengl.sysdep.MisGlUtils;
import mis.babylon.utils.vector.MVector3f;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class World {
    private static String TAG = World.class.getSimpleName();
    static final float ZEPS = 1.0f;  // same top level
    public static final int DEFAULT_STEP = 20; 
    static final float MIN_DIST = DEFAULT_STEP * 0.8f;  // so we cannot put in wrong supp point
    static final float EPS = 0.001f;
    
    List<MisFigure> allfigures = new ArrayList<MisFigure>();
    List<MovableFigure> figures = new ArrayList<MovableFigure>();
	MisGame game = null;
	
    Storage storage = null;
    RectFoundation foundation = null;
	Roof roof = null;
	GarbageBin garbage = null;
	
	WoodLog wlog = null;
	Map<String, MovableFigure> catalog = new HashMap<String, MovableFigure>();
	MisContext myContext;
	public int SZX = 1000;
	public int SZY = 1000;
	public int X0 = -500;
	public int Y0 = -500;
	int nx;
	int ny;
	int step;
	Cell [][]cells = null;
	private int storageTurnsCount = 0;
	
	public World(MisGame game) {
	    this.game = game;
	    step = DEFAULT_STEP;
	}
	
	public void initCells() {
	    nx = SZX / step;
	    ny = SZY / step;
	    cells = new Cell[ny][nx];
	    for (int y=0; y<ny; y++) {
	        for (int x=0; x<nx; x++) {
	            Cell c = new Cell();
	            c.x = X0 + step*x;
	            c.y = Y0 + step*y;
	            c.z = -1;
	            c.f = null;
	            cells[y][x] = c; 
	        }
	    } 
	    updateCells();
	}
	
	public void updateCells() {
	    for (MovableFigure mf : figures) {
	        updateFigureCells(mf);
	    }
	    // printCells();
	}
	
	public void printCells() {
	    System.out.println("Cells:");
	    for (int i=0; i<cells.length; i++) {
	        for (int j=0; j<cells[0].length; j++) {
	            System.out.printf(" %2d", cells[i][j].z);	            
	        }
	        System.out.println();
	    }
	}
	
	private void updateFigureCells(MovableFigure mf) {
	    if (!mf.isSupported()) {
	        return;
	    }
        float fx = mf.getPos().x;
        float fy = mf.getPos().y;
        float fz = mf.getPos().z;
	    for (Point p : mf.supTop) {
            int ix = Math.round((p.x + fx - X0) / step);
            int iy = Math.round((p.y + fy - Y0) / step);
            float z = (p.z + fz);
	        cells[iy][ix].z = (int)Math.ceil(z + 0.00001);
            cells[iy][ix].f = mf;
            cells[iy][ix].cellType = Math.round(z*32) % 32;
	    }
	}
    /**
     * Read world configuration from XML file.
     * Using DOM parser.
     * 
     * @param fileName
     */
    public void readWorld(MisContext context, String fileName)  {
        // read raw resource. For now assume fileNaqme = "world"
        this.myContext = context;
        InputStream is = null;
        try {
            is = MisGlUtils.streamFromRes(context, fileName);
            readWorldFromStream(is);
            is.close();
        } catch (IOException ioe) {
            Log.e("World", "Reading world failed: " + ioe);
        } catch (ParserConfigurationException e) {
            Log.e("World", "Reading world failed: " + e);
        } catch (SAXException e) {
            Log.e("World", "Reading world failed: " + e);
        } 
    }
    
    /**
     * Read world configuration from XML file.
     * Using DOM parser.
     * 
     * @param fileName
     */
    public void readWorldFromFile(MisContext context, String fileName)  {
        // read raw resource. For now assume fileNaqme = "world"
        this.myContext = context;
        InputStream is = null;
        try {
            if (MisGlUtils.ANDROID) {
                // is = openInputStream(fileName);
            } else {
                is = new FileInputStream("data/" + fileName);              
            }
            readWorldFromStream(is);
            is.close();
        } catch (IOException ioe) {
            Log.e("World", "Reading world failed: " + ioe);
        } catch (ParserConfigurationException e) {
            Log.e("World", "Reading world failed: " + e);
        } catch (SAXException e) {
            Log.e("World", "Reading world failed: " + e);
        } 
    }
    
    /**
     * Read world configuration from XML file.
     * Using DOM parser.
     * 
     * @param fileName
     */
    public void writeWorldToFile(MisContext context, String fileName)  {
        // read raw resource. For now assume fileNaqme = "world"
        this.myContext = context;
        OutputStream os = null;
        try {
            if (MisGlUtils.ANDROID) {
                // os = openOutputStream(fileName, 0);
            } else {
                os = new FileOutputStream("data/" + fileName);   
            }                       
            PrintWriter writer = new PrintWriter(os);
            writer.printf("<world anglex=\"%d\" anglez=\"%d\" >\n", 
                    (int)game.mAngleX, (int)game.mAngleZ);
            for (MisFigure mf : figures) {
                writer.printf("<misFig name=\"%s\" type=\"%s\" \n" , mf.name, mf.type);
                MisDrawable md = mf.getDraw();
                if (md instanceof TexFigure) {
                    writer.printf(" texfilename=\"%s\" ", ((TexFigure)md).textureFileName);                    
                }
                if (mf instanceof MovableFigure) {
                    MovableFigure mvf = (MovableFigure)mf;
                    String supStr = "";
                    for (MovableFigure f : mvf.supports) {
                        if (supStr.length() > 0) {
                            supStr += ",";
                        }
                        supStr += f.name;
                    }
                    writer.printf(" support=\"%s\" ", supStr); 
                }
                if (md instanceof MisLog) {
                    // writing conf atribute
                    MisLog ml = (MisLog)md;
                    // XXX writer.printf(" conf=\"%s\" turns=\"%d\"\n", ml.sconf, ml.turnsCount);
                } 
                writer.printf(" >\n");
                Point pos = mf.getPos();
                writer.printf("<pos x=\"%f\" y=\"%f\" z=\"%f\" />\n" , 
                        pos.x, pos.y, pos.z);
                writer.printf("<size x=\"%f\" y=\"%f\" z=\"%f\" />\n" , 
                        md.getSize().x, md.getSize().y, md.getSize().z);                
                if (md instanceof ColBox) {
                    // print size
                    ColBox cb = (ColBox)md;
                    writer.printf("<color top=\"%x\" side=\"%x\" bottom=\"%x\" />\n" , 
                            cb.colTop,
                            cb.colSide,
                            cb.colBottom);

                } else if (mf instanceof MisFigure) {
                    MisFigure mfi = (MisFigure)mf;
                    // nothing new for now
                }
                writer.println("</misFig>\n");
            }
            writer.println("</world>"); 
            writer.close();
            os.close();
            Log.i(TAG, "World File " + fileName + " written OK");
        } catch (IOException ioe) {
            Log.e("World", "Reading world failed: " + ioe);
        }
    }
	
	void readWorldFromStream(InputStream is) 
            throws ParserConfigurationException, SAXException, IOException {
        DocumentBuilderFactory fact = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = fact.newDocumentBuilder();
        Document doc = builder.parse(is);
        Element wel = (Element)doc.getElementsByTagName("world").item(0);
        String sAngleX = wel.getAttribute("anglex");
        if (sAngleX != null && sAngleX.length() > 0) {
            game.mAngleX = Float.parseFloat(sAngleX);
        }
        String sAngleZ = wel.getAttribute("anglez");
        if (sAngleX != null && sAngleZ.length() > 0) {
            game.mAngleZ = Float.parseFloat(sAngleZ);
        }
        
        NodeList nl = doc.getElementsByTagName("misFig");
        for (int i=0; i<nl.getLength(); i++) {
            Element el = (Element)nl.item(i);
            String fType = el.getAttribute("type");
            String sShow = el.getAttribute("show");
            String fName = el.getAttribute("name");
            // selecting type of figure based on type and reading figures
            MisFigure mf = MisFigure.generateFigure(fType);
            if (mf == null) {
                Log.e(TAG, "*** Cannot generate figure of type: " + fType);
                continue;
            }
            mf.name = fName;
            if (sShow.equals("no")) {
                mf.show = false;            
            }
            if (fType.equals("storage")) {
                this.storage = (Storage)mf;
            } else if (fType.equals("foundation")) {
                this.foundation = (RectFoundation)mf;
            } else if (fType.equals("roof")) {
                this.roof = (Roof)mf;
            } else if (fType.equals("garbage")) {
                this.garbage = (GarbageBin)mf;
            } else if (fType.startsWith("brick") || fType.startsWith("stand") || fType.startsWith("log")) {
                catalog.put(fType, (MovableFigure)mf);                  
            }
            mf.getDraw().readXml(el);
            mf.getDraw().fillData(myContext);
            mf.initXml(el);
            if (mf instanceof MovableFigure) {
                ((MovableFigure)mf).init(this);
            }
            allfigures.add(mf);
            if (mf instanceof MovableFigure) {
                figures.add((MovableFigure)mf);
            }
        }
        initCells();
        Log.i(TAG, "we read " + nl.getLength() + " entried from world.xml");            
	}
    
    public synchronized void draw(MisGL11 gl) {
        for (MisFigure mf : allfigures) {
            try {
                mf.draw(gl);
            } catch (RuntimeException e) {
                Log.e(TAG, "Failed to draw figure with name: " + mf.name);
                throw e;
            }
        }
    }
	
	public MisFigure findFigure(MVector3f a, MVector3f b, boolean needGrab) {
	    float maxZ = -1;
	    MisFigure selFig = null;
	    for (MovableFigure mf : figures) {
	        if (!mf.show) {
	            continue;
	        }
            MisDrawable md = mf.getDraw();
            if (md.intersect(a, b) && 
                    ((mf.canGrab &&  mf.children.isEmpty()) || !needGrab)) {
                float fz = mf.getPos().z + md.getSize().z;
                if (fz > maxZ) {
                    maxZ = fz;
                    selFig = mf;
                }
            }	            
	    }
	    return selFig;
	}
	
	public void turnStorage() {
	    if (storage != null) {
	        storage.turnContent();
	        storageTurnsCount = (storageTurnsCount + 1) % 4;
	    }
	}
	
	public float place(MovableFigure mf) {
        float posx = mf.getPos().x;
        float posy = mf.getPos().y;
	    int nSup = 0;
	    Point shift = new Point();
	    float maxZ = -1f;
        List<MovableFigure> selFigs = new ArrayList<MovableFigure>();
        boolean aceptable = true;
        
	    for (Point p : mf.supBottom) {
	        float px = p.x + posx;
	        float py = p.y + posy;
	        float pz = p.z;
            int ix = Math.round((px - X0) / step);
            int iy = Math.round((py - Y0) / step);
            int suppType = Math.round(pz*32) % 32;
            Cell c = cells[iy][ix];
            float z = c.z - pz;
            if (z <= maxZ - ZEPS) {
                continue;
            } else  if ((suppType & 16) != 0) {
                if (!mf.isAceptableSupport(c)) {
                    aceptable = false;                
                }
                continue;
            } else if (!mf.isAceptableSupport(c)) {
                aceptable = false;                
            } else  if (z > maxZ + ZEPS) {
                if (c.f == null) {
                    throw new IllegalStateException("Figure iz zero for cell with z = " + z);
                }
                selFigs.clear();
                nSup = 1;
                maxZ = z;
                shift.x = (X0 + ix*step) - px;  // shift from point current pos to posiible grade pos
                shift.y = (Y0 + iy*step) - py;
                selFigs.add(c.f);
                aceptable = true;                
            } else if (c.f != null && z > maxZ - ZEPS) {
                nSup++;
                selFigs.add(c.f);
            } 
	    }
	    if (!aceptable) {
	        return -100;
	    }
	    if (nSup > 1 || mf.supBottom.size() == 1) {
	        if (selFigs.contains(garbage)) {
	            deleteFigure(mf);
	            return 0;
	        }
            for (MovableFigure b : selFigs) {
                mf.addSupport(b);
            }
	        Point newPos = new Point(posx + shift.x, posy + shift.y, maxZ);
	        mf.getPos().set(newPos);
	        updateCells();
	        return maxZ;
	    } else {
	        return -100;
	    }	    
	}
	
	public synchronized void raise(MovableFigure mf) {	
	    boolean needCopy = storage.children.contains(mf);
        mf.removeSupports();
        updateCells();
        if (needCopy) {
            // leave copy if raising brick from storage
            if (mf.type.startsWith("brick") || mf.type.startsWith("log")) {
                onSelectFigure(mf.type, storageTurnsCount);          
            } else {
                onSelectStandard(mf.type);
            }
        }
	}
    
    public void onSelectFigure(String type) {
        onSelectFigure(type, 0);
    }
    
    public synchronized void onSelectFigure(String type, int tcnt) {
        this.storageTurnsCount = tcnt;
        clearStorage();
        float step = getStep();
        MovableFigure brick = (MovableFigure)catalog.get(type);
        if (brick == null) {
            Log.e(TAG, "*** Have no brick in catalog");
        }
        MovableFigure bCopy = (MovableFigure)MisFigure.generateFigure(type);
        bCopy.copy(brick);
        bCopy.getDraw().fillData(myContext);
        bCopy.init(this);
        Point pos = bCopy.getPos();
        Point pStor = storage.getPos();
        pos.x = pStor.x + step;
        pos.y = pStor.y + step;
        pos.z = pStor.z + storage.getDraw().getSize().z;
        bCopy.addSupport(storage);
        for (int i=0; i<storageTurnsCount; i++) {
            bCopy.turn();
        }
        figures.add(bCopy);
        allfigures.add(bCopy);
    }
    
    public synchronized void onSelectStandard(String type) {
        clearStorage();
        float step = getStep();
        FlatFigure ffig = (FlatFigure)catalog.get(type);
        if (ffig == null) {
            Log.e(TAG, "*** Have no brick in catalog");
        }
        FlatFigure ffCopy = (FlatFigure)MisFigure.generateFigure(type);
        ffCopy.copy(ffig);
        ffCopy.getDraw().fillData(myContext);
        ffCopy.init(this);
        Point pos = ffCopy.getPos();
        Point pStor = storage.getPos();
        pos.x = pStor.x + step;
        pos.y = pStor.y + step;
        pos.z = pStor.z + storage.getDraw().getSize().z;
        ffCopy.addSupport(storage);
        for (int i=0; i<storageTurnsCount; i++) {
            ffCopy.turn();
        }
        figures.add(ffCopy);
        allfigures.add(ffCopy);
    }
	
	public synchronized void deleteFigure(MovableFigure mf) {
        mf.removeSupports();
        mf.removeChildren();
        allfigures.remove(mf);
        figures.remove(mf);
	}
	
	public synchronized void clearStorage() {
	    while (!storage.children.isEmpty()) {
	        MovableFigure mf = storage.children.iterator().next();
	        deleteFigure(mf);    
	    }
	}
	
	public float freeFigureHeight(MovableFigure mf) {
	    float maxH = 0;
        float posx = mf.getPos().x;
        float posy = mf.getPos().y;
        for (Point p : mf.supBottom) {
            float px = p.x + posx;
            float py = p.y + posy;
            float pz = p.z;
            int ix = Math.round((px - X0) / step);
            int iy = Math.round((py - Y0) / step);
            int suppType = Math.round(pz*32) % 32;
            if (ix < 0 || ix >= nx || iy < 0 || iy >= ny) {
                // no heights outside of field
                maxH = 0;
                break;
            }
            Cell c = cells[iy][ix];
            float z = c.z - pz;
            if (z > maxH) {
                maxH = z;
            }
        }
        return maxH;	    
	}
	
	public int getStep() {
	    return step;
	}
    
	/**
	 * adds brick after clicking on support.
	 * 
	 * @param x - x mouse coord of click 
	 * @param y - y mouse coord of click
	 * @return - true if new brick is placed Ok, false otherwise.
	 */
    public boolean addBrick(float x, float y) {
        // determine which brick to place
        if (storage.children.isEmpty()) {
            Log.i(TAG, "Storage is empty, cannot add brick");
            return false;
        }
        MovableFigure br = storage.children.iterator().next();
        // select figure to place brick on
        MisFigure mf = game.findSelectedFigure(x, y, false);
        if (!(mf instanceof MovableFigure)) {
            Log.i(TAG, "Selected non movable figure, cannot place brick on it");
            return false;
        }
        MovableFigure mvf = (MovableFigure)mf;
        // find correct place on to of figure
        float fz = mvf.getPos().z + mvf.getDraw().getSize().z;
        MVector3f a = new MVector3f();
        game.convertPosZ(x, y, fz, a);
        raise(br);
        int ia = Math.round((a.x - X0) / step);
        a.x = X0 + ia * step - (step/2);
        ia = Math.round((a.y - Y0) / step);
        a.y = X0 + ia * step - (step/2);
        br.getPos().set(a.x, a.y, fz+1);
        float maxZ = place(br);
        if (maxZ > 0) {
            updateCells();
        } else {
            deleteFigure(br);
        }
        return (maxZ > 0);
    }
    
    public void showRoof() {
        if (roof == null) {
            throw new IllegalStateException("null roof in addRoof method");
        }
        if (roof.show) {
            roof.show = false;
            return;
        }
        // calc max roof support rectangle 
        int i0 = Math.round((foundation.getPos().y - Y0) / step);
        int j0 = Math.round((foundation.getPos().x - X0) / step);
        int i1 = Math.round((foundation.getDraw().getSize().y - Y0) / step);
        int j1 = Math.round((foundation.getDraw().getSize().x - X0) / step);
        // find max Z
        int maxZ = -1;
        for (int i=i0; i<=i1; i++) {
            for (int j=j0; j<=j1; j++) {
                int z = cells[i][j].z;
                if (z > maxZ) {
                    maxZ = z;
                }
            }
        }
        
        int minI = 1000, minJ=1000, maxI=-1000, maxJ=-1000;
        for (int i=i0; i<=i1; i++) {
            for (int j=j0; j<=j1; j++) {
                int z = cells[i][j].z;
                if (z >= maxZ) {
                    if (minJ > j) {
                        minJ = j;
                    }
                    if (minI > i) {
                        minI = i;
                    }
                    if (maxJ < j) {
                        maxJ = j;
                    }
                    if (maxI < i) {
                        maxI = i;
                    }
                }
            }
        }
        // set roof size from min .. max ..
        float rfx = X0 + minJ*step - step/2;
        float rfy = Y0 + minI*step - step/2;
        float rfz = maxZ;
        roof.getPos().set(rfx, rfy, rfz);
        float szx = (maxJ - minJ + 1) * step;
        float szy = (maxI - minI + 1) * step;
        float szz = szy * 0.4f;
        roof.getDraw().getSize().set(szx, szy, szz);
        roof.init(this);
        roof.getDraw().fillData(myContext);
        roof.getDraw().fillBuffers();
        // set roof points (from size)
        // show roof
        roof.show = true;
    }
    
    /**
     * contains figure with name like name 
     * @param name
     */
    public boolean containsFigure(String name) {
        for (MisFigure mf : allfigures) {
            if (mf.name.contains(name)) {
                return true;
            }
        }
        return false;
        
    }
}
