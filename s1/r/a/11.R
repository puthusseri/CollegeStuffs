par(mfrow=c(2,2))
x=runif(1000,min=0,max=1)
k<-c(1:1000)
sum=cumsum(x)
mean=sum/k
plot(k,mean,main="K vs Mean",type="l")
sum2=cumsum(x*x)
v=sum2/k
variance=v-(mean*mean)
plot(k,variance,main="Variance vs k",type="l")
y=rexp(x,rate=2)
sum=cumsum(y)
mean=sum/k
plot(k,mean,main="K vs Mean",type="l")
sum2=cumsum(y*y)
v=sum2/k
variance=v-(mean*mean)
plot(k,variance,main="Variance versus k",type="l")

