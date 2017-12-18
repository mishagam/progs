# easy regression sample
r <- c(1,2,3,4)
r <- c(r[1:3], 7,6,5)
x <- 1:6
l <- lm(r ~ x)
# plot(l)

# ltm sample
library("ltm")
fn <- "sel_A1.txt"
t <- read.table("sel_A1.txt")
ra <- rasch(t)
lt <- ltm(t ~ z1)
fa <- factor.scores(ra)
fl <- factor.scores(lt)


# ...

# MySQL sample (not installed on linux yet)
# library("RMySQL")
# dr <- dbConnect("MySQL", "test","test", "pass")
# tb <- dbReadTable(dr, "aaii")
# tb <- dbGetQuery(dr, "select * from aaii where ii = 1")

#select from list (below doesn't work with l from regression, works for list)
ll = c(1,3,0.2,4,-1,5,-1,1,-2,2,-3,3,-4,4)
ls <- ll[which(ll <= 2)]
print ("ls=")
print (ls)

# data frames
fir <- c(1,2,3,4)
sec <- c(2,3,4,1)
f <- c(TRUE, TRUE, FALSE, TRUE)
df <- data.frame(fir=fir, sec=sec, f=f)
s <- df[which(df$f),]

#loop
for (i in 1:3) { print (i) }

