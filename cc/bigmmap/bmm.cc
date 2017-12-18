/**
 * test fast scnnning of very big memmory mapped file.
 * to try incremental topra version
 * M.G. aug 30 2011
 */

#include <unistd.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <string.h>
#include <sys/mman.h>

void *mmap(void *start, size_t length, int prot, int flags, int fd, off_t offset);
int munmap(void *start, size_t length);

int main(int cc, char **vv)
{
    const char *fn = "mmap.txt";
    int fd, i;
    const int SIZE = 10000000;

    printf("cc = %d   vv[1] = %s\n", cc, vv[1]);
    if (cc > 1 && vv[1][0] == 'r') {
        // read memory mapped file
        printf("starting testing mmap read\n");
        fd = open(fn, O_RDONLY);
        printf("File %s opened, fd = %d\n", fn, fd);
        char *mm = (char *) mmap(NULL, SIZE, PROT_READ, MAP_SHARED, fd, 0);
        char *lm = mm;
        printf("mmap passed, mm = %p\n", mm);
        for ( i = 0; i < 10000; i++) {
            printf("%c", *lm++);
        }
        printf("\nreading mm passed\n");
        munmap(mm, SIZE);
    } else if (cc > 1 && vv[1][0] == 'c') {
        // create memory mapped file
        printf("starting create %s\n", fn);
        char buf100[102];
        FILE *f=NULL;

        // fill buf100
        for ( i=0; i<100; i++) {
            buf100[i] = 'A' + (i/10);
        }
        buf100[i] = 0;
        // write file
        f = fopen(fn, "w");
        for (int i=0; i<(SIZE/100); i++) {
            fprintf(f, "%s\n", buf100);
        }
        fclose(f);
        printf("\n creating %s passed\n", fn);
    } else {
        // write memory mapped file
        printf("starting testing mmap write\n");
        fd = open(fn, O_RDWR);
        printf("File %s opened, fd = %d\n", fn, fd);
        char *mm = (char *) mmap(NULL, SIZE, PROT_WRITE, MAP_SHARED, fd, 0);
        char *lm = mm;
        printf("mmap passed, mm = %p\n", mm);
        for (int i = 0; (lm - mm) < SIZE; i++) {
            strcpy(
                    lm,
                    "MishaMisha Gambarian Very Clever IdiotMishaMisha Gambarian Very Clever Idiot\n");
            printf("m ");
            lm = lm + strlen(lm);
        }
        printf("filling mm passed\n");
        munmap(mm, SIZE);
    }
    close(fd);
    return 0;
}
