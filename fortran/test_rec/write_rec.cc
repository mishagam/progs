/*
 * write_rec.cc writing fotran timedata records
 *
 *  Created on: Jul 19, 2015
 *      Author: misha
 */

#include <stdio.h>
#include <stdlib.h>

#include "timepointdata.h"

int main() {
	FILE *f;
	const char *tdFileNm = "test_timedata.dat";
	RecData rd;
	int ret;

	f = fopen(tdFileNm, "wb");
	if (f==NULL) {
		printf("*** cannot open %s from writing\n", tdFileNm);
		return 101;
	}
	for (int i=0; i<10; i++) {
		rd.td.idx = (i+1);
		rd.lenA = sizeof(rd.td);
		rd.lenB = sizeof(rd.td);
		rd.td.fql[15] = i+ 0.01*i;
		ret = fwrite(&rd, sizeof(rd), 1, f);
		printf("Wrote record, ret = %d\n", ret);
	}
	fclose(f);
	printf("done writing\n");
	return 0;
}




