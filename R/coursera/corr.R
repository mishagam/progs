
# read dataframe and counting complete cases for one id, 
# NA if no valid lines found
df_one_id <- function(directory, id, threshold) {
    fn <- sprintf("%s/%03d.csv", directory, id)
    read_data <- read.csv(fn)
    # print(id)
    cc <- complete.cases(read_data)
    val <- read_data[cc,]
    if (nrow(val) > 0 && nrow(val) >= threshold) {
        cr <- cor(x=val["nitrate"], y=val["sulfate"], use="complete.obs")
        ret <- cr[1,1]
    } else {
        ret = NA
    }
    ret
}
## 'directory' is a character vector of length 1 indicating
## the location of the CSV files

## 'threshold' is a numeric vector of length 1 indicating the
## number of completely observed observations (on all
## variables) required to compute the correlation between
## nitrate and sulfate; the default is 0

## Return a numeric vector of correlations
corr <- function(directory, threshold = 0) {
    ids = 1:332
    one_id <- function(i) {
        ret = df_one_id(directory, i, threshold)        
    }
    cl <- lapply(ids, one_id)
    cr <- unlist(cl)
    cc <- complete.cases(cr)
    crv <- cr[cc]
    # print(crv)
    crv
}
