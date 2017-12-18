// testing passing structures to from structures, 
#include <stdio.h>
#include <string.h>
#include "formod.h"

int getAllArgs(char **vv, int maxvv, char *argBuf) {
    int cc, idx, err=0;
    char arg[100];
    char *pa = argBuf;
    for (int i=0; i<maxvv; i++) {
        idx = i;
        getarg_(&idx, arg, 98, &err);
        if (err < 0 || arg[0]==' ') {
            cc = i+1;
            break;
        }
        char *l = arg + 96;
        while (*l == ' ') l--;
        *(l+1) = 0;
        strcpy(pa, arg);
        vv[i] = pa; 
        pa += strlen(arg)+1;
    }
    return cc;
}

// int MAIN__() {
int cmainnnn_() {
    int ret = 87;
    int ii = 555;
    const int BUF_SIZE = 20;
    double dd = 99.87654321; 
    forstruct fors0;
    forstruct *fors1;    
    char buf[BUF_SIZE];
    char sa[BUF_SIZE];
    char sb[BUF_SIZE];
    char argbuf[300];
    const int MaxBuf = 20;
    char *vv[MaxBuf];
    int cc = 0;

    strcpy(sa, "aaaaaa  ");
    strcpy(sb, "bbbbbb  ");
    f2s(sa,sb,7,7);
    return 0;
    cc = getAllArgs(vv, MaxBuf, argbuf);
    printf("returned cc = %d, vv0 = %p\n", cc, vv[0]);
    for (int i=0; i<cc; i++) {
        printf(" %d %p %s\n", i, vv[i], vv[i]);
    }
    fors1 = new forstruct();
    forproc(&fors0, fors1, &ii, &dd);
    fors0.aaa = 2468;
    fors0.fff = 111111.11111111;
    fors0.ddd = 33333333.3333333333333333333333333;

    printf("after forproc fors.aaa, ddd = %d %22.18lf ii= %d dd  = %lf\n", 
           fors0.aaa, fors0.ddd, ii, dd);
    printf("after forproc fors1.aaa, ddd = %d %22.18lf ii= %d dd  = %lf\n", 
           fors1->aaa, fors1->ddd, ii, dd);
    tobuf(&fors0, buf);
    frombuf(fors1, buf);
    printf("after copy fors1.aaa,fff,ddd = %d  %10f  %22.18lf ii= %d dd  = %lf\n", 
           fors1->aaa, fors1->fff, fors1->ddd, ii, dd);
    delete fors1;
    
    return ret;
}
