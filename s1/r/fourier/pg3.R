x=seq(-4,4,0.1)
fourier<-function(n)
{
  n=c(1:n)
  sum=0
  j=1
  for(i in n)
  {
    sum=sum+(sin(j*x))/j
    j=j+2
  }
  sum=sum+(pi/2)
}
plot(x,fourier(3),type="l")
plot(x,fourier(10),type="l")
plot(x,fourier(20),type="l")
plot(x,fourier(50),type="l")
par(mfrow=c(2,2))