
# read dataframe and counting complete cases for one id, 
# NA if no valid lines found
nc_one_id <- function(directory, id) {
    fn <- sprintf("%s/%03d.csv", directory, id)
    read_data <- read.csv(fn)
    cc <- complete.cases(read_data)
    val <- read_data[cc,]
    ncval <- nrow(val)
    ncval
}

## 'directory' is a character vector of length 1 indicating
## the location of the CSV files

## 'id' is an integer vector indicating the monitor ID numbers
## to be used

## Return a data frame of the form:
## id nobs
## 1  117
## 2  1041
## ...
## where 'id' is the monitor ID number and 'nobs' is the
## number of complete cases
complete <- function(directory, id = 1:332) {
    one_line_df <- function(i) {
        nc <- nc_one_id(directory, i)
        df <- data.frame(id=i, nobs=nc)
        if (nc>0) {
            df
        } else {
            NA
        }
    }
    ldf <- lapply(id, one_line_df)
    compdf <- Reduce(rbind, ldf)
    cc <- complete.cases(compdf)
    compdf[cc,]
}
