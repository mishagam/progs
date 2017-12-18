#!/usr/bin/python
'''
Waiting for line in input
@author: misha
'''
import sys

def main():
    al = sys.argv[1]
    print 'Waiting for line: |' + al + "|"
    while True:
        line = sys.stdin.readline()
        if line.find(al) >= 0:
            break
    print 'Found Line: ' + line

if __name__ == '__main__':
    main()