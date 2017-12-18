#include <stdio.h>
#include <stdlib.h>

int main(int cc, char **vv) {
  int ret;
  int MSZ = 1600000000;
  char *l;
  
  printf("Allocating %d bytes\n", MSZ);
  l = (char *)malloc(MSZ);
  ret = (l != NULL);
  if (ret) {
     for (int i=0; i<MSZ; i++) {
        l[i] = 0;
     }
  }
  printf("malloc() passed, ret = %d\n", ret);
  return 0;
}
