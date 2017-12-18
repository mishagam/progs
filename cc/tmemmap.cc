/**
 * test linux memory mapped files
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

int main(int cc, char **vv) {
  const char *fn = "data/mmap.txt";
  int fd;
  const int SIZE = 10000;

  printf("cc = %d   vv[1] = %s\n", cc, vv[1]);
  if (cc > 1 && vv[1][0] == 'r') {
      // read memory mapped file
      printf("starting testing mmap read\n");
      fd = open(fn, O_RDONLY);
      printf("File %s opened, fd = %d\n", fn, fd);
      char *mm = (char *)mmap(NULL, SIZE, PROT_READ, MAP_SHARED, fd, 0);
      char *lm = mm;
      printf("mmap passed, mm = %p\n", mm);
      for (int i=0; i<1000; i++) {
          printf("%c", *lm++);

      }
      printf("\nreading mm passed\n");
      munmap(mm, SIZE);
  } else {
      // write memory mapped file
      printf("starting testing mmap write\n");
      fd = open(fn, O_RDWR);
      printf("File %s opened, fd = %d\n", fn, fd);
      char *mm = (char *)mmap(NULL, SIZE, PROT_WRITE, MAP_SHARED, fd, 0);
      char *lm = mm;
      printf("mmap passed, mm = %p\n", mm);
      for (int i=0; (lm - mm) < SIZE; i++) {
          strcpy(lm, "MishaMisha Gambarian Very Clever IdiotMishaMisha Gambarian Very Clever Idiot\n");
          printf("m ");
          lm = lm + strlen(lm);
      }
      printf("filling mm passed\n");
      munmap(mm, SIZE);
  }
  close(fd);
  return 0;
}
