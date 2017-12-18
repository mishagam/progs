// test working with big files on C
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
const char *fn = "bigfile.dat";
int writebig();
int tmemmap();

int main (int cc, char **vv) { 
    off_t off=0;
    puts (gnu_get_libc_version ()); 
    TVELSIZE = 4096 * (TVELSIZE / 4096);
    printf("size of off = %d\n", sizeof(off));
    if (cc > 1 && vv[1][0]=='c') {
        writebig();
        return 0;
    }
    tmemmap();
    return 0; 
}

int writebig() {
    int i,j=0;
    int mode = S_IRWXU | S_IRWXG;
    // mode = 0777;
    int fd = open(fn, O_CREAT | O_RDWR, mode);
    printf("open(,, mode = %0o ) returned fd = %d\n", mode, fd);
    char *pm = (char*)malloc(TVELSIZE + 1);
    for (i=0; i<TVCNT; i++) {
        char c = '0' + (i % 50);
        for (j=0; j<TVELSIZE; j++) {
            pm[j] = c;
        }
        pm[j] = 0;
        int nb = write(fd, pm, TVELSIZE);
        printf(" nbc= %d %c", nb, c);
        if (nb < 0) {
            perror("write failed");
            break;
        }
    }
    free(pm);
    close(fd);
    printf("close() passed\n");
    return 0;
}

int tmemmap() {
    int fd, i, j, k;
    off_t o;
    int readcnt = 1;
    int writecnt = 3;
    char *mm, *lm;
    int sum;

    // read memory mapped file
    printf("starting testing mmap read, TVCNT = %d\n", TVCNT);
    printf("pagesize = %d, readcnt, writecnt = %d %d\n", 
         getpagesize(), readcnt, writecnt);
    fd = open(fn, O_RDWR);
    printf("File %s opened\n", fn);
    for (i=0; i<TVCNT; i++) {
        o = i;
        o = TVELSIZE * o;
        if (i % 500 == 0) printf("i,o %d %lld\n", i, o);
        // test reading
        for (j=0; j<readcnt; j++) {
            mm = (char *)mmap(NULL, TVELSIZE, PROT_READ, MAP_SHARED, fd, o);
            if (mm == (char*)0xFFFFFFFF) {
                perror("mmap failed");
                return 11;
            }
            lm = mm;        
            for (k=0; k<TVELSIZE; k++) {
                sum += *lm++;
            }
            munmap(mm, TVELSIZE);
        }
        // writing
        for (j=0; j<writecnt; j++) {
            mm = (char *)mmap(NULL, TVELSIZE, PROT_WRITE, MAP_SHARED, fd, o);
            if (mm == (char*)0xFFFFFFFF) {
                perror("mmap failed");
                return 11;
            }
            lm = mm;        
            for (k=0; k<TVELSIZE; k++) {
                *lm++ = (k % 225) + 10;
            }
            munmap(mm, TVELSIZE);
        }
    }
    close(fd);
    return 0;
}
