x<-runif(1000,min=0,max=2*pi)
par(mfrow=c(1,1))
y<-sin(x)
plot(density(y))
