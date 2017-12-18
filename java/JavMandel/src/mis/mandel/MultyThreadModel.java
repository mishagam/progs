package mis.mandel;

/**
 * running Mandel Model using many threads.
 * @author misha
 *
 */
public class MultyThreadModel implements Runnable {
	
	MandelModel mod;
	int xbeg,xend;
	static Thread []tt = null;
	static int nt = 0;
	
	public MultyThreadModel(MandelModel mod, int xbeg, int xend) {
		this.mod = mod;
		this.xbeg = xbeg;
		this.xend = xend;		
	}
	
	public void run() {
		double sx2 = mod.sx/2.0;
		double sy2 = mod.sy/2.0;	
		double lscale = mod.scale;
		double lx0 = mod.x0;
		double ly0 = mod.y0;
		for (int i=0; i<mod.sy; i++) {
			for (int j=xbeg; j<xend; j++) {
				double x = lx0 + lscale*(j-sx2);
				double y = ly0 + lscale*(i-sy2);
				mod.rep[i][j] = MandelModel.countDep(x, y);
			}
		}		
	}
	
	public static void startAll(MandelModel mod, int nt) {
		MultyThreadModel.nt = nt;
		int xb,xe, step;
		xb = 0;
		step = mod.sx / nt;
		tt = new Thread[nt];
		for (int i=0; i<nt; i++) {
			xe = xb + step;
			if (i==nt-1) {
				xe = mod.sx;
			}
			MultyThreadModel mtm = new MultyThreadModel(mod, xb, xe);
			tt[i] = new Thread(mtm);
			xb = xe;
		}
		for (int i=0; i<nt; i++) {
			tt[i].start();
		}		
	}
	
	public static void waitAll() throws InterruptedException {
		for (int i=0; i<nt; i++) {
			tt[i].join();
		}		
	}
	
	

}
