import time

def int2str_time(sec):
    "convert time sec from 1970 to 2011.04.15_14:45:31 format."
    tm = time.localtime(sec)
    strtm = "%04d.%02d.%02d_%02d:%02d:%02d" % (tm.tm_year, tm.tm_mon, \
        tm.tm_mday, tm.tm_hour, tm.tm_min, tm.tm_sec)
    return strtm

def str2int_time(strt):
    "convert time 2011.04.15_14:45:31 format to sec from 1970."
    s = strt.replace('.', ' ').replace('_', ' ').replace(':', ' ')
    ls = s.split()
    tm = (int(ls[0]), int(ls[1]), int(ls[2]), 
        int(ls[3]), int(ls[4]), int(ls[5]),1,1, -1)
    t = time.mktime(tm)
    return t

def test():
    t0 = 1300000000
    st = int2str_time(t0)
    t1 = str2int_time(st)
    print 't0, t1 = %d %d' % (t0, t1)
    print ' st: %s' % (st)
    t0 = 1315000000
    st = int2str_time(t0)
    t1 = str2int_time(st)
    print 't0, t1 = %d %d' % (t0, t1)
    print ' st: %s' % (st)

if __name__ == '__main__':
    test()
