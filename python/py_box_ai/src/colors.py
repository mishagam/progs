#!/usr/bin/python

# File: colors.py

from Tkinter import *

import random

def mstrip(s):
    return s.strip()

class Colors:
    def __init__(self):
        "Reading colors from colors.txt"
        color_names_file = "../colors.txt"
        f = open(color_names_file, "r");
        ll = f.readlines();
        f.close()        
        self.colornames = map(mstrip, ll)
        self.idx = 0;

    def next_color(self):
        coln = random.choice(self.colornames)
        self.idx += 1
        return coln
    
    def has_color(self, col):
        return col in self.colornames


def test():
    cols = Colors()
    print cols.next_color()
    print cols.next_color()
    print cols.next_color()

if __name__ == '__main__':
    test()
