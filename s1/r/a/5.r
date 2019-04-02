n=c(5,10,20,50)
par(mfrow=c(2,4))
for(i in n)
  {
  binomial=dbinom(0:i,i,0.1)
  plot(0:i,binomial,type="h",main=paste("binomial",i))

  }
for(i in n)
{
  poisson=dpois(0:i,i*0.1)
  plot(0:i,poisson,type="h",main=paste("poison"))
}