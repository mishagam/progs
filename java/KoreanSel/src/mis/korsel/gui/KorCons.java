package mis.korsel.gui;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;


public class KorCons {

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		String fn = "dict.txt";
		FileReader fr = new FileReader(new File(fn));
		BufferedReader br = new BufferedReader(fr);
		String s;
		
		while ((s = br.readLine()) != null) {
			System.out.println(s);
		}
		br.close();
	}

}
