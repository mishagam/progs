package mis.korean.transreader.translate;

import android.content.Context;
import android.database.SQLException;
import android.util.Log;

/**
 * Tanslate text using google services
 * @author misha
 *
 */
public class MisGoogleTranslate {
	private static final String TAG = MisGoogleTranslate.class.getName();  
	TransHttpsClient thc;
	GsonUnpackTranslation gut;
	TransDataSource tdb=null;
	Context context;
	
	public MisGoogleTranslate(Context context) {
		thc = new TransHttpsClient();
		gut = new GsonUnpackTranslation();		
		this.context = context;
	}
	
	public void open() {
		try {
			if (tdb == null) {
				tdb = new TransDataSource(context);
			}
			tdb.open();
		} catch (SQLException se) {
			Log.e(TAG, "open db failed", se);
			tdb = null;
		}
	}
	
	public void close() {
		if (tdb != null) {
			tdb.close();
			tdb = null;
		}
	}
	
	public synchronized String translate(String word) {
		String trans = null;
		if (tdb != null) {
			trans = tdb.findTrans(word);
		}
		if (trans == null) {
			String json = thc.requestTransJson(word);
			trans = gut.transFromJson(json);
			if (trans != null) {
				tdb.createTrans(word, trans);
				Log.d(TAG, "Wrote Google translation to DB");
			}
		} else {
			Log.d(TAG, "Used translation from DB");
		}
		return trans;
	}

}
