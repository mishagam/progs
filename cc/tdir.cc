#include <sys/types.h>
#include <dirent.h>
#include <stdio.h>
#include <stdlib.h>

int main(int cc, char **vv) {
  DIR *d = opendir(".");
  struct dirent *de;
  
  while ((de = readdir(d)) != NULL) {
	printf("type, name: %d, %s\n", de->d_type, de->d_name);
  }
  closedir(d);
  system("mv tempdir tt");
  return 0;
}
