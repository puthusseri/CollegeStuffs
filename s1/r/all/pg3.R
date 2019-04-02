x=seq(from=-4,to=4,by=0.1)
n=c(3,10,20,50)
funvalue<-function(n)
{
  v=c(1:n)
  sum=0
  y=1
  for(i in v)
  {
    sum=sum+(sin(y*x)/y)
    y=y+2
  }
  sum1=(pi/2)+(2*sum)
  plot(sum1,type="l",main="Sum of fourier series",xlab=(paste("valu of n",n)))
  
}


funvalue(3)
funvalue(10)
funvalue(20)
funvalue(3)
par(mfrow=c(2,2))
