package mis.korean.transreader.translate;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

import javax.net.ssl.HttpsURLConnection;

import android.util.Log;

public class TransHttpsClient {
	private static final String TAG = TransHttpsClient.class.getName(); 
	String BASE_URI = "https://www.googleapis.com/language/translate/v2?";
	String API_KEY = "AIzaSyDDPpdo6dzH3MCwk3ckDJjJ6plot5bWzV8";

	String source = "ko";
	String target = "ru";
	
	public String composeUri(String q, String langSource, String langTarget)  {
		StringBuilder sb = new StringBuilder();
		sb.append(BASE_URI);
		String encq = "";
		try {
			encq = URLEncoder.encode(q, "UTF-8");
		} catch (UnsupportedEncodingException uee) {
			Log.e(TAG, "encode failed", uee);			
		}
		sb.append("q=").append(encq);
		sb.append("&source=").append(langSource);
		sb.append("&target=").append(langTarget);
		sb.append("&key=").append(API_KEY);
		
		return sb.toString();		
	}
	
	/**
	 * default translation from Korean to Russian
	 * @param q - Korean string to translate
	 * @return - composed URI for request for Russian translation
	 */
	public String composeUri(String q) {		
		return composeUri(q, source, target);
	}
	
	public String requestTransJson(String q) {
		String uri = composeUri(q);
		String json = readResponse(uri);
		
		return json;	
	}

	String readResponse(String httpsUrl) {
		String jsonRet = "";
		URL url;
		try {

			url = new URL(httpsUrl);
			URLConnection con = (HttpsURLConnection) url.openConnection();
			// convert content to String and print
			jsonRet = jsonFromCon(con);
			// System.out.println("Json: " + jsonRet);

		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return jsonRet;
	}

	private String jsonFromCon(URLConnection con) throws IOException {
		StringBuilder sb = new StringBuilder();
		BufferedReader br = new BufferedReader(new InputStreamReader(
				con.getInputStream()));

		String input;

		while ((input = br.readLine()) != null) {
			sb.append(input);
		}
		br.close();
		return sb.toString();
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}
}
