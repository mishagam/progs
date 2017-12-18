#include <stdio.h>

class Tf {
  
  public:
    int friend ffunc();
  
};

int main() {
  int r = ffunc();
  return 0;
}

int ffunc() {
  printf("Ffunc called\n");
  return 1;
}