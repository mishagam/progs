# prepare rasch and ltm estimations for olgs data
groups <- c('A1', 'A2', 'A3', 'A4', 'A5', 'L1', 'L2', 'L3', 'L4', 'L5', 'M1', 'M2', 'M3', 'M4', 'M5', 'N')
ng <- length(groups)
np <- 1044
allr <- as.table(matrix(0, np, ng))
alllm <- as.table(matrix(0, np, ng))
colnames(allr) <- groups
colnames(alllm) <- groups

library("ltm")
data_folder <- "/home/misha/data/"
for (ig in 1:ng) {
  g <- groups[ig]
  sfn <- paste(data_folder, 'sel_', g, '.txt', sep='')
  t <- read.table(sfn)
  tt <- t(t)
  tt_keys <- mapply(function(i) paste(tt[,i], collapse=''), 1:np)
  if (ig == 1) {
    rownames(allr) <- rownames(t)
    rownames(alllm) <- rownames(t)
  }
  
  # ltm part  
  lt <- ltm(t ~ z1)
  flt <- factor.scores(lt)
  sd <- flt$score.dat
  sdi <- sd[, 1:15]
  tsdi <- t(sdi)
  sdz1 <- sd[,18]
  nsco <- length(sd[,1])
  print(paste('counted scores ltm, nsco = ',nsco))
  tsdi_keys <- mapply(function(x) paste(tsdi[,x], collapse=''), 1:nsco)
  for (r in 1:nsco) {
    alllm[which(tsdi_keys[r] == tt_keys), ig] <- sdz1[r]
  }
  
  # rasch part
  ra <- rasch(t)
  fra <- factor.scores(ra)
  sd <- fra$score.dat
  sdi <- sd[, 1:15]
  tsdi <- t(sdi)
  sdz1 <- sd[,18]
  nsco <- length(sd[,1])
  print(paste('counted scores rasch, nsco = ',nsco))
  tsdi_keys <- mapply(function(x) paste(tsdi[,x], collapse=''), 1:nsco)
  for (r in 1:nsco) {
    allr[which(tsdi_keys[r] == tt_keys), ig] <- sdz1[r]
  }
}
#write abilities tables
write.table(alllm, file=paste(data_folder, 'ltm_abilities.txt', sep=''))
write.table(allr, file=paste(data_folder, 'rasch_abilities.txt', sep=''))
