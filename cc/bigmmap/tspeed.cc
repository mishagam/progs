// test speed for comparison
#include <stdio.h>
#include <gnu/libc-version.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/mman.h>

const int LEVELSIZE = 70000;
int TVELSIZE = 16*LEVELSIZE;
const int TVCNT = 1000;
const int TVPORTION = 1;
const int MEMSIZE = TVPORTION * TVELSIZE;
const int MEM4 = MEMSIZE / 4;
const int NPORTIONS = TVCNT / TVPORTION; 
const char *fn = "bigfile.dat";
int writebig();
int tmemmap();
float *membuf;

int main (int cc, char **vv) { 
    long long lcnt=0;
    long cnt=0;
    for (int i=0; i<TVCNT; i++) {
        cnt=0;
        for (int j=0; j<MEMSIZE; j++) {
            cnt++;
        }
        lcnt += cnt;
    }
    printf("Cycle done, lcnt = %lld\n", lcnt);
    
    return 0; 
}
