LOG = dl_test.log
COMP_CC	= g++
TARGET	= misdl
MNLIB	= libmean.so
CFLAGS	= -c -g

%.o:	%.cc
	$(COMP_CC) $(CFLAGS) $< 

%.o:	%.c 
	$(COMP_CC) $(CFLAGS) $< 

misdl:	$(MNLIB) mis.o
	$(COMP_CC) mis.o -o $(TARGET) -L. -lmean

libmean.so:	mean.o
	$(COMP_CC) -shared -Wl,-soname,libmean.so -o libmean.so  mean.o

so:	$(MNLIB)

all:	$(TARGET) $(MNLIB)
clean:	
	rm -f l*
	rm -f misdl
	rm -f *~
	rm -f *.o

