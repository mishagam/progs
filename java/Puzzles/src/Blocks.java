import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Blocks puzzle from secret society android game
 * @author misha
 */
public class Blocks {
	static final int H = 6;
	static final int W = 6;	
	final int []dx = {1, 0,-1, 0}; 
	final int []dy = {0, 1, 0,-1}; 
	static String []smap=new String[] {
			" ABBCC",
			" ADEEE",
			"**D  F",
			"G DHIF",
			"GJJHIK",
			"LLL  K"
	};
	Set<Pos> mem = new HashSet<>();
	List<Pos> pl = new ArrayList<>();
	List<Pos> npl = new ArrayList<>();
	byte bStar = (byte)('*'-' ');
	boolean done = false;
	
	class Pos {
		Pos prev;
		int dist;
		byte [][]map;
		int iz,jz;
		int izw,jzw;
		
		public Pos(byte [][]m, Pos p, int d,int iiz, int jjz) {
			this.map = m;
			this.dist = d;
			this.prev = p;
			iz = iiz;
			jz = jjz;
		}
		
		public boolean equals(Object o) {		
			if (o==null || !(o instanceof Pos)) {
				return false;
			}
			boolean same=true;
			Pos b = (Pos)o;
			for (int i=0; i<H; i++) {
				for (int j=0; j<W; j++) {
					if (map[i][j]!=b.map[i][j]) {
						return false;
					}
				}
			}
			return true;
		}

		public int hashCode() {
			int h=0;
			for (int i=0; i<H; i++) {
				for (int j=0; j<W; j++) {
					h = (h >>> 1) ^ map[i][j];
				}
			}			
			return h;
		}
		
		public boolean ready() {
			return (map[2][4]==bStar && map[2][5]==bStar);
		}
		
		byte [][]copyMap() {
			byte [][]m = new byte[H][W];
			for (int i=0; i<H; i++) {
				for (int j=0; j<W; j++) {
					m[i][j] = map[i][j];
				}
			}
			return m;
		}
		
		boolean hasMove(byte[][]m, int i, int j,int d) {
			int di = dy[d];
			int dj = dx[d];
			if (i+2*di<0 || i+2*di>=H || j+2*dj<0 || j+2*dj>=W) {
				return false;
			}
			byte b0 = m[i+di][j+dj];
			byte b1 = m[i+2*di][j+2*dj];
			if (b0==0 || b0 != b1) {
				return false;				
			}
			// we can move!! making move
			izw = i;
			jzw = j;
			for (int k=0; k<3; k++) {
				int ii = i+di;
				int jj = j+dj;
				if (ii<0 || ii>=H || jj<0 || jj>=W || m[ii][jj]!=b0) {
					break;
				}
				m[i][j] = m[ii][jj];
				m[ii][jj] = 0;
				i = ii;
				j = jj;
			}
					
			return true;
		}
		
		void addMovesTo(int i, int j) {
			byte [][]m = copyMap();			
			for (int d=0; d<4; d++) {
				if (hasMove(m,i,j,d)) {
					Pos np = new Pos(m,this,dist+1, izw, jzw);
					m = copyMap();		
					if (mem.contains(np)) {
						continue;
					}
					if (np.ready()) {
						np.printAll();
						done = true;
					}
					mem.add(np);
					npl.add(np);
				}
			}
		}
		
		/**
		 * add all new moves to zeros
		 */
		public void addMoves() {
			mem.add(this);
			//print();
			for (int i=0; i<H; i++) {
				for (int j=0; j<W; j++) {
					if (map[i][j]==0) {
						addMovesTo(i, j);
					}
				}				
			}
		}
		
		public void printAll() {
			Pos p = this;
			while (p != null) {
				p.print();
				p = p.prev;
			}
		}
		
		public void print() {
			//System.out.printf("dist = %2d  \n",dist);
			for (int i=0; i<H; i++) {
				for (int j=0; j<W; j++) {
					char c = (char)(' ' + map[i][j]);
					if (i==iz && j==jz) {
						System.out.printf("%c ", c);
					} else {
						System.out.printf("%c ", Character.toLowerCase(c));
					}
				}
				System.out.println();
			}
			System.out.println();
		}
	};	
	
	void step() {
		System.out.println("step stated, pl, mem .sizes = " + pl.size() + " " + mem.size());
		for (Pos p : pl) {
			p.addMoves();
		}
		pl = npl;
		npl = new ArrayList<>();		
	}
	
	void run() {
		while(!done) {
			step();
		}		
	}
	
	static byte[][] toBytes(String []sm) {
		byte [][]om = new byte[H][W];
		for (int i=0; i<H; i++) {
			for (int j=0; j<W; j++) {
				om[i][j] = (byte)(sm[i].charAt(j) - ' ');
			}
		}
		return om;
	}
	
	public static void main(String[] args) {
		Blocks b = new Blocks();
		Pos p = b.new Pos(toBytes(smap),null,0,0,0);
		b.pl.add(p);
		b.run();
		System.out.println("Blocks done");
	}

}
