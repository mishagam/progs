package mis.games.framework;

public interface Position extends Cloneable {
    
    public void copy(Position b);
    
    public int apply(Move m);
    
    public int reverse(Move m);
    
    double score(Move m);

    public int lastMoveSide();
    
    public boolean isFinished();
    
    public String toDesk();
    
    public Object clone() throws CloneNotSupportedException;
    
    public Object getKey();
    
    public DebugPackedPos getDebugKey();
    
    double getLevelDelta();
    
    int getSide();
}
