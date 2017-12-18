#include <stdio.h>

int main(int cc, char **vv) {
	//long t0 = System.currentTimeMillis();
	double s = 0;
	double sum=0;
	for (int i = 0; i<1000000; i++) {
		for (int j=0; j<10000; j++) {
			s = s + s;
			sum += 1;
		}
	}
	//long t1 = System.currentTimeMillis();
	printf("done s,sum = %f %f\n",s, sum);
        return 0;
}
