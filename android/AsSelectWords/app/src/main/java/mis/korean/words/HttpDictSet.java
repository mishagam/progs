package mis.korean.words;

import java.util.List;

/**
 * Implementing DictSet interace by communicating with external web site.
 * TODO - implement and test for appengine go myapp/kor
 * TODO - implement sending version code from myapp/kor
 */

public class HttpDictSet implements DictSet {
    public HttpDictSet() {
    }

    String dicListUrl() {
        return null; // TODO
    }

    String oneDictUrl() {
        return null; // TODO
    }

    @Override
    public List<String> getDictNames() {
        throw new UnsupportedOperationException();
    }

    @Override
    public List<String> getOneDict(String dictName) {
        throw new UnsupportedOperationException();
    }

    @Override
    public long getDictSetVersion() {
        throw new UnsupportedOperationException();
    }
}
