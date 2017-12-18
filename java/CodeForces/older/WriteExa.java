import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;


public class WriteExa {
	
	void writeExample() throws IOException {
		int n=100000, m=100000;
		PrintWriter pw = new PrintWriter("collexa.txt");
		pw.println(n + " " + m);
		for (int i=n; i>0; i--) {
			pw.println("+ " + i);
		}
		pw.close();
	}

	public static void main(String[] args) throws IOException {
	}

}
