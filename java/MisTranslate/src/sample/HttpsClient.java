package sample;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.cert.Certificate;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLPeerUnverifiedException;

import com.google.gson.Gson;

public class HttpsClient {
	
	class OneTrans {
		String translatedText;
	}
	
	class JsTranslations {
		List<OneTrans> translations;
	}
	
	class JsData {
		JsTranslations data;		
	}

	public static void main(String[] args) {
		// new HttpsClient().testIt();
		String transUrl = "https://www.googleapis.com/language/translate/v2?q=%EC%B6%94%EC%9A%B4&target=en&source=ko&key=AIzaSyDDPpdo6dzH3MCwk3ckDJjJ6plot5bWzV8";
		HttpsClient hc = new HttpsClient();
		String js = hc.readResponse(transUrl);
		System.out.println("js: " + js);
		Gson g = new Gson();
		JsData jd = g.fromJson(js, JsData.class);
		System.out.println("jd: " + jd);
		String t = jd.data.translations.get(0).translatedText;
		System.out.println("t: " + t);

	}

	String readResponse(String httpsUrl) {
		String jsonRet = "";
		URL url;
		try {

			url = new URL(httpsUrl);
			HttpsURLConnection con = (HttpsURLConnection) url.openConnection();
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

	private void testIt() {
		String https_url = "https://www.google.com/";
		https_url = "https://www.googleapis.com/language/translate/v2?q=%EC%B6%94%EC%9A%B4&target=en&source=ko&key=AIzaSyDDPpdo6dzH3MCwk3ckDJjJ6plot5bWzV8";
		URL url;
		try {

			url = new URL(https_url);
			HttpsURLConnection con = (HttpsURLConnection) url.openConnection();

			// dumpl all cert info
			print_https_cert(con);

			// dump all the content
			print_content(con);

		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	private void print_https_cert(HttpsURLConnection con) {

		if (con != null) {

			try {

				System.out.println("Response Code : " + con.getResponseCode());
				System.out.println("Cipher Suite : " + con.getCipherSuite());
				System.out.println("\n");

				Certificate[] certs = con.getServerCertificates();
				for (Certificate cert : certs) {
					System.out.println("Cert Type : " + cert.getType());
					System.out.println("Cert Hash Code : " + cert.hashCode());
					System.out.println("Cert Public Key Algorithm : "
							+ cert.getPublicKey().getAlgorithm());
					System.out.println("Cert Public Key Format : "
							+ cert.getPublicKey().getFormat());
					System.out.println("\n");
				}

			} catch (SSLPeerUnverifiedException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}

		}

	}

	private String jsonFromCon(HttpsURLConnection con) throws IOException {
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

	private void print_content(HttpsURLConnection con) {
		if (con != null) {

			try {

				System.out.println("****** Content of the URL ********");
				BufferedReader br = new BufferedReader(new InputStreamReader(
						con.getInputStream()));

				String input;

				while ((input = br.readLine()) != null) {
					System.out.println(input);
				}
				br.close();

			} catch (IOException e) {
				e.printStackTrace();
			}

		}

	}

}