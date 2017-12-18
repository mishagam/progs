gcc base.c -o base `pkg-config --cflags --libs gtk+-3.0`
gcc -Wall -g helloworld.c -o helloworld `pkg-config --cflags gtk+-3.0` `pkg-config --libs gtk+-3.0`
pkg-config --cflags gtk+-2.0
