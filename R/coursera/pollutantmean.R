# Worked !!

readmonitor <- function(directory, pollutant, id) {
    fn <- sprintf("%s/%03d.csv", directory, id)
    read_data <- read.csv(fn)
    c(read_data[pollutant])
}

## 'directory' is a character vector of length 1 indicating
## the location of the CSV files

## 'pollutant' is a character vector of length 1 indicating
## the name of the pollutant for which we will calculate the
## mean; either "sulfate" or "nitrate".

## 'id' is an integer vector indicating the monitor ID numbers
## to be used

## Return the mean of the pollutant across all monitors list
## in the 'id' vector (ignoring NA values)
pollutantmean <- function(directory, pollutant, id = 1:332) {
    onemon <- function(i) {
        readmonitor(directory, pollutant, i)
    }
    lid <- sapply(id, onemon)
    clid <- stack(lid)$values
    ret <- mean(clid, na.rm=TRUE)
    ret    
}
