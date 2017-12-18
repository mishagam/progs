rankhosp_one_state <- function(data, state, col, outcome, num = "best") {
    ## Read outcome data
    # out <- read.csv("outcome-of-care-measures.csv", colClasses="character")
    states <- data$State
    ## Check that state and outcome are valid
    stateOutcomes <- data[state==states,]
    ## Return hospital name in that state with the given rank
    hospRate <- cbind(stateOutcomes["Hospital.Name"], 
                      as.numeric(stateOutcomes[,col]))
    validHosp <- hospRate[complete.cases(hospRate),] 
    nhosp <- length(validHosp[,1])
    if (num=="best") {
        num <- 1
    } else if (num=="worst") {
        num <- nhosp
    } 
    orderedHosp <- validHosp[order(validHosp[,2], validHosp[,1]), ] 
    if (num <= nhosp) {
        ranked <- orderedHosp[num,1]
    } else {
        ranked <- NA
    }
    ## 30-day death rate
    ranked
}

rankall <- function(outcome, num = "best") {
    ## Read outcome data
    out <- read.csv("outcome-of-care-measures.csv", colClasses="character")
    states <- o[,7]
    ## Check that state and outcome are valid
    if (outcome == "heart attack") {
        col=11                         
    } else if(outcome == "heart failure") {
        col=17        
    } else if (outcome == "pneumonia") {
        col = 23
    } else {
        stop("invalid outcome")
    }    
    ## For each state, find the hospital of the given rank
    retdf = NULL
    lst <- unique(states)
    lst <- lst[order(lst)]
    for (st in lst) {
        hosp <- rankhosp_one_state(out,st, col,outcome,num)
        l <- data.frame(hospital=hosp,state=st)
        if (is.null(retdf)) {
            retdf <- l
        } else {
            retdf <- rbind(retdf, l)
        }
    }
    ## Return a data frame with the hospital names and the
    ## (abbreviated) state name
    retdf
}


