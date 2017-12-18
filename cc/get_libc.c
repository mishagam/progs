// test working with big files on C
#include <stdio.h>
#include <gnu/libc-version.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/mman.h>

const int PSIZE = 100*1000*1000;
const int PCNT = 60;
const char *fn = "bigfile.dat";
int writebig();
int tmemmap();

int main (void) { 
    off_t off=0;
    puts (gnu_get_libc_version ()); 
    printf("size of off = %d\n", sizeof(off));
    writebig();
    tmemmap();
    return 0; 
}

int writebig() {
    int i,j=0;
    int fd = open(fn, O_CREAT | O_RDWR);
    printf("open() returned fd = %d\n", fd);
    char *pm = (char*)malloc(PSIZE+1);
    for (i=0; i<PCNT; i++) {
        char c = '0' + (i % 50);
        for (j=0; j<PSIZE; j++) {
            pm[j] = c;
        }
        pm[j] = 0;
        int nb = write(fd, pm, PSIZE);
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
    int fd, i;
    const int ocnt = 55;
    const int MSIZE = 110;
    off_t o;

    // read memory mapped file
    printf("starting testing mmap read, ocnt = %d\n", ocnt);
    printf("pagesize = %d\n", getpagesize());
    fd = open(fn, O_RDONLY);
    o = ocnt;
    o = PSIZE * o;
    o = o / 4096;
    o = o * 4096;
    printf("File %s opened, fd = %d, offset = %lld\n", fn, fd, o);
    char *mm = (char *)mmap(NULL, MSIZE, PROT_READ, MAP_SHARED, fd, o);
    if (mm == (char*)0xFFFFFFFF) {
        perror("mmap failed");
        return 11;
    }
    char *lm = mm;
    printf("mmap passed, mm = %p\n", mm);
    for (i=0; i<MSIZE; i++) {
        printf("%c", *lm++);
    }
    printf("\nreading mm passed\n");
    munmap(mm, MSIZE);
    close(fd);
    return 0;
}
