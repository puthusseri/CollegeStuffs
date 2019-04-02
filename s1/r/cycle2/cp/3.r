#CLT

#generate sample
pop<-runif(10000,0,1)
n<-c(2,10,20,50)

#finding mean
sm<-function(n)
  {
  s<-sample(pop,n)
  m<-mean(s)
  return(m)
  }
par(mfrow=c(2,2))
for(i in n)
  {
  x=NULL
  for(j in 1:1000){
    x<-c(x,sm(i))
  }
  hist(x,main=paste("Histogram n= ",i))
}
