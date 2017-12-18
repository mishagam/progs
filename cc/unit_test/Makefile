 VPATH = CppUnitLite:CppUnitLite/Cpp/Deque:CppUnitLite/Cpp/Deque:\
        CppUnitLite/Cpp/TemplateDeque:CppUnitLite/Cpp/TestHarness:\
         $(TOPRA_ROOT)/src

INCLUDE = -I$(TOPRA_ROOT)/include -I$(TOPRA_ROOT)/include/outer -ICppUnitLite \
	-ICppUnitLite/Cpp/Deque -ICppUnitLite/Cpp/Deque\
        -ICppUnitLite/Cpp/TemplateDeque -ICppUnitLite/Cpp/TestHarness
        

TOPRA_LIB_DIR   = $(TOPRA_ROOT)/lib
CC = g++
TARGET = cmain
LIBS = -lm -lstdc++ -L$(TOPRA_LIB_DIR) -l_shm -l_base
CFLAGS_CC = -g

cmain: StackMain.o ConfTest.o TestResult.o SimpleString.o TestRegistry.o Failure.o\
        Test.o topra_conf.o TimeTest.o topra_utils.o
	$(CC) $^ $(CFLAGS_CC) $(LIBS) -o $@

%.o : %.cc
	$(CC) $(INCLUDE) $(CFLAGS_CC) -c $< 

%.o : %.cpp
	$(CC) $(INCLUDE) $(CFLAGS_CC) -c $< 

all: $(TARGET)
clean:
	rm -f *.b *.o *.d 
	rm -f cmain
	