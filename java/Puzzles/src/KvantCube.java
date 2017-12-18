
public class KvantCube {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		for (int i=10; i<100; i++) {
			int cu = i*i*i;
			if (cu>=100000 && i==(cu%100)) {
				System.out.println(i);
			}
		}
	}

}
