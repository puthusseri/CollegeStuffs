b=c(5,10,20,50)
mean=b*0.3
print(mean)
par(mfrow=c(2,4))
for(i in b)
{
  b1<-rbinom(1000,i,0.3)
  hist(b1,main=paste("binomial n=",i))
}
for(i in mean)
{
  b2<-rnorm(1000,i,sqrt(i*.7))
  hist(b2,main=paste("normal n=",i))
}