#include <stdio.h>
#include <math.h>

int main() {
  int ii;
  char ch;
  int *pii;
  float r,r1;

  printf("Hello from some Linux\n");
  printf("size int = %d\n", sizeof(ii));
  printf("size *int = %d\n", sizeof(pii));
  printf("size char = %d\n", sizeof(ch));
  r = 3.456;
  r1 = 3.5001;
  printf("Round r,r1 = %f %f\n", round(r), round(r1));
  return 0;
}

