/* Main.cpp */ 
// #include <windows.h> 
#include <mpi.h> 
#include <time.h>
#include <list>
#include <algorithm>
#include <iostream>

using namespace::std; 
void SaveNumOfDraws(char draw[], int count, double elapsed_time);

// 
// Globals: 
// 
int myRank;
int numProcs;
char host[256]; 


int main(int argc, char* argv[]) 
{ 

    char msg[400];
    char terminate[12];
    MPI_Status status, stat[10];
    int src = MPI_ANY_SOURCE; // receive from any worker
    int tag = MPI_ANY_TAG;    // tag is being ignored
    int Play[6] = {0,0,0,0,0,0};
    int flag = 0;
    int index;
    int bTerminate=0;
    clock_t start, finish;
    double elapsed_time;

    int range_min, range_max;
    unsigned long recvbuf;
    unsigned long count=0;

    using namespace std;

    list <int> Draw;
    list <int>::iterator Iter;
    list <int>::iterator result;

    range_min = 1;
    range_max = 71;

    start = clock();

    MPI_Init(&argc, &argv); //initiate the MPI environment
    MPI_Comm_size(MPI_COMM_WORLD, &numProcs); // number of processes involved in run 
    MPI_Comm_rank(MPI_COMM_WORLD, &myRank); // my process id: 0 <= myRank < numProcs 
    gethostname(host, sizeof(host)/sizeof(host[0])); // machine we are running on 


    if (myRank > 0)
    { 
        // workers code        
        int dest = 0; // process 0
        int tag = 0;  // any value will do
        src = 0;
                    int n = 0;
        int num;
        bool winner = false;
        
        MPI_Barrier(MPI_COMM_WORLD);

        //receive player numbers
        MPI_Recv(Play, 6, MPI_INT, 0, 0, MPI_COMM_WORLD, &status);
        
        sprintf(msg,  "Process %d received play numbers", myRank);
        cout << msg << endl;
        for (int i=0; i<6; i++) {
            cout << " " << Play[i];
        }
            
        cout << endl;

        // Seed the random-number generator with the current time so that
                    // the numbers will be different every time we run.
        
        srand( myRank * (unsigned) time(NULL) );
        do
        {
            Draw.push_back ((double)rand() / (32767 + 1) * (range_max - range_min) + range_min);
            do
            {
                num = ((double)rand() / (32767 + 1) * (range_max - range_min) + range_min);
                result = find( Draw.begin( ), Draw.end( ), num );
                if (result == Draw.end()){ 
                    Draw.push_back(num);
                    n++;
                }
            } while (n<5);
                        
            result = find( Draw.begin( ), Draw.end( ), Play[0] );
            if  ( result != Draw.end( ) ) {                         
                result = find( Draw.begin( ), Draw.end( ), Play[1] );
                if  ( result != Draw.end( ) ) {
                        result = find( Draw.begin( ), Draw.end( ), Play[2] );
                    if  ( result != Draw.end( ) ) {
                        result = find( Draw.begin( ), Draw.end( ), Play[3] );
                        if  ( result != Draw.end( ) ) {
                            result = find( Draw.begin( ), Draw.end( ), Play[4] );
                            if  ( result != Draw.end( ) ) {
                                result = find( Draw.begin( ), Draw.end( ), Play[5] );
                                if  ( result != Draw.end( ) ) {
                                    sprintf(msg, "Process %d at %s found a Winner after: ", myRank, host);
                                    MPI_Send(msg, (int) strlen(msg)+1, MPI_CHAR, 0, 0, MPI_COMM_WORLD);
                                }
                            }
                        }
                    }
                }
            }
            Draw.clear ();
            count++;
            n=0;
            MPI_Iprobe( 0, 0, MPI_COMM_WORLD, &flag, &status );
        }while (!flag); 

        MPI_Recv(terminate, 12, MPI_CHAR, 0, 0, MPI_COMM_WORLD, &status);
        //cout << terminate << endl;
        MPI_Reduce( &count, &recvbuf, 1, MPI_UNSIGNED_LONG, MPI_SUM, 0, MPI_COMM_WORLD);
        
    }
    else
    { // master's code

        int numargs;
        
        //read command-line arguments
        //for( numargs = 1; numargs < argc; numargs++ )
        //            Play[numargs-1] = atol(argv[numargs]);
        
        for (int i=0; i<6; i++) {
            Play[i] = i;
        }
        
        MPI_Request *rreqs = (MPI_Request *)malloc((numProcs-1) * sizeof(MPI_Request));
        
        MPI_Barrier(MPI_COMM_WORLD);
        sprintf(msg,  "Master process %d is running on '%s'.", myRank,  host);
        cout << msg << endl;

        //sends the play numbers to all processes
        for (int proc = 1; proc < numProcs; proc++) // for each of the workers:
        {   
            MPI_Send(Play, 6, MPI_INT, proc, 0 /* tag */, MPI_COMM_WORLD);
        }

        //assync request awaiting for a winner process to comunicate
        for (int proc = 1; proc < numProcs; proc++) // for each of the workers:
        {   
            MPI_Irecv(msg, 400, MPI_CHAR, proc, tag, MPI_COMM_WORLD, &rreqs[proc-1]);
        }

        //wait to receive a notification from the process with a winner draw
        MPI_Waitany(numProcs-1, rreqs, &index, stat);

        sprintf(terminate, "TERMINATED");

        //notify all process that a winner was found. They should terminate now    
        for (int proc = 1; proc < numProcs; proc++) // for each of the workers:
        {   
            MPI_Send(terminate, 12, MPI_CHAR, proc, 0 /* tag */, MPI_COMM_WORLD);
        }
        
        MPI_Reduce( &count, &recvbuf, 1, MPI_UNSIGNED_LONG, MPI_SUM, 0, MPI_COMM_WORLD);
        
        finish = clock();
        elapsed_time = difftime(finish, start);
                    SaveNumOfDraws(msg, recvbuf, elapsed_time);
        
        bTerminate = 1;

    }

    MPI_Finalize(); 
    return 0; 
}

void SaveNumOfDraws(char draw[], int count, double elapsed_time)
{
    char   c = '\n';
    FILE *stream;


    // Open for append
    stream = fopen( "numberofDraws.txt", "a+" );
    if( stream == 0 )
        {
            //printf( "The file 'numberofDraws.txt' was opened\n" );
        }
    else
        {
            //printf( "The file 'numberofDraws.txt' was not opened\n" );
        }
    
    fprintf( stream, "%s%d %6.5f%c", draw, count, elapsed_time, c );
    fclose( stream );

}