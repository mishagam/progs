#!/usr/bin/python

import subprocess

def mcall(cmd):
    "running command"
    print 'cmd: ' + cmd
    try:
        subprocess.check_call(cmd, shell=True)
        print 'cmd passed OK'
    except subprocess.CalledProcessError, e:
        print 'Exception in cmd, ret code:', e.returncode

cmd = './tfor'

mcall(cmd)
