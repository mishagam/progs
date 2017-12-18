# =============================================
# Makefile for testing linux intel compiler
# ==============================================
COMP_INTEL_CC  = gcc
COMP_INTEL_FOR = gfortran
TARGETS = for_cpp

DEBUG_FLAGS = -g
FLAGS_F    = $(DEBUG_FLAGS) 
FLAGS_CC    = $(DEBUG_FLAGS)
LDFLAGS     = $(DEBUG_FLAGS) -lstdc++ 

ASK_MAP_FILE = -Wl,-Map,link.map

all: $(TARGETS)

for_cpp:  for_cpp.o fortproc.o
	$(COMP_INTEL_FOR) $(ASK_MAP_FILE) -o $@ $^ $(LDFLAGS) 


%.o:	%.for
	$(COMP_INTEL_FOR) $(FLAGS_F) -c $<  

%.o:	%.cc
	$(COMP_INTEL_CC) $(FLAGS_CC) -c $< 

%.o:	%.cpp
	$(COMP_INTEL_CC) $(FLAGS_CC) -c $< 

%.o:	%.c
	$(COMP_INTEL_CC) $(FLAGS_CC) -c $< 

cl:  
	rm -f $(TARGETS)
	rm -f *.o *.mod *.map *.out
	rm -f *~
	rm -f link.map

clean:  cl
	rm -f *.b *.o *.d 

