p<-rnorm(1000,mean=3,sd=1)
n<-c(10:100)
sm=NULL
for(i in n)
{
  data<-sample(p,i,FALSE)
  sm<-c(sm,mean(data))
}
plot(c(10:100),sm,type="l")
