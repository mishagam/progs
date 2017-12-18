
#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/types.h>
#include<sys/stat.h>
#include<sys/socket.h>
#include<sys/wait.h>
#include<arpa/inet.h>
#include<netdb.h>
#include<signal.h>
#include<fcntl.h>

const int BYTES = 10000;
const int SIMUL_CONNECTIONS = 10;

int listenfd;
void error(const char *);
void startServer(char *);
void respond(int, int);

int main(int argc, char* argv[])
{
    struct sockaddr_in clientaddr;
    socklen_t addrlen;
    char c;
    int counter = 77;

    // specify sigchild action to ignore
    signal(SIGCHLD, SIG_IGN);
    
    //Default Values PATH = ~/ and PORT=10000
    char PORT[6];
    strcpy(PORT,"8888");

    //Parsing the command line arguments
    while ((c = getopt (argc, argv, "p:r:")) != -1)
        switch (c)
        {
            case 'p':
                strcpy(PORT,optarg);
                break;
            case '?':
                fprintf(stderr,"Wrong arguments given!!!\n");
                exit(1);
            default:
                exit(1);
        }
    
    printf("Server started at port no. %s\n", PORT);
    // Setting all elements to -1: signifies there is no client connected
    startServer(PORT);

    // ACCEPT connections
    while (1)
    {
        addrlen = sizeof(clientaddr);
        int client = accept (listenfd, (struct sockaddr *) &clientaddr, &addrlen);

        if (client<0)
            error ("accept() error");
        else
        {
            if ( fork()==0 )
            {
                respond(client, counter);
                exit(0);
            } else {
                counter++;
            }
        }
    }

    return 0;
}

//start server
void startServer(char *port)
{
    struct addrinfo hints, *res, *p;

    // getaddrinfo for host
    memset (&hints, 0, sizeof(hints));
    hints.ai_family = AF_INET;
    hints.ai_socktype = SOCK_STREAM;
    hints.ai_flags = AI_PASSIVE;
    if (getaddrinfo( NULL, port, &hints, &res) != 0)
    {
        perror ("getaddrinfo() error");
        exit(1);
    }
    // socket and bind
    for (p = res; p!=NULL; p=p->ai_next)
    {
        listenfd = socket (p->ai_family, p->ai_socktype, 0);
        if (listenfd == -1) continue;
        if (bind(listenfd, p->ai_addr, p->ai_addrlen) == 0) break;
    }
    if (p==NULL)
    {
        perror ("socket() or bind()");
        exit(1);
    }
    freeaddrinfo(res);
    // listen for incoming connections
    if ( listen (listenfd, 1000000) != 0 )
    {
        perror("listen() error");
        exit(1);
    }
}

//client connection
void respond(int client, int counter)
{
    char mesg[9999], buf[BYTES], buf1[BYTES], path[999];
    const char  *reqline[3];
    int rcvd, fd, nbytes;

    memset( (void*)mesg, (int)'\0', 9999 );

    rcvd=recv(client, mesg, 9999, 0);

    if (rcvd<0) {  // receive error
        fprintf(stderr,("recv() error\n"));
    } else if (rcvd==0) {   // receive socket closed
        fprintf(stderr,"Client disconnected upexpectedly.\n");
    }
    else    // message received
    {
        printf("%s", mesg);
        reqline[0] = strtok (mesg, " \t\n");
        if ( strncmp(reqline[0], "GET\0", 4)==0 )
        {
            reqline[1] = strtok (NULL, " \t");
            reqline[2] = strtok (NULL, " \t\n");
            if ( strncmp( reqline[2], "HTTP/1.0", 8)!=0 && strncmp( reqline[2], "HTTP/1.1", 8)!=0 )
            {
                write(client, "HTTP/1.0 400 Bad Request\n", 25);
            }
            else if (strstr(reqline[1], ".json") !=NULL)
            {
                // JSON response
                char *json=buf1;
                sprintf(buf1, "[{ \"aaa\" : \"55\", \"bbb\" : \"%d\" }]\n", counter);
                int contentLength = strlen(json);
                sprintf(buf, "HTTP/1.0 200 OK\n"
                        "Content-Type: application/x-javascript; charset=utf-8\n"
                        "Content-Length: %d\n"
                        "Pragma: no-cache\n"
                        "Cache-Control: no-store, no-cache, must-revalidate, private, post-check=0, pre-check=0\n"
                        "Connection: close\n\n", contentLength);
                write (client, buf, strlen(buf));
                write (client, json, strlen(json));
                printf("Send JSON response: %s %s\n", buf, json);
            }
            else if (strstr(reqline[1], ".xml") !=NULL)
            {
                // XML response
                char *xml=buf1;
                sprintf(buf1, "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n"
                        "<topra><aaa>55</aaa><bbb>%d</bbb></topra>", counter);
                int len = strlen(xml);
                sprintf(buf, "HTTP/1.0 200 OK\n"
                        "Content-Type: text/xml\n"
                        "Content-Length: %d\n"
                        "Pragma: no-cache\n"
                        "Cache-Control: no-store, no-cache, must-revalidate, private, post-check=0, pre-check=0\n"
                        "Connection: close\n\n", len);
                write (client, buf, strlen(buf));
                write (client, xml, strlen(xml));
                printf("Send XML response: %s %s\n", buf, xml);
            }
        }
    }

    //Closing SOCKET
    shutdown (client, SHUT_RDWR);         //All further send and recieve operations are DISABLED...
    close(client);
}

void error(const char *msg)
{
    perror(msg);
    exit(0);
}

