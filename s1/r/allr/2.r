a=scan("pois.dat")
xtable=table(a)
y=as.numeric(xtable)

lam=mean(a)

#theoretical freqqq
d=dpois(0:6,lam)
lf=round(d*length(a))
m=matrix(c(y,lf),nrow=2,byrow=T)
colnames(m)<-c("0","1","2","3","4","5","6")
barplot(m,legend=c("Actual FRequency","thoretical frequency"),beside = T)

