package mis.nn;

public interface Neuron {
	int getIdx();
	double getValue();
	void learn(double dv);
	void printWeigths();
}
