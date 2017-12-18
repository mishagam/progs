// testing passing structures to from structures, 
#include <stdio.h>
#include <string.h>
#include "formod.h"

int MAIN__() {
    printf("Hello from C, calling fortran \n");
    try {
      subtex_();
    } catch (...) {
      printf("We caught exception\n");
    }
    printf("Fortran procedure passed\n");
    return 0;
}
