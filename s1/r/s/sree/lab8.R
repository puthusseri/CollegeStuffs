height_x=c(151,174,138,186,128,136,179,163,152,131)
weight_y=c(63,81,56,91,47,57,76,72,62,48)
reg_model=lm(weight_y ~ height_x)
print("Summary of regression")
summary(reg_model)
print("Residuals")
resid(reg_model)

print("Predicted weights")
predict(reg_model)
a=data.frame(height_x=170)
b=data.frame(height_x=180)
result_a=predict(reg_model,a)
result_b=predict(reg_model,b)
result_a
result_b
plot(weight_y,height_x,main="REGRESSION LINE",abline(lm(height_x ~ weight_y)))
