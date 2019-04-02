price_data=as.data.frame(read.table(file="price.txt",skip=1))
price_data 
mean_price=apply(price_data[2:4],2,mean)
mean_price
std=apply(price_data[2:4],2,sd)
std
quartile=apply(price_data[2:4],2,quantile)
quartile
iqr=apply(price_data[2:4],2,IQR)
iqr
qd=iqr/2
qd
price1_data=rbind(price_data[2:4],mean_price,std,quartile,qd)
price1_data
sink("price1_data.txt",split = 2)
cat("------------------------------\n")
cat("rate of items\n")
cat("=------------------------------\n")
print(price1_data)
cat("--------------------------------\n")
sink()
par(mfrow=c(2,2))
plot.ts(price_data[2:4])
plot.ts(price_data[2])
plot.ts(price_data[3])
plot.ts(price_data[4])

