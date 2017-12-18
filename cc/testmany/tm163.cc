#include <stdio.h>
#include <time.h>

const char * base = "t163";

void filename(int i, char *buf) {
  int isb = i / 312;
  int itv = i % 312;
  sprintf(buf, "%s/d%d/f%d.txt",base,  isb, itv);
}

int main() {
  char buf[300];
  FILE *f = NULL;
  int NF = 163*312;
  long t0, t1;
  
  t0 = clock();
  for (int i=0; i<NF; i++) {
    filename(i, buf);
    f = fopen(buf, "aw");
    if (f == NULL) {
      printf("Problem with file %s\n", buf);
      perror("Cannot open file");
      break;
    }
    fprintf(f,"some crab %d\n", i);
    fclose(f);    
  }
  t1 = clock();
  long dt = t1-t0;
  printf("Changing %d files took %ld clocks, %lf seconds\n",
	 NF, dt, (1.0 * dt)/(1.0*CLOCKS_PER_SEC));
  return 0;
}