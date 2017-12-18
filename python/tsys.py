#!/usr/bin/python

import subprocess
import sys

for i in range(10):
  print 'starting process ' + str(i)
  try:
    retcode = subprocess.call("./mycmd", shell=True)
    if retcode < 0:
      print >>sys.stderr, "Child was terminated by signal", -retcode
      exit
    else:
      print >>sys.stderr, "Child returned", retcode
  except OSError, e:
      print >>sys.stderr, "Execution failed:", e
