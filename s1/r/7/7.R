month=c(1:12)
sales=c(105,135,120,105,90,120,145,140,100,80,100,110)
plot(month,sales)
moving_average=c()
for(i in 1:length(sales))
{
  if((i==1)||(i==length(sales)))
    moving_average[i]=sales[i]
  else
    moving_average[i]<-(sales[i-1]+sales[i]+sales[i+1])/3
}
print(month)
print(moving_average)
lines(month,moving_average)
