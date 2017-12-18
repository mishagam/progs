#include <stdio.h>
#include <string>
#include <vector>

extern "C" {

void csub_(int *pi, int *pj);
int cfun_(int *pi);

}



void csub_(int *pi, int *pj) {
    int ret = 95;
    printf(" Hello from ccsub, pi = %d\n", *pi);
    *pj =  ret;

    // testing stl
    std::string sa("hsfjksdhfksdjhdk");
    printf("sa: %s\n", sa.c_str());
}

int cfun_(int *pi) {
    int ret = 87;
    printf(" Hello from cfun, pi = %d\n", *pi);
    return ret;
}
