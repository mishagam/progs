package mis.epub;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileFilter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.Reader;

public class ConvTxtToHtml {
    String txtFileName = "Lukian - Zvezdnaya ten.txt";
    String outFileName = "out.html";
    static final int ENC_ASCII = 10;
    static final int ENC_RUSSIAN_UTF = 11;
    static final int ENC_RUSSIAN_WIN = 12;
    static final int SEP_SPACES = 1;
    static final int SEP_EMPTY_LINE = 2;
    static final int SEP_EVERY_LINE = 3;
    
    // change types for different type of document
    //int encType = ENC_RUSSIAN_WIN;
    int encType = ENC_RUSSIAN_UTF;
    int sepType = SEP_EVERY_LINE;
    
    String htmlHeader = "<html>\n<head>\n" + 
    " <title>%s</title>\n" + 
    "  <link rel=\"stylesheet\" href=\"../Styles/stylesheet.css\" type=\"text/css\" />" + 
    "</head>\n<body>\n" + 
    " <h1> %s </h1>\n " + 
    " <h1> %s</h1>\n<p>";
    String htmlFooter = "</p>\n</body>\n</html>\n";
    private ConvertOptions opts = ConvertOptions.getInstance();
    
    String prepTitle(String filename) {
        int idx = filename.lastIndexOf(".txt");
        return filename.substring(0, idx);
    }
    
    String prepHtmlFilename(String filename) {
        File f = new File(filename);
        String nm = f.getName();        
        int idx = nm.lastIndexOf(".txt");
        String outn = opts.tempFolder +  nm.substring(0, idx) + ".html";
        return outn;
    }
    
    boolean regularLetter(char c) {
        return ('а' <= c && c <= 'я');
    }
    
    public void convert() throws IOException {
        outFileName = prepHtmlFilename(txtFileName);
        BufferedReader reader = null;
        PrintWriter writer = null;
        char lastChar = 0;
        String encoding = null;
        if (encType == ENC_ASCII) {
            encoding =  "UTF-8";
        } else if (encType == ENC_RUSSIAN_UTF) {
            encoding = "UTF-16";
        } else if (encType == ENC_RUSSIAN_WIN) {
            encoding = "windows-1251"; 
        }
        String OUT_ENCODINC = "UTF-8"; 
        try {
            InputStream is = new FileInputStream(txtFileName);
            reader = new BufferedReader(new InputStreamReader(is, encoding));
            // reader = new BufferedReader(new FileReader(txtFileName));  
            FileOutputStream fos = new FileOutputStream(outFileName);
            OutputStreamWriter oswriter = new OutputStreamWriter(fos, OUT_ENCODINC); 
            writer = new PrintWriter(oswriter);
            String title = prepTitle(txtFileName);
            String author = reader.readLine();
            String bookTitle = reader.readLine();
            writer.printf(htmlHeader, title, author, bookTitle);
            String line = null;
            while((line = reader.readLine()) != null) {
                line = line.replace("&", "&amp;");
//                if (!regularLetter(lastChar)) {
//                    line = "</p><p>" + line;
//                } 
                if (sepType == SEP_SPACES && line.startsWith("  ")) {
                    line = "</p><p>" + line;
                } else if (sepType == SEP_EMPTY_LINE && line.equals("")) {
                    line = "</p><p>" + line;
                } else if (sepType == SEP_EVERY_LINE) {
                    line = "</p><p>" + line;
                }
                String ln = line.trim();
                if (ln.length() > 0) {
                    lastChar = ln.charAt(ln.length() - 1);
                }
                writer.println(line);
            }
            writer.println(htmlFooter);
        } finally {
            if (reader != null) {
                reader.close();
            }
            if (writer != null) {
                writer.close();                
            }
        }
    }
    
    File[] getTextFiles() {
        File dir = new File(".");
        FilenameFilter txtFilter = new MyTxtFilter();
        File []files = dir.listFiles(txtFilter);
        return files;        
    }
    
    class MyTxtFilter implements FilenameFilter {
        public boolean accept(File dir, String name) {            
            return name.startsWith("Chr") && name.endsWith(".txt");
        }        
    }
    
    public static void main(String []args) throws Exception {        
        ConvTxtToHtml conv = new ConvTxtToHtml();
        File []txtFiles = conv.getTextFiles();
        for (File f : txtFiles) {
            conv.txtFileName = f.getName();
            conv.convert();        
        }
    }    
}
