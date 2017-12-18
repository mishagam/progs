#!/usr/bin/python

import sys
import cgi
import os

import cgitb; cgitb.enable()

sys.stderr = sys.stdout

htmlHeader = '''Content-Type: text/html

<html><head><title>
Simple Python
</title></head><body>
'''

htmlEnd = '</body></html>\n'

print htmlHeader
print "<h1> Hello from Python </h1>"
for i in range(9):
     print i
print '<br><b> My Python at least works</b>'

print htmlEnd
