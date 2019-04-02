patients=c("40-45","45-50","50-55","55-60")
bp=c("low","mid","high")
x=sample(patients,1000,replace = TRUE)
y=sample(bp,1000,replace = TRUE)
a=table(x,y)


per=prop.table(a)*100
print(per)
print(sum(per))
sink("5th_output.txt")
cat("\nPercentage of people having BP with ages.\n")
cat("----------------------------------------------\n")
print(per)
sink()

