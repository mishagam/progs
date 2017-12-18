#include <stdio.h>
#include <time.h>
#include "mean.h"

int main() {
    double sum=0;
    char c = 0;
  while (c != '.') {
      for (int i=0; i<1000000; i++) {
          for (int j=0; j<1000; j++) {
              sum += i+j;
          }
      }
      c = getchar();    
      printf("%c ", c);
      fflush(stdout);
  }
  printf ("sum = %f\n", sum);
// edited from VirtualBox
  
  return 0;
}
