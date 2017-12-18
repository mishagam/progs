# read table
tablename='test_data.txt'
t = read.table(tablename)
ta <- as.matrix(t)

# generate random selection
n <- dim(ta)[1]
m <- dim(ta)[2]
print(n,m)
nr <- 100
nsel <- 50

# generate submatrixvt = mean
selm = matrix(ncol=15,nrow=nsel)
for (isel in 1:nsel) {
    sm = matrix(ncol=15,nrow=100)
    rs <- sample(1:n, nr)
    for (i in 1:nr) {
        sm[i,] = as.vector(ta[rs[i],])
    }
    rmean <- apply(sm, 2, mean)
    selm[isel,] = rmean
}
print(selm)
print('Averages:')
print(apply(selm,2,mean))
print('Dispersions:')
vv <- apply(selm, 2,var)
disp = sapply(vv, sqrt)
print(disp)
print('Correlation:')
print(cor(selm))


