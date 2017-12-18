import csv as csv
import numpy as np
from sklearn import cross_validation
from sklearn import datasets
from sklearn import svm
from sklearn import cross_validation
from sklearn import neighbors
from sklearn.cross_validation import KFold
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import scale

# read wine.data csv file
def read_wine_table(fn):
    "reads and returns wine table"
    t = []
    with open(fn) as csvfile:
        r = csv.reader(csvfile)
        for row in r:
            t += [[float(s) for s in row]]
    return t

wineFn = "wine.data"
t = read_wine_table(wineFn)
xg = [tt[1:] for tt in t]
yg = [int(tt[:1][0]) for tt in t]
print "xg:", xg
print "yg:", yg
n = len(yg)
print "n = ", n
kf = KFold(n, n_folds=5, shuffle=True,  random_state=42)

def estimate_one_k(k):
    "estimate quality for one k"
    esti=0
    kn = KNeighborsClassifier(n_neighbors=k)
    for train, test in kf:
        nt = len(test)
        X = [xg[i] for i in train]
        y = [yg[i] for i in train]
        xt = [xg[i] for i in test]
        ya = [yg[i] for i in test]
        kn.fit(X,y)
        ye = kn.predict(xt)
        e=0
        for i in range(nt):
            if ya[i]==ye[i]:
                e += 1
        e = (e*1.0)/nt
        esti += e
    esti = esti / 5.0
    print "estimate_one_k(" + str(k) + ") = ", esti
    return esti

def optimize_kneib():
    "look for optimal k and quality"
    eo = -1000000
    ko = -1
    for k in range(1, 51):
        e = estimate_one_k(k)
        if e>eo:
            eo = e
            ko = k
    return ko,eo

def write_file(s,fn):
    "write string s to file fn"
    o = open("out/"+ fn, 'w')
    o.write(s + "\n")
    o.close()
    print "wrote " + s + " to " + fn
    
ko,qo = optimize_kneib()
write_file(str(ko), "ko.txt")
write_file("%.2f" % qo, "qo.txt")

# the same after scale
xg = scale(xg)
print "after scale xg: ", xg
kosc,qosc = optimize_kneib()
write_file(str(kosc), "kosc.txt")
write_file("%.2f" % qosc, "qosc.txt")


            
        



