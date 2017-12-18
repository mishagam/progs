package mis.couploscil;

/**
 * class for helping better solve differential Equations
 * @author misha
 *
 */
public class DiffEqu {
	double dt;
	int n;
	double []x;
	double []y;
	
	/** count y from x */
	void diff(double []x, double []y) {
		for (int i=0; i<n; i++) {
			y[i] = 0;
		}
	}
	
	void step(double []x, double []xn) {
		
	}

}
