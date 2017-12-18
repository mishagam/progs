l <- c(1:12)

doub <- function(i) {
   (i + i + i)
}
sum = 0
for (i in l) {
  sum <- sum + doub(i)
  print(sum)
}

# exit