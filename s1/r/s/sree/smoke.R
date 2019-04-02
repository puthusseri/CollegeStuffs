smokerdata=read.csv("smoker.csv")
sink("smk.txt")
cat("\t=========SUMMARY==========\n")
summary(smokerdata)
smoke <-table(smokerdata$Smoke,smokerdata$SES)
smoke
cat("\t==============PROPORTION=============\n")
a=prop.table(smoke)

sink()

