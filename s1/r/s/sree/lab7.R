mn<-c(1:12)
mn
sl<-c(105,135,120,105,90,120,145,140,100,80,100,110)
sl
plot(mn,sl,main="MONTH VERSUS SALES")
t=c(sl[1],sum(sl[2:4])/3,sum(sl[3:5])/3,sum(sl[4:6])/3,sum(sl[5:7])/3,sum(sl[6:8])/3,sum(sl[7:9])/3,sum(sl[8:10])/3,sum(sl[9:11])/3,sum(sl[10:12])/3,sl[12])
lines.ts(t)
plot(t,type="l")