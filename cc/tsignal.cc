#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>


// testing signals
int terminated = 0;
FILE *flog;
void Terminate(int par) {
    signal(par, Terminate);
    printf("Received signal %d, terminated = %d, pid, ppid = %d %d\n", 
            par, terminated, getpid(), getppid());
	flog = fopen("tsignal.log", "a");
	fprintf(flog, "Received signal %d, terminated = %d, pid, ppid = %d %d\n", 
            par, terminated, getpid(), getppid());
	fclose(flog);
	terminated++;
}

int main(int cc, char **vv) {
	signal(SIGTERM, Terminate);
	signal(SIGINT, Terminate);
	signal(SIGABRT, Terminate);
	signal(SIGHUP, Terminate);
	signal(SIGQUIT, Terminate);

	while (terminated < 5) {
		sleep(1);
	}
	printf("main() passed\n");
	flog = fopen("tsignal.log", "a");
	fprintf(flog, "main() passed\n");
	fclose(flog);
	return 0;
}
