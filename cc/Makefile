CC = g++

TARGETS = mis msize tmemmap tfork cnt_arg_size ttime tfriend tf tbigmem tsystem pow2 tsignal

all: $(TARGETS)

dl_test:	
	cd dl_test && make all

.PHONY : sockets

sockets: 
	cd sockets ; make all

ttime:	ttime.o
#	$(CC) -lpthread -o $@ $<  -- doen't work for ubuntu 10.10
	$(CC) -lrt -o $@ $<

get_libc:	get_libc.c
	g++ -D_FILE_OFFSET_BITS=64 get_libc.c -o get_libc 
	
tfriend: tfriend.cc
	g++-4.4  -o $@ $<

clean:	
	rm -rf *.o
	rm -f $(TARGETS)
	cd sockets ; make clean
	cd bigmmap ; make clean
	cd dl_test ; make clean
	cd mpi ; make clean
	cd 32bit; make clean
	cd fracs_test; make clean	
	cd gtk; make clean
	cd threads; make clean

