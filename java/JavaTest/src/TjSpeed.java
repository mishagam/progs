
public class TjSpeed {
	public static void main(String[] args) {
		long a=0,b,c;
		String sa;
		
		// long
		long t0 = System.currentTimeMillis();
		for (int i=0; i<1000; i++) {
			for (int j=0; j<1000000; j++) {
				b = i*j;
				a = a + b;
			}			
		}
		long t1 = System.currentTimeMillis();
		double sec = (t1-t0)*0.001;
		System.out.println("Long time = " + sec);
		
		// string
		t0 = System.currentTimeMillis();
		for (int i=0; i<1000; i++) {
			for (int j=0; j<10000; j++) {
				b = i*j;
				a = a + b;
				sa = "_" + a;
			}			
		}
		t1 = System.currentTimeMillis();
		sec = (t1-t0)*0.001;
		System.out.println("String time = " + sec);
		
	}

}
