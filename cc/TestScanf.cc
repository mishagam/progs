/*
 * TestScanf.cc
 *
 *  Created on: May 25, 2011
 *      Author: mikhail
 */
#include <stdio.h>

int main(int cc, char **vv) {
    char sa[100];
    char sb[100];
    float ia, ib, ic;
    double hour=0;
    int ns;

    ns = sscanf("2.5 tvel   ql 60 200 400",
            "%lf %s %s %f %f %f",
            &hour, sa, sb, &ia, &ib, &ic);
    printf("hour = %f\n", hour);
    printf("sa = %s\n", sa);
    printf("sb = %s\n", sb);
    printf("ia = %f\n", ia);
    printf("ib = %f\n", ib);
    printf("ic = %f\n", ic);

    return 0;
}
