#include <stdio.h>
#include <time.h>

const char * base = "t1000";

void filename(int i, char *buf) {
  sprintf(buf, "%s/f%d.txt",base,  i);
}

int main() {
  char buf[300];
  FILE *f = NULL;
  int NF = 50000;
   long t0, t1;
  
  t0 = clock();
 
  for (int i=0; i<NF; i++) {
    filename(i, buf);
    f = fopen(buf, "a");
    if (f == NULL) {
      printf("Problem with file %s\n", buf);
      perror("Cannot open file");
      break;
    }
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"some crab hwlekf sdghkfahg fjsdgh liasdghlagu dflasdgaukk g ajg  flsdak ag adgdgilasdbvcaiauserfw4glrifaer svdaibas ffffuerg fraw awgsdkjfs;aieqwe gas giaeu%d\n", i);
    fprintf(f,"\n", i);
    fclose(f);    
  }
  t1 = clock();
  long dt = t1-t0;
  printf("Changing %d files in flat folder took %ld clocks, %lf seconds\n",
	 NF, dt, (1.0 * dt)/(1.0*CLOCKS_PER_SEC));
  return 0;
}