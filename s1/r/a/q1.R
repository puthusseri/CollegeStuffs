#file 'bulbs.dat' contains life in years of a sample of 1000 bulbs randomly chosen 
#from a total of 100000 bulbs produced by a company.  Find an approximate probability 
#distribution of the life of bulbs produced by the company. 
# Draw a density plot of the distribution.
# check your model with a quantile-quantile plot
#What percentage of bulbs produced by the company will have life more than one year ?
####################################################################################
data=scan("bulbs.dat",sep=",") #read data
par(mfrow=c(2,2))
hist(data,breaks=25,probability = T,main = "Histogram of data")  #draw a histogram
mu=1/mean(data) # the parameter of exp distribution
x=seq(from=0,to=3,by=0.1)
y=dexp(x,mu)
pts=ppoints(1000) # 1000 equally spaced points from (0,1)
yq=qexp(pts,mu)
plot(x,y,type="l", main = "Plot of f(x)=exp(2.08) distribution",ylab = "f(x)") 
qqplot(data,yq,pch="+",main="quantile-quantile plot of data~f(x)",ylab = "f(x)")
abline(0,1)
prob=1-pexp(1,mu) #P(X>1)
cat("The distribution is exponential with rate = ",format(mu,digits=3),"\n")
cat("Percentage of bulbs with life more than one year=",format(prob*100,digits=3))