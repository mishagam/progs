# =============================================
# Makefile for testing linux intel compiler
# ==============================================
COMP_INTEL_CC  = iccbin
COMP_INTEL_FOR = ifortbin
TARGETS = cf

DEBUG_FLAGS = -g
FLAGS_F    = $(DEBUG_FLAGS) -check bounds -mixed_str_len_arg 
FLAGS_CC    = $(DEBUG_FLAGS)
LDFLAGS     = $(DEBUG_FLAGS) -lstdc++ 

ASK_MAP_FILE = -Wl,-Map,link.map

all: $(TARGETS)

cf:  cmain.o formodule.o
	$(COMP_INTEL_FOR) -o $@ $^ $(LDFLAGS) $(ASK_MAP_FILE)

%.o:	%.f
	$(COMP_INTEL_FOR) $(FLAGS_F) -c $<  

%.o:	%.c
	$(COMP_INTEL_CC) $(FLAGS_CC) -c $< 

cl:  
	rm -f $(TARGETS)
	rm -f *.o *.mod *.map *.out
	rm -f *~
	rm -f link.map

clean:  cl
	rm -f *.b *.o *.d 

