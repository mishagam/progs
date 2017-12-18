'''
Python tests
'''
import os
from os.path import expanduser
home = expanduser("~")
print "home from expanduser = " + home
home1 = os.getenv("HOME")
print "home1 = " + home1
f = os.getenv("FRACS_ROOT")
print "f = " + f