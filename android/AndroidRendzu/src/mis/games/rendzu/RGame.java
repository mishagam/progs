package mis.games.rendzu;

public interface RGame {
	
	public int getSx();
	public int getSy();
	public int getSide();
	public int getManSide();
	public int getAiSide();
	
	public void initGame(byte [][]fld, int side);
	public int addMove(RMove move);
	public int undoMove();
	public RMove nextMove()  throws GameException;
	public byte[][] getFld();
	public byte[][] getFldTypes();
	
	public boolean manWon();
	public boolean compWon();
	public void setId(String gameId);
	String getId();
	long getHash();
	int getNumberMoves();
	public String getMovesReport();
    public RMove getRandomRMove(double delta);
}
