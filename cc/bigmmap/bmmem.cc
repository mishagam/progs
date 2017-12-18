// test working with big files on C
// more of less same work with memory
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
const int TVCNT = 5000;
const int TVPORTION = 1;
const int MEMSIZE = TVPORTION * TVELSIZE;
const int MEM4 = MEMSIZE / 4;
const int NPORTIONS = TVCNT / TVPORTION; 
const char *fn = "bigfile.dat";
int writebig();
int tmemmap();
float *membuf;

int main (int cc, char **vv) { 
    off_t off=0;
    puts (gnu_get_libc_version ()); 
    TVELSIZE = 4096 * (TVELSIZE / 4096);
    printf("size of off = %d\n", sizeof(off));
    membuf = new float[MEM4];
    tmemmap();
    delete []membuf;
    return 0; 
}

int tmemmap() {
    int i, j, k;
    int readcnt = 1;
    int writecnt = 0;
    float sum = 0;
    long long sum1 = 0;

    // read memory mapped file
    printf("starting testing memory read, NPORTIONS MEMSIZE = %d %d\n", NPORTIONS, MEMSIZE);
    printf("readcnt, writecnt = %d %d\n", readcnt, writecnt);
    //fd = open(fn, O_RDWR);
    for (i=0; i<NPORTIONS; i++) {
        // writing
        float c = '0' + (i % 50);
        for (int k=0; k<writecnt; k++) {
            for (int j=0; j<MEM4; j++) {
                membuf[j] = c;
            } 
        }
        // reading
        for (int k=0; k<readcnt; k++) {
            for (j=0; j<MEM4; j++) {
                sum += membuf[j];
                // sum1++;
            }
        }
    }
    printf ("Counted sum, count = %f %lld\n", sum, sum1);
    return 0;
}
