CC = g++
TARGETS = logt
EZLOG_INC_DIR = $(HOME)/Distr/ezlogger
CFLAGS_CC = -g -I$(EZLOG_INC_DIR)
LDFLAGS = -g

all: $(TARGETS)

logt:	logt.o
	$(CC) $(LDFLAGS) $^ -o $@ 

%.o:	%.cc
	$(CC) $(CFLAGS_CC) -c $< 

clean:	
	rm -rf *.o
	rm -f *.dat
	rm -f $(TARGETS)
