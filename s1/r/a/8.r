x=runif(1000000)

y=round(x)

z=x-y


#hist(z,probability = TRUE)
#hist(z)
sa=sample(z,1000,FALSE)
#plot(sa,1:1000)
#a=1/(max(z)-min(z))
#a
#aa=rep(a,length(z))
#plot(z,aa)
hist(sa)
