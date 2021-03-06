p<-rnorm(1000,mean=20,sd=4)
mydata<-sample(p,100,FALSE)
sm<-mean(mydata)
gm<-prod(mydata)^(0.01)
hm<-((0.01)*sum(1/mydata))^-1
rms<-sqrt(0.01*sum(mydata^2))
print("Sample mean= ")
print(sm)
print("Geometric mean= ")
print(gm)
print("Harmonic mean= ")
print(hm)
print("Root mean square is ")
print(rms)