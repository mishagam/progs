TARGETS = sieve echo t tour tour1 toure tourserv hello \
    channels gorout fib tm_def same sametree misio mutcnt

%:	%.go
	go build $<

all: $(TARGETS)

clean:
	rm -f $(TARGETS)
	rm -f *.out
	bash mis_go_clean.sh
	cd MisGo; make clean
	
