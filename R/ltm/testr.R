# easy regression sample
r <- c(1,2,3,4)
r <- c(r[1:3], 7,6,5)
x <- 1:6
l <- lm(r ~ x)
# plot(l)

# data frames
fir <- c(1,2,3,4)
sec <- c(2,3,4,1)
f <- c(TRUE, TRUE, FALSE, TRUE)
df <- data.frame(fir=fir, sec=sec, f=f)
s <- df[which(df$f),]

#loop
for (i in 1:3) { print (i) }

a <- function(x) {
	11 - b(x)
}
b <- function(y) {
	y <- log(y - 0.5)c
	
	y <- y*5
	y + y
}

cat("a(5) = ")
print(a(5))
if (a(0) > 2) {
   cc <- "passed"
} else {
   cc <- "failed"log
}
print(a(0) > 2)
traceback()
print("testR finished running")

