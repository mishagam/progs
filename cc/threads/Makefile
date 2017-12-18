CC = g++
ALL = pt_hello mth
PTHRED_FLAGS = -pthread

all:	$(ALL)

pt_hello:	pt_hello.cc
	$(CC) $(PTHRED_FLAGS) -o $@ $<

mth:	mth.o
#	$(CC) -lpthread -o $@ $<  -- doen't work for ubuntu 10.10
	$(CC) -pthread -o $@ $<

clean:
	rm -f $(ALL)
	rm -f *.o