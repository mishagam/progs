CC = mpic++
ALL = hmpi mismpi

all:	$(ALL)

hmpi:	hellompi.cc
	$(CC) -o $@ $<

mismpi:	mismpi.cc
	$(CC) -o $@ $<
	
clean:
	rm -f $(ALL)