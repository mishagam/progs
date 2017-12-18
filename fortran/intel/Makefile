# =============================================
# Makefile for testing linux intel compiler
# ==============================================
COMP_INTEL_CC  = iccbin
COMP_INTEL_FOR = ifortbin
TARGETS = tf tfor cformod ge tdata tfile mstl tex ge tex teststr \
	smpc tf9 fargs writebin wb_record

DEBUG_FLAGS = -g
FLAGS_F    = $(DEBUG_FLAGS) -check bounds
FLAGS_CC    = $(DEBUG_FLAGS) -I/usr/include/i386-linux-gnu
LDFLAGS     = $(DEBUG_FLAGS) -lstdc++ 

ASK_MAP_FILE = -Wl,-Map,link.map

all: $(TARGETS)

tf:  csub.o test.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS)

smpc:  smpc.o
	$(COMP_INTEL_CC)  -o $@ $^ $(LDFLAGS)

tfor:  tfor.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS)

tf9:  tf9.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS)

cformod:  cmain.o formodule.o forprog.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS) $(ASK_MAP_FILE)

ge:  getenv.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS) 

tdata:  tdata.o
	$(COMP_INTEL_FOR) -auto   -o $@ $^ $(LDFLAGS) 

tfile:  tfile.o
	$(COMP_INTEL_FOR) -auto   -o $@ $^ $(LDFLAGS) 

mstl:  mstl.o
	$(COMP_INTEL_CC)  -o $@ $^ $(LDFLAGS) 
	
tex: cmain_tex.o for_tex.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS) $(ASK_MAP_FILE)

teststr:  teststr.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS) 

tstr:  tstr.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS)
	
ts:  testSpeed.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS) 
	
fargs:  fargs.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS) 
	
writebin:  writebin.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS) 
	
wb_record:   wb_record.o wb_record_prog.o
	$(COMP_INTEL_FOR)  -o $@ $^ $(LDFLAGS) 

%.o:	%.f
	$(COMP_INTEL_FOR) $(FLAGS_F) -c $<  

%.o:	%.f90
	$(COMP_INTEL_FOR) $(FLAGS_F) -c $<  

%.o:	%.cc
	$(COMP_INTEL_CC) $(FLAGS_CC) -c $< 

%.o:	%.cpp
	$(COMP_INTEL_CC) $(FLAGS_CC) -c $< 

%.o:	%.c
	$(COMP_INTEL_CC) $(FLAGS_CC) -c $< 

cl:  
	rm -f $(TARGETS)
	rm -f *.o *.mod *.map *.out *.tmp
	rm -f *~
	rm -f link.map

clean:  cl
	rm -f *.b *.o *.d 

