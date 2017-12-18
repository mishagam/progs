package mis.android.game;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.microedition.khronos.opengles.GL11;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.lwjgl.util.vector.Vector3f;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import mis.android.game.sysdep.MisDrawable;
import android.content.Context;
import android.content.res.Resources;
import android.util.Log;

public class World {
    private static String TAG = "World";
	List<MisFigure> figures = new ArrayList<MisFigure>();
    public static final int DEFAULT_STEP = 20; 
    Storage storage = null;
    MovableFigure storageFig = null;
	
	/**
	 * Read world configuration from XML file.
	 * Using DOM parser.
	 * 
	 * @param fileName
	 */
	public void readWorld(Context context, String fileName)  {
	    // read raw resource. For now assume fileNaqme = "world"
	    if (!fileName.equals("world")) {
	        throw new IllegalStateException("For now filename should be world");
	    }
	    InputStream is = null;
	    try {
    	    Resources r = context.getResources();
    	    
    	    // getting resource dynamically
            // int resId = r.getIdentifier("world", "raw", "mis.android");
            int resId = r. getIdentifier("mis.android:raw/world", null, null);
    	    // int resId = R.raw.world;
    	    is = r.openRawResource(resId);
    	    DocumentBuilderFactory fact = DocumentBuilderFactory.newInstance();
    	    DocumentBuilder builder = fact.newDocumentBuilder();
    	    Document doc = builder.parse(is);
    	    NodeList nl = doc.getElementsByTagName("misFig");
    	    for (int i=0; i<nl.getLength(); i++) {
    	        Element el = (Element)nl.item(i);
    	        String fType = el.getAttribute("type");
    	        // selecting type of figure based on type and reading figures
    	        MisFigure mf = MisFigure.generateFigure(fType);
    	        mf.getDraw().readXml(el);
    	        mf.getDraw().fillData(context);
    	        figures.add(mf);
    	    }
    	    Log.i(TAG, "we read " + nl.getLength() + " entried from world.xml");    	    
    	    is.close();
        } catch (IOException ioe) {
            Log.e("World", "Reading world failed: " + ioe);
        } catch (ParserConfigurationException e) {
            Log.e("World", "Reading world failed: " + e);
        } catch (SAXException e) {
            Log.e("World", "Reading world failed: " + e);
        } catch (Exception e) {
            Log.e("World", "Unexpected exception Reading world failed: " + e);
            Log.e(TAG, "Stack: " + e.getStackTrace());
	    } 
	}
    
    public void draw(GL11 gl) {
        for (MisFigure mf : figures) {
            mf.draw(gl);
        }
    }
	
	/**
	 * write as XML file to file with name fileName.
	 * In android we will probably have to save configuration in database - in the future.
	 * 
	 * @param fileName - name of XML output file.
	 */
	public void writeWorld(String fileName) {
		throw new UnsupportedOperationException("didn't implement writeWorld yet");
	}
	
	public MisFigure findFigure(Vector3f a, Vector3f b) {
	    for (MisFigure f : figures) {
	        if (f instanceof MovableFigure) {
	            MisDrawable md = f.getDraw();
	            if (md.intersect(a, b)) {
	                return f;
	            }	            
	        }	        
	    }
	    return null;
	}

}
