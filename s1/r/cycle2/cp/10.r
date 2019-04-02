p<-rnorm(1000,mean=3,sd=1)
xbar=c()
for(i in 10:100)
{
  data<-sample(p,i,FALSE)
  xbar<-c(xbar,mean(data))
}
plot(c(10:100),xbar,type="l")