CC = g++

TARGETS = mt mt64 mt32

all: $(TARGETS)

mt32:	mt.cc
	g++ -m32 mt.cc -o mt32 
	
mt64: mt.cc
	g++ -m64  -o $@ $<

clean:	
	rm -rf *.o
	rm -f $(TARGETS)
	rm -f a.out
