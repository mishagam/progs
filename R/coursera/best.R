# best.R - Programming assignment 3
best <- function(state, outcome) {
    ## Read outcome data
    out <- read.csv("outcome-of-care-measures.csv", colClasses="character")
    states <- o[,7]
    ## Check state and outcome are valid
    if (!(state %in% states)) {
        stop("invalid state")
    }
    stateOutcomes = out[state==states,]
    if (outcome == "heart attack") {
        col=11                         
    } else if(outcome == "heart failure") {
        col=17        
    } else if (outcome == "pneumonia") {
        col = 23
    } else {
        stop("invalid outcome")
    }
    hospRate <- cbind(stateOutcomes["Hospital.Name"], 
                      as.numeric(stateOutcomes[,col]))
    orderedHosp <- hospRate[order(hospRate[,2], hospRate[,1]), ]    
    ## Return hospital name in that state with lowest 30-day death
    bestHosp <- orderedHosp[1,1]
    ## rate    
    bestHosp
}
