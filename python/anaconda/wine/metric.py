import csv as csv
import numpy as np
from sklearn import cross_validation
from sklearn import datasets
from sklearn import svm
from sklearn import cross_validation
from sklearn import neighbors
from sklearn.cross_validation import KFold, cross_val_score
from sklearn.neighbors import KNeighborsRegressor
from sklearn.preprocessing import scale

ds = datasets.load_boston()
print "Dataset: " + str(ds)
xg = ds.data
yg = ds.target
print "xg:", xg
print "yg:", yg
n = len(yg)
print "n = ", n
kf = KFold(n, n_folds=5, shuffle=True,  random_state=42)

def estimate_one_p(p):
    "estimate quality for one k"
    esti=0
    knr = KNeighborsRegressor(n_neighbors=5, p=p, weights='distance' )
    scores = cross_val_score(knr, xg,yg,scoring='mean_squared_error', cv=kf)
    print "p, scores=", p, scores
    return -np.mean(scores)

def optimize_metr():
    "look for optimal k and quality"
    eo = 10000
    for p in np.linspace(1,10,num=200):
        e = estimate_one_p(p)
        if e<eo:
            eo = e
            po = p
    return po,eo

def write_file(s,fn):
    "write string s to file fn"
    o = open("out/"+ fn, 'w')
    o.write(s + "\n")
    o.close()
    print "wrote " + s + " to " + fn

# the same after scale
xg = scale(xg)
print "after scale xg: ", xg
popt,qopt = optimize_metr()
write_file("%.1f" % popt, "popt.txt")
write_file("%.1f" % qopt, "qopt.txt")


            
        



