package mis.animsto;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import mis.animsto.figures.Turtle;
import android.content.Context;
import android.content.res.Resources;
import android.content.res.XmlResourceParser;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Paint.Style;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.GridView;
import android.widget.ImageView;

import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;

public class SelectImageAdapter extends BaseAdapter {
	private final String TAG = this.getClass().getSimpleName();
	Context myContext;
	// List<Integer> idSet = new ArrayList<Integer>();
	List<String> inSet = new ArrayList<String>();
	Set<Integer> selectedSet = new HashSet<Integer>();
	Turtle tu = null;
	Resources res;
	private final boolean USE_XML_LIST = true;

	public SelectImageAdapter(Context c, ImageSetEnum imageSet, Turtle tua) {
		this(c, imageSet);
		tu = tua;
	}

	public SelectImageAdapter(Context c, ImageSetEnum imageSet) {
		myContext = c;
		tu = null;
		getImageNames(imageSet);
		//int ni = inSet.size();
		//idSet = new Integer[ni];
		res = c.getResources();
		selectedSet.clear();
	}
	
	public void updateImageSet(ImageSetEnum newImageSet) {
		getImageNames(newImageSet);
	}

	@Override
	public int getCount() {
		return inSet.size();
	}

	@Override
	public long getItemId(int position) {
		Log.d(TAG, "getItemId(" + position + ") called");
		String iName = inSet.get(position); 
		int id = res.getIdentifier(iName, "drawable", myContext.getPackageName());
		if (id == 0) {
			throw new IllegalStateException("No valid image name, pos " 
					+ iName + " " + position);
		}
		return id;
	}
	
	public String getImageName(int position) {
		Log.d(TAG, "getImageName(" + position + ") called");
		String iName = inSet.get(position); 
		return iName;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		ImageView imageView = null;
		boolean isSel=false;
		if (convertView == null) { // if it's not recycled, initialize some
									// attributes
			imageView = new ImageView(myContext);
			imageView.setLayoutParams(new GridView.LayoutParams(185, 185));
			imageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
			imageView.setPadding(3,3,3,3);
		} else {
			imageView = (ImageView) convertView;
		}

		try {
			int imageId = (int) getItemId(position);
			Bitmap bmp = loadBitmap(imageId, myContext);
			isSel = selectedSet.contains(position);
			imageView.setSelected(isSel);
			if (isSel) {
				bmp = addSelection(bmp);
			}
			imageView.setImageBitmap(bmp);
		} catch (Exception e) {
			Log.e(TAG, "setImage failed", e);
		}
		Log.d(TAG, "getView got image, pos,sel: " + position + " " + isSel);
		return imageView;
	}
	
	Bitmap addSelection(Bitmap bmp) {
		Bitmap mutBmp = bmp.copy(Bitmap.Config.ARGB_8888, true);
		Canvas ca = new Canvas(mutBmp);
		int xc = bmp.getWidth()/2;
		int yc = bmp.getHeight()/2;
		int r = bmp.getWidth()/4;
		Paint p = new Paint();
		p.setColor(Color.MAGENTA);
		p.setStyle(Style.STROKE);
		float newWid = 3;
		p.setStrokeWidth(newWid);
		ca.drawCircle(xc,  yc, r, p);
		return mutBmp;
	}

	
	public Bitmap loadBitmap(int imageId, Context ca) {
		Bitmap bmp=null;
		Log.d(TAG, "Loading bitmap for Id: " + imageId);
		InputStream is = ca.getResources().openRawResource(imageId);
        try {
            bmp = BitmapFactory.decodeStream(is);
        } catch (Exception e) {
            Log.e("loadTexture", "Opening image with id " + imageId 
            		+ " failed, exception: " + e);
            throw new RuntimeException("Opening bitmap failed", e);
        } finally {
            try {
                is.close();
            } catch(IOException e) {
                // Ignore.
            }
        }
        return bmp;
	}

	private List<String> getAllImageNames() {
		List<String> lall = new ArrayList<String>();
		// lall.addAll(getImageNames(ImageSetEnum.BACKGROUND));
		lall.addAll(getImageNames(ImageSetEnum.ANIMALS));
		lall.addAll(getImageNames(ImageSetEnum.MOVING_FIGURES));
		lall.addAll(getImageNames(ImageSetEnum.PAIRS));
		lall.addAll(getImageNames(ImageSetEnum.PEOPLE));
		// lall.addAll(getImageNames(ImageSetEnum.SUITS));
		return lall;	
	}

	public List<String> getImageNames(ImageSetEnum isetCase) {
		if (USE_XML_LIST) {
            try {
                getImageNamesXml(isetCase, inSet);
                return inSet;
            } catch (Exception e) {
                Log.e(TAG, "getImageNamesXml() failed: " + e);
            }
		}
		String[] ina = null;
		Log.d(TAG, "getImageNames() called with set " + isetCase);
		inSet.clear();
		switch (isetCase) {
		case ALL:
			inSet.clear();
			inSet.addAll(getAllImageNames());
			ina = new String[]{};
			break;

		case BACKGROUND:
			ina = new String[] { 
					"bg_drawing1",
					"bg_drawing17", 
					"bg_drawing24",
					"bg_drawing21", 
					"bg_drawing34", 
					"bg_drawing8",
                    "nancy_trees",
                    "indoor_pool"
            };
			Log.e(TAG, "got BACKGROUND images");
			break;

		case FIGURE:
			ina = new String[] {
					"cyberscooty_palm_trees",
					"house","many_trees0",
					"Tree_004",
					"wooden_chair_viyana",
					"car_zaz", "harmonic_tree"
			};
			break;

		case SUITS:
			ina = new String[] { 
					"ballerina_skirt" 
					};
			break;

		case MOVING_FIGURES:
			ina = new String[] { 
					"horse_walk_0",
					"horse_walk_1", 
					"horse_walk_2",
					"horse_walk_3" 
					};
			break;

		case ANIMALS:
			ina = new String[] { 
					"piglet",
					"horse"
					};
			break;

		case PEOPLE:
			ina = new String[] { 
					"closed",
					"addon_the_photographer",
					"ballerina_pencil_pal_in_bathing_suit",
					"ballerina_pencil_pal_in_gown",
					"boy_machovka_drawing",
					"business_man_vector",
					"man_one",
					"man_reading",
					"man_in_suit",
					"rebeca",
					"nedoumenie",
					"student_girl_book",
					"walking_baby",
					"woman_standing",
					"young_girl",
					"superhero_girl_in_purple",
					"stick_boy",
					"gopher_pink_anime_girl",
					"dragonfly",
					"man_with_braun_hair_and_braun_trousers"
					};
			break;

		case PAIRS:
			ina = new String[] { 
					"draka_t","draka_tp","family1","pair_biet"
					};
			break;
		}
		inSet.addAll(Arrays.asList(ina));
		
		return inSet;
	}

	public List<String> getInSet() {
		return inSet;
	}

	@Override
	public Object getItem(int position) {
		// TODO Auto-generated method stub
		return null;
	}

	private void getImageNamesXml(ImageSetEnum isetCase, List<String> ls) throws
            IOException, XmlPullParserException
    {
        if (isetCase == ImageSetEnum.ALL) {
            List<String> ll = getAllImageNames();
            ls.clear();
            ls.addAll(ll);
            return;
        }
        // read list of files names from XML file images_sets.xml
		XmlResourceParser parser = myContext.getResources().getXml(R.xml.images_sets);
        String lastTag = "";
        int eventType = parser.getEventType();
        String scase = (isetCase + "").toLowerCase();
        Log.d(TAG, "getImageNamesXml() scase: " + scase);
        while (eventType != XmlPullParser.END_DOCUMENT) {
            if(eventType == XmlPullParser.START_DOCUMENT) {
                Log.v(TAG, "Start document");
            } else if(eventType == XmlPullParser.START_TAG) {
                Log.v(TAG, "Start tag "+parser.getName());
                lastTag = parser.getName();
            } else if(eventType == XmlPullParser.END_TAG) {
                Log.v(TAG, "End tag "+parser.getName());
                lastTag = "";
            } else if(eventType == XmlPullParser.TEXT) {
                Log.v(TAG, "Text "+parser.getText());
                if (lastTag.equals(scase)) {
                    String []ss = parser.getText().trim().split(",");
                    ls.clear();
                    for (String s : ss) {
                        s = s.trim();
                        if (s.length()>0) {
                            ls.add(s);
                            Log.d(TAG, "Added " + s + " to " + lastTag);
                        }
                    }
                } else {
                    Log.d(TAG, "different scase, lastTag = " + scase + " " + lastTag);
                }
            }
            eventType = parser.next();
        }
        Log.v(TAG, "End document");
	}

}
