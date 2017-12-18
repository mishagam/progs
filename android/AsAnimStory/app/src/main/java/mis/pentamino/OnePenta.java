package mis.pentamino;

import android.graphics.Point;

public class OnePenta {
	public int []x = new int[5];
	public int []y = new int[5];
	public int []xa = new int[5];
	public int []ya = new int[5];
	public int [][]xr = new int[8][5];
	public int [][]yr = new int[8][5];	
	public boolean used = false;
	public boolean symmetric;
	
	public OnePenta(String s, boolean sima) {
		String []ss = s.split(" ");
		int n = ss.length;
		int idx =0;
		symmetric = sima;
		for (int i=0; i<n; i++) {
			for (int j=0; j<5; j++) {
				char c = ss[i].charAt(j);
				if (c=='x') {
					x[idx] = j;
					y[idx] = i;
					idx++;
				}
			}
		}
		cacheRot();
	}
	
	void cacheRot() {
		for (int k=0; k<8; k++) {
			rotate(k);
			xr[k] = new int[5];
			yr[k] = new int[5];
			for (int j=0; j<5; j++) {
				xr[k][j] = xa[j];
				yr[k][j] = ya[j];
			}
		}
	}
	
	void resetXYa() {
		for (int i=0; i<5; i++) {
			xa[i] = x[i];
			ya[i] = y[i];
		}
	}
	
	void rotateClock() {
		int t;
		for (int i=0; i<5; i++) {
			t = ya[i];
			ya[i] = -xa[i];
			xa[i] = t;
		}
	}
	
	private void rotate(int k) {
		if (k==0) {
			resetXYa();
		} else if (k == 4) {
			resetXYa();
			flop();
		} else {
			rotateClock();
		}
	}
	
	public void rotateCached(int k) {
		xa = xr[k];
		ya = yr[k];
	}
	
	void flop() {
		int t;
		for (int i=0; i<5; i++) {
			t = ya[i];
			ya[i] = xa[i];
			xa[i] = t;
		}
	}
	
	boolean canPlace(int k, Point p, int [][]a) {
		if (used) {
			return false;
		}
		int xx = xa[k];
		int yy = ya[k];
		for (int i=0; i<5; i++) {
			int dx = xa[i] - xx;
			int dy = ya[i] - yy;
			int tx = p.x + dx;
			int ty = p.y + dy;
			if (tx<0 || ty<0 || tx >= Pentamino.NX || ty >= Pentamino.NY || 
					a[ty][tx] != 1) {
				// cannot place pentamino here
				return false;
			}
		}
		return true;
	}
	
	void place(int k, Point p, int [][]a, int idx) {
		int xx = xa[k];
		int yy = ya[k];
		for (int i=0; i<5; i++) {
			int dx = xa[i] - xx;
			int dy = ya[i] - yy;
			int tx = p.x + dx;
			int ty = p.y + dy;
			a[ty][tx] = idx;
		}
		used = true;
	}
	
	void remove(int k, Point p, int [][]a) {
		int xx = xa[k];
		int yy = ya[k];
		for (int i=0; i<5; i++) {
			int dx = xa[i] - xx;
			int dy = ya[i] - yy;
			int tx = p.x + dx;
			int ty = p.y + dy;
			a[ty][tx] = 1;  // free cell
		}
		used = false;
	}
}
