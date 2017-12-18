complete <- function(directory, id = 1:332) {
        ## 'directory' is a character vector of length 1 indicating
        ## the location of the CSV files
        out = data.frame()
        
        for (oneid in id) {
            fn = sprintf('%s/%03d.csv', directory, oneid)
            t = read.table(fn, header=TRUE, sep=',')
            x2 = is.na(t[2])
            x3 = is.na(t[3])
            x23 = !(x2 | x3)
            obs = sum(x23)
            out = rbind(out, c(oneid, obs))            
        }
        colnames(out)[1] = "id"
        colnames(out)[2] = "nobs"
        out
}