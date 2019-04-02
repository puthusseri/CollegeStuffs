
slices <- c(115, 50,75)
lbls <- c("India", "China", "US")
pct <- round(slices/sum(slices)*100)
lbls <- paste(lbls, pct)
lbls <- paste(lbls,"%",sep="")
pie(slices,labels = lbls, col=c("darkgreen","red","blue"), main="Pie Chart of
Countries")