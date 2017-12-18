from threading import Timer
from subprocess import Popen, PIPE

def kill_proc():
    proc.kill()

proc = Popen("ping 127.0.0.1", shell=True)
t = Timer(20, kill_proc)
t.start()
proc.wait()
