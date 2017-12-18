package mis.couploscil;

import java.awt.Color;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class CouplOscilModel {
	
	double tstep = 0.01;
	double pixstep = 0.1;
	int nRedraw = 30;
	int rCount = 0;
	
	class Spring {
		double dy0;
		
		
	}
	
	class Body {
		double W;
		double y0;
		double y;
		boolean fixed;
		double v;
	}
}
