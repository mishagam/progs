import java.util.Arrays;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ForkJoinTask;
import java.util.concurrent.RecursiveAction;

/**
 * A recursive resultless {@link ForkJoinTask}. This class establishes
 * conventions to parameterize resultless actions as {@code Void}
 * {@code ForkJoinTask}s. Because {@code null} is the only valid value of type
 * {@code Void}, methods such as {@code join} always return {@code null} upon
 * completion.
 *
 * <p>
 * <b>Sample Usages.</b> Here is a simple but complete ForkJoin sort that sorts
 * a given {@code long[]} array:
 */

class RecursiveActionSample {
	static class SortTask extends RecursiveAction {
		final long[] array;
		final int lo, hi;

		SortTask(long[] array, int lo, int hi) {
			this.array = array;
			this.lo = lo;
			this.hi = hi;
		}

		SortTask(long[] array) {
			this(array, 0, array.length);
		}

		protected void compute() {
			System.out.println("compute called, lo,hi = " + lo + " " + hi);
			if (hi - lo < THRESHOLD)
				sortSequentially(lo, hi);
			else {
				int mid = (lo + hi) >>> 1;
				invokeAll(new SortTask(array, lo, mid), new SortTask(array, mid, hi));
				merge(lo, mid, hi);
			}
		}

		// implementation details follow:
		static final int THRESHOLD = 5;

		void sortSequentially(int lo, int hi) {
			Arrays.sort(array, lo, hi);
		}

		void merge(int lo, int mid, int hi) {
			long[] buf = Arrays.copyOfRange(array, lo, mid);
			for (int i = 0, j = lo, k = mid; i < buf.length; j++) {
				array[j] = (k == hi || buf[i] < array[k]) ? buf[i++] : array[k++]; 
			}
		}
	}

	/**
	 * You could then sort anArray by creating new SortTask(anArray) 
	 * and invoking it in a ForkJoinPool. 
	 * @param args
	 */
	public static void main(String[] args) {
		long []arr = new long[] {9,8,7,6,5,4,3,2,1,19,18,17,16,15,14,13,12,11,10};
		SortTask st = new SortTask(arr);
		//ForkJoinPool fjp = new ForkJoinPool();
		//fjp.execute(st);
		st.compute();
		for (int i=0; i<arr.length; i++) {
			System.out.print(arr[i] + " ");
		}
		System.out.println();
	}
}