one_nabl <- function(fn,polu) {
   x = read.table(fn, header=TRUE, sep=',')
   xp = x[, polu]
   xpv = xp[! is.na(xp)]
   xpv   
}

pollutantmean <- function(directory, pollutant, id = 1:332) {
        ## 'directory' is a character vector of length 1 indicating
        ## the location of the CSV files
        ## 'id' is an integer vector indicating the monitor ID numbers
        ## to be used
        filenames = sprintf('%s/%03d.csv', directory, id)
        sumv = c()
        for (fn in filenames) {
	    ## 'pollutant' is a character vector of length 1 indicating
	    ## the name of the pollutant for which we will calculate the
	    ## mean; either "sulfate" or "nitrate".
           sumv = c(sumv, one_nabl(fn, pollutant))
        }

        ## Return the mean of the pollutant across all monitors list
        ## in the 'id' vector (ignoring NA values)
        mn = mean(sumv)
        return(mn)
}