TARGETS = hello

all: $(TARGETS)

hello: hello.d
	dmd hello.d

clean:
	rm -f *.o
	rm -f $(TARGETS)

