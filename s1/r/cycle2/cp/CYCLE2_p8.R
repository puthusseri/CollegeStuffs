x<-runif(10000,min=0,max=1)
y<-round(x)
z<-x-y
hist(z,main=paste("error plot"))