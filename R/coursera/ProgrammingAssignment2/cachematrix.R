## Put comments here that give an overall description of what your
## functions do

# function, `makeVector` creates a special "matrix", which is
# really a list containing a function to
# 1.  set the value of the matrix
# 2.  get the value of the matrix
# 3.  set the value of the inverted matrix
# 4.  get the value of the inverted matrix
makeCacheMatrix <- function(x = matrix()) {
    inv <- NULL
    set <- function(my) {
        x <<- my
        inv <<- NULL
    }
    get <- function() x
    setinv <- function(im) { inv <<- im }
    getinv <- function() inv
    list(set=set, get=get,
        setinv = setinv,
        getinv = getinv
    )
}

# Inverts matrix and caches result
cacheSolve <- function(x, ...) {
    ## Return a matrix that is the inverse of 'x'
    inv <- x$getinv()
    if (!is.null(inv)) {
        message("getting cached inverted matrix")
        return(inv)
    }
    mm <- x$get()
    inv <- solve(mm)
    x$setinv(inv)
    inv
}
