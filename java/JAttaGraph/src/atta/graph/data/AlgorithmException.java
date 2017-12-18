package atta.graph.data;

public class AlgorithmException extends Exception {
	static final long serialVersionUID = 9876543001L;
    public AlgorithmException(String s) {
        super(s);
    }
    public AlgorithmException(String s, Throwable c) {
        super(s, c);
    }
}
