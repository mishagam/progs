package atta.graph.data;

public class MyInternet {
    String plate;
    String place;
    String date;
    /**
     * private constructor for singleton.
     */
    private MyInternet() {
        // do nothing
    }

    private static MyInternet instance = null;

    public static synchronized MyInternet getInstance() {
        if (instance == null) {
            instance = new MyInternet();
        }

        return instance;

    }

    public int readFactorial(PeakSet namedPeaks, String cname) {
        extractPlatePlaceDate(cname);
        return namedPeaks.size();  // XXX to remove warning only
    }
    
    /**
     * parsing filename like 
     * '2006-03-21_plate94_A06.fsa'
     * @param cname
     * @return true if parsing passed Ok, false if parsing failed
     */
    boolean extractPlatePlaceDate(String cname) {
        return cname == null;       // XXX to remove warning only
    }
}
