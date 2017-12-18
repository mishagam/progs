// test environment
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "mean.h"

int main() {
  printf("Test environment started\n");
  char *h = getenv("HOME");
  printf("home = %s\n", h);
  return 0;
}
