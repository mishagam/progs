rankhospital <- function(state, outcome, num = "best") {
    ## Read outcome data
    out <- read.csv("outcome-of-care-measures.csv", colClasses="character")
    states <- out$State
    hospNames <- out$Hospital.Name
    ## Check that state and outcome are valid
    if (!(state %in% states)) {
        stop("invalid state")
    }
    stateOutcomes <- out[state==states,]
    if (outcome == "heart attack") {
        col=11                         
    } else if(outcome == "heart failure") {
        col=17        
    } else if (outcome == "pneumonia") {
        col = 23
    } else {
        stop("invalid outcome")
    }    
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
    orderedHosp <- hospRate[order(validHosp[,2], validHosp[,1]), ] 
    if (num <= nhosp) {
        ranked <- orderedHosp[num,1]
    } else {
        ranked <- NA
    }
    ## 30-day death rate
    ranked
}
