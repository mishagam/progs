package mis.optim;

public interface Optimizer {
	
	/**
	 * Optimize argumets going to of minimum
	 * @param initArgs - initial arguments
	 * @param of - optimized function
	 * @return - optimal max point of of 
	 */
	double[] optimize(double []initArgs, OFunc of);
}
