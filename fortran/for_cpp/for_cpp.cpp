//============================================================================
// Name        : for_cpp.cpp
// Author      : Misha
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include "stdio.h"

#include "for_cpp.h"

int main() {
	printf("For_cppc started\n");
	fortproc_();
	printf("Fortproc passed\n");
	return 0;
}

void cproc_(const char *a, const char *b, int *iarg, int la, int lb) {
	printf("la, lb = %d %d\n", la, lb);
	printf("a: |%s|\n", a);
	printf("b: |%s|\n", b);
	printf("iarg = %d\n", *iarg);
}
