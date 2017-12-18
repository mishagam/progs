package olgopt;

public class DataXY {
	public int n;
	public int nx;
	public double [][]xa;
	public double []ya;
	
	public DataXY(OlgData od, int id) {
		this(od.xa, od.ya, id);
	}
	
	public DataXY(double [][]xaa, double [][]yaa, int idxy) {
		// counting nonzero values
		int cnt = 0;
		for (int i=0; i<yaa.length; i++) {
			if (yaa[i][idxy] > 0.001) {
				cnt++;
			}
		}
		// allocating arrays
		nx = xaa[0].length;
		n = cnt;
		xa = new double[cnt][nx];
		ya = new double[cnt];
		// copy values
		cnt = 0;
		for (int i=0; i<yaa.length; i++) {
			if (yaa[i][idxy] > 0.001) {
				for (int j=0; j<nx; j++) {
					xa[cnt][j] = xaa[i][j]; 
				}
				ya[cnt] = yaa[i][idxy];
				cnt++;
			}			
		}
		
	}
	
	

}
