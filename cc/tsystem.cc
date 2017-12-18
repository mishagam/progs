#include <stdio.h>
#include <stdlib.h>

int main(int cc, char **vv) {
  int ret;
  const char *cmd = "cp ~/temp/long.mp4 ~/temp/ll.mp4";
  
  printf("Running command %s\n", cmd);
  ret = system(cmd);
  printf("system(%s) done, ret = %d\n", cmd, ret);
  return 0;
}
