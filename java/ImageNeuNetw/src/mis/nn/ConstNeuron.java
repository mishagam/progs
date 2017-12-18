package mis.nn;

public class ConstNeuron implements Neuron {
	double val;
	int idx;
	
	public ConstNeuron(int idxa, double va) {
		idx = idxa;
		val = va;
	}	

	@Override
	public double getValue() {
		return val;
	}

	@Override
	public void learn(double dv) {
		// do nothing
	}
	
	public void setValue(double nva) {
		val = nva;
	}

	@Override
	public void printWeigths() {
		System.out.printf("Cn %2d %8.3f\n", idx, val);
	}

	@Override
	public int getIdx() {
		return idx;
	}
	
}
