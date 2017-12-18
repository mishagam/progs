#include <stdio.h>
#include <unistd.h>
int main() {
    return printf("ARG_MAX: %ld\n", sysconf(_SC_ARG_MAX));
} 

