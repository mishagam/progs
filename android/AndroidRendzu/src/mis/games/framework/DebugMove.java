package mis.games.framework;

import mis.games.utils.CommaList;

public class DebugMove implements Comparable<DebugMove> {
    // packed x, y, so on
    protected String descr;
    double score;
    public String derivedPosKey;
    final int side;
    
    protected DebugMove(CommaList cl) {
        score = cl.getDouble();
        side = cl.getInt();
        derivedPosKey = cl.getStr();            
    }
    
    protected DebugMove(int side) {
        this.side = side;
    }
    
    public CommaList toList() {
        CommaList cl = new CommaList();
        cl.add(String.format("%.2f",score));
        cl.add(side);
        cl.add(derivedPosKey);
        return cl;
    }

    public String getDerivedPosKey() {
        return derivedPosKey;
    }

    public void setDerivedPosKey(String derivedPosKey) {
        this.derivedPosKey = derivedPosKey;
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public int compareTo(DebugMove o) {
        return -Double.compare(score, o.score);
    }
}
