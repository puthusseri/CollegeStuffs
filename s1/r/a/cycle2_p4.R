u1<-runif(10000,0,1)
u2<-runif(10000,0,1)
s<-u1+u2
par(mfrow=c(2,2))
hist(s,main=paste("Histogram of sum of u1 and u2 "))
for(n in c(5,10,20))
{
  sum=0
  for (i in 1:n)
    {
    sum=sum+runif(10000,0,1)
  }
  hist(sum,main=paste("Histogram n= ",n))
}