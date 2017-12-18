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

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class ConvFb2ToHtml {
    // String txtFileName = "Lukian - Zvezdnaya ten.txt";
    String fb2FileName = ""; // Lukyanenko_S._Osennie_Vizitiy.fb2";
    String outFileName = "out.html";
    static final boolean RUSSIAN = false;
    XPath xpath = null;
    ConvertOptions opts = ConvertOptions.getInstance();
    private String tempFolder = opts.tempFolder;
    
    String htmlHeader = "<html>\n<head>\n" + 
    " <title>%s</title>\n" + 
    " <meta name=\"Title\" content=\"%s\" />\n" + 
    " <meta name=\"Author\" content=\"%s\" />\n" + 
    " <title>%s</title>\n" + 
    "  <link rel=\"stylesheet\" href=\"../Styles/stylesheet.css\" type=\"text/css\" />" + 
    "</head>\n<body>\n";
    String htmlFooter = "\n</body>\n</html>\n";
    
    String prepTitle(String filename) {
        int idx = filename.lastIndexOf(".fb2");
        return filename.substring(0, idx);
    }
    
    String prepHtmlFilename(String filename) {
        File f = new File(filename);
        String nm = f.getName();        
        int idx = nm.lastIndexOf(".fb2");
        String outn = tempFolder +  nm.substring(0, idx) + ".html";
        return outn;
    }
    
    public void convert() throws IOException {
        outFileName = prepHtmlFilename(fb2FileName);
        BufferedReader reader = null;
        PrintWriter writer = null;
        char lastChar = 0;
        String ENCODINC = (RUSSIAN ? "UTF-16" : "UTF-8");
        try {
            InputStream is = new FileInputStream(fb2FileName);
            DocumentBuilderFactory fact = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = fact.newDocumentBuilder();
            Document doc = builder.parse(is);
            Element fb2el = (Element)doc.getElementsByTagName("FictionBook").item(0);
            
            // writing HTML document
            FileOutputStream fos = new FileOutputStream(outFileName);
            OutputStreamWriter oswriter = new OutputStreamWriter(fos, ENCODINC); 
            writer = new PrintWriter(oswriter);
            
            // extracting and writing title
            xpath = XPathFactory.newInstance().newXPath();
            XPathExpression expr = xpath.compile("//FictionBook/description/title-info/book-title");
            Element titleEl = (Element)expr.evaluate(doc, XPathConstants.NODE);
            String title = titleEl.getTextContent();
            expr = xpath.compile("//author");
            Element authorEl = (Element)expr.evaluate(doc, XPathConstants.NODE);
            String author = getAuthorName(authorEl);
            String head = String.format(htmlHeader, title, title, author, title, author);
            writer.println(head);
            expr = xpath.compile("//body");
            Element bodyEl = (Element)expr.evaluate(doc, XPathConstants.NODE);
            convertSection(bodyEl, writer, 0);
            writer.println(htmlFooter);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                writer.close();                
            }
        }
    }
    
    private void writeTitle(String title, PrintWriter writer, int level) 
                throws IOException {
        level++;
        writer.printf("<h%d>%s</h%d>\n", level, title.trim(), level);
    }
    
    private void writeParagraph(Element par, PrintWriter writer) 
                throws IOException, XPathExpressionException {
        XPathExpression expr = xpath.compile("./emphasis");
        Element emphEl = (Element)expr.evaluate(par, XPathConstants.NODE);
        if (emphEl != null) {
            writer.printf("<p class=\"emphasis\">%s</p>\n", par.getTextContent().trim());
        } else {
            writer.printf("<p>%s</p>\n", par.getTextContent().trim());
        }
    }
    
    private void writeEpigraph(Element epi, PrintWriter writer) 
                throws IOException, XPathExpressionException {
        // reading paragraphs
        writer.println("<div class=\"epigraph\">");
        XPathExpression expr = xpath.compile("./p");
        NodeList pNodes = (NodeList)expr.evaluate(epi, XPathConstants.NODESET);
        for (int i=0; i<pNodes.getLength(); i++) {
                Element par = (Element)pNodes.item(i);
                writeParagraph(par, writer);
        }
        expr = xpath.compile("./text-author");
        Element auEl = (Element)expr.evaluate(epi, XPathConstants.NODE);
        if (auEl != null) {
            writer.printf("<p class=\"text-author\">%s</p>\n", auEl.getTextContent().trim());
        }
        writer.println("</div>");
    }
    
    private void convertSection(Element section, PrintWriter writer, int level) 
                throws IOException, XPathExpressionException {
        // first write title
        XPathExpression expr = xpath.compile("./title");
        Element titleEl = (Element)expr.evaluate(section, XPathConstants.NODE);
        if (titleEl != null) {
            String title = titleEl.getTextContent();
            writeTitle(title, writer, level);            
        }
        expr = xpath.compile("./epigraph");
        NodeList epNodes = (NodeList)expr.evaluate(section, XPathConstants.NODESET);
        for (int i=0; i<epNodes.getLength(); i++) {
                Element epi = (Element)epNodes.item(i);
                writeEpigraph(epi, writer);
        }
        expr = xpath.compile("./p");
        NodeList pNodes = (NodeList)expr.evaluate(section, XPathConstants.NODESET);
        if (pNodes.getLength() == 0) {
            expr = xpath.compile("./section");
            NodeList childNodes = (NodeList)expr.evaluate(section, XPathConstants.NODESET);
            for (int i=0; i<childNodes.getLength(); i++) {
                Element child = (Element)childNodes.item(i);
                convertSection(child, writer, level+1);
            }           
        } else {
            for (int i=0; i<pNodes.getLength(); i++) {
                Element par = (Element)pNodes.item(i);
                writeParagraph(par, writer);
            }           
        }
    }
    
    private String getChild(Element el, String tag) {
        Element chEl = (Element)el.getElementsByTagName(tag).item(0);
        if (chEl == null) {
            return "";
        } else {
            return chEl.getTextContent();
        }
    }
    
    String getAuthorName(Element ael) {
        String fn = getChild(ael, "first-name");
        String mn = getChild(ael, "middle-name");
        String ln = getChild(ael, "last-name");
        String name = String.format("%s %s %s", fn, mn, ln);
        return name;
    }
    
    File[] getFb2Files() {
        File dir = new File(".");
        FilenameFilter txtFilter = new MyFb2Filter();
        File []files = dir.listFiles(txtFilter);
        return files;        
    }
    
    class MyFb2Filter implements FilenameFilter {
        public boolean accept(File dir, String name) {            
            return name.startsWith("Chr") && name.endsWith(".txt");
        }        
    }
    
    public static void main(String []args) throws Exception {        
        ConvFb2ToHtml conv = new ConvFb2ToHtml();
        //File []fb2Files = conv.getFb2Files();
        String fn = "fb2/Ne_vremya_dlya_drakonov.fb2";
        String []fb2Files = new String[]{fn};
        for (String s : fb2Files) {
            conv.fb2FileName = s;
            conv.convert();        
        }
    }    
}
