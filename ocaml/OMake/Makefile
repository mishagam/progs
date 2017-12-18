#Builder to use:
OCAMLC=ocamlc

#Is it native?
OPT= no

LIBS = str.cma nums.cma unix.cma
FLAGS = -g
TARGETS = cod
all: $(TARGETS)

%.cmo:	%.ml
	$(OCAMLC) $(FLAGS) -c $<

cod:	Active.cmo
	$(OCAMLC)  $(FLAGS) $(LIBS) $^ -o $@

clean:
	rm -f *.cmo	 
	rm -f *.exe
	rm -f *.cmi	
	rm -f $(TARGETS) 
