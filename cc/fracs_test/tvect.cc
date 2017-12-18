#include <string.h>

#include "strtoolm.h"
#include "vectorm.h"

int icomp(int &a, int &b) {
	return a-b;
}

int keyfunc(int &i) {
	return i;
}


int main() {
	printf("Testing vectorm\n");
	vectorm<int> vi;
	int v;

	v=5; vi.push_back(v);
	v=1; vi.push_back(v);
	v=3; vi.push_back(v);
	v=2; vi.push_back(v);
	vi.sort(0,4,icomp);
	printf("sorted values: ");
	for (int i=0; i<vi.size(); i++) {
		printf(" %d", vi[i]);
	}
	printf("\n");
	int key = 7;
	int ifo = vi.binary_search(key, keyfunc);
	printf("search for %d Found index, val %d %d\n", key, ifo, vi[ifo]);
	return 0;
}
