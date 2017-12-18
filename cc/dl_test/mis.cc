#include <stdio.h>
#include <stdlib.h>
#include "mean.h"

int main() {
  double a = 23;
  double b = 1;
  double c = mean(a,b);
  // print environment
  char *lname = getenv("LOGNAME");
  printf("lname = %s\n", lname);
  printf("LD_LIBRARY_PATH = %s\n", getenv("LD_LIBRARY_PATH"));
  printf("AAA = %s\n", getenv("AAA"));
  printf("a,b = %f %f , mean = %f\n", a,b,c);
  return 0;
}
