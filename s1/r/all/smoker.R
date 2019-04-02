smokerData <- read.csv(file='smoker.csv',header=T)
# head(smokerData)
smoke <- table(smokerData$Smoke,smokerData$SES)#create table
# add rowsums & col sums to the table
smoke2=addmargins(smoke)    #new augmented table
 #proportional (probability) values
smokeprob=prop.table(smoke) # probability table
# marginal probabilities
smokeprob=addmargins(smokeprob) # add marginal probabilities
# printing output file
sink("smoke-out.txt",split=2)   #create output file and print data
cat("=======================\n")
cat("Summary data of smokers\n")
cat("=======================\n")
print(smoke2)
cat("=========================================\n")
cat("Joint probability distribution of smokers\n")
cat("=========================================\n")
print(smokeprob,digits=3)
cat("======================================\n")
cat("Percentage of smokers in each category\n")
cat("======================================\n")
print(smokeprob*100,digits=3)
sink()  # back to terminal

