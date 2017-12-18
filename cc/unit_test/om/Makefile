VPATH = CppUnitLite:CppUnitLite/Cpp/Deque:CppUnitLite/Cpp/Deque:CppUnitLite/Cpp/TemplateDeque:CppUnitLite/Cpp/TestHarness

INCLUDE = -ICppUnitLite:CppUnitLite/Cpp/Deque:CppUnitLite/Cpp/Deque:CppUnitLite/Cpp/TemplateDeque:CppUnitLite/Cpp/TestHarness

CC = g++
TARGET = cmain

cmain: StackMain.o StackTest.o TestResult.o SimpleString.o \
    TestRegistry.o Failure.o Test.o
	$(CC) $^ -o $@

%.o:	%.cc
	$(CC) $(INCLUDE) $(CFLAGS_CC) -c $< 

%.o:	%.cpp
	$(CC) $(INCLUDE) $(CFLAGS_CC) -c $< 


all: $(TARGET)
clean:
	rm -f *.b *.o *.d 
	rm -f cmain
	