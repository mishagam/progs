// structure adding values axtracting summs logarithmic time. tested
package algo;

public class BinLine {
	int h;
	int[][] a;
	static int [][]ida;

	BinLine(int w) {
		h = 12;
		a = new int[h][];
		int step = 1;
		boolean iniIda;
		if (ida == null) {
			ida = new int[h][];
			iniIda = true;
		} else {
			iniIda = false;
		}
		for (int i = 0; i < h; i++) {
			a[i] = new int[w];
			if (iniIda) {
				ida[i] = new int[w];
				int ii = 0;
				for (int j = 0; j < w; j++) {
					ida[i][j] = ii;
					ii += step;
				}
			}
			w = w / 2 + 1;
			step = step * 2;
			if (w == 0) {
				h = i + 1;
				break;
			}
		}
	}

	void addNum(int idx, int n) {
		for (int i = 0; i < h; i++) {
			a[i][idx] += n;
			idx = idx / 2;
		}
	}

	/**
	 * sum from 0 to idx
	 */
	int getSum(int idx) {
		int sum = 0, last;
		if (idx < 0) {
			return 0;
		}
		sum = a[0][idx];
		for (int i = 1; i < h; i++) {
			last = idx;
			idx = idx / 2;
			if (idx * 2 < last) {
				sum += a[i - 1][idx * 2];
			}
		}
		return sum;
	}

	static void testBinLine() {
		BinLine bl = new BinLine(600);
		bl.addNum(1, 1);
		bl.addNum(2, 2);
		bl.addNum(4, 1);
		bl.addNum(500, 1);
		System.out.println(bl.getSum(1));
		System.out.println(bl.getSum(2));
		System.out.println(bl.getSum(3));
		System.out.println(bl.getSum(4));
		System.out.println(bl.getSum(499));
		System.out.println(bl.getSum(500));
		System.out.println(bl.getSum(501));
	}
	public static void main(String[] args) {
		testBinLine();
	}
}
