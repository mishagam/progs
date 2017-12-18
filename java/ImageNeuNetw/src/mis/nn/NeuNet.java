package mis.nn;

import java.util.Random;

/** model of Neural Network */
public class NeuNet {
	Neuron []inp;
	Neuron []out;
	Random rnd = new Random();
	Neuron [][]hidLayers;

	public NeuNet(int nInp, int nOut, int nHid, int nHidLayers) {
		// first input layer const
	    inp = new Neuron[nInp + 1];
	    for (int i=0; i<nInp; i++) {
	    	inp[i] = new ConstNeuron(i, 0);
	    }
	    inp[nInp] = new ConstNeuron(nInp, 1);
	    Neuron []oldLayer =  inp;
	    oldLayer = inp;
	    
	    // hidded layers
	    hidLayers = new Neuron[nHidLayers][];
	    Neuron []layer = inp;
	    for (int i=0; i<nHidLayers; i++) {
	    	layer = new Neuron[nHid+1];
	    	for (int j=0; j<nHid; j++) {
	    		double []w = generateRandomWeights(oldLayer.length);
	    		layer[j] = new LogitNeuron(j, oldLayer, w);	    		
	    	}
	    	layer[nHid] = new ConstNeuron(nHid, 1);
	    	hidLayers[i] = layer;
	    	oldLayer = layer;
	    }
	    // output layer
	    out = new Neuron[nOut];
	    for (int j=0; j<nOut; j++) {
    		double []w = generateRandomWeights(oldLayer.length);
    		out[j] = new LogitNeuron(j, oldLayer, w);	    		
	    }
	}
	
	public void printLayerWeights(Neuron []layer) {
		for (Neuron n : layer) {
			n.printWeigths();
		}
	}
	
	public void printWeigths() {
		System.out.println("Input layer.");
	    printLayerWeights(inp);
	    for (int i=0; i<hidLayers.length; i++) {
			System.out.println("Hidden layer " + i);
		    printLayerWeights(hidLayers[i]);
	    }
		System.out.println("Output layer ");
	    printLayerWeights(out);
	}
	
	double[] generateRandomWeights(int n) {
		double []w = new double[n];
		for (int i=0; i<n; i++) {
			w[i] = (rnd.nextDouble() - 0.25) * 0.5;
		}
		return w;
	}
	
	public void setInputs(double []inVals) {
		assert(inVals.length == inp.length);
		for (int i=0; i<inVals.length; i++) {
			((ConstNeuron)inp[i]).setValue(inVals[i]);
		}		
	}
	
	public double[] getOutput() {
		int n = out.length;
		double []o = new double[n]; 
		for (int i=0; i<n; i++) {
			o[i] = out[i].getValue();
		}
		return o;
	}
	
	public double[] learn(double []correct) {
		int n = out.length;
		double []o = new double[n]; 
		for (int i=0; i<n; i++) {
			o[i] = out[i].getValue();
		}
		for (int i=0; i<n; i++) {
			out[i].learn(correct[i] - o[i]);
		}
		return o;
	}
}
