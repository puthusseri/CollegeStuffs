x=read.table(file = "sales.txt",skip = 3)
a=matrix(c(x$V2,x$V3,x$V4),nrow = 3,ncol = 3)
b=matrix(c(x$V5,x$V6,x$V7),nrow = 3,ncol = 3)
c=matrix(c(x$V8,x$V9,x$V10),nrow = 3,ncol = 3)
d=a*b*c
rownames(d)=c("item1","item2","item3")
colnames(d)=c("state1","state2","state3")
sink(file = "salesout.txt",split=2)
cat("\n------------TOTAL BILL------------\n")
print(d)
sink()

