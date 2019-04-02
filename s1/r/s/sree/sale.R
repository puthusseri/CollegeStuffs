m<-as.matrix(read.table(file="sales.txt",skip=2))

m1=m[1:3,1:3]
m2=m[1:3,4:6]
m3=m[1:3,7:9]
m4=m1*m2*m3

sink("salebill.txt",split=2)
cat("================================\n")
cat("\n\tPrice of Item\n")
print(m1)
cat("================================\n")
cat("\tDiscount Factor\n\n")
print(m2)
cat("================================\n")
cat("\tSales Volume\n\n")
print(m3)
cat("================================\n")
cat("\t\tSales bill\n\n")
print(m4)
sink()