tos=sample(1:6,1000,replace=TRUE)
aa=table(tos)
prob=prop.table(aa)

plot(1:6,prob,ylim = range(0,0.3),type = "h")
plot(aa)
sink("out2.txt")
cat("---------------------------------------------\n")
cat("                   OUTPUT                      \n")
cat("---------------------------------------------\n")
print(aa)
addmargins(prob)
sink()