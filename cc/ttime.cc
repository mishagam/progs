#include <stdio.h>
#include <time.h>
#include <sys/time.h>

long long mtime() {
    int timeId = CLOCK_PROCESS_CPUTIME_ID; // CLOCK_REALTIME
    timespec tmsp;
    clock_gettime(timeId, &tmsp);
    long long nsec = tmsp.tv_nsec;
    long long t = tmsp.tv_sec*1000000000LL + nsec;
    return t;    
}

int main(int cc, char **vv) {
    int timeId = CLOCK_PROCESS_CPUTIME_ID; // CLOCK_REALTIME
	timespec tmsp;
    clock_getres(timeId, &tmsp);
	printf("Resolution: %d %d\n", tmsp.tv_sec, tmsp.tv_nsec);
    clock_gettime(timeId, &tmsp);
	printf("First Time: %d %d\n", tmsp.tv_sec, tmsp.tv_nsec);
    long long t0 = mtime();
    int i=0;
	//long long c0 = get_cycles();
	printf("hello\n");
	for (int i=0; i<2000000; i++) {
		tmsp.tv_sec += i;
	}
    long long t1 = mtime();
	printf("Spend Time : %15lld\n", (t1 - t0));
    t1 = mtime();
    for (i=0; i<1000000000; i++) {
      tmsp.tv_sec += i;
      tmsp.tv_sec += i*9;
    }
    long long t2 = mtime();
    printf("Spend t1,2,Time2: %15lld %15lld %15lld\n", t1, t2, (t2 - t1));
    t2 = mtime();
    for (i=0; i<1000000000; i++) {
      tmsp.tv_sec += i;
      tmsp.tv_sec += i*9;
    }
    long long t3 = mtime();
   // printf("tv: %d \n", tmsp.tv_sec);
    printf("Spend t2,3,Time3: %15lld %15lld %15lld\n", t2,t3,(t3 - t2));
	return 0;
}

