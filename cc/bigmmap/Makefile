CC = g++
TARGETS = bmm bmlfs bmmem tspeed
LFSFLAGS = -D_FILE_OFFSET_BITS=64

all: $(TARGETS)

bmlfs:	bmlfs.cc
	g++ $(LFSFLAGS) $^ -g -o $@

bmm:	bmm.cc
	g++ $^ -g -o $@

tspeed:	tspeed.cc
	g++ $^ -g -o $@

clean:	
	rm -rf *.o
	rm -f *.dat
	rm -f $(TARGETS)
