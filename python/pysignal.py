#!/usr/bin/env python
import signal
import sys

icnt=0

def signal_handler(signal, frame):
    global icnt
    print('You pressed Ctrl+C!, sig, icnt = ' + str(signal) + " " + str(icnt))
    icnt+=1
    if icnt > 10:
        sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)
print('Press Ctrl+C')
while icnt < 5:
    signal.pause()