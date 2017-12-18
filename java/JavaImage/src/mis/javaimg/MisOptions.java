package mis.javaimg;

public class MisOptions {
	int ww = 800;
	int hh = 700;
	
	private static MisOptions instance = null;
	
	private MisOptions() {		
	}
	
	public static MisOptions getOptions() {
		if (instance == null) {
			instance = new MisOptions();
		}
		return instance;
	}

}
