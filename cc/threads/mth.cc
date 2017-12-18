// test pthreads and semaphors
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/sem.h>
#include <stdio.h>
#include <pthread.h>
#include <errno.h>
#include <unistd.h>


const int MISHA_UID = 1000;
const int MISHA_GID = 1000;
const int PERM_MODE = 0666;
const int NTH = 4;
const int NREP = 10;

const char *ipcFilename = "/home/misha/progs/cc/key1";
key_t Key;
int ID = 1;
int semIdAB;

union semun {
    int              val;    /* Value for SETVAL */
    struct semid_ds *buf;    /* Buffer for IPC_STAT, IPC_SET */
    unsigned short  *array;  /* Array for GETALL, SETALL */
    struct seminfo  *__buf;  /* Buffer for IPC_INFO (Linux specific) */
};

void * pmfA(void *m);
void * pmfB(void *m);
void * pmfC(void *m);
void * pmfD(void *m);
void checkSem(int semid);
void prepareSem();
void initSemVal(int semIdx);
void semSet(int semIdx);
void semWait(int semIdx);

int main() {
  printf("test pthread started, \n");
  pthread_t th[NTH];
  void *r1, *r2;
  
  // trying to set up semaphores
  Key = ftok(ipcFilename, ID);
  printf("Obtained Key = %d\n", Key);
  semIdAB = semget(Key, 4, IPC_CREAT);
  printf("Obtained Semaphor = %d\n", semIdAB);
  if (semIdAB == -1) {
    perror("semget()");
    return 111;
  }
  prepareSem();
  checkSem(0);
  initSemVal(0);
  initSemVal(1);
  initSemVal(2);
  initSemVal(3);
  semSet(0);

  /* Create independent threads each of which will execute function */
  pthread_create( &th[0], NULL, pmfA, (void*)"Thread A");
  pthread_create( &th[1], NULL, pmfB, (void*)"Thread B");
  pthread_create( &th[2], NULL, pmfC, (void*)"Thread C");
  pthread_create( &th[3], NULL, pmfD, (void*)"Thread D");
   printf("pthread_create() passed\n");
  
  // finishing threads
  for (int i=0; i<NTH; i++) {
    pthread_join(th[i], &r1);
  }
  
   printf("thread function returns %p %p\n", r1, r2);
  return 0;
}

void checkSem(int semid) {
  struct semid_ds smds;
  int ret = semctl(semIdAB, 2, IPC_STAT, &smds);
  printf("checkSem, semctrl returned %d\n", ret);
  if (ret == -1) {
    printf("Recived errno = %d\n", errno);
    perror("semctl() IPC_STAT");
  }
}

void prepareSem() {
  struct semid_ds smds;
  struct ipc_perm *pperm = &(smds.sem_perm);
  // pperm->key = Key;
  pperm->uid = MISHA_UID;
  pperm->gid = MISHA_GID;
  pperm->mode = PERM_MODE;
  int ret = semctl(semIdAB, 0, IPC_SET, &smds);
  printf("prepareSem(), semctrl returned %d\n", ret);
  if (ret == -1) {
    printf("Recived errno = %d\n", errno);
    perror("semctl() IPC_STAT");
  }
}

void initSemVal(int semIdx) {
  union semun smu;
  smu.val = 0;
  int ret = semctl(semIdAB, semIdx, SETVAL, smu);
  printf("initSemVal(), semctrl returned %d\n", ret);
  if (ret == -1) {
    printf("initSemVal() Received errno = %d\n", errno);
    perror("initSemVal() semctl() IPC_STAT");
  }
}

void semSet(int semIdx) {
  struct sembuf sb;
  sb.sem_num = semIdx;
  sb.sem_op = 1;
  sb.sem_flg = 0;
  int ret = semop(semIdAB, &sb, 1);
  if (ret == -1) {
    perror("semSet()");
  }
}

void semWait(int semIdx) {
  struct sembuf sb;
  sb.sem_num = semIdx;
  sb.sem_op = -1;
  sb.sem_flg = 0;
  int ret = semop(semIdAB, &sb, 1);
  if (ret == -1) {
    perror("semWait()");
  }
}

void* pmfA(void *pv) {
  char * ms = (char *) pv;
  for (int i=0; i<NREP; i++) {
    // get sem A
    semWait(0);  
    sleep(1);
    printf("%s %d\n", ms , i);
    semSet(1);    
  }
  return NULL;
}
void* pmfB(void *pv) {
  char * ms = (char *) pv;
  for (int i=0; i<NREP; i++) {
    semWait(1);
    printf("%s %d\n", ms , i);
    semSet(2);
  }
  return NULL;
}
void* pmfC(void *pv) {
  char * ms = (char *) pv;
  for (int i=0; i<NREP; i++) {
    semWait(2);
    printf("%s %d\n", ms , i);
    semSet(3);
  }
  return NULL;
}
void* pmfD(void *pv) {
  char * ms = (char *) pv;
  for (int i=0; i<NREP; i++) {
    semWait(3);
    printf("%s %d\n", ms , i);
    semSet(0);
  }
  return NULL;
}