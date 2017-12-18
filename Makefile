clean:
	cd fortran; make clean
	cd cc; make clean
	cd D; make clean
	cd go; make clean
	cd ocaml; make clean
	cd java; make clean
	cd python; make clean
	cd interesting; make clean
#	cd goproj; make clean
	cd android; make clean
	cd maven; make clean

all:
	cd cc; make all
	cd fortran; make all
#	cd ocaml; make all
	cd go; make all

