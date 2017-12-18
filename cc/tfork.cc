/*
 * tfork.cc
 *
 *  Created on: Sep 30, 2011
 *      Author: mikhail
 */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/wait.h>
#include <netdb.h>
#include <signal.h>
#include <fcntl.h>

const int NPID = 10;
const int NREP = 0;
const int NREP1 = 199111888;
int pid, pids[NPID];

void error(const char *);
void waitall();

int main(int argc, char* argv[])
{
    // specify sigchild action to ignore
    signal(SIGCHLD, SIG_IGN);
    for (int j=0; j<NREP; j++) {
        printf(" s");
    }
    printf(" tfork() started\n");
    for (int i=0; i<NPID; i++) {
        if ((pid = fork()) == 0 ) {
            int sum=0;
            for (int j=0; j<NREP1; j++) {
                sum += j;
            }
            printf(" This is child, i, sum = %d %d\n", i, sum);
            return 0;
        } else if (pid == -1) {
            error("fork() failed");
        } else {
            pids[i] = pid;
        }
    }
    waitall();
    for (int j=0; j<NREP; j++) {
        printf(" e");
    }
    printf(" parent done\n");

    return 0;
}

void waitall() {
    int status;
    int nw = NPID;   // 1;
    for (int i=0; i<nw; i++) {
        int pid = waitpid(pids[i], &status, 0);
        if (pid == -1) {
            //  perror("wait error:");
        }
        printf(" waiting %d returned i, pid, status  = %d %d %d\n",
                pids[i], i, pid, status);
    }
    printf(" wait all done\n");
}

void error(const char *msg)
{
    perror(msg);
    exit(0);
}
