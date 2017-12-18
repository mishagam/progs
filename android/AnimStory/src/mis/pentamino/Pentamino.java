package mis.pentamino;

import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Point;
import android.util.Log;

public class Pentamino {
	private final String TAG = this.getClass().getSimpleName();
	public static int NY = 10;
	public static int NX = 20;
	public static int SZ = 5;
	public static final int OUTSIDE = 0;
	public static final int FREE = 1;	
	public static final int NP = 12;
	int [][]a = new int[NY][NX];
	int nPenta;  // number opf pentaminoes
	
	OnePenta []pentas = new OnePenta[] {
			new OnePenta("xxxx. .x...", false),
			new OnePenta("xxxx. x....", false),
			new OnePenta(".xxx. xx...", false),
			new OnePenta("xxx.. x.x..", true),
			new OnePenta("xxx.. xx...", false),
			new OnePenta("xxx.. x.... x....", true),
			new OnePenta(".xx.. xx... x....", true),
			new OnePenta(".x... xxx.. .x...", true),
			new OnePenta(".x... xxx.. x....", false),
			new OnePenta("x.... xxx.. ..x..", false),
			new OnePenta("xxx.. .x... .x...", false),			
			new OnePenta("xxxxx", true),
	};
	
	public boolean checkFive() {
		int cnt = 0;
		for (int i=0; i<NY; i++) {
			for (int j=0; j<NX; j++) {
				if (a[i][j] == FREE) {
					cnt++;
				}
			}
		}
		nPenta = cnt / 5;
		return (cnt == nPenta*5);
	}
	
	Point findFirstFree() {
		Point p = new Point();
		for (int i=0; i<NY; i++) {
			for (int j=0; j<NX; j++) {
				if (a[i][j] == FREE) {
					p.x = j;
					p.y = i;
					return p;
				}
			}
		}
		return null;
	}
	
	public boolean solveRec(int np) {
		Point p = findFirstFree();
		for (int ip=0; ip<NP; ip++) {
			OnePenta op = pentas[ip];
			if (op.used) {
				continue;
			}
			int nr = (op.symmetric ? 4 : 8);
			for (int k=0; k<nr; k++) {
				op.rotateCached(k);
				for (int kp=0; kp<5; kp++) {
					if (op.canPlace(kp, p, a)) {
						op.place(kp, p, a, ip+2);
						if (np == 1) {
							return true;
						} else {
							boolean b = solveRec(np - 1);
							if (b) {
								return b;
							}
						}
						op.remove(kp, p, a);
					}
				}
			}
		}
		return false;		
	}
	
	public void solve(Context c) {
		AlertDialog alertDialog;
		alertDialog = new AlertDialog.Builder(c).create();
		if (!checkFive()) {
			Log.e(TAG, "Not multiple of 5");
			alertDialog.setTitle("Pentamino Fail");
			alertDialog.setMessage("Not multiple of 5");
			alertDialog.show();
			return;
		}
		if (nPenta <= 0 || 12 < nPenta) {
			Log.e(TAG, "Bad field, bad nPenta" + nPenta);
			alertDialog.setTitle("Pentamino Fail");
			alertDialog.setMessage("Bad field, bad nPenta" + nPenta);
			alertDialog.show();
			return;
		}
		if (!solveRec(nPenta)) {
			alertDialog.setTitle("Pentamino Fail");
			alertDialog.setMessage("Cannot find solution");
			alertDialog.show();			
		}
	}
	
	public void removePentas() {
		for (int i=0; i<NY; i++) {
			for (int j=0; j<NX; j++) {
				if (a[i][j] > FREE) {
					a[i][j] = FREE;
				}
			}
		}
		for (int i=0; i<NP; i++) {
			pentas[i].used = false;
		}
	}
	

}
