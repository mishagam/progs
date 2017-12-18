package mis.korean.transreader.translate;

import java.util.List;

import android.util.Log;

import com.google.gson.Gson;

/**
 * extracting translation from Json response using google gson.
 * @author misha
 *
 */
public class GsonUnpackTranslation {
	private static final String TAG = GsonUnpackTranslation.class.getName();
	
	class OneTrans {
		String translatedText;
	}
	
	class JsTranslations {
		List<OneTrans> translations;
	}
	
	class JsData {
		JsTranslations data;		
	}
	
	public String transFromJson(String json) {
		Gson g = new Gson();
		JsData jd = g.fromJson(json, JsData.class);
		Log.d(TAG, "jd: " + jd);
		int sz = jd.data.translations.size();
		if (sz > 4) sz = 4;
		String trans = "";
		for (int i=0; i<sz; i++) {
			if (i>0) trans += ", ";
			trans += jd.data.translations.get(i).translatedText;
		}
		Log.d(TAG, "t: " + trans);
		
		return trans;
	}
	

}
