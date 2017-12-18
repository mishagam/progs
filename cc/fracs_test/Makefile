CC = g++

PROGS = tvect
all:	$(PROGS)

tvect: tvect.o debug_utils.o
	$(CC) $^ -o $@

clean:	
	rm -rf *.o
	rm -f $(PROGS)
	