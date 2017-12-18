package mis.test;

import org.jtransforms.fft.DoubleFFT_1D;

public class TestFft {

	public static void main(String[] args) {
		int N = 160;
		double []a = new double[2*N];
		double []af = new double[2*N];
		double []b = new double[2*N];
		double []re = new double[N];
		double []im = new double[N];
		
		// prepare a array
		for (int i=0; i<N; i++) {
			double x = (2*i * Math.PI)/N; 
			re[i] = 2 + Math.cos(x) + 0.3 * Math.cos(3*x) + 1.5*Math.sin(7*x);
			im[i] = Math.sin(x) + 0.3 * Math.sin(3*x) - 1.5*Math.cos(7*x);
		}
		// combine re + im -> a
		for (int i=0; i<N; i++) {
			a[2*i] = re[i];
			a[2*i+1] = im[i];			
		}
		for (int i=0; i<2*N; i++) {
			b[i] = a[i];
		}
		// FFT
		DoubleFFT_1D fft = new DoubleFFT_1D(N);
		fft.complexForward(a);
		for (int i=0; i<2*N; i++) {
			af[i] = a[i];
		}
		fft.complexInverse(a, true);
		// print 
		for (int i=0; i<2*N; i++) {
			double rab = a[i]/b[i];
			System.out.printf("i,a,b,rab,af = %3d %11f %10f %10f %10f\n",i, a[i],b[i],rab,af[i]);
		}		

	}

}
