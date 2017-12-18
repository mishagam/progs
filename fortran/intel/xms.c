#include <unistd.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <string.h>
#include <sys/mman.h>
#include <io.h>

#include "xms.h"

char *map_file_name="000111222.dat";
const int SIZE = 25000000;
void *mm = NULL;
void *hmem = NULL;
int fd = 0;

void zero(int *length) {
    fd = open(map_file_name, O_RDWR);
    if (fd == -1) {
        printf("*** error in openning memory mapped file %s\n", map_file_name);
    }
    mm = mmap(NULL, *length, PROT_READ | PROT_WRITE , MAP_SHARED, fd, 0);
    if (mm == MAP_FAILED) {
        perror("mmap failed");
    }
    hmem = mm;
    return (int)mm;
}

int xms(int source, int dest, int length) {
    memcpy((void *)dest, (void*)source, length);
    return length;
}

int setz(int length) {
    memset(hmem+8, 0, length);
    return length;
}

int closexms() {
    munmap(mm, SIZE);
    close(fd);
    fd = 0;
}
