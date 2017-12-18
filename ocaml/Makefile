TARGETS = PrimesList plo fact

all: $(Targets)

PrimesList: PrimesList.ml
	ocaml PrimesList.ml -o PrimesList

plo: PrimesList.ml
	ocamlopt -o $@ $<

clean:
	rm -f *.cmo
	rm -f *.cmi
	rm -f *.cmx
	rm -f *.o
	rm -f $(TARGETS)
	cd OMake; make clean

