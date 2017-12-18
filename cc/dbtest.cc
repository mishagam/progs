#include <stdio.h>

#include "bbb.h"

int main()
{
  // print environment
  char *lname = getenv("LOGNAME");
  printf("lname = %s\n", lname);
  printf("LD_LIBRARY_PATH = %s\n", getenv("LD_LIBRARY_PATH"));
  int b = bbb(a);
  printf("a, b = %d %d\n", a, b);
  return 0;
}