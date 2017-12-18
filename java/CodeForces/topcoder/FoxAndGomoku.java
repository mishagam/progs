// topcoder problem difficulty 250, done 
public class FoxAndGomoku {
	int []dx = new int[]{0,1,1,1,0,-1,-1,-1};
    int []dy = new int[]{1,1,0,-1,-1,-1,0,1};
    public String win(String[] board) {
        int n = board.length;
        for (int i=0; i<n; i++) {
        	for (int j=0; j<n; j++) {
        		for (int d=0; d<4; d++) {
        			int cnt = 0;
        			for (int k=0; k<5; k++) {
        				int x = j + k*dx[d];
        				int y = i + k*dy[d];
        				if (x<0 || y<0 || x>=n || y>=n) {
        					break;
        				}
        				if (board[y].charAt(x)=='o') {
        					cnt++;
        				} else {
        					break;
        				}
        			}
        			if (cnt==5) {
        				return "found";
        			}
        		}
        	}
        }
        return "not found";
    }
    
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String []board = new String[] {
				".....o.......",
				".....o.......",
				".....o.......",
				".............",
				".....o.......",
				".....o.......",
				".....o.......",
				".....o.......",
				".............",
				".....o.......",
				".....o.......",
				".....o.......",
				".....o......."				
		};
		FoxAndGomoku fog = new FoxAndGomoku();
		String sr = fog.win(board);
		System.out.println("win returned " + sr);
	}
}
