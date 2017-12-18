package mis.nn;

import java.util.Random;

/**
 * 0 member is coef to 1
 * @author misha
 *
 */
public class LogitNeuron implements Neuron {

	final int idx;
	final int D;
	public double []w;	
	public Neuron []sources;
	double CL_W = 0.3;
	double CL_SOURCE = 0.3;
	Random rnd = new Random();
	double cachedY;
	double []cache;
	
	public LogitNeuron(int idx, Neuron []sa, double []wa) {
		assert (wa.length == sa.length);
		this.idx = idx;
		D = sa.length;
		w = new double[D];
		cache = new double[D];
		for (int i=0; i<D; i++) {
			w[i] = wa[i];
		}
		sources = sa;
	}
	
	public double getValue() {
		double sum =0;
		for (int i=0; i<D; i++) {
			double sv = sources[i].getValue();
			cache[i] = sv;
			sum += w[i] * sv;
		}
		cachedY = 1.0 / (1.0 + Math.exp(-sum));
		return cachedY;
	}
	
	/** update weights and learn sources
	 * using contants CL_W, CL_SOURCE
	 */
	public void learn(double da) {
		double dy = cachedY * (1 - cachedY);
		for (int i=0; i<D; i++) {
			// counting differentials
			double dw = sources[i].getValue() * dy;
			double ds = w[i] * dy;
			w[i] += CL_W * dw * da + 0.01 * (rnd.nextDouble() - 0.5);
			sources[i].learn(CL_SOURCE * ds * da);			
		}
	}
	
	public void printWeigths() {
		System.out.printf("Nw %2d ", idx);
		for (int i=0; i<D; i++) {
			System.out.printf(" %7.3f", w[i]);
		}		
		System.out.println();
	}
	
	@Override
	public int getIdx() {
		return idx;
	}


}
