// testing passing structures to from structures, 
#include <stdio.h>
#include <string.h>
#include "formod.h"

int MAIN__() {
    const int BUF_SIZE = 20;
    char sa[BUF_SIZE];
    char sb[BUF_SIZE];

    strcpy(sa, "aaaaaa");
    memset(sa+6, ' ', 14);
    strcpy(sb, "bbbbbb");
    memset(sb+6, ' ', 14);
    f2s(sa,6, sb,8);
    return 0;
}
