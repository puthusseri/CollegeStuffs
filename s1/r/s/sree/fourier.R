fourier_series<-function(limit,values_of_x)
{
  sum_of_sines<-0
  for(i in seq(from=1,by=2,length.out = limit))
  {
    sum_of_sines<-sum_of_sines+sin(values_of_x*i)/i
  }
sum_of_series<-pi/2+2*sum_of_sines
  return(sum_of_series)
}
x1=seq(from=-4,to=4,by=.1)
par(mfrow=c(2,2))
plot(x1,fourier_series(3,x1),type="l",main="plot of 3 fourier",ylab="s_3(x1)")
plot(x1,fourier_series(10,x1),type="l",main="plot of 10 fourier",ylab="s_10(x1)")
plot(x1,fourier_series(20,x1),type="l",main="plot of 20 fourier",ylab="s_20(x1)")
plot(x1,fourier_series(50,x1),type="l",main="plot of 50 fourier",ylab="s_50(x1)")

