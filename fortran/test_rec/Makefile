# =============================================
# Makefile for testing writing and reading records
# =============================================
COMP_INTEL_FOR = ifortbin
COMP_GCC_CC = g++

TARGETS = wr rrf

all: $(TARGETS)

wr: write_rec.o
	$(COMP_GCC_CC) -o $@ $^

rrf: timepointdata.o read_rec.o
	$(COMP_INTEL_FOR) -o $@ $^
	
%.o:	%.FOR
	$(COMP_INTEL_FOR)  -c $<  

%.o:	%.cc
	$(COMP_GCC_CC)  -c $<  

clean:  
	rm -f $(TARGETS)
	rm -f *.o *.mod *.map *.out *.b *.d
	rm -f *.dat
	rm -f *~

	